import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_DRUGS, DRUG_CLASSES } from '../data/drugClasses';
import DrugClassBrowse from '../components/DrugClassBrowse';

const QUICK_DRUGS = [
  'Paracetamol (Acetaminophen)', 'Metformin', 'Atorvastatin',
  'Furosemide (Frusemide)', 'Amoxicillin', 'Omeprazole',
  'Morphine', 'Salbutamol (Albuterol)', 'Ciprofloxacin',
  'Prednisolone', 'Metronidazole', 'Diazepam',
];

// Keyword → drug names map for indication/use searching
// Covers common clinical terms users might type
const INDICATION_MAP = [
  { keywords: ['pain', 'analgesic', 'analgesia', 'painkiller', 'headache', 'fever', 'pyrexia', 'antipyretic'], drugs: ['Paracetamol (Acetaminophen)', 'Ibuprofen', 'Aspirin', 'Morphine', 'Codeine', 'Tramadol', 'Naproxen', 'Diclofenac', 'Ketorolac', 'Mefenamic Acid', 'Fentanyl', 'Oxycodone', 'Pethidine (Meperidine)', 'Buprenorphine'] },
  { keywords: ['diabetes', 'diabetic', 'blood sugar', 'glucose', 'hyperglycemia', 'hyperglycaemia', 'insulin resistance', 'type 2', 'type 1'], drugs: ['Metformin', 'Insulin Regular (Actrapid)', 'Insulin Glargine (Lantus)', 'Insulin NPH (Insulatard)', 'Glibenclamide', 'Glimepiride', 'Gliclazide', 'Empagliflozin', 'Dapagliflozin', 'Sitagliptin', 'Semaglutide', 'Liraglutide', 'Exenatide'] },
  { keywords: ['hypertension', 'high blood pressure', 'bp', 'antihypertensive', 'blood pressure'], drugs: ['Amlodipine', 'Lisinopril', 'Ramipril', 'Losartan', 'Atenolol', 'Metoprolol', 'Bisoprolol', 'Furosemide (Frusemide)', 'Hydrochlorothiazide', 'Valsartan', 'Candesartan', 'Nifedipine', 'Carvedilol', 'Indapamide'] },
  { keywords: ['infection', 'antibiotic', 'bacterial', 'sepsis', 'septicemia', 'septicaemia', 'antimicrobial'], drugs: ['Amoxicillin', 'Co-Amoxiclav', 'Ciprofloxacin', 'Metronidazole', 'Ceftriaxone (3rd Gen)', 'Gentamicin', 'Vancomycin', 'Meropenem', 'Azithromycin', 'Doxycycline', 'Flucloxacillin', 'Piperacillin-Tazobactam'] },
  { keywords: ['malaria', 'antimalarial', 'plasmodium', 'falciparum', 'vivax'], drugs: ['Artemether-Lumefantrine (Coartem)', 'Chloroquine', 'Quinine', 'Artesunate', 'Mefloquine', 'Primaquine', 'Atovaquone-Proguanil (Malarone)'] },
  { keywords: ['asthma', 'bronchospasm', 'wheeze', 'wheezing', 'bronchodilator', 'copd', 'respiratory', 'breathing'], drugs: ['Salbutamol (Albuterol)', 'Beclometasone', 'Budesonide', 'Fluticasone', 'Tiotropium (LAMA)', 'Ipratropium (SAMA)', 'Montelukast', 'Theophylline', 'Salmeterol', 'Formoterol'] },
  { keywords: ['heart failure', 'cardiac failure', 'ccf', 'chf', 'oedema', 'edema', 'fluid overload', 'diuretic'], drugs: ['Furosemide (Frusemide)', 'Spironolactone', 'Enalapril', 'Carvedilol', 'Bisoprolol', 'Digoxin', 'Eplerenone', 'Empagliflozin', 'Dapagliflozin', 'Milrinone'] },
  { keywords: ['cholesterol', 'lipid', 'dyslipidemia', 'dyslipidaemia', 'statin', 'triglyceride', 'hyperlipidemia', 'hyperlipidaemia'], drugs: ['Atorvastatin', 'Rosuvastatin', 'Simvastatin', 'Fenofibrate', 'Ezetimibe', 'Omega-3 Fatty Acids', 'Evolocumab', 'Pravastatin'] },
  { keywords: ['ulcer', 'gastric', 'stomach', 'acid', 'heartburn', 'gerd', 'gord', 'reflux', 'ppi', 'proton pump', 'h pylori'], drugs: ['Omeprazole', 'Pantoprazole', 'Lansoprazole', 'Esomeprazole', 'Ranitidine', 'Famotidine', 'Magnesium Trisilicate', 'Aluminium Hydroxide'] },
  { keywords: ['nausea', 'vomiting', 'antiemetic', 'emesis', 'motion sickness'], drugs: ['Metoclopramide', 'Ondansetron', 'Promethazine', 'Domperidone', 'Cyclizine', 'Prochlorperazine', 'Granisetron'] },
  { keywords: ['constipation', 'laxative', 'bowel', 'stool', 'aperient'], drugs: ['Lactulose', 'Bisacodyl', 'Senna', 'Macrogol (Movicol)', 'Ispaghula Husk', 'Glycerine Suppositories', 'Docusate'] },
  { keywords: ['diarrhea', 'diarrhoea', 'loose stool', 'gastroenteritis', 'antidiarrheal'], drugs: ['Loperamide', 'Oral Rehydration Salts (ORS)', 'Metronidazole', 'Ciprofloxacin'] },
  { keywords: ['anxiety', 'anxiolytic', 'sedation', 'sedative', 'panic', 'agitation'], drugs: ['Diazepam', 'Lorazepam', 'Alprazolam', 'Midazolam', 'Buspirone', 'Sertraline', 'Escitalopram', 'Clonazepam'] },
  { keywords: ['depression', 'antidepressant', 'mood', 'ssri', 'snri', 'depressive'], drugs: ['Sertraline', 'Fluoxetine', 'Escitalopram', 'Citalopram', 'Venlafaxine', 'Duloxetine', 'Amitriptyline', 'Mirtazapine'] },
  { keywords: ['psychosis', 'antipsychotic', 'schizophrenia', 'bipolar', 'mania', 'hallucination'], drugs: ['Haloperidol', 'Chlorpromazine', 'Risperidone', 'Olanzapine', 'Quetiapine', 'Clozapine', 'Aripiprazole', 'Lithium'] },
  { keywords: ['seizure', 'epilepsy', 'epileptic', 'convulsion', 'anticonvulsant', 'antiepileptic', 'status epilepticus'], drugs: ['Phenytoin', 'Carbamazepine', 'Sodium Valproate', 'Levetiracetam', 'Lamotrigine', 'Diazepam', 'Lorazepam', 'Phenobarbitone', 'Clonazepam'] },
  { keywords: ['anticoagulant', 'blood thinner', 'clot', 'dvt', 'pe', 'pulmonary embolism', 'thrombosis', 'thromboembolism', 'afib', 'atrial fibrillation', 'warfarin', 'heparin'], drugs: ['Warfarin', 'Heparin (Unfractionated)', 'Enoxaparin (LMWH)', 'Rivaroxaban', 'Apixaban', 'Dabigatran', 'Dalteparin (LMWH)', 'Fondaparinux'] },
  { keywords: ['antiplatelet', 'stroke', 'mi', 'myocardial infarction', 'heart attack', 'acs', 'coronary'], drugs: ['Aspirin (low dose)', 'Clopidogrel', 'Ticagrelor', 'Prasugrel', 'Dipyridamole', 'Glyceryl Trinitrate (GTN/Nitroglycerin)'] },
  { keywords: ['hypothyroid', 'thyroid', 'hypothyroidism', 'levothyroxine', 'thyroxine'], drugs: ['Levothyroxine (T4)', 'Liothyronine (T3)', 'Carbimazole', 'Propylthiouracil'] },
  { keywords: ['hiv', 'aids', 'antiretroviral', 'arv', 'art', 'retroviral'], drugs: ['Tenofovir (TDF)', 'Lamivudine (3TC)', 'Efavirenz (EFV)', 'Dolutegravir', 'Nevirapine (NVP)', 'Lopinavir/Ritonavir (LPV/r)', 'Zidovudine (AZT)', 'Emtricitabine'] },
  { keywords: ['tuberculosis', 'tb', 'mycobacterium', 'anti-tb'], drugs: ['Isoniazid (INH)', 'Rifampicin', 'Pyrazinamide', 'Ethambutol', 'Streptomycin'] },
  { keywords: ['fungal', 'antifungal', 'candida', 'candidiasis', 'thrush', 'tinea', 'ringworm', 'aspergillus'], drugs: ['Fluconazole', 'Itraconazole', 'Nystatin', 'Clotrimazole', 'Voriconazole', 'Amphotericin B', 'Terbinafine'] },
  { keywords: ['worm', 'helminth', 'deworming', 'roundworm', 'hookworm', 'tapeworm', 'anthelmintic', 'parasite'], drugs: ['Albendazole', 'Mebendazole', 'Praziquantel', 'Ivermectin', 'Pyrantel', 'Levamisole'] },
  { keywords: ['steroid', 'corticosteroid', 'anti-inflammatory', 'inflammation', 'allergic', 'allergy', 'autoimmune', 'immunosuppressant'], drugs: ['Prednisolone', 'Hydrocortisone', 'Dexamethasone', 'Methylprednisolone', 'Betamethasone', 'Budesonide', 'Fludrocortisone'] },
  { keywords: ['parkinsons', "parkinson's", 'parkinson', 'tremor', 'rigidity', 'levodopa'], drugs: ["Levodopa-Carbidopa (Sinemet)", 'Levodopa', 'Pramipexole', 'Ropinirole', 'Amantadine', 'Selegiline', 'Entacapone'] },
  { keywords: ['muscle relaxant', 'spasm', 'spasticity', 'cramp', 'muscle pain'], drugs: ['Baclofen', 'Diazepam', 'Tizanidine', 'Dantrolene', 'Suxamethonium', 'Vecuronium', 'Rocuronium'] },
  { keywords: ['migraine', 'headache', 'triptan'], drugs: ['Sumatriptan', 'Rizatriptan', 'Paracetamol (Acetaminophen)', 'Ibuprofen', 'Ergotamine', 'Propranolol', 'Topiramate'] },
  { keywords: ['contraceptive', 'contraception', 'pregnancy prevention', 'family planning', 'pill', 'birth control'], drugs: ['Combined Oral Contraceptive Pill (COCP)', 'Progesterone-Only Pill (POP)', 'Emergency Contraception (Levonorgestrel)', 'Medroxyprogesterone', 'Levonorgestrel'] },
  { keywords: ['anaesthetic', 'anesthetic', 'anaesthesia', 'anesthesia', 'sedation', 'induction', 'intubation'], drugs: ['Propofol', 'Ketamine', 'Midazolam', 'Thiopentone', 'Lidocaine', 'Bupivacaine', 'Suxamethonium', 'Rocuronium', 'Fentanyl'] },
  { keywords: ['gout', 'uric acid', 'allopurinol', 'hyperuricemia', 'hyperuricaemia'], drugs: ['Colchicine', 'Allopurinol', 'Febuxostat', 'Indomethacin', 'Prednisolone'] },
  { keywords: ['cancer', 'chemotherapy', 'oncology', 'tumour', 'tumor', 'malignancy', 'cytotoxic', 'antineoplastic'], drugs: ['Methotrexate', 'Cyclophosphamide', 'Cisplatin', 'Paclitaxel', 'Docetaxel', 'Vincristine', 'Doxorubicin', 'Tamoxifen', 'Imatinib (Gleevec)', 'Trastuzumab (Herceptin)'] },
  { keywords: ['immunosuppression', 'transplant', 'rejection', 'autoimmune', 'rheumatoid arthritis', 'ra', 'lupus', 'sle', 'crohns', 'ibd'], drugs: ['Methotrexate', 'Azathioprine', 'Ciclosporin', 'Tacrolimus', 'Mycophenolate Mofetil', 'Prednisolone', 'Hydroxychloroquine', 'Infliximab', 'Adalimumab'] },
  { keywords: ['osteoporosis', 'bone', 'bisphosphonate', 'fracture', 'calcium', 'vitamin d'], drugs: ['Alendronate', 'Risedronate', 'Calcium Carbonate', 'Cholecalciferol', 'Zoledronic Acid', 'Denosumab'] },
  { keywords: ['arrhythmia', 'atrial fibrillation', 'af', 'tachycardia', 'bradycardia', 'antiarrhythmic'], drugs: ['Amiodarone', 'Digoxin', 'Adenosine', 'Atenolol', 'Metoprolol', 'Flecainide', 'Sotalol', 'Verapamil', 'Diltiazem'] },
  { keywords: ['anaemia', 'anemia', 'iron deficiency', 'iron', 'haemoglobin', 'hemoglobin', 'erythropoietin'], drugs: ['Ferrous Sulphate', 'Ferric Carboxymaltose', 'Erythropoietin', 'Folic Acid', 'Cyanocobalamin (B12)', 'Hydroxocobalamin'] },
  { keywords: ['pcos', 'polycystic', 'ovary', 'fertility', 'ovulation', 'infertility', 'clomid'], drugs: ['Metformin', 'Clomifene', 'Letrozole', 'Progesterone', 'Gonadotropin-Releasing Hormone', 'FSH (Follitropin Alpha/Beta)'] },
  { keywords: ['preeclampsia', 'eclampsia', 'pregnancy', 'obstetric', 'labour', 'labor', 'oxytocin', 'postpartum'], drugs: ['Magnesium Sulfate', 'Labetalol', 'Nifedipine', 'Hydralazine', 'Oxytocin', 'Ergometrine', 'Dexamethasone'] },
  { keywords: ['renal', 'kidney', 'ckd', 'aki', 'dialysis', 'nephropathy', 'proteinuria'], drugs: ['Furosemide (Frusemide)', 'Spironolactone', 'Lisinopril', 'Losartan', 'Calcium Carbonate', 'Sevelamer', 'Erythropoietin'] },
  { keywords: ['liver', 'hepatic', 'hepatitis', 'cirrhosis', 'hbv', 'hcv', 'hepatitis b', 'hepatitis c'], drugs: ['Tenofovir (TDF)', 'Entecavir', 'Lamivudine (3TC)', 'Sofosbuvir', 'Ribavirin', 'Prednisolone', 'Ursodeoxycholic Acid', 'Lactulose', 'Rifaximin'] },
  { keywords: ['shock', 'vasopressor', 'inotrope', 'septic shock', 'hypotension', 'resuscitation'], drugs: ['Noradrenaline (Norepinephrine)', 'Adrenaline (Epinephrine)', 'Dopamine', 'Dobutamine', 'Vasopressin', 'Phenylephrine', 'Milrinone'] },
];

function getDrugMeta(name) {
  for (const cls of DRUG_CLASSES) {
    for (const sub of cls.subclasses) {
      if (sub.drugs.includes(name)) {
        return { class: cls.name, subclass: sub.name, icon: cls.icon };
      }
    }
  }
  return { class: '', subclass: '', icon: '💊' };
}

function searchDrugs(term) {
  if (!term || term.trim().length < 1) return [];
  const t = term.toLowerCase().trim();

  const nameMatches = ALL_DRUGS.filter(d =>
    d.name.toLowerCase().includes(t) ||
    d.subclass.toLowerCase().includes(t) ||
    d.class.toLowerCase().includes(t)
  ).map(d => d.name);

  // Search indication map
  const indicationMatches = [];
  for (const entry of INDICATION_MAP) {
    if (entry.keywords.some(kw => kw.includes(t) || t.includes(kw))) {
      indicationMatches.push(...entry.drugs);
    }
  }

  // Merge, deduplicate, preserve order (name matches first)
  const seen = new Set();
  const merged = [];
  for (const name of [...nameMatches, ...indicationMatches]) {
    if (!seen.has(name)) {
      seen.add(name);
      merged.push(name);
    }
  }

  return merged.slice(0, 48);
}

export default function DrugSearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();

  function handleSearch(val) {
    setQuery(val);
    if (val.trim().length < 1) { setResults([]); setSearched(false); return; }
    const found = searchDrugs(val);
    setResults(found);
    setSearched(true);
  }

  function handleQuick(name) {
    setQuery(name);
    setResults(searchDrugs(name));
    setSearched(true);
  }

  function goToDrug(name) {
    navigate(`/drug/${encodeURIComponent(name)}`);
  }

  return (
    <div style={{ animation: 'fadeUp 0.3s ease both' }}>
      {/* Search box */}
      <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          background: 'rgba(255,255,255,0.82)', border: '1.5px solid rgba(255,255,255,0.6)',
          borderRadius: 18, padding: '5px 5px 5px 20px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18)', backdropFilter: 'blur(20px)',
        }}>
          <span style={{ fontSize: 16, opacity: 0.5, marginRight: 10 }}>💊</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Search by name, class, or use (e.g. malaria, pain, diabetes…)"
            style={{
              flex: 1, background: 'transparent', border: 'none', color: '#1e2d2f',
              fontSize: 15, fontFamily: "'Times New Roman', serif", fontWeight: 700,
              padding: '13px 0', outline: 'none',
            }}
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setResults([]); setSearched(false); inputRef.current?.focus(); }}
              style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#7a9ea4', padding: '0 10px' }}
            >✕</button>
          )}
        </div>

        {/* Search hint */}
        <div style={{ marginTop: 8, textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 1 }}>
          Search by drug name · class · indication · condition · use
        </div>
      </div>

      {/* Browse by class */}
      <DrugClassBrowse />

      {/* Quick chips */}
      {!searched && (
        <div style={{ marginTop: 18 }}>
          <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Quick search</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {QUICK_DRUGS.map(d => (
              <button key={d} onClick={() => handleQuick(d)} style={chipStyle}>{d}</button>
            ))}
          </div>
          {/* Indication chips */}
          <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 2, textTransform: 'uppercase', marginTop: 18, marginBottom: 10 }}>Search by condition</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {['malaria', 'pain', 'diabetes', 'hypertension', 'infection', 'asthma', 'HIV', 'tuberculosis', 'heart failure', 'seizure', 'depression', 'nausea', 'cancer', 'fungal'].map(c => (
              <button key={c} onClick={() => handleSearch(c)} style={{ ...chipStyle, background: 'rgba(74,155,168,0.15)', borderColor: 'rgba(74,155,168,0.4)', color: '#1e3a3f' }}>{c}</button>
            ))}
          </div>
        </div>
      )}

      {/* Results count */}
      {searched && (
        <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 4 }}>
          <span style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", color: 'rgba(255,255,255,0.6)', letterSpacing: 2, textTransform: 'uppercase' }}>
            {results.length} drug{results.length !== 1 ? 's' : ''} found for "{query}"
          </span>
        </div>
      )}

      {/* Drug cards grid */}
      {searched && results.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14, marginTop: 16 }}>
          {results.map((name, idx) => {
            const meta = getDrugMeta(name);
            return (
              <button
                key={name}
                onClick={() => goToDrug(name)}
                style={{
                  background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  borderTop: '3px solid #8b6347',
                  borderRadius: 16, padding: 20,
                  cursor: 'pointer', textAlign: 'left',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                  transition: 'all 0.2s',
                  animation: `fadeUp 0.3s ease ${idx * 0.03}s both`,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)'; }}
              >
                <div style={{ fontSize: 22, marginBottom: 8 }}>{meta.icon}</div>
                <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 16, color: '#1e2d2f', marginBottom: 6, lineHeight: 1.3 }}>
                  {name}
                </div>
                {meta.subclass && (
                  <div style={{
                    display: 'inline-block', background: 'rgba(139,99,71,0.1)', color: '#6b4a32',
                    border: '1px solid rgba(139,99,71,0.25)', borderRadius: 20,
                    padding: '3px 10px', fontSize: 10, fontFamily: "'Fira Code', monospace",
                    letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8,
                  }}>{meta.subclass}</div>
                )}
                {meta.class && (
                  <div style={{ fontSize: 12, color: '#7a9ea4', lineHeight: 1.4 }}>{meta.class}</div>
                )}
                <div style={{ marginTop: 12, fontSize: 11, color: '#4a9ba8', fontFamily: "'Fira Code', monospace" }}>
                  Tap for full profile →
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* No results */}
      {searched && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px 16px' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>💊</div>
          <div style={{ fontSize: 15, fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#1e2d2f' }}>
            No drugs found for "{query}"
          </div>
          <div style={{ fontSize: 13, color: '#3d5a5f', marginTop: 8 }}>
            Try a different name, condition, or browse by class below
          </div>
        </div>
      )}
    </div>
  );
}

const chipStyle = {
  background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, color: '#1e2d2f',
  padding: '7px 16px', fontSize: 12, fontWeight: 700,
  cursor: 'pointer', transition: 'all 0.2s',
  fontFamily: "'Times New Roman', serif",
};
