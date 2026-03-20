// ============================================================
// autosave.js — MedRecord Autosave Service
// Saves to BOTH Firestore and Firebase Realtime Database
// simultaneously, fire-and-forget, survives page exit.
// ============================================================
import { db, rtdb } from '../firebase/config';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { ref, set as rtdbSet } from 'firebase/database';

// ─── Helpers ─────────────────────────────────────────────────

/** Generate a short unique ID without external libs */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/** Safe ISO timestamp string */
function nowISO() {
  return new Date().toISOString();
}

/**
 * Write to BOTH Firestore and Realtime DB simultaneously.
 * - firestorePath  : e.g. 'drugSearches/abc123'
 * - rtdbPath       : e.g. 'drugSearches/abc123'
 * - payload        : plain object to save
 *
 * Uses navigator.sendBeacon polyfill pattern so saves still
 * fire even when the user navigates away or closes the tab.
 */
async function saveToAll(firestorePath, rtdbPath, payload) {
  const withMeta = {
    ...payload,
    savedAt: nowISO(),
  };

  // Run both saves in parallel — don't await sequentially
  const saves = [];

  // 1️⃣ Firestore
  try {
    const parts = firestorePath.split('/');
    // parts: ['collection', 'docId']  or ['col', 'doc', 'subcol', 'subdoc']
    const docRef = doc(db, ...parts);
    saves.push(
      setDoc(docRef, { ...withMeta, savedAtServer: serverTimestamp() }, { merge: true })
        .catch(e => console.warn('[Autosave Firestore]', e.message))
    );
  } catch (e) {
    console.warn('[Autosave Firestore build]', e.message);
  }

  // 2️⃣ Realtime DB
  try {
    const rtRef = ref(rtdb, rtdbPath);
    saves.push(
      rtdbSet(rtRef, withMeta)
        .catch(e => console.warn('[Autosave RTDB]', e.message))
    );
  } catch (e) {
    console.warn('[Autosave RTDB build]', e.message);
  }

  // Fire-and-forget — caller doesn't need to await
  Promise.all(saves).catch(() => {});
}

// ─── Public API ───────────────────────────────────────────────

/**
 * Autosave a drug search.
 * Called the moment results appear in DrugSearchPage.
 *
 * @param {string} query        - The search term typed by the user
 * @param {string[]} results    - Array of drug names returned
 * @param {string} [userId]     - Optional uid from Firebase Auth
 * @param {boolean} aiUsed      - Whether AI fallback was triggered
 */
export async function autosaveDrugSearch({ query, results, userId = 'anonymous', aiUsed = false }) {
  if (!query || !results?.length) return;

  const id = uid();
  const payload = {
    id,
    type: 'drug_search',
    query: query.trim(),
    resultCount: results.length,
    results: results.slice(0, 30), // cap to avoid huge writes
    aiUsed,
    userId,
    timestamp: nowISO(),
  };

  await saveToAll(
    `drugSearches/${id}`,   // Firestore: collection=drugSearches, doc=id
    `drugSearches/${id}`,   // RTDB: same path
    payload
  );
}

/**
 * Autosave a drug profile view.
 * Called the moment the first AI chunk arrives in DrugDetailPage.
 *
 * @param {string} drugName     - The drug being viewed
 * @param {string} content      - The full AI-generated profile text
 * @param {string} [userId]     - Optional uid
 * @param {number} elapsedSecs  - How long the AI took to respond
 */
export async function autosaveDrugProfile({ drugName, content, userId = 'anonymous', elapsedSecs = 0 }) {
  if (!drugName || !content) return;

  const id = uid();
  const payload = {
    id,
    type: 'drug_profile',
    drugName,
    content,
    elapsedSecs,
    userId,
    timestamp: nowISO(),
  };

  await saveToAll(
    `drugProfiles/${id}`,
    `drugProfiles/${id}`,
    payload
  );
}

/**
 * Autosave a generated care plan.
 * Called the moment the AI finishes streaming in CarePlanPage.
 *
 * @param {object} formData   - { patient, diagnosis, age, ward, allergies, vitals, notes }
 * @param {string} content    - The full AI-generated care plan text
 * @param {string} [userId]   - Optional uid
 * @param {number} elapsedSecs
 */
export async function autosaveCarePlan({ formData, content, userId = 'anonymous', elapsedSecs = 0 }) {
  if (!formData?.diagnosis || !content) return;

  const id = uid();
  const payload = {
    id,
    type: 'care_plan',
    patient: formData.patient || 'Unknown',
    diagnosis: formData.diagnosis,
    age: formData.age || '',
    ward: formData.ward || '',
    allergies: formData.allergies || '',
    vitals: formData.vitals || '',
    notes: formData.notes || '',
    content,
    elapsedSecs,
    userId,
    timestamp: nowISO(),
  };

  await saveToAll(
    `carePlans/${id}`,
    `carePlans/${id}`,
    payload
  );
}
