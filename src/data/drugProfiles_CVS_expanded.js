// ============================================================
// drugProfiles_CVS_expanded.js
// FULL CARDIOVASCULAR SYSTEM SECTION
// Drop-in addition to DRUG_PROFILES in drugProfiles.js
//
// SUBCLASSES COVERED:
//   1.  ACE Inhibitors
//   2.  Angiotensin Receptor Blockers (ARBs)
//   3.  Beta-Blockers
//   4.  Calcium Channel Blockers
//   5.  Loop Diuretics
//   6.  Thiazide Diuretics
//   7.  Potassium-Sparing Diuretics
//   8.  Nitrates
//   9.  Statins (HMG-CoA Reductase Inhibitors)
//  10.  Other Lipid-Lowering Agents
//  11.  Antiplatelet Drugs
//  12.  Anticoagulants — Vitamin K Antagonists
//  13.  Anticoagulants — Heparin & LMWH
//  14.  Anticoagulants — Direct Oral Anticoagulants (DOACs)
//  15.  Antiarrhythmics
//  16.  Cardiac Glycosides
//  17.  Vasopressors & Inotropes
//  18.  Heart Failure — Newer Agents
//  19.  Peripheral Vasodilators / Other Antihypertensives
// ============================================================

export const CVS_DRUG_PROFILES = {

  // ══════════════════════════════════════════════════════════
  // 1. ACE INHIBITORS
  // ══════════════════════════════════════════════════════════

  'Lisinopril': {
    class: 'ACE Inhibitor', subclass: 'Lysine analogue — long-acting',
    overview: 'First-line ACE inhibitor for hypertension, heart failure, and diabetic nephropathy. Not a prodrug — active as administered. Once-daily dosing. Extensive evidence base including ATLAS and SOLVD trials.',
    indications: ['Hypertension (1st line)', 'Heart failure with reduced ejection fraction (HFrEF)', 'Post-MI (within 24 hrs)', 'Diabetic nephropathy (type 1 and 2)', 'Chronic kidney disease with proteinuria'],
    dosage: 'Hypertension: 10 mg OD initially; titrate to 20–40 mg OD. Heart failure: 2.5 mg OD → titrate to 35 mg OD (target dose). Post-MI: 5 mg within 24 hrs → 10 mg OD.',
    mechanism: 'Inhibits ACE enzyme → ↓ angiotensin II → vasodilation (↓ afterload) + ↓ aldosterone → natriuresis and ↓ preload. Prevents bradykinin breakdown → cough and angioedema.',
    sideEffects: ['Dry persistent cough (10–15% — bradykinin mediated; class effect)', 'Angioedema (rare but life-threatening — tongue, lips, throat; more common in Black patients)', 'Hyperkalaemia (K⁺ retention via ↓ aldosterone)', 'First-dose hypotension (especially in volume-depleted patients)', 'Renal impairment (↓ GFR — especially with bilateral renal artery stenosis)', 'Teratogenic (2nd and 3rd trimester — fetal renal agenesis)'],
    nursing: ['FIRST DOSE: give at night (hypotension risk); patient should lie down; check BP at 1 and 2 hrs', 'COUGH: persistent dry cough in 10–15% — if intolerable, switch to ARB (no cough); educate patient at start', 'ANGIOEDEMA: STOP immediately if tongue/lip/throat swelling — call emergency services (airway emergency)', 'Monitor K⁺ and creatinine at 1–2 weeks after starting and after each dose change', 'HOLD before iodinated contrast and in acute illness with dehydration', 'PREGNANCY: absolutely contraindicated from 2nd trimester — switch to labetalol or methyldopa', 'RENAL ARTERY STENOSIS: rise in creatinine >30% after starting = bilat RAS until proven otherwise — STOP'],
    contraindications: ['Pregnancy (2nd and 3rd trimester — absolute)', 'Bilateral renal artery stenosis', 'Previous ACE inhibitor-induced angioedema', 'Hyperkalaemia (K⁺ >5.5 mmol/L)', 'Concurrent sacubitril/valsartan (wash-out 36 hrs required)', 'Hereditary/idiopathic angioedema'],
  },

  'Ramipril': {
    class: 'ACE Inhibitor', subclass: 'Prodrug (ramiprilat)',
    overview: 'Most widely prescribed ACE inhibitor globally. Prodrug converted to ramiprilat. Landmark HOPE trial evidence for cardiovascular event reduction in high-risk patients even without hypertension or heart failure.',
    indications: ['Hypertension', 'Heart failure post-MI', 'Post-MI (with reduced LV function)', 'Cardiovascular risk reduction (HOPE trial — high-risk patients)', 'Diabetic and non-diabetic nephropathy'],
    dosage: 'Hypertension: 2.5 mg OD initially; titrate to 5–10 mg OD. Heart failure (post-MI): 2.5 mg BD → 5 mg BD. Cardiovascular risk reduction: 10 mg OD.',
    mechanism: 'Prodrug → hepatically converted to ramiprilat (active ACE inhibitor). Same mechanism as all ACEi: ↓ angiotensin II, ↑ bradykinin.',
    sideEffects: ['Cough (class effect)', 'Angioedema', 'Hyperkalaemia', 'First-dose hypotension', 'Renal impairment', 'Teratogenic'],
    nursing: ['Same monitoring as lisinopril: K⁺ and creatinine at 1–2 weeks post-start', 'Prodrug — hepatic conversion needed; caution in hepatic impairment (lower ramiprilat production)', 'HOPE trial: shown to reduce MI, stroke, and cardiovascular death in high-risk patients without HF — strong evidence for broad use', 'Counsel women of childbearing age about teratogenicity'],
    contraindications: ['Pregnancy', 'Bilateral renal artery stenosis', 'Prior ACE inhibitor-induced angioedema', 'Hyperkalaemia', 'Concurrent sacubitril/valsartan'],
  },

  'Enalapril': {
    class: 'ACE Inhibitor', subclass: 'Prodrug (enalaprilat)',
    overview: 'Prodrug ACE inhibitor; one of the original class members. CONSENSUS and SOLVD trials established role in heart failure mortality reduction. Available IV (enalaprilat) for hypertensive urgencies.',
    indications: ['Hypertension', 'Heart failure (HFrEF)', 'Asymptomatic LV dysfunction', 'Diabetic nephropathy'],
    dosage: 'Hypertension: 5 mg OD initially; titrate to 10–40 mg/day (OD or BD). Heart failure: 2.5 mg BD → up to 10 mg BD.',
    mechanism: 'Prodrug → enalaprilat (active). ACE inhibition → ↓ angiotensin II + ↑ bradykinin.',
    sideEffects: ['Cough', 'Angioedema', 'Hyperkalaemia', 'First-dose hypotension', 'Renal impairment'],
    nursing: ['Monitor renal function and K⁺ as with all ACEi', 'BD dosing in heart failure for more consistent ACE inhibition', 'IV enalaprilat for hypertensive urgency (rarely used now — prefer other agents)', 'Educate about cough and angioedema signs'],
    contraindications: ['Pregnancy', 'Bilateral renal artery stenosis', 'Prior ACE inhibitor angioedema', 'Hyperkalaemia'],
  },

  'Perindopril': {
    class: 'ACE Inhibitor', subclass: 'Prodrug (perindoprilat) — tissue-selective',
    overview: 'Prodrug ACE inhibitor with high vascular tissue penetration. EUROPA trial demonstrated cardiovascular benefit in stable CAD without HF. Available as arginine salt (Coversyl Arginine) with consistent bioavailability.',
    indications: ['Hypertension', 'Stable coronary artery disease (cardiovascular event reduction — EUROPA trial)', 'Heart failure', 'Post-MI'],
    dosage: 'Hypertension: 4 mg OD initially (2 mg in elderly); titrate to 8 mg OD. Stable CAD: 8 mg OD.',
    mechanism: 'Prodrug → perindoprilat. High vascular tissue ACE affinity → sustained inhibition in vessel wall.',
    sideEffects: ['Cough', 'Angioedema', 'Hyperkalaemia', 'Hypotension', 'Renal impairment'],
    nursing: ['Arginine salt (Coversyl Arginine): moisture-stable — better than older erbamine salt', 'Take in the morning on an empty stomach', 'Strong evidence in stable CAD even without hypertension or HF', 'Monitor K⁺ and renal function'],
    contraindications: ['Pregnancy', 'ACE inhibitor angioedema history', 'Bilateral RAS', 'Concurrent sacubitril/valsartan'],
  },

  'Captopril': {
    class: 'ACE Inhibitor', subclass: 'Sulfhydryl-containing — Short-acting',
    overview: 'First ACE inhibitor discovered. Short-acting (TDS dosing). Active drug (not prodrug). Contains sulfhydryl group — responsible for additional side effects (taste disturbance, neutropaenia, proteinuria). Primarily of historical importance; rarely first-choice now.',
    indications: ['Hypertension', 'Heart failure', 'Post-MI (LV dysfunction)', 'Diabetic nephropathy', 'Hypertensive emergency (sublingual/oral in monitored setting)'],
    dosage: 'Hypertension: 12.5–25 mg BD–TDS; max 150 mg/day. Heart failure: 6.25 mg TDS → 25–50 mg TDS. Hypertensive urgency: 25 mg SL or PO.',
    mechanism: 'Directly active ACE inhibitor (no hepatic activation needed). Sulfhydryl group accounts for unique side effects.',
    sideEffects: ['Cough (class)', 'Angioedema (class)', 'Taste disturbance (metallic — sulfhydryl)', 'Neutropaenia (rare — sulfhydryl)', 'Proteinuria at high doses', 'Rash (sulfhydryl-related)', 'Hypotension', 'Hyperkalaemia'],
    nursing: ['TDS dosing reduces adherence vs modern once-daily ACEi — rarely first choice', 'Taste disturbance common: metallic taste, loss of taste — usually resolves with dose reduction', 'FBC monitoring if rash or signs of infection (neutropaenia)', 'Take 30 min before food (bioavailability reduced by food)'],
    contraindications: ['Pregnancy', 'Bilateral RAS', 'Prior ACE inhibitor angioedema', 'Hyperkalaemia'],
  },

  'Fosinopril': {
    class: 'ACE Inhibitor', subclass: 'Phosphonate-containing prodrug',
    overview: 'Unique dual hepatic and renal elimination — safer in renal impairment as dose compensation occurs via increased hepatic excretion. No dose adjustment needed in moderate renal impairment.',
    indications: ['Hypertension', 'Heart failure'],
    dosage: 'Hypertension: 10 mg OD; titrate to 20–40 mg OD. Heart failure: 5 mg OD → 10–40 mg OD.',
    mechanism: 'Prodrug → fosinoprilat. Unique phosphonate-ACE interaction. Dual hepatic and renal elimination.',
    sideEffects: ['Cough', 'Angioedema', 'Hyperkalaemia', 'Dizziness', 'Fatigue'],
    nursing: ['Advantage in renal impairment — hepatic excretion compensates for reduced renal clearance', 'Standard ACEi monitoring otherwise applies', 'Less dose adjustment needed in CKD compared to other ACEi'],
    contraindications: ['Pregnancy', 'Bilateral RAS', 'Prior ACE inhibitor angioedema'],
  },


  // ══════════════════════════════════════════════════════════
  // 2. ANGIOTENSIN RECEPTOR BLOCKERS (ARBs)
  // ══════════════════════════════════════════════════════════

  'Losartan': {
    class: 'Angiotensin Receptor Blocker (ARB)', subclass: 'Imidazole — Prodrug',
    overview: 'First-in-class ARB. Preferred over ACEi when cough is intolerable. Also has uricosuric effect (lowers uric acid) — useful in patients with gout and hypertension. LIFE trial: superior to atenolol in reducing stroke in hypertension with LVH.',
    indications: ['Hypertension', 'Heart failure (ACEi intolerance)', 'Diabetic nephropathy (type 2 with proteinuria — RENAAL trial)', 'Hypertension with LVH (LIFE trial — reduces stroke)', 'ACEi-induced cough (switch to ARB)'],
    dosage: '50 mg OD initially; increase to 100 mg OD. Renal protection (diabetic nephropathy): 50–100 mg OD.',
    mechanism: 'Selective AT1 receptor antagonism → blocks all actions of angiotensin II (vasoconstriction, aldosterone release, sympathetic activation). AT2 receptor remains active (may be cardioprotective).',
    sideEffects: ['Hyperkalaemia', 'Hypotension (first dose)', 'Renal impairment', 'Dizziness', 'No cough (unlike ACEi — key advantage)', 'Angioedema (rare — less than ACEi)', 'Teratogenic'],
    nursing: ['KEY ADVANTAGE: no cough — preferred in patients who cannot tolerate ACEi cough', 'Same K⁺ and creatinine monitoring as ACEi: check at 1–2 weeks and after dose changes', 'Uricosuric effect: mild uric acid reduction — beneficial if patient has gout', 'Contraindicated in pregnancy (same as ACEi from 2nd trimester)', 'Do NOT combine with ACEi (dual RAAS blockade — ↑ AKI, hyperkalaemia, hypotension without additive cardioprotection)', 'RENAL ARTERY STENOSIS: same contraindication as ACEi'],
    contraindications: ['Pregnancy (2nd and 3rd trimester)', 'Bilateral renal artery stenosis', 'Hyperkalaemia', 'Concurrent ACEi (combination contraindicated)', 'Concurrent aliskiren in diabetes/CKD'],
  },

  'Valsartan': {
    class: 'Angiotensin Receptor Blocker (ARB)', subclass: 'Non-heterocyclic — directly active',
    overview: 'Directly active ARB (not a prodrug). Val-HeFT and VALIANT trials established role in HF and post-MI. Part of sacubitril/valsartan (Entresto) combination for HFrEF.',
    indications: ['Hypertension', 'Heart failure (ACEi intolerant)', 'Post-MI with LV dysfunction', 'Reduction of cardiovascular events post-MI'],
    dosage: 'Hypertension: 80–160 mg OD; max 320 mg OD. Heart failure: 40 mg BD → 160 mg BD (target).',
    mechanism: 'Direct AT1 receptor antagonism. No prodrug conversion needed.',
    sideEffects: ['Hyperkalaemia', 'Hypotension', 'Renal impairment', 'Dizziness', 'Fatigue'],
    nursing: ['Sacubitril/valsartan (Entresto): 36-hr washout from ACEi mandatory before starting (angioedema risk)', 'Monitor K⁺ and creatinine as with ACEi', 'Can be taken with or without food', 'Standard ARB precautions: avoid in pregnancy, bilateral RAS'],
    contraindications: ['Pregnancy', 'Bilateral RAS', 'Hyperkalaemia', 'Concurrent ACEi', 'Concurrent aliskiren (diabetes/CKD)'],
  },

  'Candesartan': {
    class: 'Angiotensin Receptor Blocker (ARB)', subclass: 'Prodrug (candesartan cilexetil)',
    overview: 'Prodrug converted to candesartan in GI wall. Highest AT1 receptor affinity and slowest dissociation of any ARB — prolonged duration. CHARM trials established role in all EF ranges of heart failure.',
    indications: ['Hypertension', 'Heart failure with reduced EF (HFrEF — ACEi intolerant)', 'Heart failure with preserved EF (HFpEF — CHARM-Preserved)', 'Diabetic nephropathy'],
    dosage: 'Hypertension: 4–8 mg OD initially; titrate to 32 mg OD. Heart failure: 4 mg OD → 32 mg OD (target).',
    mechanism: 'Prodrug → candesartan. Highest AT1 receptor affinity and slowest receptor dissociation of ARBs → insurmountable receptor blockade.',
    sideEffects: ['Hyperkalaemia', 'Hypotension', 'Renal impairment', 'Headache', 'Back pain'],
    nursing: ['Longest duration AT1 blockade — once daily effective even with missed doses', 'Standard ARB monitoring: K⁺ and creatinine', 'One of few drugs with evidence in HFpEF (modest benefit in CHARM-Preserved)', 'Titrate slowly in heart failure — avoid large BP drops'],
    contraindications: ['Pregnancy', 'Bilateral RAS', 'Hyperkalaemia', 'Concurrent ACEi or aliskiren'],
  },

  'Irbesartan': {
    class: 'Angiotensin Receptor Blocker (ARB)', subclass: 'Non-prodrug ARB',
    overview: 'Directly active ARB; specifically studied in type 2 diabetes with nephropathy (IRMA-2 and IDNT trials). No active metabolites.',
    indications: ['Hypertension', 'Diabetic nephropathy in type 2 diabetes with hypertension', 'Heart failure (ACEi intolerant)'],
    dosage: 'Hypertension: 150 mg OD; increase to 300 mg OD. Diabetic nephropathy: 300 mg OD.',
    mechanism: 'Non-competitive AT1 receptor antagonism.',
    sideEffects: ['Hyperkalaemia', 'Hypotension', 'Renal impairment', 'Dizziness', 'Diarrhoea'],
    nursing: ['IRMA-2 trial: delays progression to overt nephropathy in microalbuminuric type 2 diabetics', 'Take with or without food', 'Standard ARB monitoring', 'Good choice in type 2 diabetics with microalbuminuria/proteinuria'],
    contraindications: ['Pregnancy', 'Bilateral RAS', 'Hyperkalaemia', 'Concurrent ACEi or aliskiren'],
  },

  'Telmisartan': {
    class: 'Angiotensin Receptor Blocker (ARB)', subclass: 'Non-prodrug — longest half-life ARB',
    overview: 'Longest half-life of all ARBs (~24 hrs) — once-daily with excellent trough:peak ratio. Also a partial PPARγ agonist — mild insulin-sensitising and lipid-modifying effects. ONTARGET trial (vs ramipril): non-inferior for cardiovascular events.',
    indications: ['Hypertension', 'Cardiovascular risk reduction (ONTARGET — similar to ramipril)', 'Diabetic nephropathy'],
    dosage: '20–40 mg OD initially; titrate to 80 mg OD.',
    mechanism: 'AT1 receptor antagonism + partial PPARγ agonism → additional metabolic benefits (modest).',
    sideEffects: ['Hyperkalaemia', 'Hypotension', 'Renal impairment', 'Dizziness', 'Back pain', 'Sinusitis'],
    nursing: ['Longest duration ARB — forgiving if dose missed by a few hours', 'PPARγ activity: may improve insulin sensitivity and lipid profile slightly', 'No dose adjustment in mild-moderate renal impairment', 'Avoid in biliary obstruction (primarily biliary excretion)'],
    contraindications: ['Pregnancy', 'Cholestasis/biliary obstruction (primary route of excretion)', 'Bilateral RAS', 'Hyperkalaemia'],
  },

  'Olmesartan': {
    class: 'Angiotensin Receptor Blocker (ARB)', subclass: 'Prodrug (olmesartan medoxomil)',
    overview: 'Potent ARB; one of the highest AT1/AT2 receptor selectivity ratios. Associated with sprue-like enteropathy (severe malabsorption) — rare but distinctive and unique to olmesartan.',
    indications: ['Hypertension'],
    dosage: '10–20 mg OD initially; increase to 40 mg OD.',
    mechanism: 'Prodrug → olmesartan. Very high AT1 selectivity and potent receptor binding.',
    sideEffects: ['Hyperkalaemia', 'Hypotension', 'Renal impairment', 'Sprue-like enteropathy (rare but severe — villous atrophy, malabsorption, diarrhoea — unique to olmesartan)', 'Dizziness'],
    nursing: ['ENTEROPATHY ALERT: if patient develops chronic severe diarrhoea and weight loss while on olmesartan — sprue-like enteropathy; stop drug (symptoms resolve)', 'Standard ARB monitoring otherwise', 'Potent AT1 blockade — once daily effective'],
    contraindications: ['Pregnancy', 'Bilateral RAS', 'Hyperkalaemia', 'Concurrent ACEi or aliskiren'],
  },


  // ══════════════════════════════════════════════════════════
  // 3. BETA-BLOCKERS
  // ══════════════════════════════════════════════════════════

  'Bisoprolol': {
    class: 'Beta-Blocker', subclass: 'Cardioselective β1 — Most commonly used in HF',
    overview: 'Highly cardioselective β1 blocker. CIBIS-II trial demonstrated mortality reduction in HFrEF. Most widely used beta-blocker in heart failure. Once-daily dosing. Higher β1 selectivity than atenolol or metoprolol — safer in mild-moderate asthma (relative).',
    indications: ['Heart failure with reduced ejection fraction (HFrEF — 1st line)', 'Hypertension', 'Angina pectoris', 'Rate control in atrial fibrillation', 'Prevention of recurrent AF', 'Post-MI'],
    dosage: 'HF: 1.25 mg OD initially; double every 2 weeks if tolerated; target 10 mg OD (CIBIS-II dose). Hypertension/angina: 5–10 mg OD.',
    mechanism: 'Highly selective β1 adrenoceptor blockade → ↓ HR and contractility → ↓ myocardial oxygen demand; ↓ sympathetic activation in HF → reverse remodelling.',
    sideEffects: ['Bradycardia', 'Fatigue and lethargy', 'Cold extremities', 'Bronchoconstriction (dose-dependent; less than non-selective)', 'Masking hypoglycaemia (tachycardia — sweating preserved)', 'Sexual dysfunction', 'Sleep disturbance (less than propranolol — low lipophilicity)', 'Worsening HF initially (before improvement)'],
    nursing: ['HF TITRATION: start very low and titrate SLOWLY (every 2 weeks); HF may worsen in first 2–4 weeks before benefit — do not stop unless acute decompensation', 'NEVER STOP ABRUPTLY: rebound tachycardia, angina, or MI — taper over 2–4 weeks', 'BRADYCARDIA: hold if HR <50 bpm (check local protocol); ECG if symptomatic', 'ASTHMA: β1 selective but not β1 specific at high doses — use lowest effective dose; have salbutamol available; relative contraindication in significant asthma', 'DIABETES: masks tachycardia of hypoglycaemia (sweating still occurs — educate patient)'],
    contraindications: ['Cardiogenic shock', 'Decompensated heart failure (acute phase)', 'Severe bradycardia (<50 bpm)', '2nd or 3rd degree AV block (without pacemaker)', 'Sick sinus syndrome', 'Severe asthma or COPD (significant bronchospasm)'],
  },

  'Carvedilol': {
    class: 'Beta-Blocker', subclass: 'Non-selective β + α1 blocker — Vasodilating',
    overview: 'Non-selective beta-blocker with additional alpha-1 blockade (vasodilation). CARVEDILOL trial and COPERNICUS trial established mortality benefit in HFrEF including severe HF. Additional vasodilatory effect differentiates it from bisoprolol/metoprolol.',
    indications: ['Heart failure with reduced ejection fraction (all severity classes)', 'Post-MI LV dysfunction', 'Hypertension (less commonly now)'],
    dosage: 'HF: 3.125 mg BD initially; double every 2 weeks if tolerated; target 25 mg BD (<85 kg) or 50 mg BD (>85 kg). Hypertension: 12.5–25 mg BD.',
    mechanism: 'Non-selective β1 + β2 blockade + α1 adrenoceptor blockade → vasodilation + ↓ HR and contractility. Also antioxidant properties.',
    sideEffects: ['Hypotension (more than bisoprolol — due to α1 blockade)', 'Dizziness', 'Bradycardia', 'Weight gain (fluid)', 'Fatigue', 'Bronchoconstriction (non-selective)', 'Worsening peripheral vascular disease'],
    nursing: ['HYPOTENSION: α1 blockade causes vasodilation — particularly on initiation; take with food; rise slowly', 'Same slow HF titration as bisoprolol', 'Never stop abruptly in HF (rebound adrenergic activation)', 'Avoid in asthma — non-selective β blockade', 'Monitor glucose in diabetics (also masks hypoglycaemia)', 'Vasodilatory effect may benefit hypertension better than pure β-blockers'],
    contraindications: ['Asthma or significant bronchospasm', 'Decompensated HF requiring IV inotropes', 'Severe bradycardia', '2nd/3rd degree AV block', 'Cardiogenic shock', 'Severe hepatic impairment'],
  },

  'Metoprolol': {
    class: 'Beta-Blocker', subclass: 'Cardioselective β1 — IR and XL formulations',
    overview: 'Cardioselective β1 blocker; MERIT-HF trial (metoprolol succinate XL) demonstrated mortality benefit in HFrEF. XL (extended release — succinate salt) preferred over IR (tartrate) for HF. Also used for hypertension, angina, AF rate control, and migraine prophylaxis.',
    indications: ['Heart failure (metoprolol succinate XL — MERIT-HF)', 'Hypertension', 'Angina', 'Rate control in AF/flutter', 'Post-MI', 'Migraine prophylaxis', 'Hyperthyroidism (symptom control)'],
    dosage: 'HF (XL): 12.5–25 mg OD initially; titrate to 200 mg OD. Hypertension/angina: 50–200 mg OD (XL) or BD (IR). AF rate control: 25–200 mg OD.',
    mechanism: 'Selective β1 adrenoceptor blockade → ↓ HR, contractility, and renin release.',
    sideEffects: ['Bradycardia', 'Fatigue', 'Dizziness', 'Bronchoconstriction (dose-dependent)', 'Cold extremities', 'Nightmares (moderately lipophilic — crosses BBB more than atenolol)', 'Masking hypoglycaemia'],
    nursing: ['IR vs XL: DO NOT crush or chew XL tablets (controlled release mechanism destroyed)', 'TITRATE SLOWLY in HF', 'NEVER STOP ABRUPTLY — rebound tachycardia', 'Lipophilic: crosses BBB more than atenolol — nightmares more common', 'CYP2D6 metabolised — poor metabolisers have ↑ levels (bradycardia risk)'],
    contraindications: ['Severe bradycardia', 'AV block (2nd/3rd degree)', 'Cardiogenic shock', 'Uncontrolled asthma', 'Decompensated HF'],
  },

  'Atenolol': {
    class: 'Beta-Blocker', subclass: 'Cardioselective β1 — Hydrophilic',
    overview: 'Cardioselective β1 blocker. Hydrophilic — minimal CNS penetration (less nightmares/fatigue than propranolol). Renally cleared. No longer first-line for uncomplicated hypertension (less stroke prevention than other antihypertensives in ASCOT trial). Still used for angina and AF rate control.',
    indications: ['Angina', 'Hypertension (less preferred now)', 'AF/flutter rate control', 'Post-MI', 'Migraine prophylaxis', 'Hyperthyroidism (symptomatic control)'],
    dosage: '25–50 mg OD; may increase to 100 mg OD.',
    mechanism: 'Selective β1 blockade. Hydrophilic → minimal hepatic metabolism, renally excreted unchanged.',
    sideEffects: ['Bradycardia', 'Fatigue', 'Cold extremities', 'Bronchoconstriction (dose-dependent)', 'Less CNS effects (hydrophilic)', 'Erectile dysfunction'],
    nursing: ['RENAL DOSE ADJUSTMENT required (renally cleared) — reduce in CKD', 'Fewer nightmares/cognitive effects than propranolol (hydrophilic)', 'ASCOT: less stroke reduction than amlodipine ± perindopril — not preferred for uncomplicated hypertension', 'Still useful for rate control and angina'],
    contraindications: ['2nd/3rd AV block', 'Severe bradycardia', 'Cardiogenic shock', 'Asthma (relative)', 'Severe peripheral arterial disease'],
  },

  'Propranolol': {
    class: 'Beta-Blocker', subclass: 'Non-selective — Lipophilic — Multiple indications',
    overview: 'First beta-blocker developed. Non-selective (β1 and β2) — causes bronchoconstriction. Highly lipophilic — significant CNS effects. Multiple non-cardiac indications: migraine, essential tremor, portal hypertension, anxiety, thyrotoxicosis. Short half-life (standard) — long-acting formulation available.',
    indications: ['Hypertension', 'Angina', 'AF/flutter rate control', 'Post-MI', 'Migraine prophylaxis', 'Essential tremor', 'Performance/situational anxiety', 'Thyrotoxicosis (acute symptom control)', 'Portal hypertension (variceal bleeding prevention)', 'Phaeochromocytoma (after alpha-blocker)'],
    dosage: 'Hypertension: 40–160 mg BD–TDS. Migraine/tremor prophylaxis: 40 mg BD–TDS (→ 80–160 mg/day). Performance anxiety: 40 mg single dose 30 min before event. LA: 80–160 mg OD.',
    mechanism: 'Non-selective β1 and β2 blockade → ↓ HR, contractility, renin; β2 blockade → bronchoconstriction, impaired glycogenolysis, peripheral vasoconstriction.',
    sideEffects: ['Bradycardia', 'Bronchospasm (β2 — AVOID in asthma)', 'Fatigue (significant)', 'Nightmares and sleep disturbance (highly lipophilic)', 'Cold extremities', 'Masked hypoglycaemia', 'Exacerbated peripheral vascular disease', 'Depression (rare)', 'Sexual dysfunction'],
    nursing: ['ASTHMA: ABSOLUTELY CONTRAINDICATED — β2 blockade causes potentially fatal bronchospasm', 'NEVER STOP ABRUPTLY after prolonged use — rebound tachycardia, ↑ angina, MI risk; taper over 1–2 weeks', 'THYROTOXICOSIS: controls tachycardia and tremor while definitive treatment arranged; does not affect T4/T3 levels', 'PERFORMANCE ANXIETY: single PRN dose 30–40 min before event (no need for regular therapy)', 'HIGHLY LIPOPHILIC: significant nightmares, fatigue, depression — counsel patients', 'PHAEOCHROMOCYTOMA: ALWAYS give alpha-blocker (phenoxybenzamine/phentolamine) FIRST — propranolol alone causes paradoxical hypertension (unopposed α stimulation)'],
    contraindications: ['Asthma or significant bronchospasm (absolute)', 'Uncontrolled heart failure', '2nd/3rd degree AV block', 'Severe bradycardia', 'Phaeochromocytoma (without prior alpha blockade)', 'Peripheral arterial disease (severe)'],
  },

  'Labetalol': {
    class: 'Beta-Blocker', subclass: 'Non-selective β + α1 blocker — IV available',
    overview: 'Combined alpha and beta blocker. Available IV for hypertensive emergency in pregnancy and other hypertensive crises. Drug of choice for hypertension in pregnancy (alongside methyldopa). 7:1 (oral) and 3:1 (IV) beta:alpha blockade ratio.',
    indications: ['Hypertension in pregnancy (1st line with methyldopa)', 'Hypertensive emergency (IV)', 'Phaeochromocytoma (combined alpha-beta blockade)', 'Hypertension', 'Angina'],
    dosage: 'Oral: 100 mg BD initially; titrate to 200–400 mg BD. IV hypertensive emergency: 20 mg bolus every 10 min (max 300 mg) or 0.5–2 mg/min infusion.',
    mechanism: 'Non-selective β1+β2 blockade + α1 blockade → ↓ HR, ↓ contractility + vasodilation → ↓ BP without reflex tachycardia.',
    sideEffects: ['Postural hypotension (α1 blockade)', 'Scalp tingling (unique)', 'Nausea', 'Fatigue', 'Bronchoconstriction (non-selective)', 'Hepatotoxicity (rare)'],
    nursing: ['PREGNANCY HYPERTENSION: monitor fetal heart rate — may cause neonatal bradycardia; inform paediatric team if used in labour', 'IV: patient must be supine during and for 3 hrs after infusion (severe postural hypotension)', 'LFTs monitoring (rare hepatotoxicity)', 'Scalp tingling: common and harmless — warn patients', 'Breastfeeding: relatively safe but monitor infant HR'],
    contraindications: ['Asthma or significant bronchospasm', 'Cardiogenic shock', '2nd/3rd AV block', 'Phaeochromocytoma (not sufficient alpha blockade alone — use phenoxybenzamine first)'],
  },

  'Sotalol': {
    class: 'Beta-Blocker / Antiarrhythmic', subclass: 'Non-selective β-blocker + Class III (K⁺ channel blockade)',
    overview: 'Unique beta-blocker with additional Class III antiarrhythmic properties (potassium channel blockade → prolonged action potential/QT). Used specifically for ventricular arrhythmias and AF maintenance. QT-prolonging — requires ECG monitoring.',
    indications: ['Sustained ventricular tachycardia', 'AF/flutter (rhythm control)', 'Prophylaxis of paroxysmal SVT'],
    dosage: '80 mg BD initially; increase to 160–320 mg/day in 2 divided doses. Dose adjustments needed in renal impairment.',
    mechanism: 'β1 and β2 blockade + Class III: blocks IKr (rapid delayed rectifier K⁺ channel) → ↑ action potential duration → ↑ QT interval → ↑ effective refractory period.',
    sideEffects: ['QT prolongation (significant — torsades de pointes risk, especially at higher doses)', 'Bradycardia', 'Bronchoconstriction (non-selective)', 'Fatigue', 'Dizziness', 'Hypotension'],
    nursing: ['ECG MANDATORY before and during initiation — calculate QTc; stop if QTc >500 ms', 'TORSADES DE POINTES risk is dose-dependent and increases with hypokalaemia — maintain K⁺ and Mg²⁺ within normal range', 'Initiate in monitored setting (hospital) for 3 days with ECG monitoring', 'RENAL IMPAIRMENT: renally cleared — dose reduction essential (QT prolongation risk)', 'Avoid co-prescribing with other QT-prolonging drugs'],
    contraindications: ['QTc >450 ms at baseline', 'Hypokalaemia or hypomagnesaemia', 'Asthma (non-selective)', 'Renal failure (severe — dose adjustment)', 'Cardiogenic shock', 'AV block'],
  },

  'Nebivolol': {
    class: 'Beta-Blocker', subclass: 'Highly selective β1 + NO release',
    overview: 'Third-generation beta-blocker. Highest β1 selectivity of all beta-blockers. Releases nitric oxide → vasodilation (unlike other beta-blockers). SENIORS trial: mortality benefit in HF in elderly. Less sexual dysfunction than other beta-blockers.',
    indications: ['Hypertension', 'Heart failure (stable — elderly patients, SENIORS trial)', 'Angina'],
    dosage: 'Hypertension: 5 mg OD. HF: 1.25 mg OD → titrate to 10 mg OD.',
    mechanism: 'Highly selective β1 blockade + L-arginine/NO pathway activation → vasodilation → ↓ peripheral resistance.',
    sideEffects: ['Bradycardia', 'Headache (NO-mediated vasodilation)', 'Dizziness', 'Fatigue (less than older beta-blockers)', 'Less sexual dysfunction (NO effect on penile vasodilation)'],
    nursing: ['Best tolerated beta-blocker for sexual dysfunction — may be preferred in men', 'Highest β1 selectivity — safest for patients with mild-moderate asthma who require beta-blockade', 'HF titration: same slow approach as bisoprolol/carvedilol', 'Metabolism via CYP2D6 — poor metabolisers have higher levels'],
    contraindications: ['Severe bradycardia', '2nd/3rd AV block', 'Decompensated HF', 'Severe asthma', 'Hepatic impairment'],
  },


  // ══════════════════════════════════════════════════════════
  // 4. CALCIUM CHANNEL BLOCKERS (CCBs)
  // ══════════════════════════════════════════════════════════

  'Amlodipine': {
    class: 'Calcium Channel Blocker', subclass: 'Dihydropyridine (DHP) — Long-acting',
    overview: 'Most widely used CCB. Long half-life (~35–50 hrs) — once daily, minimal peak-to-trough fluctuation. ASCOT trial: superior to atenolol for cardiovascular outcomes. CAMELOT: reduced cardiovascular events in CAD even without hypertension.',
    indications: ['Hypertension (1st line)', 'Stable angina (reduces O₂ demand)', 'Vasospastic (Prinzmetal) angina', 'Raynaud phenomenon'],
    dosage: '5 mg OD initially; increase to 10 mg OD after 2–4 weeks. Elderly: 2.5 mg initially.',
    mechanism: 'Blocks L-type voltage-gated Ca²⁺ channels in vascular smooth muscle → vasodilation → ↓ peripheral resistance → ↓ BP. Also dilates coronary arteries.',
    sideEffects: ['Peripheral oedema (ankle swelling — vasodilation-mediated, not cardiac; very common 5–10%)', 'Flushing', 'Headache', 'Palpitations (reflex tachycardia)', 'Gingival hyperplasia (long-term)', 'Constipation'],
    nursing: ['ANKLE OEDEMA: very common (10%); does NOT indicate cardiac failure (vasodilatory — not fluid overload); elevate legs; if severe reduce dose or switch (adding ACEi reduces oedema)', 'Take at same time daily — long half-life means missed doses are not immediately critical', 'Safe in asthma (unlike beta-blockers) — useful when both HTN and asthma co-exist', 'Monitor BP and HR at each visit', 'Gingival hyperplasia: dental hygiene education; refer to dentist if developing'],
    contraindications: ['Cardiogenic shock', 'Severe aortic stenosis', 'Unstable angina (relative)'],
  },

  'Felodipine': {
    class: 'Calcium Channel Blocker', subclass: 'Dihydropyridine — Vascular selective',
    overview: 'Highly vascular-selective DHP CCB — greater selectivity for vascular over cardiac calcium channels than amlodipine. Significant grapefruit juice interaction (CYP3A4 — grapefruit increases levels 2–3×). Extended-release formulation.',
    indications: ['Hypertension', 'Stable angina', 'Raynaud phenomenon'],
    dosage: '5 mg OD (ER); may increase to 10 mg OD. Elderly: 2.5 mg OD.',
    mechanism: 'Selective L-type Ca²⁺ channel blockade in vascular smooth muscle. Higher vascular:cardiac selectivity than nifedipine.',
    sideEffects: ['Peripheral oedema', 'Flushing', 'Headache', 'Palpitations', 'Gingival hyperplasia'],
    nursing: ['GRAPEFRUIT JUICE: absolutely avoid — increases felodipine levels by 2–3× (CYP3A4 inhibition in gut wall)', 'Swallow ER tablets whole — do NOT crush', 'Less cardiac depression than verapamil/diltiazem — safer in HF (relative)'],
    contraindications: ['Cardiogenic shock', 'Severe aortic stenosis', 'Unstable angina'],
  },

  'Nifedipine': {
    class: 'Calcium Channel Blocker', subclass: 'Dihydropyridine — Short and long-acting formulations',
    overview: 'First DHP CCB. Short-acting (immediate release) formulation causes reflex tachycardia and is associated with worse cardiovascular outcomes — AVOID IR nifedipine for hypertension. Long-acting (LA/GITS) formulations are safe. Also used in obstetrics for tocolysis and for preterm labour.',
    indications: ['Hypertension (LA formulation only)', 'Angina', 'Raynaud phenomenon', 'Tocolysis (preterm labour — unlicensed)', 'Hypertension in pregnancy (LA)'],
    dosage: 'LA/GITS: 30–90 mg OD. Immediate release (Adalat 10 mg): restricted to acute use only (e.g., hypertensive emergency in pregnancy under monitoring).',
    mechanism: 'L-type Ca²⁺ channel blockade → vascular smooth muscle relaxation → vasodilation.',
    sideEffects: ['Peripheral oedema', 'Flushing (prominent — especially IR)', 'Reflex tachycardia (IR — problematic)', 'Headache', 'Gingival hyperplasia', 'Constipation'],
    nursing: ['DO NOT USE IMMEDIATE RELEASE nifedipine for hypertension — adverse cardiac outcomes (reflex tachycardia, excess mortality in some studies)', 'GITS (gastrointestinal therapeutic system) tablet shell passes in stool intact — normal, reassure patient', 'Pregnancy: LA nifedipine preferred CCB in pregnancy hypertension (alongside labetalol/methyldopa)', 'Grapefruit interaction (CYP3A4) — advise avoidance'],
    contraindications: ['Cardiogenic shock', 'Within 4 weeks of MI (short-acting formulation)', 'Unstable angina (short-acting)'],
  },

  'Verapamil': {
    class: 'Calcium Channel Blocker', subclass: 'Phenylalkylamine — Rate-limiting (non-DHP)',
    overview: 'Non-DHP CCB with greatest cardiac selectivity — acts on both vascular and cardiac calcium channels. Reduces heart rate and AV conduction (like beta-blockers). Used for SVT termination and rate control. MUST NOT be combined with beta-blockers (complete heart block, asystole).',
    indications: ['Supraventricular tachycardia (IV — terminates SVT)', 'AF/flutter rate control (oral)', 'Hypertension', 'Angina', 'Hypertrophic obstructive cardiomyopathy (symptom relief)'],
    dosage: 'SVT (IV): 5–10 mg over 2 min; repeat 5 mg after 5–10 min if needed. Oral: 80–120 mg TDS (IR) or 120–480 mg OD (SR). Rate control: 120–360 mg/day.',
    mechanism: 'Blocks L-type Ca²⁺ channels in vascular smooth muscle AND cardiac cells (SA node, AV node) → ↓ HR, ↓ AV conduction, ↓ contractility + vasodilation.',
    sideEffects: ['Bradycardia', 'AV block (dose-dependent)', 'Constipation (most common side effect at therapeutic doses — ~30%)', 'Negative inotropy (contraindicated in HF)', 'Hypotension', 'Flushing', 'Oedema', 'Gingival hyperplasia'],
    nursing: ['NEVER COMBINE WITH BETA-BLOCKERS IV or in close temporal proximity orally — complete heart block, asystole risk (emergency — atropine, calcium gluconate, pacing)', 'CONSTIPATION: most common complaint — high fibre diet, adequate hydration, laxative if needed', 'IV: continuous cardiac monitoring and BP during infusion; keep calcium gluconate and atropine at bedside', 'HEART FAILURE: negative inotropy worsens HF — AVOID in systolic HF', 'WPW with AF: contraindicated (may accelerate conduction via accessory pathway → VF)', 'Increases digoxin levels (reduce digoxin dose by 50%)'],
    contraindications: ['Concurrent beta-blocker (IV — absolute; oral — extreme caution)', 'Systolic heart failure (negative inotropy)', 'WPW with AF/flutter (may precipitate VF)', 'Cardiogenic shock', 'AV block (2nd/3rd degree)', 'Hypotension', 'VT (may worsen — can be mistaken for SVT)'],
  },

  'Diltiazem': {
    class: 'Calcium Channel Blocker', subclass: 'Benzothiazepine — Rate-limiting (non-DHP)',
    overview: 'Non-DHP CCB with intermediate selectivity between verapamil (mainly cardiac) and DHPs (mainly vascular). Less negative inotropy than verapamil — better tolerated in mild LV dysfunction. Used for AF rate control and angina. Also caution with beta-blockers.',
    indications: ['Angina (stable and vasospastic)', 'Hypertension', 'AF/flutter rate control', 'SVT (IV — 2nd line after adenosine)', 'Raynaud phenomenon'],
    dosage: 'Angina/hypertension: 60–120 mg TDS (IR) or 120–360 mg OD (SR). Rate control (oral): 120–360 mg/day in divided doses. IV (SVT): 0.25 mg/kg over 2 min; repeat 0.35 mg/kg after 15 min.',
    mechanism: 'Blocks cardiac and vascular L-type Ca²⁺ channels — intermediate selectivity. ↓ AV conduction (rate control) + vasodilation (angina/HTN).',
    sideEffects: ['Bradycardia (less than verapamil)', 'AV block', 'Constipation (less than verapamil)', 'Oedema', 'Flushing', 'Headache', 'Negative inotropy (less than verapamil)'],
    nursing: ['CAUTION WITH BETA-BLOCKERS: oral combination can cause AV block and bradycardia — monitor ECG; IV combination absolutely avoided', 'Less constipation than verapamil', 'SR tablets: swallow whole', 'Monitor ECG and BP', 'Increases digoxin and cyclosporine levels (drug interaction)'],
    contraindications: ['2nd/3rd degree AV block', 'Sick sinus syndrome', 'Concurrent IV beta-blockers', 'Severe LV dysfunction/HF (relative — less than verapamil)', 'WPW with AF'],
  },


  // ══════════════════════════════════════════════════════════
  // 5. LOOP DIURETICS
  // ══════════════════════════════════════════════════════════

  'Furosemide (Frusemide)': {
    class: 'Loop Diuretic', subclass: 'Sulphonamide — Most potent diuretic',
    overview: 'Most potent diuretic. Blocks Na⁺-K⁺-2Cl⁻ cotransporter in ascending limb of loop of Henle → massive natriuresis and diuresis. First-line for acute pulmonary oedema (IV) and chronic oedema. Oral bioavailability variable (10–100%) — IV gives reliable response.',
    indications: ['Acute pulmonary oedema (IV — emergency)', 'Chronic heart failure (oedema)', 'Renal oedema (nephrotic syndrome)', 'Hepatic ascites', 'Hypertension (refractory)', 'Hypercalcaemia (IV — promotes calciuresis)', 'Forced diuresis (with hyperhydration)'],
    dosage: 'Acute pulmonary oedema: 40–80 mg IV slowly; repeat/double if inadequate response in 1 hr. Chronic HF: 20–80 mg PO OD–BD. Max 600 mg/day. IV must not exceed 4 mg/min (ototoxicity).',
    mechanism: 'Inhibits Na⁺-K⁺-2Cl⁻ symporter (NKCC2) in thick ascending limb of Henle → ↑ Na⁺, K⁺, Cl⁻ excretion → diuresis. Also venodilates → ↓ preload (within 5–15 min before diuresis starts).',
    sideEffects: ['Hypokalaemia (major — always monitor K⁺)', 'Hyponatraemia', 'Hypomagnesaemia', 'Dehydration and volume depletion', 'Orthostatic hypotension', 'Ototoxicity (rapid IV infusion — tinnitus, hearing loss; dose-related)', 'Hyperuricaemia (gout)', 'Hyperglycaemia', 'Metabolic alkalosis', 'Hypoalbuminaemia worsens response (binds to albumin for delivery to tubule)'],
    nursing: ['IV RATE: must not exceed 4 mg/min (ototoxicity) — 40 mg IV given over at least 10 min; 80 mg over at least 20 min', 'POTASSIUM: monitor K⁺ before and after each dose change; replace orally or IV if <3.5 mmol/L', 'FLUID BALANCE: strict input/output chart; daily weights (1 kg = approximately 1 L fluid)', 'MORNING DOSE: give early AM to avoid nocturnal diuresis; if 2nd dose needed give by early afternoon', 'IV vs oral response: variable oral bioavailability means some patients need double the oral dose to match IV; reassess if poor oral response', 'OTOTOXICITY: avoid concurrent aminoglycosides (synergistic ototoxicity)', 'ELECTROLYTES: replenish Mg²⁺ as well as K⁺ (hypomagnesaemia perpetuates hypokalaemia)'],
    contraindications: ['Anuria (no GFR — no tubular drug delivery)', 'Pre-coma associated with hepatic cirrhosis', 'Severe electrolyte depletion', 'Sulphonamide allergy (rare cross-reactivity)'],
  },

  'Bumetanide': {
    class: 'Loop Diuretic', subclass: 'Sulphonamide — High oral bioavailability',
    overview: '40× more potent than furosemide by weight (1 mg bumetanide ≈ 40 mg furosemide). More reliable oral bioavailability than furosemide (>80% vs variable). Preferred when oral furosemide bioavailability is poor (gut oedema in decompensated HF).',
    indications: ['Heart failure (oedema — especially when oral furosemide is insufficient)', 'Renal oedema', 'Hepatic ascites'],
    dosage: '0.5–2 mg PO OD–BD. IV: 0.5–1 mg (repeat after 4–5 hrs if needed). Max 10 mg/day.',
    mechanism: 'Same as furosemide: NKCC2 inhibition.',
    sideEffects: ['Hypokalaemia', 'Hyponatraemia', 'Dehydration', 'Muscle cramps', 'Ototoxicity (less than furosemide)'],
    nursing: ['Switch from furosemide to bumetanide if inadequate diuresis orally (better bioavailability)', 'Same electrolyte monitoring as furosemide', 'Less ototoxicity than furosemide at equivalent doses'],
    contraindications: ['Anuria', 'Severe electrolyte depletion', 'Sulphonamide allergy'],
  },

  'Torasemide (Torsemide)': {
    class: 'Loop Diuretic', subclass: 'Sulphonamide — Longer acting',
    overview: 'Loop diuretic with longer duration of action than furosemide (12 vs 6 hrs) and superior oral bioavailability (80–90%). Anti-aldosterone properties (additional benefit in HF). TORIC trial suggested superior to furosemide in HF mortality.',
    indications: ['Heart failure (oedema)', 'Hypertension', 'Renal or hepatic oedema'],
    dosage: '5–10 mg OD; titrate to 20–200 mg OD. Hypertension: 2.5–5 mg OD.',
    mechanism: 'NKCC2 inhibition + aldosterone inhibition (partial anti-aldosterone effect at higher doses).',
    sideEffects: ['Hypokalaemia (less than furosemide — anti-aldosterone effect)', 'Hyponatraemia', 'Dehydration', 'Hyperuricaemia'],
    nursing: ['More consistent oral absorption than furosemide — better for patients with gut oedema', 'Longer duration allows OD dosing (compliance advantage)', 'Anti-aldosterone effect may reduce potassium wasting compared to furosemide'],
    contraindications: ['Anuria', 'Severe electrolyte depletion'],
  },


  // ══════════════════════════════════════════════════════════
  // 6. THIAZIDE DIURETICS
  // ══════════════════════════════════════════════════════════

  'Bendroflumethiazide': {
    class: 'Thiazide Diuretic', subclass: 'Benzothiadiazine',
    overview: 'Widely used thiazide in UK. First-line for hypertension in older/Black patients (NICE 2023). Mechanism: NCC inhibitor in distal convoluted tubule — less potent than loop diuretics. At antihypertensive doses, diuretic effect less important than vascular smooth muscle relaxation.',
    indications: ['Hypertension (1st line in Black patients and elderly ≥55 years per NICE)', 'Mild-moderate oedema (heart failure, nephrotic syndrome)', 'Nephrogenic diabetes insipidus (paradoxically reduces urine output)'],
    dosage: 'Hypertension: 2.5 mg OD in the morning. Oedema: 5–10 mg OD. Max 20 mg/day.',
    mechanism: 'Inhibits Na⁺-Cl⁻ cotransporter (NCC) in distal convoluted tubule → moderate natriuresis. Chronic: vasodilator mechanism predominates over diuresis for BP control.',
    sideEffects: ['Hypokalaemia (less than loop diuretics)', 'Hyponatraemia', 'Hyperuricaemia (gout precipitation)', 'Hyperglycaemia (impairs insulin secretion)', 'Hypercholesterolaemia', 'Impotence', 'Hypercalcaemia (Ca²⁺ reabsorption enhanced — useful in hypercalciuria/stones)'],
    nursing: ['Monitor K⁺, Na⁺, creatinine and glucose at 1–3 months after starting', 'GOUT: hyperuricaemia can precipitate gout — check uric acid; use allopurinol if needed', 'DIABETES: may worsen glycaemic control — monitor HbA1c', 'CALCIUM: raises serum calcium — beneficial in renal calculi (hypercalciuria); may unmask hyperparathyroidism', 'Morning dose to avoid nocturnal diuresis', 'LOW DOSE (2.5 mg): mainly antihypertensive effect; higher doses add electrolyte risks without extra BP benefit'],
    contraindications: ['Hypokalaemia (K⁺ <3.5 mmol/L — correct first)', 'Hyponatraemia', 'Sulphonamide allergy', 'Addison disease', 'Hypercalcaemia'],
  },

  'Hydrochlorothiazide (HCTZ)': {
    class: 'Thiazide Diuretic', subclass: 'Benzothiadiazine — Most studied thiazide',
    overview: 'Most widely used thiazide globally (especially North America). Most extensively studied thiazide — foundation of JNC guidelines. Often combined with ACEi or ARBs in fixed-dose combinations.',
    indications: ['Hypertension', 'Oedema', 'Nephrogenic diabetes insipidus', 'Renal calculi (hypercalciuria — Ca reabsorption)'],
    dosage: 'Hypertension: 12.5–25 mg OD. Oedema: 25–100 mg OD–BD.',
    mechanism: 'NCC inhibition in DCT → natriuresis → diuresis and vasodilation (long-term).',
    sideEffects: ['Hypokalaemia', 'Hyponatraemia', 'Hyperuricaemia', 'Hyperglycaemia', 'Photosensitivity (sulphonamide derivative)', 'Impotence', 'Dyslipidaemia'],
    nursing: ['Photosensitivity: advise high SPF sunscreen', 'Same metabolic monitoring as all thiazides', 'Many fixed-dose combination tablets include HCTZ (e.g., co-zidocapt, Atacand Plus, Micardis Plus)'],
    contraindications: ['Anuria', 'Severe renal impairment (eGFR <30 — ineffective)', 'Hypokalaemia', 'Sulphonamide allergy'],
  },

  'Chlorthalidone': {
    class: 'Thiazide-like Diuretic', subclass: 'Sulphonamide — Prolonged action',
    overview: 'Long-acting thiazide-like diuretic (half-life 40–60 hrs vs 8–12 hrs for HCTZ). More potent than HCTZ. ALLHAT trial demonstrated superior cardiovascular benefit (including prevention of heart failure) vs other antihypertensives. Growing evidence it is superior to HCTZ.',
    indications: ['Hypertension (preferred thiazide by many US guidelines)', 'Heart failure prevention', 'Oedema'],
    dosage: 'Hypertension: 12.5–25 mg OD. Oedema: 50–100 mg OD.',
    mechanism: 'NCC inhibition + longer duration of tubular action.',
    sideEffects: ['Hypokalaemia (more than HCTZ — longer duration)', 'Hyponatraemia', 'Hyperuricaemia', 'Hyperglycaemia', 'Erectile dysfunction'],
    nursing: ['Monitor K⁺ closely — longer action means more sustained K⁺ depletion', 'Long half-life: once daily sufficient; missed doses less impactful but cumulative depletion', 'ALLHAT trial: may reduce HF more than other antihypertensives — growing preference over HCTZ'],
    contraindications: ['Anuria', 'Severe renal impairment', 'Hypokalaemia'],
  },

  'Indapamide': {
    class: 'Thiazide-like Diuretic', subclass: 'Indoline sulphonamide — Vascular selective',
    overview: 'Thiazide-like with predominantly vasodilatory (not diuretic) mechanism at antihypertensive doses. Metabolically neutral — less effect on glucose, lipids, and uric acid than standard thiazides. HYVET trial: reduced stroke and cardiovascular mortality in elderly patients ≥80 years. Often preferred in elderly and diabetics.',
    indications: ['Hypertension (particularly elderly and diabetic patients)', 'Heart failure (adjunct)'],
    dosage: '1.5 mg SR OD (preferred) or 2.5 mg OD.',
    mechanism: 'NCC inhibition + direct vasodilation (vascular Ca²⁺ channel blockade component). At standard doses, vasodilation more important than diuresis.',
    sideEffects: ['Hypokalaemia (less than thiazides)', 'Hyponatraemia', 'Hyperuricaemia (mild)', 'Minimal metabolic effects (advantage)', 'Headache'],
    nursing: ['Metabolically neutral: preferred in diabetics and those with gout or dyslipidaemia', 'HYVET trial: evidence in very elderly (>80 years) — unusual in trial data', 'SR tablet: swallow whole', 'Monitor electrolytes, creatinine, and glucose'],
    contraindications: ['Anuria', 'Severe renal impairment', 'Hypokalaemia/hyponatraemia', 'Sulphonamide allergy'],
  },


  // ══════════════════════════════════════════════════════════
  // 7. POTASSIUM-SPARING DIURETICS
  // ══════════════════════════════════════════════════════════

  'Spironolactone': {
    class: 'Potassium-Sparing Diuretic / Mineralocorticoid Receptor Antagonist', subclass: 'Steroidal MRA',
    overview: 'Aldosterone antagonist with potassium-sparing, cardioprotective, and anti-fibrotic properties. RALES trial: 30% mortality reduction in severe HFrEF (EF <35%). Also used for primary hyperaldosteronism, hepatic ascites, PCOS, and acne. Causes gynaecomastia due to anti-androgenic activity (switch to eplerenone).',
    indications: ['Heart failure (HFrEF EF <35% — RALES trial — mortality benefit)', 'Primary hyperaldosteronism (Conn syndrome)', 'Hepatic cirrhosis with ascites', 'Nephrotic syndrome', 'Hypertension (resistant — 4th-line)', 'PCOS (anti-androgenic effects)', 'Female pattern acne and hirsutism'],
    dosage: 'HF: 25 mg OD (RALES dose); max 50 mg OD. Ascites: 100–400 mg/day. Hypertension: 25–100 mg/day. PCOS: 50–200 mg/day.',
    mechanism: 'Competitive aldosterone receptor antagonism in collecting duct → ↑ Na⁺ excretion, ↓ K⁺ excretion, ↓ H⁺ excretion. Anti-androgenic (binds androgen receptors → PCOS/acne benefit and gynaecomastia).',
    sideEffects: ['Hyperkalaemia (life-threatening — especially with ACEi/ARBs and in renal failure)', 'Gynaecomastia and breast tenderness in men (anti-androgen — switch to eplerenone)', 'Menstrual irregularities in women', 'GI upset', 'Renal impairment', 'Metabolic acidosis'],
    nursing: ['HYPERKALAEMIA: most dangerous side effect — NEVER combine with K⁺ supplements or salt substitutes without monitoring; monitor K⁺ at 1 week, 4 weeks, 3 months, then every 6 months; STOP if K⁺ >5.5 mmol/L', 'GYNAECOMASTIA: common in men on long-term therapy — warn at initiation; offer switch to eplerenone (more selective MRA)', 'RENAL IMPAIRMENT: avoid if eGFR <30 (hyperkalaemia risk); monitor creatinine closely', 'START LOW in HF: 25 mg — RALES dose; do not escalate beyond 50 mg without specialist review', 'Check K⁺ BEFORE EACH DOSE CHANGE and with any intercurrent illness'],
    contraindications: ['Hyperkalaemia (K⁺ >5.5 mmol/L)', 'Severe renal impairment (eGFR <30)', "Addison's disease", 'Pregnancy (anti-androgenic effects on fetal male genitalia)', 'Concurrent K⁺ supplements with ACEi/ARB — caution'],
  },

  'Eplerenone': {
    class: 'Potassium-Sparing Diuretic / Mineralocorticoid Receptor Antagonist', subclass: 'Selective steroidal MRA',
    overview: 'More selective MRA than spironolactone — no anti-androgenic or progestogenic activity → no gynaecomastia or menstrual disturbance. EPHESUS trial: mortality reduction post-MI with LV dysfunction. Preferred when spironolactone causes gynaecomastia.',
    indications: ['Heart failure post-MI with LV dysfunction (EPHESUS trial)', 'HFrEF (stable — EMPHASIS-HF trial)', 'Hypertension'],
    dosage: 'Post-MI HF: 25 mg OD initially; increase to 50 mg OD after 4 weeks if K⁺ allows. HFrEF: 25–50 mg OD.',
    mechanism: 'Selective aldosterone receptor antagonism. Unlike spironolactone: does NOT bind androgen or progesterone receptors → fewer hormonal side effects.',
    sideEffects: ['Hyperkalaemia (same risk as spironolactone)', 'Dizziness', 'Renal impairment', 'GI upset', 'No gynaecomastia (advantage over spironolactone)'],
    nursing: ['Same K⁺ monitoring as spironolactone — hyperkalaemia risk is equivalent', 'PREFERRED IN MEN: no gynaecomastia', 'More expensive than spironolactone', 'Monitor renal function and electrolytes at start and regularly'],
    contraindications: ['Hyperkalaemia (K⁺ >5.0 mmol/L at initiation per SmPC)', 'Severe renal impairment', 'Concurrent potassium-sparing diuretics or K⁺ supplements (caution)'],
  },

  'Amiloride': {
    class: 'Potassium-Sparing Diuretic', subclass: 'Sodium channel blocker (ENaC)',
    overview: 'Potassium-sparing diuretic acting directly on epithelial Na⁺ channels (ENaC) in collecting duct — does not act via aldosterone. Often combined with thiazide (Moduretic) to offset hypokalaemia. Useful when aldosterone is not elevated.',
    indications: ['Oedema (combined with thiazide — Moduretic)', 'Prevention of thiazide/loop diuretic-induced hypokalaemia', 'Hypertension (adjunct)', 'Lithium-induced nephrogenic diabetes insipidus'],
    dosage: '5–10 mg OD (alone); 5 mg OD in combination (Moduretic: amiloride 5 mg + HCTZ 50 mg).',
    mechanism: 'Blocks ENaC in collecting duct principal cells → ↓ Na⁺ reabsorption → K⁺ retention (K⁺ secretion depends on Na⁺ entry to create electrochemical gradient).',
    sideEffects: ['Hyperkalaemia (monitor K⁺)', 'GI upset', 'Rash', 'Headache', 'Dizziness'],
    nursing: ['Monitor K⁺ — hyperkalaemia risk (less than spironolactone but still significant)', 'Moduretic: balanced K⁺ effect — thiazide loses K⁺, amiloride retains it', 'Avoid with other K⁺-retaining agents', 'Useful in lithium-induced NDI (blocks Li⁺ entry via ENaC in collecting duct)'],
    contraindications: ['Hyperkalaemia', 'Severe renal impairment', 'Addison disease', 'Diabetic nephropathy (with other K⁺-sparing agents)'],
  },

  'Triamterene': {
    class: 'Potassium-Sparing Diuretic', subclass: 'ENaC blocker — Pteridine derivative',
    overview: 'Potassium-sparing diuretic (ENaC blockade) usually combined with HCTZ. Can precipitate renal calculi (triamterene stones — distinct from uric acid or calcium oxalate).',
    indications: ['Oedema (combined with thiazide)', 'Hypokalaemia prevention with thiazide or loop diuretics'],
    dosage: '50–100 mg BD (alone) or in combination.',
    mechanism: 'ENaC blockade in collecting duct → K⁺ retention.',
    sideEffects: ['Hyperkalaemia', 'Renal calculi (triamterene crystals)', 'Nausea', 'Megaloblastic anaemia (folate antagonism)', 'Renal impairment'],
    nursing: ['Monitor K⁺ and renal function', 'Renal stone history: avoid triamterene (favours triamterene stones)', 'Folate monitoring in long-term use'],
    contraindications: ['Hyperkalaemia', 'Renal calculi (triamterene)', 'Severe renal impairment', 'Folate deficiency'],
  },


  // ══════════════════════════════════════════════════════════
  // 8. NITRATES
  // ══════════════════════════════════════════════════════════

  'Glyceryl Trinitrate (GTN / Nitroglycerin)': {
    class: 'Nitrate', subclass: 'Organic nitrate — Short-acting',
    overview: 'Short-acting nitrate for acute angina. Venodilator at low doses → ↓ preload; arterial dilator at higher doses → ↓ afterload. Onset SL: 1–2 min. Also given IV for acute LVF and hypertensive emergency. Tolerance develops with continuous use (nitrate-free period required).',
    indications: ['Acute angina (sublingual — first-line immediate relief)', 'Prophylaxis of angina (transdermal patch, SL before exercise)', 'Acute left ventricular failure / pulmonary oedema (IV)', 'Hypertensive emergency (IV)', 'Oesophageal spasm'],
    dosage: 'SL spray or tablet: 400 mcg (1 spray/1 tablet); repeat every 5 min; max 3 doses in 15 min — then call emergency if not relieved. Transdermal patch: 5–15 mg/24 hrs. IV: 10–200 mcg/min infusion.',
    mechanism: 'Nitrate → nitric oxide (NO) → activates soluble guanylate cyclase → ↑ cGMP → smooth muscle relaxation → venodilation (low dose) + arterial dilation (high dose) → ↓ preload and afterload.',
    sideEffects: ['Headache (most common — NO-mediated cerebral vasodilation; usually resolves after 1–2 weeks)', 'Hypotension (postural — sit/lie down)', 'Reflex tachycardia', 'Flushing', 'Tolerance with continuous use (within 24 hrs of uninterrupted exposure)', 'Methaemoglobinaemia (very high IV doses — rare)'],
    nursing: ['SL: patient must SIT OR LIE DOWN before taking (severe hypotension risk if standing)', 'ANGINA PROTOCOL: if no relief after 3 doses × 5 min apart → call emergency services (MI until proven otherwise)', 'PATCH: remove for 8–12 hrs at night (nitrate-free period) to prevent tolerance — usually worn 12–16 hrs/day; write on patch the time applied', 'IV: use non-PVC giving sets (GTN adsorbs onto PVC tubing — reduces dose delivered)', 'PDE5 INHIBITORS (sildenafil, tadalafil, vardenafil): ABSOLUTE CONTRAINDICATION — severe potentially fatal hypotension', 'Headache usually improves with continued use — paracetamol can help'],
    contraindications: ['Concurrent PDE5 inhibitors (sildenafil, tadalafil, vardenafil — absolute: severe hypotension)', 'Severe hypotension (systolic <90 mmHg)', 'Hypovolaemia/dehydration', 'Hypertrophic obstructive cardiomyopathy (HOCM)', 'Raised intracranial pressure', 'Severe aortic stenosis'],
  },

  'Isosorbide Mononitrate (ISMN)': {
    class: 'Nitrate', subclass: 'Organic nitrate — Long-acting',
    overview: 'Long-acting nitrate for angina prophylaxis. Active metabolite (no hepatic first-pass). Twice daily (asymmetric dosing — e.g., 8 am and 2 pm) or once daily modified-release preserves nitrate-free period. More predictable pharmacokinetics than ISDN.',
    indications: ['Chronic stable angina prophylaxis', 'Angina in heart failure', 'Oesophageal spasm'],
    dosage: 'IR: 20 mg BD (asymmetric: 8 am and 2 pm — not equally spaced, to allow nitrate-free period). MR: 25–120 mg OD.',
    mechanism: 'Directly converted to NO without hepatic first-pass → sustained venous and arterial dilation.',
    sideEffects: ['Headache (class — very common initially)', 'Hypotension', 'Flushing', 'Tolerance (less with asymmetric dosing)', 'Dizziness'],
    nursing: ['ASYMMETRIC DOSING for IR: must NOT be taken twice in equal 12-hourly intervals (e.g., 8 am AND 8 pm) — second dose must be by 2 pm to allow overnight nitrate-free period and prevent tolerance', 'MR: once daily in morning; patient must understand NOT to take a second dose', 'Headache: common first 1–2 weeks; resolve with continued use; paracetamol helps', 'AVOID PDE5 inhibitors (same as GTN)'],
    contraindications: ['Concurrent PDE5 inhibitors', 'Severe hypotension', 'HOCM', 'Severe aortic stenosis'],
  },

  'Isosorbide Dinitrate (ISDN)': {
    class: 'Nitrate', subclass: 'Organic nitrate — Medium-acting',
    overview: 'Active nitrate requiring hepatic metabolism to active mononitrate. Higher first-pass metabolism → variable bioavailability. Shorter half-life than ISMN. Available SL (faster than GTN tablet), oral, and IV (for heart failure). Often used in acute HF IV as alternative to GTN.',
    indications: ['Acute angina (SL)', 'Angina prophylaxis (oral)', 'Acute heart failure (IV)', 'Oesophageal spasm'],
    dosage: 'SL: 5 mg. Oral: 5–20 mg TDS (nitrate-free period needed). IV: 2–10 mg/hr infusion.',
    mechanism: 'Metabolised to isosorbide mononitrate → NO production → vasodilation.',
    sideEffects: ['Headache', 'Hypotension', 'Flushing', 'Tolerance (TDS dosing requires nitrate-free period)'],
    nursing: ['Oral TDS: take with nitrate-free period (no dose at night) to avoid tolerance', 'IV: non-PVC infusion sets preferable', 'SL faster onset than GTN tablet (but GTN spray/SL tablet still preferred for acute use)'],
    contraindications: ['PDE5 inhibitors (absolute)', 'Severe hypotension', 'HOCM'],
  },


  // ══════════════════════════════════════════════════════════
  // 9. STATINS
  // ══════════════════════════════════════════════════════════

  'Atorvastatin': {
    class: 'Statin (HMG-CoA Reductase Inhibitor)', subclass: 'Synthetic statin — High intensity',
    overview: 'Most potent and most widely prescribed statin. High-intensity statin (40–80 mg reduces LDL by ≥50%). Cornerstone of primary and secondary cardiovascular prevention. Benefits extend beyond LDL reduction (pleiotropic effects — anti-inflammatory, plaque stabilisation).',
    indications: ['Primary hypercholesterolaemia', 'Mixed dyslipidaemia', 'Secondary cardiovascular prevention (post-MI, stroke, peripheral arterial disease)', 'Primary cardiovascular prevention (high 10-year risk)', 'Familial hypercholesterolaemia', 'Acute coronary syndrome (high-intensity immediately — PROVE-IT trial)'],
    dosage: '10–80 mg PO OD at any time (stable plasma levels — no need to take at night). High-intensity (post-MI): 40–80 mg OD.',
    mechanism: 'Competitive HMG-CoA reductase inhibition → ↓ hepatic cholesterol synthesis → ↑ LDL receptor expression → ↑ LDL clearance from blood.',
    sideEffects: ['Myopathy and myalgia (muscle aches — most common; 5–10%)', 'Rhabdomyolysis (rare but life-threatening — muscle breakdown, myoglobinuria, AKI)', 'Elevated liver transaminases (usually mild and transient)', 'New-onset type 2 diabetes (slight risk, particularly in pre-diabetic patients)', 'Headache', 'GI upset'],
    nursing: ['MYOPATHY: ask about muscle pain, weakness, or dark urine (myoglobinuria) at every visit — if present, check CK; STOP if CK >10× ULN or rhabdomyolysis suspected', 'GRAPEFRUIT JUICE: inhibits CYP3A4 → increases atorvastatin levels → myopathy risk; advise avoidance of large quantities', 'LFTs: baseline; recheck only if symptoms of hepatotoxicity (jaundice, abdominal pain, dark urine)', 'ACS: start high-intensity atorvastatin 40–80 mg within 1–4 days of acute event (plaque stabilisation)', 'Adherence: explain that benefits require long-term continuous use; stopping increases cardiovascular risk', 'INTERACTIONS: fibrates (myopathy), ciclosporin, macrolides (↑ statin levels)'],
    contraindications: ['Active liver disease or unexplained persistent elevated transaminases', 'Pregnancy and breastfeeding', 'Concurrent ciclosporin', 'Myopathy'],
  },

  'Rosuvastatin': {
    class: 'Statin (HMG-CoA Reductase Inhibitor)', subclass: 'Synthetic statin — High intensity',
    overview: 'Most potent statin — high-intensity even at lower doses. Hydrophilic — less muscle penetration than lipophilic statins (atorvastatin, simvastatin). JUPITER trial: reduced cardiovascular events in normal LDL patients with elevated CRP. Also reduces triglycerides more than other statins.',
    indications: ['Hypercholesterolaemia', 'Mixed dyslipidaemia', 'Secondary cardiovascular prevention', 'Prevention in elevated CRP (JUPITER trial)', 'Familial hypercholesterolaemia (high dose)'],
    dosage: '5–40 mg PO OD. Asian patients: start at 5 mg (reduced clearance). Max 20 mg in Asian patients and those on ciclosporin.',
    mechanism: 'HMG-CoA reductase inhibition. Hydrophilic → preferential hepatic uptake; less muscle penetration than lipophilic statins.',
    sideEffects: ['Myopathy (lower risk than simvastatin at high doses)', 'Proteinuria (at 80 mg dose — avoided)', 'Haematuria', 'Elevated LFTs', 'Diabetes (slight increase)'],
    nursing: ['DOSE LIMITS: 20 mg max in Asian patients, patients on fibrates, or certain drug interactions (protease inhibitors)', 'Hydrophilic: lower muscle side effect risk — preferred if myalgia history with other statins', 'Can be taken at any time of day (unlike simvastatin)', 'Proteinuria monitoring if high-dose use'],
    contraindications: ['Active liver disease', 'Pregnancy and breastfeeding', 'Myopathy', 'Severe renal impairment (>40 mg dose)'],
  },

  'Simvastatin': {
    class: 'Statin (HMG-CoA Reductase Inhibitor)', subclass: 'Semi-synthetic statin — Moderate intensity',
    overview: 'First widely used statin. Moderate-intensity (40 mg reduces LDL ~40%). 80 mg dose restricted — unacceptably high myopathy risk (particularly with verapamil, amiodarone, diltiazem, amlodipine, and niacin). 4S trial established statin role in secondary prevention.',
    indications: ['Hypercholesterolaemia', 'Cardiovascular prevention', 'Familial hypercholesterolaemia'],
    dosage: '20–40 mg PO OD at NIGHT (hepatic cholesterol synthesis peaks nightly). 80 mg: ONLY if patient has been on 80 mg for ≥12 months without evidence of myopathy.',
    mechanism: 'Prodrug → active β-hydroxy acid. HMG-CoA reductase inhibition. Lipophilic → significant muscle penetration.',
    sideEffects: ['Myopathy (significantly higher risk at 80 mg — multiple drug interactions increase this)', 'Rhabdomyolysis (80 mg dose, especially with CYP3A4 inhibitors)', 'Elevated LFTs', 'GI upset'],
    nursing: ['TAKE AT NIGHT: hepatic cholesterol synthesis is greatest overnight — gives maximal effect', '80 mg DOSE: only continue if patient already on 80 mg for 12+ months without muscle issues; do NOT initiate new patients on 80 mg', 'DRUG INTERACTIONS: simvastatin is CYP3A4 substrate — grapefruit, amiodarone, verapamil, diltiazem, amlodipine, macrolides, azoles all increase simvastatin levels → MYOPATHY; check interactions before adding any new drug', 'AVOID grapefruit juice'],
    contraindications: ['Active liver disease', 'Pregnancy', 'Concurrent strong CYP3A4 inhibitors (itraconazole, clarithromycin, HIV protease inhibitors)'],
  },

  'Pravastatin': {
    class: 'Statin (HMG-CoA Reductase Inhibitor)', subclass: 'Moderate-intensity — Hydrophilic, non-CYP metabolised',
    overview: 'Hydrophilic statin not metabolised by CYP3A4 — fewer drug interactions. Renally excreted. Safe in transplant patients (less interaction with ciclosporin). Lowest myopathy risk of all statins. Preferred in patients on multiple interacting drugs or with muscle intolerance.',
    indications: ['Hypercholesterolaemia', 'Prevention in transplant patients', 'Patients with multiple drug interactions or previous statin myopathy'],
    dosage: '10–40 mg PO OD (can be taken any time — hydrophilic).',
    mechanism: 'HMG-CoA reductase inhibition. Not CYP3A4 or CYP2C9 metabolised — transported by OAT1/3 into liver.',
    sideEffects: ['Myopathy (lowest risk of class)', 'GI upset', 'Hepatotoxicity (rare)', 'Rash'],
    nursing: ['LOWEST MYOPATHY RISK: ideal for patients who cannot tolerate other statins', 'TRANSPLANT PATIENTS: safest statin with ciclosporin (no CYP3A4 interaction)', 'Moderate intensity — higher doses available but switch to atorvastatin if inadequate LDL reduction', 'Renal dose adjustment if eGFR <30'],
    contraindications: ['Active liver disease', 'Pregnancy', 'Severe renal impairment (dose adjustment)'],
  },

  'Fluvastatin': {
    class: 'Statin (HMG-CoA Reductase Inhibitor)', subclass: 'Low-to-moderate intensity — CYP2C9 metabolised',
    overview: 'Low-intensity statin (20–80 mg reduces LDL ~25–35%). CYP2C9 metabolised — interacts with warfarin and phenytoin. Less potent than atorvastatin/rosuvastatin. Rarely first choice; used when other statins not tolerated.',
    indications: ['Mild-moderate hypercholesterolaemia'],
    dosage: '20–80 mg PO OD at bedtime. XL: 80 mg OD.',
    mechanism: 'HMG-CoA reductase inhibition. CYP2C9 metabolism — lower myopathy risk than CYP3A4-metabolised statins.',
    sideEffects: ['Myopathy (low risk)', 'GI upset', 'Insomnia', 'Headache'],
    nursing: ['CYP2C9 metabolised — interact with warfarin (monitor INR if starting fluvastatin)', 'Less potent — may not achieve LDL targets; consider upgrading to atorvastatin', 'Take at bedtime (low potency benefits from nightly dosing)'],
    contraindications: ['Active liver disease', 'Pregnancy'],
  },


  // ══════════════════════════════════════════════════════════
  // 10. OTHER LIPID-LOWERING AGENTS
  // ══════════════════════════════════════════════════════════

  'Ezetimibe': {
    class: 'Cholesterol Absorption Inhibitor', subclass: 'NPC1L1 inhibitor',
    overview: 'Inhibits intestinal cholesterol absorption. Modest LDL reduction alone (15–20%) but synergistic with statins (IMPROVE-IT trial: added cardiovascular benefit on top of statin therapy). Used when statins inadequate or statin-intolerant.',
    indications: ['Hypercholesterolaemia (add-on to statin or alone if statin-intolerant)', 'Familial hypercholesterolaemia (add-on)', 'IMPROVE-IT: post-ACS LDL reduction'],
    dosage: '10 mg PO OD (any time, with or without food).',
    mechanism: 'Inhibits NPC1L1 (Niemann-Pick C1-Like 1) transporter in intestinal brush border → ↓ cholesterol and plant sterol absorption from gut.',
    sideEffects: ['Generally well tolerated', 'GI upset (mild)', 'Hepatitis (rare)', 'Myopathy (when combined with statin)', 'Arthralgia'],
    nursing: ['Well tolerated — fewer side effects than statins', 'Additive LDL reduction with statin (~additional 15–20%)', 'IMPROVE-IT trial: modest but significant additional CV benefit on top of simvastatin in ACS', 'Combined pill (Vytorin/Inegy = simvastatin + ezetimibe) available for adherence'],
    contraindications: ['Active liver disease (when combined with statin)', 'Moderate-severe hepatic impairment'],
  },

  'Evolocumab': {
    class: 'PCSK9 Inhibitor', subclass: 'Monoclonal antibody — LDL reduction',
    overview: 'Monoclonal antibody against PCSK9 protein — most potent LDL-lowering agent available (reduces LDL by 50–70% on top of maximally tolerated statin). FOURIER trial: significant reduction in cardiovascular events. Subcutaneous injection every 2 or 4 weeks. Extremely expensive — restricted to high-risk patients.',
    indications: ['Familial hypercholesterolaemia (heterozygous and homozygous)', 'Established cardiovascular disease with inadequate LDL control despite maximal statin + ezetimibe', 'Statin intolerance with high cardiovascular risk'],
    dosage: '140 mg SC every 2 weeks or 420 mg SC monthly (autoinjector).',
    mechanism: 'Binds and inhibits PCSK9 → prevents PCSK9-mediated LDL receptor degradation → ↑ LDL receptors on hepatocytes → ↑ LDL clearance from blood.',
    sideEffects: ['Injection site reactions', 'Nasopharyngitis', 'Back pain', 'Flu-like symptoms', 'Neurocognitive effects (mild — very rare)', 'Generally excellent tolerability'],
    nursing: ['SC injection: abdomen, thigh, or upper arm; rotate sites', 'Store in refrigerator (2–8°C) — warm to room temperature 30 min before injection', 'COST: extremely expensive (£4,000–£5,000/year); requires specialist prescribing and criteria (high CV risk, LDL >2.6 mmol/L despite maximally tolerated statin + ezetimibe)', 'LDL monitoring: check at 4–8 weeks after starting to confirm response', 'Efficacy independent of time of administration'],
    contraindications: ['Hypersensitivity to evolocumab', 'Pregnancy (limited data)'],
  },

  'Alirocumab': {
    class: 'PCSK9 Inhibitor', subclass: 'Monoclonal antibody',
    overview: 'PCSK9 inhibitor similar to evolocumab. ODYSSEY OUTCOMES trial: reduced cardiovascular events post-ACS. Available in multiple doses (75 mg and 150 mg every 2 weeks or 300 mg monthly).',
    indications: ['Familial hypercholesterolaemia', 'High cardiovascular risk with inadequate LDL control', 'Post-ACS LDL reduction (ODYSSEY)'],
    dosage: '75 mg SC every 2 weeks (increase to 150 mg if insufficient); or 300 mg monthly.',
    mechanism: 'PCSK9 inhibition → ↑ LDL receptor recycling → ↑ LDL clearance.',
    sideEffects: ['Injection site reactions', 'Flu-like symptoms', 'Pruritus', 'Myalgia (rare)'],
    nursing: ['Same storage and administration as evolocumab (refrigeration, rotate sites)', 'ODYSSEY: shown to be most beneficial in patients with highest cardiovascular risk (LDL >3.5 mmol/L, history of multiple MI)'],
    contraindications: ['Hypersensitivity to alirocumab'],
  },

  'Fenofibrate': {
    class: 'Fibrate', subclass: 'PPARα agonist',
    overview: 'Fibrate primarily reduces triglycerides (50%) and raises HDL (15–20%). Modest LDL reduction. Used in hypertriglyceridaemia and mixed dyslipidaemia. Myopathy risk increases when combined with statin.',
    indications: ['Severe hypertriglyceridaemia', 'Mixed dyslipidaemia (especially if TG >5 mmol/L — pancreatitis prevention)', 'Combined with statin for mixed dyslipidaemia'],
    dosage: '67–200 mg OD (micronised formulation). Take with food (improved absorption).',
    mechanism: 'PPARα agonism → ↑ lipoprotein lipase (↑ TG catabolism) + ↑ apolipoprotein A-I (↑ HDL) + ↑ LDL receptor (modest LDL reduction).',
    sideEffects: ['Myopathy (↑ risk with statin combination)', 'GI upset', 'Elevated creatinine (tubular secretion inhibition — not true renal impairment)', 'Cholesterol gallstones', 'Hepatotoxicity'],
    nursing: ['STATIN COMBINATION: myopathy risk — monitor CK if muscle symptoms develop; if combining, start both at lower doses', 'Fenofibrate raises creatinine without causing true renal impairment (tubular secretion inhibition) — do not stop for creatinine rise alone; monitor closely', 'TG >10 mmol/L: pancreatitis risk — urgent treatment with fibrate needed', 'Take with largest meal of the day (absorption)'],
    contraindications: ['Severe renal impairment', 'Active liver disease', 'Gallbladder disease', 'Concurrent gemfibrozil (myopathy risk)', 'Pregnancy and breastfeeding'],
  },

  'Icosapent Ethyl (Vascepa)': {
    class: 'Omega-3 Fatty Acid (Purified EPA)', subclass: 'Triglyceride-lowering / Cardiovascular',
    overview: 'Highly purified EPA (eicosapentaenoic acid — no DHA). REDUCE-IT trial: dramatic 25% relative risk reduction in cardiovascular events on top of statin therapy in hypertriglyceridaemia — transformative evidence. Approved for secondary CV prevention with elevated TG on statin.',
    indications: ['Hypertriglyceridaemia (TG ≥1.7 mmol/L) on maximally tolerated statin — for CV event reduction (REDUCE-IT)'],
    dosage: '2 g BD (4 g/day total) with food.',
    mechanism: 'Purified EPA → ↓ TG synthesis + anti-inflammatory effects on vascular endothelium + plaque stabilisation (mechanism of CV benefit debated).',
    sideEffects: ['Peripheral oedema', 'Atrial fibrillation (slight increase — REDUCE-IT)', 'Bleeding (fish oil antiplatelet effect)', 'GI upset', 'Arthralgia'],
    nursing: ['Take with food — fatty meal maximises absorption', 'AF RISK: REDUCE-IT showed modest increase in AF — ECG monitoring if at risk', 'REDUCE-IT: unprecedented cardiovascular benefit (25% MACE reduction) — recommend strongly in eligible patients (TG >1.7 mmol/L on statin with established CV disease or diabetes)'],
    contraindications: ['Fish/shellfish allergy', 'Active bleeding (antiplatelet effect)'],
  },


  // ══════════════════════════════════════════════════════════
  // 11. ANTIPLATELET DRUGS
  // ══════════════════════════════════════════════════════════

  'Aspirin': {
    class: 'Antiplatelet / NSAID', subclass: 'Salicylate — Irreversible COX inhibitor',
    overview: 'Irreversible COX-1 inhibitor → permanent inhibition of thromboxane A2 synthesis in platelets (platelets cannot regenerate COX — anucleate). Antiplatelet effect lasts 7–10 days (platelet lifespan). Cornerstone of secondary cardiovascular prevention. No longer recommended for primary prevention (bleeding risk outweighs benefit).',
    indications: ['Antiplatelet — secondary prevention (post-MI, stroke/TIA, ACS, PCI, peripheral arterial disease)', 'Acute MI (300 mg stat immediately)', 'ACS loading dose (300 mg — with P2Y12 inhibitor)', 'Anti-inflammatory/antipyretic (300–600 mg — largely superseded by ibuprofen for this)'],
    dosage: 'Antiplatelet: 75 mg OD (low-dose). Acute MI/ACS: 300 mg stat (chew — faster absorption). Analgesia/antipyretic: 300–600 mg every 4–6 hrs (max 4 g/day).',
    mechanism: 'Irreversible acetylation of COX-1 serine residue → permanent blockade of TXA2 synthesis → ↓ platelet aggregation for the platelet lifespan (7–10 days).',
    sideEffects: ['GI irritation, ulceration, bleeding (COX-1 inhibits gastroprotective prostaglandins)', 'Bleeding (especially GI and intracranial — main risk)', 'Bronchospasm (aspirin-exacerbated respiratory disease — COX-1 diversion to lipoxygenase → ↑ leukotrienes)', 'Tinnitus and hearing loss (toxicity/overdose)', 'Reye syndrome (children — aspirin + viral illness)', 'Salicylism (overdose: tinnitus, nausea, hyperventilation)'],
    nursing: ['TAKE WITH FOOD or milk — reduces GI irritation', 'PPI CO-PRESCRIPTION: add PPI (omeprazole) in patients with GI risk factors on long-term aspirin', 'NEVER IN CHILDREN <16 YEARS: Reye syndrome risk (encephalopathy + liver failure)', 'PRE-SURGERY: antiplatelet effect irreversible — stop 7–10 days before elective surgery (discuss with surgical team — for cardiovascular patients, risk-benefit must be carefully weighed)', 'ASPIRIN-SENSITIVE ASTHMA: affects 10% of asthmatics — avoid; check history before prescribing', 'CHEW 300 mg STAT in ACS: chewing achieves therapeutic platelet inhibition in 30 min vs 60 min with swallowing'],
    contraindications: ['Children and teenagers <16 years (Reye syndrome)', 'Active peptic ulcer or GI bleeding', 'Haemophilia and clotting disorders', 'Aspirin-exacerbated respiratory disease (aspirin-sensitive asthma)', 'Severe renal, hepatic, or cardiac failure', 'Pregnancy (3rd trimester — premature closure of ductus arteriosus)', 'Primary prevention (no established CVD) — bleeding risk outweighs benefit'],
  },

  'Clopidogrel': {
    class: 'Antiplatelet', subclass: 'P2Y12 receptor antagonist (thienopyridine prodrug)',
    overview: 'Prodrug converted to active metabolite by CYP2C19. Irreversible P2Y12 ADP receptor blockade → inhibits platelet aggregation. Cornerstone of dual antiplatelet therapy (DAPT) with aspirin post-ACS and post-PCI. CYP2C19 poor metabolisers (20% of Caucasians) have reduced efficacy (consider prasugrel/ticagrelor).',
    indications: ['ACS with/without PCI (DAPT with aspirin)', 'Elective PCI — stent placement (DAPT)', 'Stroke/TIA (with aspirin for 21 days, then alone)', 'Peripheral arterial disease', 'AF (alternative to warfarin in some patients — with aspirin)'],
    dosage: 'ACS/PCI loading: 300 mg (600 mg in PCI for faster onset); maintenance: 75 mg OD. Stroke: 75 mg OD (after 21-day DAPT with aspirin).',
    mechanism: 'Prodrug → CYP2C19 activation → active thiol metabolite → irreversible binding to P2Y12 ADP receptor → blocks ADP-mediated platelet activation for platelet lifespan.',
    sideEffects: ['Bleeding (GI, intracranial — class effect)', 'Bruising', 'GI upset', 'Rash and pruritus', 'TTP (thrombotic thrombocytopaenic purpura — rare but serious)', 'Reduced efficacy in CYP2C19 poor metabolisers'],
    nursing: ['CYP2C19 POOR METABOLISERS: reduced conversion to active drug → subtherapeutic antiplatelet effect — genetic testing or consider alternative (prasugrel, ticagrelor) in high-risk patients', 'OMEPRAZOLE INTERACTION: inhibits CYP2C19 → reduces clopidogrel efficacy (controversial — use pantoprazole instead if PPI needed)', 'STOP BEFORE SURGERY: 5 days washout (CABG: 5–7 days; elective surgery: discuss risk-benefit)', 'DAPT: explain both drugs must continue for prescribed duration (typically 12 months post-ACS/stent) — stopping one doubles clotting risk (stent thrombosis)', 'TTP: if fever, petechiae, confusion, renal failure — stop immediately and refer emergency'],
    contraindications: ['Active bleeding', 'Intracranial haemorrhage', 'Severe hepatic impairment', 'Hypersensitivity'],
  },

  'Ticagrelor': {
    class: 'Antiplatelet', subclass: 'P2Y12 receptor antagonist (reversible — cyclopentyltriazolopyrimidine)',
    overview: 'Reversible, direct-acting P2Y12 antagonist — NOT a prodrug (unlike clopidogrel). Faster onset and more consistent platelet inhibition than clopidogrel (not CYP2C19 dependent). PLATO trial: superior to clopidogrel in ACS (↓ cardiovascular events including stent thrombosis). Unique side effect: dyspnoea (adenosine reuptake inhibition). BD dosing (reversible mechanism requires more frequent dosing).',
    indications: ['ACS (NSTEMI, STEMI, UA) — preferred over clopidogrel (PLATO trial)', 'Post-ACS maintenance DAPT (with aspirin)', 'History of MI (>1 year — extended DAPT: PEGASUS trial)'],
    dosage: 'ACS: 180 mg loading, then 90 mg BD (maintain for 12 months with aspirin 75–100 mg OD). Extended secondary prevention (PEGASUS): 60 mg BD.',
    mechanism: 'Direct, reversible P2Y12 receptor blockade — no hepatic activation required. Also inhibits adenosine reuptake → vasodilatory effects (explains dyspnoea and bradycardia).',
    sideEffects: ['Dyspnoea (most distinctive — adenosine-mediated; occurs in 15%; usually mild and transient; not bronchospasm; resolves on stopping)', 'Bleeding (more than clopidogrel — PLATO trial)', 'Bradycardia (pause-related — first few days; usually asymptomatic)', 'Increased serum creatinine (mild)', 'Hypotension', 'Gout (uric acid elevation)', 'Headache'],
    nursing: ['DYSPNOEA: warn patients at initiation — common (15%); typically mild; not due to lung pathology; usually improves over time; if severe or new symptoms → assess for other causes', 'ASPIRIN DOSE: must use LOW-DOSE aspirin (≤100 mg) — high-dose aspirin (>100 mg) reduces ticagrelor efficacy (pharmacokinetic interaction)', 'STOP BEFORE SURGERY: 5 days washout (CABG: 5 days)', 'BD DOSING: critical — reversible mechanism means 12-hourly timing is important; missed doses reduce platelet inhibition', 'PROTON PUMP PUMP INHIBITOR: no meaningful CYP2C19 interaction (unlike clopidogrel) — safe to use with PPIs'],
    contraindications: ['Active bleeding', 'Intracranial haemorrhage', 'Severe hepatic impairment', 'Concurrent strong CYP3A4 inhibitors (ketoconazole, clarithromycin — increase ticagrelor levels)', 'High-dose aspirin (>100 mg) reduces efficacy'],
  },

  'Prasugrel': {
    class: 'Antiplatelet', subclass: 'P2Y12 receptor antagonist (thienopyridine prodrug)',
    overview: 'Thienopyridine prodrug like clopidogrel but more rapidly activated and more potent. TRITON-TIMI 38: superior to clopidogrel in ACS undergoing PCI. Greater bleeding risk (net harm in patients >75 years, <60 kg, or with prior stroke/TIA). Not for non-PCI ACS or medical management.',
    indications: ['ACS with planned PCI (TRITON-TIMI 38 — post-PCI patients only)', 'Stent thrombosis prevention post-PCI'],
    dosage: 'Loading: 60 mg stat before/during PCI; maintenance: 10 mg OD (5 mg OD if <60 kg or >75 years).',
    mechanism: 'Prodrug → CYP3A4 and CYP2B6 activation → irreversible P2Y12 blockade. More rapid and complete activation than clopidogrel.',
    sideEffects: ['Bleeding (significantly more than clopidogrel — especially in elderly, low body weight, prior stroke/TIA)', 'Dyslipidaemia', 'Hypotension', 'Rash'],
    nursing: ['BLEEDING RISK: significantly higher than clopidogrel; AVOID in >75 years, <60 kg, prior stroke or TIA (net harm demonstrated)', 'NOT for medical ACS management — only for PCI patients', 'FASTER ONSET than clopidogrel — advantages in primary PCI (STEMI)', 'STOP: 7 days before CABG', 'No CYP2C19 interaction — effective in poor metabolisers (unlike clopidogrel)'],
    contraindications: ['Prior stroke or TIA (net harm — excess intracranial haemorrhage)', 'Active bleeding', 'Age >75 years (generally — weigh risk vs benefit very carefully)', 'Weight <60 kg (use 5 mg dose)', 'Severe hepatic impairment'],
  },

  'Dipyridamole': {
    class: 'Antiplatelet', subclass: 'Phosphodiesterase inhibitor + Adenosine reuptake inhibitor',
    overview: 'Antiplatelet agent. Modified-release formulation combined with aspirin (Asasantin Retard) — combination shown superior to aspirin alone for secondary stroke prevention (ESPS-2 and ESPRIT trials). Also used for pharmacological stress testing (vasodilates coronary arteries).',
    indications: ['Secondary stroke/TIA prevention (combined with aspirin — Asasantin)', 'Pharmacological cardiac stress test (IV dipyridamole)', 'Anticoagulation in mechanical heart valves (with warfarin)'],
    dosage: 'Asasantin Retard (200 mg MR dipyridamole + 25 mg aspirin): 1 capsule BD. Cardiac stress test (IV): 0.56 mg/kg over 4 min.',
    mechanism: 'Inhibits phosphodiesterase (↑ cAMP and cGMP in platelets) + blocks adenosine reuptake → ↑ prostacyclin (inhibits platelet aggregation) + coronary vasodilation (stress test).',
    sideEffects: ['Headache (very common — adenosine-mediated; improves after 1–2 weeks)', 'GI upset', 'Flushing', 'Hypotension', 'Dizziness', 'Worsening angina (coronary steal in cardiac stress test — have aminophylline reversal ready)'],
    nursing: ['HEADACHE: very common initially — warn patients; usually resolves after 1–2 weeks; paracetamol helps', 'Cardiac stress test: aminophylline (adenosine antagonist) must be immediately available to reverse severe vasodilation', 'Asasantin Retard: take BD; avoid with other antiplatelet or anticoagulant therapy unless directed', 'Caffeine and xanthines: reduce dipyridamole efficacy (adenosine antagonism) — limit caffeine intake'],
    contraindications: ['Severe aortic stenosis (IV — coronary steal)', 'Recent MI (IV stress test)', 'Concurrent adenosine', 'Active bleeding'],
  },


  // ══════════════════════════════════════════════════════════
  // 12. ANTICOAGULANTS — VITAMIN K ANTAGONISTS
  // ══════════════════════════════════════════════════════════

  'Warfarin': {
    class: 'Anticoagulant', subclass: 'Vitamin K Antagonist (VKA) — Coumarin',
    overview: 'Oral anticoagulant requiring mandatory INR monitoring. Inhibits Vitamin K-dependent coagulation factors (II, VII, IX, X) and anticoagulant proteins C and S. Multiple food and drug interactions make management complex. Has been the standard oral anticoagulant for 60+ years — now largely replaced by DOACs for many indications but still required for mechanical heart valves and where DOACs are unsuitable.',
    indications: ['AF — stroke prevention (non-valvular and valvular)', 'DVT/PE treatment and secondary prevention', 'Mechanical prosthetic heart valves (DOACs contraindicated)', 'Antiphospholipid syndrome (high-titre — DOACs less effective)', 'Cardiomyopathy with mural thrombus'],
    dosage: 'Individualised: target INR 2–3 (most indications); 2.5–3.5 (mechanical mitral valve). Usual starting dose 5–10 mg OD (3 mg in elderly, liver disease, heart failure). Adjust based on INR.',
    mechanism: 'Inhibits Vitamin K epoxide reductase complex (VKORC1) → prevents regeneration of reduced Vitamin K → ↓ gamma-carboxylation of factors II, VII, IX, X, and proteins C and S.',
    sideEffects: ['Bleeding (major risk — any site; intracranial most serious)', 'Warfarin skin necrosis (rare — early, protein C deficiency — protein C has shorter half-life)', 'Purple toe syndrome (rare — cholesterol emboli)', 'Teratogenic (warfarin embryopathy — 6–12 weeks gestation)', 'Alopecia'],
    nursing: ['INR MONITORING: frequent initially (daily until stable → weekly → monthly when stable); critical to give result and dose adjustment at every contact', 'HUGE DRUG INTERACTIONS: antibiotics, NSAIDs, antifungals, amiodarone (doubles warfarin effect), rifampicin (halves effect), alcohol, herbal remedies — check with every new prescription or change', 'VITAMIN K: consistent diet — do NOT avoid leafy greens entirely; eat CONSISTENT amounts (broccoli, spinach, kale — not varying week to week)', 'WARFARIN ALERT CARD: patient must carry and show to all healthcare providers', 'OVERDOSE/BLEEDING: reversal options — Vitamin K (slow, 6–12 hrs), FFP (immediate), prothrombin complex concentrate (PCC — fastest, gold standard)', 'PREGNANCY: absolutely contraindicated (weeks 6–12 embryopathy; throughout — fetal haemorrhage); switch to LMWH', 'Target INR range must be clearly documented for each patient — mechanical valves have higher targets'],
    contraindications: ['Active bleeding', 'Pregnancy (especially 6–12 weeks)', 'Severe hypertension (haemorrhagic stroke risk)', 'Recent neurosurgery or ophthalmic surgery', 'Haemorrhagic stroke', 'Alcoholism (variable diet and liver disease)'],
  },

  'Acenocoumarol (Nicoumalone)': {
    class: 'Anticoagulant', subclass: 'Vitamin K Antagonist (VKA) — Short-acting coumarin',
    overview: 'Short-acting VKA. Shorter half-life than warfarin (8–11 hrs vs 36–42 hrs) → more sensitive to missed doses and dietary changes → more labile INR control in some patients. Preferred in some European countries.',
    indications: ['AF — stroke prevention', 'DVT/PE', 'Mechanical heart valves', 'Venous thromboembolism prevention'],
    dosage: 'Individualised based on INR. Maintenance: 1–8 mg OD. Target INR same as warfarin.',
    mechanism: 'Same as warfarin: VKORC1 inhibition → ↓ Vitamin K-dependent factors.',
    sideEffects: ['Bleeding (class effect)', 'Skin necrosis', 'Teratogenic', 'Drug and food interactions (same class)'],
    nursing: ['Same monitoring and precautions as warfarin', 'Shorter half-life: more frequent INR fluctuations if doses missed', 'Same VKA interaction profile as warfarin'],
    contraindications: ['Same as warfarin'],
  },


  // ══════════════════════════════════════════════════════════
  // 13. ANTICOAGULANTS — HEPARIN & LMWH
  // ══════════════════════════════════════════════════════════

  'Unfractionated Heparin (UFH)': {
    class: 'Anticoagulant', subclass: 'Unfractionated Heparin — APTT-monitored',
    overview: 'IV/SC anticoagulant with immediate onset and short half-life (1–2 hrs). Monitored by APTT. Reversible with protamine sulphate. Preferred when rapid reversibility is needed (surgery, risk of bleeding) or in severe renal failure (where LMWH accumulates). Complex pharmacokinetics (binds to plasma proteins — variable response).',
    indications: ['DVT/PE treatment (IV infusion — initially)', 'ACS (NSTEMI, STEMI adjunct)', 'Cardiopulmonary bypass anticoagulation', 'Renal failure (preferred over LMWH)', 'Patients at high risk of bleeding needing reversible anticoagulation', 'Haemodialysis', 'Bridge anticoagulation peri-operatively'],
    dosage: 'IV bolus: 5000 units then infusion 18 units/kg/hr. Titrate to APTT 1.5–2.5× control (60–100 sec). Prophylaxis SC: 5000 units every 8–12 hrs.',
    mechanism: 'Binds antithrombin III (ATIII) → conformational change → ATIII rapidly inhibits thrombin (factor IIa) and factor Xa (and XIa, XIIa). Ratio of anti-Xa:anti-IIa activity ≈ 1:1.',
    sideEffects: ['Bleeding (dose-dependent)', 'HIT (Heparin-Induced Thrombocytopenia) — type I (mild, day 1–4, self-limiting) and type II (immune-mediated, day 5–10, PARADOXICAL THROMBOSIS — serious)', 'Hyperkalaemia (aldosterone inhibition)', 'Osteoporosis (long-term)', 'Thrombocytopaenia', 'Transient elevation of liver enzymes'],
    nursing: ['APTT MONITORING: 6-hourly during infusion and adjust per sliding scale protocol; target 1.5–2.5× control', 'HIT TYPE II ALERT: if platelet count falls >50% between days 5–10 → STOP HEPARIN IMMEDIATELY (any form including flushes) → test for anti-PF4/heparin antibodies → switch to alternative anticoagulant (argatroban, danaparoid, fondaparinux)', 'DIFFERENT CONCENTRATIONS exist (1000 units/mL, 5000 units/mL, 25,000 units/mL) — ALWAYS verify concentration before administration', 'REVERSAL: protamine sulphate 1 mg per 100 units of UFH given in previous 2 hrs (max 50 mg); can cause anaphylaxis — inject slowly', 'FLUSH/LOCKS: low-dose heparin flush still counts as heparin exposure — stop all heparin in suspected HIT', 'PLATELET COUNT: check before starting and every 2–3 days (days 5–14 if high risk)'],
    contraindications: ['History of HIT type II', 'Active bleeding', 'Severe thrombocytopaenia (<80 × 10⁹/L)', 'Haemorrhagic stroke'],
  },

  'Enoxaparin': {
    class: 'Anticoagulant', subclass: 'Low Molecular Weight Heparin (LMWH)',
    overview: 'Most widely used LMWH. Predictable pharmacokinetics → fixed weight-based dosing without routine monitoring (except in extremes of weight, renal impairment, pregnancy). Less HIT than UFH. SC injection only (not IV bolus for therapeutic dosing). Anti-Xa monitoring in specific populations.',
    indications: ['DVT/PE — treatment and secondary prevention', 'DVT prophylaxis (surgical and medical)', 'ACS (NSTEMI, STEMI adjunct — ESSENCE, SYNERGY trials)', 'Bridge anticoagulation', 'Antiphospholipid syndrome', 'Cancer-associated thrombosis'],
    dosage: 'DVT/PE treatment: 1 mg/kg SC BD or 1.5 mg/kg SC OD. Prophylaxis: 40 mg SC OD (20 mg if eGFR <20). ACS: 1 mg/kg SC BD.',
    mechanism: 'Binds ATIII → preferential anti-Xa activity (anti-Xa:anti-IIa ratio 3.8:1 vs 1:1 for UFH). Predictable pharmacokinetics — no plasma protein binding variability.',
    sideEffects: ['Bleeding', 'HIT (less common than UFH — less anti-IIa activity)', 'Injection site bruising and haematoma', 'Thrombocytopaenia', 'Hyperkalaemia', 'Osteoporosis (long-term)', 'Hypersensitivity'],
    nursing: ['SC INJECTION TECHNIQUE: abdomen (alternating sides, 5 cm from navel), anterolateral thigh, or lateral arm; 90° angle; do NOT expel air bubble from pre-loaded syringe (included to clear needle after injection)', 'Do NOT aspirate before injection (bruising)', 'RENAL IMPAIRMENT: dose reduction required; anti-Xa monitoring if eGFR <30 (use UFH in severe renal failure)', 'ANTI-Xa MONITORING required in: obesity (>100 kg), low body weight (<50 kg), renal impairment, pregnancy — target 0.5–1.0 IU/mL BD dosing (4 hrs post-injection)', 'REVERSAL: protamine sulphate partially reverses (neutralises anti-IIa and ~50–60% anti-Xa); 1 mg protamine per 1 mg enoxaparin', 'HIT: less common but possible — monitor platelets as per UFH protocol if high risk'],
    contraindications: ['History of HIT', 'Active major bleeding', 'Severe thrombocytopaenia', 'Prosthetic heart valve (insufficient evidence — use UFH)'],
  },

  'Dalteparin': {
    class: 'Anticoagulant', subclass: 'Low Molecular Weight Heparin (LMWH)',
    overview: 'LMWH similar to enoxaparin. CLOT trial: superior to warfarin for prevention of recurrent VTE in cancer patients — now preferred for cancer-associated thrombosis (DOACs also gaining evidence). Dosing in units (not mg).',
    indications: ['DVT/PE treatment and prevention', 'Cancer-associated thrombosis (CLOT trial)', 'ACS', 'DVT prophylaxis'],
    dosage: 'Treatment: 100 units/kg BD or 200 units/kg OD SC. Prophylaxis: 2500–5000 units OD. Cancer VTE: 200 units/kg OD for 30 days, then 150 units/kg OD.',
    mechanism: 'Same as enoxaparin: ATIII-mediated anti-Xa predominance.',
    sideEffects: ['Bleeding', 'Injection site reactions', 'HIT (less than UFH)', 'Thrombocytopaenia', 'Osteoporosis (long-term)'],
    nursing: ['Cancer-associated VTE: preferred LMWH (CLOT trial) or consider DOAC (apixaban, rivaroxaban — HOKUSAI-VTE Cancer)', 'Same injection technique as enoxaparin', 'Monitor anti-Xa in renal impairment and extremes of weight'],
    contraindications: ['HIT', 'Active bleeding', 'Severe thrombocytopaenia'],
  },

  'Fondaparinux': {
    class: 'Anticoagulant', subclass: 'Synthetic selective anti-Xa inhibitor (Factor Xa inhibitor)',
    overview: 'Synthetic pentasaccharide that selectively inhibits factor Xa via antithrombin. Does NOT cause HIT (does not interact with PF4-heparin complexes). Used in ACS and VTE. Cannot be reversed by protamine. Once daily dosing.',
    indications: ['DVT/PE treatment and prevention', 'ACS (NSTEMI, STEMI adjunct — OASIS-5/OASIS-6)', 'HIT (safe alternative — does not cross-react with anti-PF4 antibodies)'],
    dosage: 'DVT/PE treatment: 7.5 mg SC OD (5 mg if <50 kg; 10 mg if >100 kg). Prophylaxis: 2.5 mg SC OD. ACS: 2.5 mg SC OD.',
    mechanism: 'Binds specifically to antithrombin → ATIII inhibits only factor Xa → indirect factor Xa inhibitor. Minimal thrombin inhibition.',
    sideEffects: ['Bleeding', 'Thrombocytopaenia (rare, mild)', 'Anaemia', 'GI upset', 'Oedema'],
    nursing: ['NO HIT RISK: safe to use when HIT is suspected (does not bind to PF4-heparin complexes)', 'NO ANTIDOTE: protamine does NOT reverse fondaparinux; recombinant factor VIIa can be used for severe bleeding (off-label)', 'Renal elimination: contraindicated in severe renal failure (eGFR <20)', 'Once daily SC — good adherence; inject in abdominal fat; rotate sites'],
    contraindications: ['Severe renal impairment (eGFR <20)', 'Active bleeding', 'Severe hepatic impairment', 'Bacterial endocarditis'],
  },


  // ══════════════════════════════════════════════════════════
  // 14. DIRECT ORAL ANTICOAGULANTS (DOACs)
  // ══════════════════════════════════════════════════════════

  'Rivaroxaban': {
    class: 'DOAC', subclass: 'Direct factor Xa inhibitor',
    overview: 'First oral direct Xa inhibitor. Predictable pharmacokinetics → no routine monitoring. ROCKET-AF: non-inferior to warfarin in AF stroke prevention. EINSTEIN: non-inferior for DVT/PE. Once daily for AF; BD for initial VTE treatment. Must be taken with food (evening meal for AF dose — improves absorption).',
    indications: ['Non-valvular AF — stroke prevention', 'DVT/PE treatment and secondary prevention', 'DVT prophylaxis post major orthopaedic surgery', 'Secondary prevention of ACS (low dose 2.5 mg BD with aspirin — ATLAS-2)', 'Prevention of recurrent CVD (2.5 mg BD)'],
    dosage: 'AF: 20 mg OD with evening meal (15 mg if eGFR 15–49). DVT/PE treatment: 15 mg BD × 21 days → 20 mg OD. Prophylaxis (orthopaedic): 10 mg OD.',
    mechanism: 'Directly and reversibly inhibits factor Xa (both free and clot-bound) → ↓ thrombin generation → anticoagulation.',
    sideEffects: ['Bleeding (major risk — GI bleeding higher than warfarin, intracranial bleeding lower)', 'GI upset', 'Anaemia', 'Elevated LFTs', 'Rash'],
    nursing: ['AF DOSE: MUST be taken with food (evening meal) — bioavailability 66% fasted vs 100% fed; unique to rivaroxaban at AF dose', 'NO ROUTINE INR MONITORING: advantage over warfarin — but cannot easily test therapeutic compliance', 'RENAL MONITORING: check eGFR at least annually (3–6 monthly if borderline); reduce dose to 15 mg if eGFR 15–49; stop if eGFR <15', 'REVERSAL: andexanet alfa (specific reversal agent); four-factor PCC can be used if andexanet not available', 'MECHANICAL HEART VALVES: CONTRAINDICATED (all DOACs — only warfarin)', 'ANTACID TIMING: no significant interaction (unlike some DOACs)', 'DRUG INTERACTIONS: CYP3A4 and P-glycoprotein — avoid concurrent ketoconazole, ritonavir; rifampicin reduces levels'],
    contraindications: ['Mechanical prosthetic heart valves', 'Active clinically significant bleeding', 'Hepatic disease with coagulopathy (Child-Pugh B/C)', 'Antiphospholipid syndrome (especially triple positive — DOACs less effective)', 'eGFR <15 mL/min', 'Pregnancy and breastfeeding'],
  },

  'Apixaban': {
    class: 'DOAC', subclass: 'Direct factor Xa inhibitor',
    overview: 'Direct Xa inhibitor taken twice daily. ARISTOTLE: superior to warfarin in AF (↓ stroke, bleeding, mortality — the only DOAC to show superiority on all three). AMPLIFY: non-inferior to warfarin for VTE. Lower GI bleeding than rivaroxaban or dabigatran. Most commonly preferred DOAC for many indications.',
    indications: ['Non-valvular AF — stroke prevention', 'DVT/PE treatment and secondary prevention', 'DVT prophylaxis post major orthopaedic surgery', 'Cancer-associated VTE (CARAVAGGIO trial)'],
    dosage: 'AF: 5 mg BD (2.5 mg BD if ≥2 of: age ≥80, weight ≤60 kg, creatinine ≥133 μmol/L). DVT/PE: 10 mg BD × 7 days → 5 mg BD. Extended prevention: 2.5 mg BD.',
    mechanism: 'Direct, reversible factor Xa inhibition (both free and prothrombinase-bound Xa).',
    sideEffects: ['Bleeding (lowest GI bleeding of all DOACs)', 'Nausea', 'Anaemia', 'Bruising', 'Elevated LFTs'],
    nursing: ['BD DOSING: twice daily must be maintained — no dose can be skipped; if one dose missed, take as soon as remembered same day; if >12 hrs late, skip and continue next dose (do NOT double dose)', 'DOSE REDUCTION CRITERIA (AF): apply 2.5 mg BD if patient meets ≥2 criteria: age ≥80, weight ≤60 kg, creatinine ≥133 μmol/L — check criteria at each review', 'RENAL: monitor eGFR annually; avoid if eGFR <15', 'CAN BE CRUSHED and given via NG tube (unique advantage vs some DOACs)', 'REVERSAL: andexanet alfa (licensed); 4-factor PCC used if andexanet unavailable', 'CANCER VTE: CARAVAGGIO trial showed non-inferior to dalteparin — increasing use in cancer', 'ARISTOTLE: only DOAC with demonstrated superiority over warfarin on all three primary outcomes'],
    contraindications: ['Mechanical heart valves', 'Active bleeding', 'Severe hepatic disease', 'eGFR <15', 'Antiphospholipid syndrome (triple positive)', 'Pregnancy'],
  },

  'Dabigatran': {
    class: 'DOAC', subclass: 'Direct thrombin (factor IIa) inhibitor',
    overview: 'Only licensed oral direct thrombin inhibitor. RE-LY trial: 150 mg BD superior to warfarin for stroke prevention in AF; 110 mg BD non-inferior. Has specific reversal agent (idarucizumab — Praxbind) — the first DOAC-specific antidote licensed. GI absorption requires acidic gastric pH (contains tartaric acid capsule core) — PPI use reduces levels.',
    indications: ['Non-valvular AF — stroke prevention', 'DVT/PE treatment and secondary prevention', 'DVT prophylaxis post hip/knee arthroplasty'],
    dosage: 'AF: 150 mg BD (110 mg BD if age ≥80, ↑ GI bleeding risk, or on verapamil). DVT/PE: requires 5–10 days parenteral anticoagulation first, then 150 mg BD.',
    mechanism: 'Directly and reversibly inhibits thrombin (factor IIa) → blocks fibrin clot formation and thrombin-induced platelet aggregation.',
    sideEffects: ['Bleeding (GI bleeding higher than warfarin — especially elderly)', 'Dyspepsia and GI upset (tartaric acid — common cause of non-adherence)', 'Nausea', 'Oesophagitis'],
    nursing: ['GI SIDE EFFECTS: take with food and water; sit upright for 30 min after taking; if dyspepsia severe — try switching to apixaban or rivaroxaban (better GI tolerance)', 'DO NOT CRUSH CAPSULE: must swallow whole (tartaric acid core maintains acidic environment — crushing destroys mechanism and increases bleeding risk from rapid absorption)', 'PPI INTERACTION: PPIs reduce dabigatran absorption by 20–30% (raises gastric pH); use if GI upset but be aware of reduced anticoagulant effect', 'VERAPAMIL: increases dabigatran levels via P-glycoprotein — use 110 mg BD', 'SPECIFIC REVERSAL: idarucizumab (Praxbind) 5 g IV — licensed antidote; reverses within minutes; use in life-threatening bleeding or emergency surgery', 'STORAGE: keep in original blister pack — moisture-sensitive; discard if bottle opened >60 days ago (pre-filled dispenser)'],
    contraindications: ['Mechanical heart valves', 'Active bleeding', 'Severe renal impairment (eGFR <30 for therapeutic doses; <15 for prophylaxis)', 'Severe hepatic disease', 'Concurrent P-glycoprotein inhibitors (ketoconazole, dronedarone — oral)'],
  },

  'Edoxaban': {
    class: 'DOAC', subclass: 'Direct factor Xa inhibitor',
    overview: 'Once-daily direct Xa inhibitor. ENGAGE-AF: non-inferior to warfarin in AF. Hokusai-VTE: non-inferior to warfarin for VTE. Note: reduced efficacy observed in AF patients with CrCl >95 mL/min (avoid high-dose in very high CrCl). Requires 5–10 days parenteral anticoagulation before initiation for acute VTE.',
    indications: ['Non-valvular AF — stroke prevention', 'DVT/PE treatment (after initial parenteral anticoagulation)'],
    dosage: 'AF: 60 mg OD (30 mg OD if CrCl 15–50 mL/min, weight ≤60 kg, or concurrent P-gp inhibitors). VTE: 60 mg OD (after 5–10 days LMWH/UFH).',
    mechanism: 'Direct, reversible factor Xa inhibition.',
    sideEffects: ['Bleeding', 'Anaemia', 'GI upset', 'Elevated LFTs', 'Rash'],
    nursing: ['REDUCED DOSE CRITERIA: CrCl 15–50, weight ≤60 kg, or P-gp inhibitors — use 30 mg OD (check ALL three criteria)', 'HIGH CrCl (>95 mL/min) in AF: avoid edoxaban — reduced efficacy compared to warfarin in this subgroup (well absorbed but rapidly cleared)', 'Once daily — good adherence', 'REVERSAL: andexanet alfa or PCC (no specific antidote — same as rivaroxaban/apixaban)', 'PARENTERAL FIRST for VTE: must have 5–10 days LMWH/UFH before starting edoxaban (unlike rivaroxaban/apixaban which can transition without parenteral)'],
    contraindications: ['Mechanical heart valves', 'Active bleeding', 'eGFR <15', 'CrCl >95 mL/min in AF (reduced efficacy)', 'Severe hepatic disease', 'Antiphospholipid syndrome (triple positive)'],
  },


  // ══════════════════════════════════════════════════════════
  // 15. ANTIARRHYTHMICS
  // ══════════════════════════════════════════════════════════

  'Amiodarone': {
    class: 'Antiarrhythmic', subclass: 'Class III (Vaughan-Williams) — Multi-channel',
    overview: 'Most effective antiarrhythmic available but with the most complex toxicity profile. Contains 37% iodine by weight → thyroid dysfunction. Multiple organ toxicity with long-term use. Half-life extremely long (40–55 days) — drug interactions persist for months after stopping. IV for acute arrhythmia; oral for maintenance. Central line preferred for prolonged IV infusion.',
    indications: ['Ventricular fibrillation/pulseless VT (CPR — IV)', 'Haemodynamically stable VT', 'AF rate and rhythm control', 'WPW syndrome with AF', 'Prophylaxis of recurrent VT/VF', 'Post-operative AF prevention'],
    dosage: 'VF/VT (CPR): 300 mg IV bolus (peripheral) → 150 mg if still refractory. Stable VT: 150 mg IV over 10 min → 1 mg/min for 6 hrs → 0.5 mg/min. Oral loading: 200 mg TDS × 7 days → 200 mg BD × 7 days → 200 mg OD (maintenance).',
    mechanism: 'Potassium channel blockade (↑ action potential duration) + sodium channel blockade + calcium channel blockade + alpha and beta adrenergic blockade. Iodine content contributes to thyroid effects.',
    sideEffects: ['Thyroid dysfunction: hypothyroidism (most common, 10–20%) or hyperthyroidism (3–12% — harder to treat)', 'Pulmonary toxicity: interstitial pneumonitis, fibrosis (1–5% — potentially fatal)', 'Corneal microdeposits (90% — usually asymptomatic; corneal deposits visible on slit lamp)', 'Photosensitivity — blue-grey skin discolouration (prolonged use)', 'Peripheral neuropathy', 'Hepatotoxicity', 'QT prolongation (paradoxically less torsades than other Class III agents)', 'Bradycardia (beta and calcium blockade)'],
    nursing: ['BASELINE MONITORING before starting: TFTs, LFTs, CXR, PFTs, ECG, ophthalmology review', 'ONGOING MONITORING every 6 months: TFTs, LFTs; annually: CXR, PFTs, ophthalmology', 'THYROID: both hypo and hyperthyroidism can be life-threatening; amiodarone-induced thyrotoxicosis (AIT) is resistant to standard treatment (two types — Type I: excess hormone synthesis; Type II: destructive thyroiditis)', 'PULMONARY TOXICITY: cough, breathlessness, fever, new CXR changes → stop drug and treat with corticosteroids', 'PHOTOSENSITIVITY: high-factor (SPF 50+) sunscreen mandatory; avoid prolonged sun exposure; blue-grey discolouration is permanent', 'IV INFUSION: peripheral veins → peripheral phlebitis after 2–4 hrs; use CENTRAL LINE for infusions >1–2 hrs; if peripheral necessary, rotate sites hourly', 'DRUG INTERACTIONS: doubles warfarin and digoxin levels → reduce doses by 50%; multiple other CYP450 interactions persist for months after stopping'],
    contraindications: ['Sinus bradycardia or SA block', 'AV block (2nd/3rd degree without pacemaker)', 'Thyroid disease (relative — can be managed with specialist input)', 'Severe respiratory failure', 'Iodine sensitivity', 'Concurrent QT-prolonging drugs'],
  },

  'Flecainide': {
    class: 'Antiarrhythmic', subclass: 'Class Ic — Sodium channel blocker',
    overview: 'Potent Class Ic antiarrhythmic — most effective for AF rhythm control (cardioversion and maintenance). CAST trial warning: increased mortality in patients with structural heart disease (left ventricular dysfunction, coronary artery disease) after MI. ONLY safe in structurally normal hearts. Used for AF with WPW in structurally normal heart.',
    indications: ['Paroxysmal AF (pill-in-pocket or regular — structurally normal heart only)', 'WPW with tachyarrhythmia (structurally normal heart)', 'SVT', 'WPW-associated AF'],
    dosage: 'AF: 100–150 mg BD. Pill-in-pocket: 200–300 mg single oral dose (with beta-blocker pre-treatment). IV: 1–2 mg/kg over 10 min.',
    mechanism: 'Potent sodium channel blockade (fast channel) → ↓ conduction velocity throughout heart → ↓ automaticity and re-entry circuits. Markedly prolongs QRS duration.',
    sideEffects: ['Pro-arrhythmic in structural heart disease (↑ VT/VF — CAST trial)', 'Visual disturbances (blurred vision, diplopia)', 'Dizziness', 'Nausea', 'QRS widening', 'Bradycardia', 'Heart failure exacerbation'],
    nursing: ['STRUCTURAL HEART DISEASE ABSOLUTE CONTRAINDICATION: never use post-MI, in LV dysfunction (EF <40%), or significant structural heart disease (CAST trial — excess mortality)', 'PILL-IN-POCKET: patient takes a loading dose when palpitations start; must have beta-blocker on board first (prevents 1:1 AF flutter conduction via AV node); first use must be in monitored setting', 'ECG MONITORING: QRS widening >25% from baseline → dose reduction or stop', 'RENAL IMPAIRMENT: renally excreted; dose reduction needed', 'Do NOT use in WPW — can enhance accessory pathway conduction at therapeutic doses; ONLY safe if accessory pathway has long refractory period'],
    contraindications: ['Structural heart disease (post-MI, LV dysfunction EF <40%, LVH)', 'Bundle branch block or bifascicular block', 'Sinus node dysfunction', 'AV block (without pacemaker)', 'WPW with wide complex tachycardia (unless structurally normal heart)'],
  },

  'Adenosine': {
    class: 'Antiarrhythmic', subclass: 'Purine nucleoside — AV node blocker',
    overview: 'Drug of choice for acute termination of SVT. Ultra-short half-life (10–15 sec) — effect lasts only 20–30 sec. Must be given as RAPID IV bolus followed immediately by large saline flush (otherwise drug degrades before reaching heart). Caffeine and theophylline block adenosine receptors — higher doses needed. AVOID in asthma (bronchoconstriction).',
    indications: ['SVT (AVNRT, AVRT) — termination', 'Diagnostic: differentiation of wide-complex tachycardias (blocks AV node → reveals underlying atrial activity)'],
    dosage: '6 mg rapid IV bolus (antecubital or central vein preferred) → 20 mL saline flush immediately. If no response in 1–2 min: 12 mg. If still no response: repeat 12 mg once more (max 30 mg total).',
    mechanism: 'Activates A1 adenosine receptors in AV node → ↑ K⁺ conductance + ↓ Ca²⁺ current → profound transient AV block (2–4 sec of asystole/AV block) → interrupts re-entry circuit in SVT.',
    sideEffects: ['Transient chest pain/pressure (not ischaemic — receptor-mediated)', 'Flushing (intense, brief)', 'Sense of impending doom (very common, very brief — 15–30 sec)', 'Dyspnoea (brief but often distressing)', 'Transient bradycardia/asystole (therapeutic)', 'Bronchospasm (avoid in asthma)'],
    nursing: ['SPEED IS CRITICAL: must be injected as RAPID BOLUS (1–2 sec) — if given slowly, drug is metabolised before reaching AV node; use antecubital fossa or central vein', 'FLUSH IMMEDIATELY: 20 mL saline rapid flush must follow immediately after adenosine injection', 'WARN PATIENT BEFOREHAND: tell patient they will feel brief (20–30 sec) intense chest pain, breathlessness, and sense of impending doom — terrifying but completely transient', 'ECG MONITORING continuous — record on rhythm strip during administration', 'RESUSCITATION EQUIPMENT at bedside (in case of prolonged pause)', 'CAFFEINE/THEOPHYLLINE: block adenosine receptors — may need higher doses (12 mg first dose)', 'DIPYRIDAMOLE: potentiates adenosine (blocks reuptake) — use quarter of normal dose'],
    contraindications: ['Asthma or significant reactive airway disease (bronchospasm)', 'WPW with AF/flutter (may enhance accessory pathway conduction → VF)', '2nd or 3rd degree AV block (without pacemaker)', 'Sick sinus syndrome', 'Concurrent dipyridamole (unless reduced dose used)'],
  },

  'Digoxin': {
    class: 'Cardiac Glycoside', subclass: 'Digitalis — Positive inotrope / AV node depressant',
    overview: 'Narrow therapeutic index cardiac glycoside. Primary uses now: rate control in AF (especially with concurrent heart failure) and heart failure with reduced EF (symptom control — no mortality benefit). Digoxin toxicity is a medical emergency. Multiple drug interactions. Hypokalaemia dramatically potentiates toxicity.',
    indications: ['Rate control in atrial fibrillation (especially with heart failure)', 'Symptomatic heart failure with reduced EF (add-on — symptom/hospitalisation reduction)', 'Supraventricular tachycardias (AVNRT — historical, largely superseded)'],
    dosage: 'Maintenance: 125–250 mcg OD (62.5 mcg in elderly and renal impairment). Loading (rare): 500 mcg IV in divided doses over 24 hrs. Serum level target: 0.5–2.0 ng/mL.',
    mechanism: 'Inhibits Na⁺/K⁺-ATPase (Na⁺-K⁺ pump) → ↑ intracellular Na⁺ → ↑ intracellular Ca²⁺ via Na⁺/Ca²⁺ exchanger → positive inotropy. Vagal stimulation → ↓ AV nodal conduction → rate control in AF.',
    sideEffects: ['Digoxin toxicity (most serious): nausea, vomiting, anorexia (early — GI); yellow-green visual halos, blurred vision (visual); bradycardia, heart block, VT (cardiac — can be fatal)', 'Gynaecomastia (long-term — oestrogen-like effects)', 'Confusion (elderly)'],
    nursing: ['THERAPEUTIC DRUG MONITORING: trough level (>6 hrs post-dose); target 0.5–2.0 ng/mL; toxicity >2.5 ng/mL', 'WITHHOLD AND CHECK HR: check apical pulse for 1 full minute before giving; if <60 bpm — WITHHOLD and notify (follow local protocol)', 'HYPOKALAEMIA DANGER: K⁺ competes with digoxin for Na-K-ATPase binding; even mild hypokalaemia causes toxicity at "therapeutic" levels — ALWAYS replace K⁺ if <3.5 mmol/L', 'TOXICITY RECOGNITION: nausea, vomiting, bradycardia, arrhythmias, yellow-green halos in vision → STOP, ECG, urgent serum level, correct K⁺', 'TOXICITY TREATMENT: digoxin-specific Fab antibody fragments (Digibind/DigiFab) — indicated for life-threatening arrhythmias or severe toxicity', 'DRUG INTERACTIONS: amiodarone doubles digoxin level (reduce dose by 50%); verapamil, diltiazem, quinidine, clarithromycin all increase digoxin levels; renal impairment increases levels', 'RENAL IMPAIRMENT: digoxin renally excreted — dose reduction essential; monitor renal function'],
    contraindications: ['VF', 'Hypertrophic obstructive cardiomyopathy (HOCM — outflow obstruction worsened)', 'WPW syndrome (digoxin can enhance accessory pathway conduction → VF)', '2nd or 3rd degree AV block (without pacemaker)', 'Hypertrophic cardiomyopathy with AF'],
  },

  'Lidocaine (Antiarrhythmic)': {
    class: 'Antiarrhythmic', subclass: 'Class Ib — Sodium channel blocker',
    overview: 'IV antiarrhythmic for acute ventricular arrhythmias. Class Ib — binds inactivated Na⁺ channels preferentially in ischaemic/depolarised tissue → useful in post-MI VT. Was first-line for VT/VF in CPR but now second-line to amiodarone. Also second-line for digoxin-induced VT.',
    indications: ['Ventricular tachycardia (IV — acute)', 'VF (CPR — alternative to amiodarone)', 'Digoxin-induced ventricular arrhythmias'],
    dosage: 'VT: 1–1.5 mg/kg IV bolus (100 mg max); repeat 0.5 mg/kg every 5–10 min up to 3 mg/kg total. Maintenance infusion: 1–4 mg/min.',
    mechanism: 'Preferentially blocks Na⁺ channels in ischaemic/depolarised ventricular tissue (higher affinity for inactivated channels) → ↓ automaticity in ventricles with minimal effect on normal conduction.',
    sideEffects: ['CNS toxicity: perioral tingling, dizziness, confusion, seizures (at toxic doses)', 'Cardiovascular depression (high doses)', 'Bradycardia', 'Hypotension'],
    nursing: ['MONITOR for CNS toxicity signs (perioral tingling, drowsiness, slurred speech — dose-related)', 'ECG MONITORING continuously during infusion', 'Reduce infusion rate in hepatic failure (lidocaine metabolised by liver)', 'HEPATIC IMPAIRMENT: hepatic extraction — accumulation in liver failure; reduce dose'],
    contraindications: ['Heart block (2nd/3rd degree without pacemaker)', 'Severe SA block', 'Adams-Stokes syndrome', 'Hypersensitivity to amide local anaesthetics'],
  },

  'Dronedarone': {
    class: 'Antiarrhythmic', subclass: 'Non-iodinated amiodarone analogue',
    overview: 'Amiodarone analogue without iodine — fewer thyroid and pulmonary side effects. Approved for AF rhythm control. ATHENA trial: reduced cardiovascular hospitalisations. ANDROMEDA and PALLAS trials: INCREASED mortality in permanent AF and severe HF — these are absolute contraindications.',
    indications: ['Non-permanent AF/flutter (paroxysmal or persistent) — rhythm control in patients in sinus rhythm'],
    dosage: '400 mg BD with meals.',
    mechanism: 'Multi-channel blockade (K⁺, Na⁺, Ca²⁺) + alpha and beta adrenergic blockade — same as amiodarone but less potent.',
    sideEffects: ['GI upset (nausea, diarrhoea)', 'QT prolongation', 'Bradycardia', 'Hepatotoxicity (rare — monitor LFTs)', 'Pulmonary toxicity (less than amiodarone but possible)', 'Increased serum creatinine (tubular secretion inhibition — not true renal impairment)', 'Skin reactions'],
    nursing: ['CONTRAINDICATED IN PERMANENT AF: PALLAS trial showed ↑ stroke and CV death in permanent AF (only for patients in sinus rhythm)', 'CONTRAINDICATED IN SEVERE HF (EF <35% symptomatic): ANDROMEDA trial — excess mortality', 'LFT MONITORING: every 6 months (hepatotoxicity)', 'Creatinine rise: expected (blocks tubular secretion of creatinine) — does not indicate renal impairment', 'DRUG INTERACTIONS: doubles digoxin levels; interacts with CYP3A4 and P-gp — check warfarin, statins', 'Take with FOOD (both doses)'],
    contraindications: ['Permanent AF (not in sinus rhythm)', 'Severe/symptomatic HF (EF <35%)', 'Hepatic impairment', 'QTc >500 ms', 'Concurrent QT-prolonging drugs', 'Concurrent strong CYP3A4 inhibitors', 'Pregnancy and breastfeeding'],
  },

  'Vernakalant': {
    class: 'Antiarrhythmic', subclass: 'Atria-selective — Rapid AF cardioversion (IV)',
    overview: 'Atria-selective antiarrhythmic for rapid chemical cardioversion of recent-onset AF (<7 days; <3 days if post-cardiac surgery). AVRO trial: faster conversion than amiodarone. Advantage: does not prolong QT significantly (atria-selective channels). IV use only in monitored setting.',
    indications: ['Recent-onset AF (≤7 days) — rapid chemical cardioversion', 'Post-cardiac surgery AF (≤3 days)'],
    dosage: '3 mg/kg IV over 10 min; if AF persists after 15 min → 2 mg/kg IV over 10 min. Max 2 doses.',
    mechanism: 'Blocks atria-selective currents (IKur, IKACh, INa at high heart rates) → selectively slows atrial conduction → AF termination without significant ventricular effects.',
    sideEffects: ['Sneezing (very common — unusual side effect; harmless)', 'Dysgeusia (altered taste)', 'Paraesthesia', 'Hypotension', 'VT (rare)', 'Bradycardia'],
    nursing: ['MONITORING: continuous ECG and BP for 2 hrs post-infusion', 'WARN ABOUT SNEEZING: patients find it alarming — completely harmless; known atria-selective side effect', 'Useful alternative to electrical cardioversion for haemodynamically stable recent AF', 'CONTRAINDICATED in severe AS, decompensated HF, or BP <100 mmHg'],
    contraindications: ['Severe aortic stenosis', 'QTc >440 ms', 'Severe heart failure', 'BP <100 mmHg', 'Brugada syndrome'],
  },

  'Ivabradine': {
    class: 'Heart Rate-Reducing Agent', subclass: 'If channel (funny current) inhibitor',
    overview: 'Selectively inhibits If (funny current — pacemaker current) in SA node → ↓ heart rate WITHOUT negative inotropy. Used in stable angina and heart failure when heart rate remains high despite beta-blocker or when beta-blocker is contraindicated. SHIFT trial: reduces hospitalisation in HFrEF with HR >70 bpm.',
    indications: ['Stable angina (HR control when beta-blocker contraindicated or inadequate)', 'HFrEF (LVEF ≤35%, sinus rhythm, HR ≥70 bpm despite optimal beta-blocker — SHIFT trial)', 'Inappropriate sinus tachycardia'],
    dosage: '5 mg BD initially; may increase to 7.5 mg BD if HR >60 bpm. Reduce to 2.5 mg BD if resting HR <50 bpm.',
    mechanism: 'Selective inhibition of HCN channels (If current) in SA node pacemaker cells → slows spontaneous depolarisation → ↓ HR in sinus rhythm only (no effect in AF).',
    sideEffects: ['Phosphenes (luminous visual phenomena — 15%; flashes of light in peripheral vision, especially with light intensity changes; harmless but disabling for some)', 'Bradycardia (if HR drops too low)', 'Visual disturbance', 'AF (slightly ↑ risk)', 'Headache', 'Dizziness'],
    nursing: ['WORKS ONLY IN SINUS RHYTHM: no effect in AF (If current not rate-limiting in AF)', 'MONITOR RESTING HR: target 55–60 bpm; reduce dose or stop if HR <50 bpm', 'PHOSPHENES: warn about flashes of light especially when moving from dark to bright — temporary and reversible; important safety message (driving/operating machinery)', 'AF RISK: slight increase — monitor ECG; if AF develops, consider stopping', 'TITRATION: adjust dose based on resting HR at regular visits', 'CYP3A4 metabolised: avoid concurrent strong CYP3A4 inhibitors (ketoconazole, clarithromycin — double ivabradine levels)'],
    contraindications: ['Atrial fibrillation (or any rhythm other than sinus)', 'Resting HR <60 bpm', 'Acute MI (unstable)', 'Severe hepatic impairment', 'Concurrent diltiazem or verapamil (rate-lowering CCBs — additive bradycardia)'],
  },


  // ══════════════════════════════════════════════════════════
  // 17. VASOPRESSORS & INOTROPES
  // ══════════════════════════════════════════════════════════

  'Noradrenaline (Norepinephrine)': {
    class: 'Vasopressor / Catecholamine', subclass: 'Alpha-1 and Beta-1 agonist',
    overview: 'First-line vasopressor for septic shock and distributive shock. Potent alpha-1 mediated vasoconstriction → ↑ SVR → ↑ MAP. Minimal beta-2 effect (less tachycardia than adrenaline). Surviving Sepsis Campaign: first-line vasopressor for septic shock.',
    indications: ['Septic shock (first-line vasopressor — Surviving Sepsis Campaign)', 'Other distributive shocks (anaphylactic, neurogenic)', 'Refractory hypotension', 'Cardiac arrest (alternative to adrenaline — off-label)'],
    dosage: '0.01–3 mcg/kg/min IV infusion. Titrate to MAP ≥65 mmHg.',
    mechanism: 'Alpha-1 agonism (vasoconstriction → ↑ SVR → ↑ MAP, ↑ coronary perfusion pressure). Beta-1 agonism (positive inotropy) — less than adrenaline. Minimal beta-2 (no bronchodilation/tachycardia from beta-2).',
    sideEffects: ['Peripheral ischaemia (vasoconstriction — limb, bowel, renal ischaemia at high doses)', 'Hypertension', 'Reflex bradycardia (severe hypertension)', 'Arrhythmias', 'Tissue necrosis if extravasation (potent vasoconstrictor)'],
    nursing: ['CENTRAL LINE ONLY: severe vasoconstrictor — peripheral extravasation causes tissue necrosis; if extravasation occurs, inject phentolamine (alpha-blocker) locally', 'CONTINUOUS MONITORING: arterial line for beat-to-beat BP monitoring in ICU', 'TARGET MAP ≥65 mmHg in septic shock', 'DOSE RANGE: 0.01–3 mcg/kg/min — wide range; titrate in small increments', 'WEANING: taper gradually when haemodynamics improve — do NOT abruptly stop (rebound hypotension)'],
    contraindications: ['Hypovolaemia (correct fluid deficit before or simultaneously with vasopressor)', 'Hypersensitivity (rare)'],
  },

  'Adrenaline (Epinephrine)': {
    class: 'Vasopressor / Catecholamine / Anaphylaxis Treatment', subclass: 'Alpha and Beta agonist',
    overview: 'FIRST-LINE treatment for anaphylaxis (IM anterolateral thigh). In CPR: 1 mg IV every 3–5 min. Multiple routes: IM (anaphylaxis), IV infusion (vasopressor), SC (historical), nebulised (croup), topical (ENT — haemostasis).',
    indications: ['Anaphylaxis (IM — FIRST LINE)', 'Cardiac arrest (CPR — IV)', 'Severe asthma (nebulised — adjunct)', 'Vasopressor in cardiogenic/distributive shock (infusion)', 'Croup (nebulised racemic)', 'Local anaesthetic additive (vasoconstriction)'],
    dosage: 'Anaphylaxis: 500 mcg (0.5 mg = 0.5 mL of 1:1000) IM into anterolateral thigh. Child: 10 mcg/kg. CPR: 1 mg IV every 3–5 min. Infusion: 0.01–1 mcg/kg/min.',
    mechanism: 'Alpha-1: vasoconstriction → ↑ SVR → reverses vasodilation of anaphylaxis. Beta-1: ↑ HR and contractility → ↑ cardiac output. Beta-2: bronchodilation → reverses bronchospasm.',
    sideEffects: ['Tachycardia', 'Hypertension', 'Arrhythmias (especially IV)', 'Anxiety and pallor', 'Tremor', 'Pulmonary oedema (IV — large doses)', 'Tissue necrosis (IV extravasation)'],
    nursing: ['ANAPHYLAXIS: IM into ANTEROLATERAL THIGH (outer mid-thigh) — fastest absorption; NOT deltoid; NOT IV unless trained and monitored; give immediately without delay', 'POSITION: lay patient flat and raise legs if possible (unless respiratory distress — then semi-recumbent)', 'EPIPEN: ensure patient and carers can demonstrate correct technique; two EpiPens prescribed (carry 2 at all times)', 'GIVE FIRST, THEN ANTIHISTAMINE/STEROID: antihistamines and steroids are ADJUNCTS — adrenaline is the only life-saving treatment; do not delay adrenaline waiting for antihistamines', 'REPEAT IM after 5 min if no improvement or worsening', 'IV ADRENALINE for cardiac arrest: 1 mg every 3–5 min — only in controlled resuscitation setting'],
    contraindications: ['No absolute contraindications in anaphylaxis or cardiac arrest', 'Relative (non-emergency use): severe hypertension, coronary artery disease, hyperthyroidism'],
  },

  'Dopamine': {
    class: 'Vasopressor / Inotrope / Catecholamine', subclass: 'Dopaminergic + Adrenergic — Dose-dependent',
    overview: 'Endogenous catecholamine precursor to noradrenaline. Dose-dependent receptor profile: low doses (1–5 mcg/kg/min) — dopaminergic (renal vasodilation, historically "renal-protective dose" — now disproven); moderate doses (5–10) — beta-1 inotropic; high doses (>10) — alpha-1 vasopressor. SOAP-II trial: higher mortality than noradrenaline in cardiogenic shock. No longer preferred vasopressor.',
    indications: ['Cardiogenic shock (second-line — noradrenaline now preferred)', 'Refractory hypotension (HF, post-cardiac surgery)', 'Bradycardia (pharmacological chronotropy when atropine fails — temporary bridge to pacing)'],
    dosage: '2–20 mcg/kg/min IV; titrate to response. Higher doses for vasopressor effect.',
    mechanism: 'Low doses: D1/D2 dopaminergic → renal and mesenteric vasodilation. Medium: beta-1 → ↑ HR and contractility. High: alpha-1 → vasoconstriction.',
    sideEffects: ['Tachycardia and arrhythmias (more than noradrenaline)', 'Tissue necrosis on extravasation', 'Nausea/vomiting', 'Peripheral ischaemia', 'Hypertension'],
    nursing: ['CENTRAL LINE only — extravasation causes tissue necrosis (if peripheral: phentolamine antidote)', 'SOAP-II trial: noradrenaline preferred over dopamine in septic/cardiogenic shock (less arrhythmias)', 'Document dose in mcg/kg/min (weight-based)', 'ARRHYTHMIAS: most common complication — continuous ECG monitoring', '"Renal dose" dopamine: outdated concept — does NOT protect kidneys; do not use this rationale'],
    contraindications: ['Uncorrected tachyarrhythmias or VF', 'Phaeochromocytoma', 'Sulphite hypersensitivity (preparation contains sodium metabisulphite)'],
  },

  'Dobutamine': {
    class: 'Inotrope', subclass: 'Synthetic catecholamine — Beta-1 selective',
    overview: 'Selective beta-1 agonist → positive inotrope with modest chronotropic and minimal vasopressor effects. Drug of choice for short-term inotropic support in acute decompensated heart failure. Also used for pharmacological stress testing (dobutamine stress echo). OVERDOSE may cause tachycardia and ischaemia.',
    indications: ['Acute decompensated heart failure (cardiogenic shock — short-term inotropic support)', 'Dobutamine stress echocardiography', 'Refractory HF (low output — palliative bridge to transplant)'],
    dosage: '2–20 mcg/kg/min IV infusion. Titrate to haemodynamic response. Stress echo: 5–40 mcg/kg/min stepped protocol.',
    mechanism: 'Selective beta-1 adrenoceptor agonism → ↑ cardiac contractility (inotropy) and modest chronotropy. Some beta-2 → mild vasodilation (↓ afterload). Net effect: ↑ CO without major BP increase.',
    sideEffects: ['Tachycardia (dose-dependent — may worsen ischaemia)', 'Arrhythmias', 'Hypertension (high doses)', 'Hypotension (beta-2 vasodilation)', 'Tolerance with prolonged infusion (>72 hrs)', 'Headache', 'Nausea'],
    nursing: ['CENTRAL LINE preferred (can be given peripherally if essential — less vasoconstrictive than noradrenaline)', 'Continuous ECG monitoring (arrhythmia risk)', 'TITRATE to cardiac output/CI/clinical signs of perfusion (urine output, lactate, MAP)', 'SHORT-TERM USE ONLY: tolerance develops; prolonged use increases mortality in chronic HF', 'Stress echo: different dose protocol — graduated; have defibrillator immediately available; stop at peak dose or positive response', 'TACHYCARDIA: if HR >120 bpm → reduce dose; may precipitate ischaemia in CAD'],
    contraindications: ['Hypertrophic obstructive cardiomyopathy (outflow obstruction worsened)', 'Hypersensitivity to sulphites (some preparations)', 'Uncorrected hypovolaemia', 'Concurrent beta-blockers (markedly reduces effect)'],
  },


  // ══════════════════════════════════════════════════════════
  // 18. HEART FAILURE — NEWER AGENTS
  // ══════════════════════════════════════════════════════════

  'Sacubitril/Valsartan (Entresto)': {
    class: 'ARNI — Angiotensin Receptor-Neprilysin Inhibitor', subclass: 'Neprilysin inhibitor + ARB (Sacubitril + Valsartan)',
    overview: 'First-in-class ARNI. Dual mechanism: neprilysin inhibition (↑ natriuretic peptides) + AT1 receptor blockade. PARADIGM-HF trial: superior to enalapril in reducing cardiovascular death and HF hospitalisations in HFrEF — the most important HF trial in decades. Now guideline-first-line for HFrEF alongside beta-blocker and MRA.',
    indications: ['HFrEF (EF ≤40%) — first-line replacement for ACEi/ARB (PARADIGM-HF)', 'HFpEF (EF >40%) in selected patients — PARAGON-HF (modest benefit)'],
    dosage: '49/51 mg (sacubitril 49 mg/valsartan 51 mg) BD initially; titrate to 97/103 mg BD over 4–8 weeks as tolerated.',
    mechanism: 'Sacubitril → sacubitrilat (active) → inhibits neprilysin → ↑ BNP, ANP, bradykinin → natriuresis, vasodilation, anti-fibrosis. Valsartan → AT1 blockade → blocks RAAS. Combined: ↑ natriuretic peptide system + ↓ renin-angiotensin system.',
    sideEffects: ['Hypotension (most common — particularly on initiation; ↑ vasodilation from ↑ bradykinin and natriuretic peptides)', 'Hyperkalaemia', 'Renal impairment', 'Angioedema (↑ risk — bradykinin accumulation, especially with prior ACEi angioedema)', 'Dizziness', 'Cough (less than ACEi but possible)'],
    nursing: ['MANDATORY 36-HR ACE INHIBITOR WASHOUT before starting (severe angioedema risk — both drugs increase bradykinin)', 'ANGIOEDEMA RISK: higher than either ACEi or ARB alone — counsel patients; STOP immediately if facial/throat swelling', 'START LOW, TITRATE SLOW: 24/26 mg BD in patients with systolic BP <110 mmHg, eGFR <30, or hyperkalaemia', 'MONITOR K⁺ AND CREATININE at 1–2 weeks after each dose change', 'BP MONITORING: first-dose hypotension common; check BP at 1–2 hrs post-dose', 'BNP INTERPRETATION: neprilysin inhibition raises BNP levels — NOT a sign of worsening HF; use NT-proBNP for monitoring instead (not cleaved by neprilysin)', 'PARADIGM-HF: reduced cardiovascular death by 20% vs enalapril — major evidence base'],
    contraindications: ['Concurrent ACEi (mandatory 36-hr washout)', 'History of angioedema with ACEi or ARB', 'Pregnancy', 'Bilateral renal artery stenosis', 'Hereditary angioedema', 'Severe hepatic impairment', 'Hyperkalaemia (K⁺ >5.4 mmol/L)'],
  },

  'Empagliflozin (Heart Failure)': {
    class: 'SGLT2 Inhibitor — Heart Failure', subclass: 'Gliflozin — Cardiorenal protection',
    overview: 'SGLT2 inhibitor with proven heart failure benefit independent of diabetes. EMPEROR-Reduced (HFrEF) and EMPEROR-Preserved (HFpEF) trials: reduced CV death and HF hospitalisations in both EF ranges — first drug class to show HFpEF benefit. Now recommended for HF with and without diabetes by ESC 2023 guidelines.',
    indications: ['HFrEF (EF ≤40%) — first-line (EMPEROR-Reduced)', 'HFpEF (EMPEROR-Preserved — first drug class to show benefit)', 'Type 2 diabetes with cardiovascular risk reduction (EMPA-REG OUTCOME)', 'Chronic kidney disease (EMPA-KIDNEY)'],
    dosage: '10 mg PO OD (HF indication); 25 mg OD for glycaemic control.',
    mechanism: 'SGLT2 inhibition → glucosuria → osmotic diuresis → ↓ plasma volume (↓ preload and afterload). Also haemodynamic, anti-inflammatory, and metabolic effects on cardiac myocytes. Ketogenic shift may improve myocardial energetics.',
    sideEffects: ['Genital mycotic infections (thrush — most common)', 'Urinary tract infections', 'Hypotension (volume depletion)', 'Euglycaemic DKA (in diabetes — rare)', 'Fournier gangrene (rare — necrotising fasciitis of perineum)', 'Polyuria', 'Volume depletion'],
    nursing: ['GENITAL HYGIENE: counsel on hygiene; antifungal treatment if recurrent thrush', 'EUGLYCAEMIC DKA: ketoacidosis with near-normal blood glucose in diabetics — present with nausea, vomiting, breathlessness; blood glucose may be normal; check ketones if symptomatic; stop 3 days before surgery', 'FOURNIER GANGRENE: rare but severe — perineal pain, redness, fever → emergency surgery', 'CAN CAUSE VOLUME DEPLETION: reduce dose of diuretics when starting', 'HFpEF: first drug class with meaningful mortality/hospitalisation reduction — transformative for HFpEF management', 'WORKS IN NON-DIABETICS: same cardiorenal benefits regardless of diabetes status'],
    contraindications: ['eGFR <20 for HF indication (some guidelines allow lower)', 'Type 1 diabetes (DKA risk)', 'Recurrent genital tract infections', 'Pregnancy'],
  },

  'Dapagliflozin (Heart Failure)': {
    class: 'SGLT2 Inhibitor — Heart Failure', subclass: 'Gliflozin — Cardiorenal protection',
    overview: 'SGLT2 inhibitor shown to reduce CV death and HF hospitalisation in both HFrEF (DAPA-HF) and HFpEF (DELIVER trial). First SGLT2 inhibitor to show HFrEF benefit regardless of diabetes. Now part of foundational HFrEF therapy (with ACEi/ARB or ARNI, beta-blocker, MRA).',
    indications: ['HFrEF (DAPA-HF — regardless of diabetes)', 'HFmrEF and HFpEF (DELIVER)', 'Type 2 diabetes', 'Chronic kidney disease (DAPA-CKD)'],
    dosage: '10 mg PO OD (all indications).',
    mechanism: 'Same as empagliflozin: SGLT2 inhibition → glucosuria, osmotic diuresis, volume reduction, cardiorenal protection.',
    sideEffects: ['Genital mycotic infections', 'UTI', 'Volume depletion', 'DKA (diabetes)', 'Fournier gangrene (rare)'],
    nursing: ['DAPA-HF: landmark trial — reduced CV death and worsening HF by 26% vs placebo in HFrEF', 'DELIVER: showed benefit across HFpEF (EF ≥40%)', 'Guideline: both empagliflozin and dapagliflozin are interchangeable in HF — use whichever is available/preferred', 'Same nursing precautions as empagliflozin'],
    contraindications: ['eGFR <25 for CKD indication; eGFR <30 for HF (check current guidelines)', 'Type 1 diabetes', 'Pregnancy'],
  },

  'Vericiguat': {
    class: 'Soluble Guanylate Cyclase Stimulator', subclass: 'Novel HF agent',
    overview: 'Stimulates soluble guanylate cyclase → ↑ cGMP → vasodilation and anti-fibrotic effects. VICTORIA trial: reduced risk of CV death or HF hospitalisation in worsening HFrEF. Used on top of optimal medical therapy in high-risk HF.',
    indications: ['Worsening chronic HFrEF (EF <45%) on top of optimal therapy (VICTORIA trial)'],
    dosage: '2.5 mg OD initially (with food); increase every 2 weeks to target 10 mg OD.',
    mechanism: 'Directly stimulates soluble guanylate cyclase (sGC), independent of NO → ↑ cGMP → smooth muscle vasodilation and cardiac anti-fibrotic effects.',
    sideEffects: ['Hypotension (most common)', 'Anaemia', 'Nausea', 'Dizziness'],
    nursing: ['Hypotension: take with food and at same time daily; monitor BP', 'ANTAGONISED BY PDE5 INHIBITORS (sildenafil, tadalafil) — DO NOT COMBINE (severe hypotension; same mechanism as nitrate/PDE5 interaction)', 'Increasing dose every 2 weeks based on BP tolerance', 'Haemoglobin monitoring (anaemia)'],
    contraindications: ['Concurrent PDE5 inhibitors or nitrates (severe hypotension)', 'Pregnancy (teratogenic)', 'Severe hepatic impairment', 'Systolic BP <100 mmHg at start'],
  },


  // ══════════════════════════════════════════════════════════
  // 19. OTHER ANTIHYPERTENSIVES / PERIPHERAL VASODILATORS
  // ══════════════════════════════════════════════════════════

  'Amlodipine + Perindopril (Combination)': {
    class: 'Combination Antihypertensive', subclass: 'CCB + ACE Inhibitor (Coveram)',
    overview: 'Fixed-dose combination. ASCOT-BPLA trial: amlodipine ± perindopril superior to atenolol ± bendroflumethiazide for cardiovascular outcomes — established this combination as gold-standard. Single-tablet combination improves adherence.',
    indications: ['Hypertension (when single agent insufficient)', 'High cardiovascular risk patients'],
    dosage: 'Coveram 5/5 mg, 5/10 mg, 10/5 mg, or 10/10 mg (amlodipine/perindopril) OD.',
    mechanism: 'Amlodipine: L-type Ca²⁺ channel blockade → vasodilation. Perindopril: ACE inhibition → ↓ angiotensin II → vasodilation + natriuresis.',
    sideEffects: ['Ankle oedema (amlodipine component — less than monotherapy amlodipine)', 'Cough (perindopril)', 'Hypotension', 'Hyperkalaemia', 'Flushing'],
    nursing: ['ASCOT evidence base: strongest evidence of any antihypertensive combination', 'Single pill: improves adherence', 'ACEi component: monitor K⁺ and creatinine', 'CCB component: monitor ankle oedema and BP'],
    contraindications: ['Pregnancy', 'ACE inhibitor angioedema', 'Bilateral RAS', 'Hyperkalaemia', 'Severe aortic stenosis (amlodipine component)'],
  },

  'Hydralazine': {
    class: 'Direct Vasodilator', subclass: 'Arteriolar dilator',
    overview: 'Direct arteriolar vasodilator. Now mainly used in: (1) heart failure in combination with nitrates (BiDil — particularly effective in Black patients, A-HeFT trial), (2) hypertension in pregnancy (IV). Causes reflex tachycardia — must be combined with beta-blocker. Drug-induced lupus with long-term use.',
    indications: ['Hypertension in pregnancy (IV — 2nd line after labetalol)', 'Heart failure in Black patients (with nitrates — BiDil, A-HeFT trial)', 'Hypertensive emergency in pregnancy (IV)', 'Refractory hypertension (oral — with beta-blocker)'],
    dosage: 'Oral: 25 mg BD–QDS; titrate to 200 mg/day. IV (hypertensive emergency): 5–10 mg bolus every 20–30 min.',
    mechanism: 'Direct relaxation of arteriolar smooth muscle (mechanism incompletely understood — possibly K⁺ channel activation) → ↓ peripheral resistance → ↓ afterload.',
    sideEffects: ['Reflex tachycardia (must give with beta-blocker)', 'Sodium and water retention (give with diuretic)', 'Drug-induced lupus (>200 mg/day, slow acetylators; antinuclear antibodies — ANA positive)', 'Headache and flushing', 'Peripheral neuropathy (B6 deficiency — supplement if prolonged use)', 'Angina (reflex tachycardia increases O₂ demand)'],
    nursing: ['ALWAYS COMBINE WITH BETA-BLOCKER: reflex tachycardia otherwise increases cardiac work and causes angina', 'DRUG-INDUCED LUPUS: risk increases with dose and duration; ANA monitoring; slow acetylators (genetic — common in White Europeans) at higher risk; usually resolves on stopping', 'IV PREGNANCY use: 5 mg test dose; BP check every 20 min; avoid rapid BP reduction (placental ischaemia)', 'Pyridoxine (vitamin B6) 25 mg OD if prolonged use (peripheral neuropathy prevention)'],
    contraindications: ['Tachycardia (without beta-blocker cover)', 'Cor pulmonale', 'Dissecting aortic aneurysm', 'Systemic lupus erythematosus', 'Myocardial insufficiency due to mechanical obstruction'],
  },

  'Methyldopa': {
    class: 'Centrally Acting Antihypertensive', subclass: 'Alpha-methylnoradrenaline precursor',
    overview: 'Centrally acting antihypertensive. Drug of choice for hypertension in pregnancy alongside labetalol (most evidence for fetal safety). Prodrug converted to alpha-methylnoradrenaline → central alpha-2 agonism. Multiple side effects (sedation, autoimmune haemolytic anaemia) make it poorly tolerated outside pregnancy.',
    indications: ['Hypertension in pregnancy (1st or 2nd line with labetalol)', 'Hypertensive crisis in pregnancy'],
    dosage: '250 mg BD–TDS initially; titrate to 500 mg TDS–QDS. Max 3 g/day.',
    mechanism: 'Prodrug → alpha-methylnoradrenaline → activates central alpha-2 adrenoceptors in brainstem → ↓ sympathetic outflow → ↓ BP.',
    sideEffects: ['Sedation (often significant — may limit use outside pregnancy)', 'Depression', 'Orthostatic hypotension', 'Positive Coombs test (up to 20% — usually without clinical haemolysis)', 'Autoimmune haemolytic anaemia (rare)', 'Hepatotoxicity (rare)', 'Sexual dysfunction (men)', 'Dry mouth', 'Breast engorgement and galactorrhoea'],
    nursing: ['PREGNANCY SAFETY: extensively used and studied in pregnancy — reassurance to patients; no teratogenic effects demonstrated', 'COOMBS TEST: check before starting (baseline); becomes positive in up to 20% on long-term therapy; clinical haemolysis is rare', 'LFTs: baseline and if symptoms (hepatotoxicity)', 'SEDATION: warn about daytime drowsiness — particularly first few weeks; avoid driving', 'DEPRESSION: monitor mood — exacerbates or causes depression', 'Galactorrhoea: dopamine antagonism → hyperprolactinaemia'],
    contraindications: ['Active hepatic disease', 'Depression', 'Phaeochromocytoma', 'Concurrent MAOIs'],
  },

  'Clonidine': {
    class: 'Centrally Acting Antihypertensive', subclass: 'Alpha-2 agonist',
    overview: 'Central alpha-2 agonist → ↓ sympathetic outflow → ↓ BP, HR. Also used for opioid withdrawal (sympatholysis), ADHD (off-label), hot flushes (menopause/cancer therapy), and Tourette syndrome. REBOUND HYPERTENSION on abrupt withdrawal — can be severe.',
    indications: ['Hypertension (resistant — adjunct)', 'Opioid withdrawal (sympatholytic — off-label)', 'Hot flushes (menopause or cancer-related)', 'ADHD (off-label — especially with tics)', 'Tourette syndrome (off-label)', 'Pain (epidural — adjunct analgesic)'],
    dosage: 'Hypertension: 50–150 mcg BD–TDS. Opioid withdrawal: 150–300 mcg TDS (PRN based on withdrawal score). Patch: 100–300 mcg/24 hrs.',
    mechanism: 'Selective alpha-2 adrenoceptor agonism in locus coeruleus and nucleus tractus solitarius → ↓ noradrenaline release → ↓ sympathetic outflow → ↓ BP, HR.',
    sideEffects: ['Sedation (prominent)', 'Dry mouth', 'Constipation', 'REBOUND HYPERTENSION (abrupt withdrawal — severe, may exceed pre-treatment BP)', 'Depression', 'Bradycardia', 'Sexual dysfunction'],
    nursing: ['NEVER STOP ABRUPTLY: rebound hypertension can be severe and dangerous — taper over 1–2 weeks minimum', 'OPIOID WITHDRAWAL: reduces sympathetic autonomic symptoms (tachycardia, sweating, diarrhoea, anxiety) — does NOT reduce cravings', 'SEDATION: warn patients; avoid driving and machinery in first few weeks', 'PATCH: apply to hairless skin on chest or upper arm; change every 7 days; rotate sites; keep out of reach of children (children can be fatally sedated)'],
    contraindications: ['Severe bradycardia', 'AV block', 'Depression', 'Concurrent antidepressants (tricyclics reduce efficacy)'],
  },

  'Minoxidil (Oral)': {
    class: 'Direct Vasodilator', subclass: 'Potassium channel activator — Arteriolar',
    overview: 'Potent arteriolar dilator used only for refractory hypertension not controlled by maximum-dose triple therapy. MUST be given with beta-blocker (reflex tachycardia) AND loop diuretic (severe Na/H₂O retention). Causes hypertrichosis (hair growth) — basis for topical minoxidil for hair loss.',
    indications: ['Resistant hypertension (refractory — last resort for uncontrolled hypertension)', 'Alopecia (topical formulation only — different use)'],
    dosage: 'Oral: 5 mg OD; increase to 10–40 mg OD (max 100 mg).',
    mechanism: 'Activates ATP-sensitive K⁺ channels in arteriolar smooth muscle → membrane hyperpolarisation → vasodilation → ↓ peripheral resistance.',
    sideEffects: ['Hypertrichosis (hair growth — up to 80%; face, back, limbs; reversible on stopping)', 'Severe sodium and fluid retention (can cause pulmonary oedema)', 'Reflex tachycardia', 'Pericardial effusion (rare — long-term use)', 'Hypotension', 'Angina'],
    nursing: ['MUST ALWAYS COMBINE WITH: beta-blocker (tachycardia) AND loop diuretic (fluid retention)', 'HYPERTRICHOSIS: warn patients — very common (80%); facial hair in women may be distressing; reversible within 1–6 months of stopping', 'WEIGHT: daily weights and fluid balance — fluid retention can be severe and rapid', 'PERICARDIAL EFFUSION: if dyspnoea or new pericardial rub — investigate', 'RESERVED FOR RESISTANT HYPERTENSION: only when BP uncontrolled on optimal 3-drug therapy'],
    contraindications: ['Phaeochromocytoma (unless alpha-blocked)', 'Concurrent beta-blocker withheld', 'Acute MI'],
  },

  'Phenoxybenzamine': {
    class: 'Alpha-Blocker (Non-selective)', subclass: 'Irreversible alpha-1 and alpha-2 blocker',
    overview: 'Irreversible, non-selective alpha-adrenoceptor blocker. PRIMARY use: pre-operative preparation for phaeochromocytoma surgery. Must be started ≥10–14 days before surgery, followed by beta-blocker (after alpha blockade established). Prevents catecholamine surge during tumour manipulation.',
    indications: ['Phaeochromocytoma — pre-operative preparation (the primary indication)', 'Neurogenic bladder', 'Hypertensive crisis from phaeochromocytoma'],
    dosage: 'Pre-op phaeochromocytoma: 10 mg OD–BD; increase by 10 mg every 2 days; usual dose 1–2 mg/kg/day.',
    mechanism: 'Irreversible covalent alpha-1 and alpha-2 receptor blockade → sustained vasodilation and postural hypotension. Irreversibility means duration is limited by receptor turnover (~24–48 hrs).',
    sideEffects: ['Significant postural hypotension', 'Reflex tachycardia', 'Nasal congestion', 'Miosis', 'Ejaculatory failure', 'GI upset'],
    nursing: ['ALPHA BEFORE BETA: ALWAYS start alpha-blocker (phenoxybenzamine) at least 2 weeks before adding beta-blocker in phaeochromocytoma — beta-blocker alone in phaeochromocytoma causes paradoxical hypertension (unopposed alpha stimulation)', 'POSTURAL HYPOTENSION: significant — rise slowly; fall risk assessment', 'PRE-OP PREPARATION: surgery should only proceed when: BP controlled, postural hypotension present (indicates adequate alpha blockade), and patient volume-replete', 'ENCOURAGE SALT/FLUID INTAKE: counteracts postural hypotension during pre-op preparation'],
    contraindications: ['Hypotension', 'Congestive heart failure (relative)'],
  },

  'Doxazosin': {
    class: 'Alpha-Blocker (Selective Alpha-1)', subclass: 'Selective alpha-1 adrenoceptor antagonist',
    overview: 'Selective alpha-1 blocker for hypertension and benign prostatic hyperplasia (BPH). Reduces vascular smooth muscle tone (BP) and prostate/urethral tone (urinary flow). ALLHAT trial: alpha-blockers inferior to thiazides for hypertension outcomes (increased HF) — not first-line for uncomplicated hypertension. Useful in men with BPH + hypertension.',
    indications: ['Hypertension (not first-line — adjunct for resistant HTN)', 'Benign prostatic hyperplasia (BPH)', 'Hypertension with concurrent BPH (dual benefit)'],
    dosage: 'Hypertension: 1 mg OD; increase to 2–4 mg OD (max 16 mg OD). BPH: 1 mg OD; titrate to 4–8 mg OD. XL formulation: take at same time daily.',
    mechanism: 'Selective alpha-1 receptor antagonism → vascular smooth muscle relaxation (↓ BP) + smooth muscle relaxation in prostate capsule and bladder neck (↑ urinary flow).',
    sideEffects: ['Postural hypotension (FIRST DOSE EFFECT — significant, especially elderly)', 'Dizziness', 'Syncope (first dose)', 'Oedema', 'Tachycardia', 'Intraoperative Floppy Iris Syndrome (IFIS) — during cataract surgery'],
    nursing: ['FIRST DOSE: take at bedtime (minimises first-dose postural hypotension and syncope); remain recumbent for first few hours', 'INTRAOPERATIVE FLOPPY IRIS SYNDROME: inform ophthalmologist/anaesthetist before ANY eye surgery — iris becomes flaccid, prolapses during cataract surgery; ideally stop 2 weeks before surgery but once taking, damage may already occur; ALWAYS document in records', 'POSTURAL BP CHECK at each visit', 'BPH: improvement in urinary flow within 1–2 weeks; sexual side effects less than 5-alpha reductase inhibitors (ejaculation preserved)', 'ALLHAT: do not use as monotherapy for hypertension if HF risk is high (↑ new HF vs chlorthalidone)'],
    contraindications: ['History of postural hypotension', 'Aortic or mitral stenosis (fixed preload requirement)', 'Heart failure (ALLHAT — worsens outcomes)'],
  },

  'Sodium Nitroprusside': {
    class: 'Direct Vasodilator', subclass: 'Nitric oxide donor — IV only — Hypertensive emergency',
    overview: 'Most potent and fastest-acting antihypertensive available — for use ONLY in ICU/HDU with continuous arterial BP monitoring. Dilates both arteries and veins (balanced vasodilator). Metabolised to cyanide (thiocyanate) → cyanide toxicity with prolonged infusion, especially in renal failure. Light-sensitive — protect from light.',
    indications: ['Hypertensive emergency (malignant hypertension, hypertensive encephalopathy, aortic dissection)', 'Acute severe HF (unloading agent — reduces preload and afterload)', 'Intraoperative controlled hypotension'],
    dosage: '0.3–10 mcg/kg/min IV; titrate. Start low, increase every 5 min. ICU setting ONLY.',
    mechanism: 'Releases nitric oxide (NO) spontaneously → ↑ cGMP → smooth muscle relaxation → balanced vasodilation (arteries and veins equally). Also releases cyanide (CN⁻) as metabolite → binds cytochrome c oxidase → cellular hypoxia (cyanide toxicity).',
    sideEffects: ['Hypotension (dose-dependent — rapidly reversible on stopping)', 'Cyanide toxicity (prolonged infusion, renal failure, malnutrition): metabolic acidosis, altered consciousness, cardiac arrhythmias', 'Thiocyanate toxicity (chronic renal failure): confusion, seizures', 'Reflex tachycardia', 'Nausea', 'Methaemoglobinaemia (rare)'],
    nursing: ['ICU ONLY: must have intra-arterial line (beat-to-beat BP monitoring) — never use on a ward without continuous invasive monitoring', 'LIGHT PROTECTION: wrap infusion bag and tubing in foil — degrades rapidly in light (turns blue/green/red → discard)', 'MAXIMUM DURATION: 72 hrs at full dose; total dose limit ~1.5 mg/kg', 'CYANIDE TOXICITY MONITORING: lactic acidosis is earliest sign; if suspected → stop infusion; hydroxocobalamin or sodium thiosulphate as antidote', 'RENAL IMPAIRMENT: thiocyanate accumulates → monitor thiocyanate levels if >48 hrs infusion'],
    contraindications: ['Compensatory hypertension (coarctation of aorta, AV shunt)', 'Severe hepatic failure (CN metabolism impaired)', 'Leber optic atrophy', 'Tobacco amblyopia'],
  },

};

// ============================================================
// INTEGRATION INSTRUCTIONS
// ============================================================
// Add the entries from CVS_DRUG_PROFILES into your main
// DRUG_PROFILES object in drugProfiles.js:
//
// import { CVS_DRUG_PROFILES } from './drugProfiles_CVS_expanded';
//
// export const DRUG_PROFILES = {
//   ...CNS_DRUG_PROFILES,
//   ...CVS_DRUG_PROFILES,
//   // ... remaining classes below
// };
// ============================================================
// DRUG COUNT SUMMARY
// ============================================================
//  1.  ACE Inhibitors                     : 6 drugs
//  2.  ARBs                               : 6 drugs
//  3.  Beta-Blockers                      : 8 drugs
//  4.  Calcium Channel Blockers           : 5 drugs
//  5.  Loop Diuretics                     : 3 drugs
//  6.  Thiazide Diuretics                 : 4 drugs
//  7.  Potassium-Sparing Diuretics        : 4 drugs
//  8.  Nitrates                           : 3 drugs
//  9.  Statins                            : 6 drugs
// 10.  Other Lipid-Lowering Agents        : 5 drugs
// 11.  Antiplatelet Drugs                 : 5 drugs
// 12.  Anticoagulants — VKAs              : 2 drugs
// 13.  Anticoagulants — Heparin/LMWH     : 4 drugs
// 14.  DOACs                              : 4 drugs
// 15.  Antiarrhythmics                    : 7 drugs
// 16.  Vasopressors & Inotropes           : 4 drugs
// 17.  Heart Failure newer agents         : 4 drugs
// 18.  Other antihypertensives            : 6 drugs
// ─────────────────────────────────────────────────────────────
// TOTAL CVS DRUGS IN THIS FILE            : ~96 drugs
// ============================================================
