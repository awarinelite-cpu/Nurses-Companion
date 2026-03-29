// ============================================================
// drugProfiles_CNS_expanded.js
// FULL CNS SECTION — Drop-in replacement for the CNS entries
// in drugProfiles.js. Paste these entries into DRUG_PROFILES.
//
// SUBCLASSES COVERED:
//   1. Benzodiazepines & Z-drugs (anxiolytics / hypnotics)
//   2. Non-benzodiazepine anxiolytics
//   3. Typical antipsychotics
//   4. Atypical antipsychotics
//   5. SSRIs
//   6. SNRIs
//   7. TCAs
//   8. MAOIs
//   9. Other antidepressants (NaSSA, NDRI, SARI, melatonergic)
//  10. Mood stabilisers
//  11. Anticonvulsants / anti-epileptics
//  12. Opioid analgesics
//  13. Non-opioid analgesics (CNS-acting)
//  14. General anaesthetics (IV & inhalational)
//  15. Local anaesthetics
//  16. Neuromuscular blocking agents
//  17. Anticholinesterases / reversal agents
//  18. Anti-Parkinson drugs
//  19. Anti-dementia drugs
//  20. Drugs for ADHD
//  21. Drugs for migraine
//  22. Drugs for substance misuse / dependence
// ============================================================

export const CNS_DRUG_PROFILES = {

  // ══════════════════════════════════════════════════════════
  // 1. BENZODIAZEPINES & Z-DRUGS
  // ══════════════════════════════════════════════════════════

  'Diazepam': {
    class: 'Benzodiazepine', subclass: 'Anxiolytic / Hypnotic / Anticonvulsant',
    overview: 'Long-acting benzodiazepine with anxiolytic, anticonvulsant, muscle-relaxant, and amnesic properties. Half-life 20–100 hrs (active metabolite desmethyldiazepam adds further duration).',
    indications: ['Generalised anxiety disorder', 'Status epilepticus (IV/rectal)', 'Alcohol withdrawal (CIWA protocol)', 'Muscle spasm (oral)', 'Pre-operative sedation', 'Febrile seizures (rectal)'],
    dosage: 'Anxiety: 2–10 mg PO TDS–QDS. Status epilepticus: 5–10 mg IV slowly (repeat once after 10 min). Alcohol withdrawal: 10–20 mg PO PRN (symptom-triggered or fixed-schedule). Rectal tube: 5–10 mg.',
    mechanism: 'Positive allosteric modulator of GABA-A receptor → ↑ frequency of Cl⁻ channel opening → neuronal hyperpolarisation → CNS depression.',
    sideEffects: ['Sedation and drowsiness', 'Respiratory depression (especially IV)', 'Anterograde amnesia', 'Ataxia and falls (elderly)', 'Paradoxical agitation and aggression (especially in elderly/children)', 'Dependence and tolerance with >2–4 weeks use', 'Rebound anxiety on withdrawal'],
    nursing: ['Monitor respiratory rate and O₂ saturation after IV dosing — resuscitation equipment must be at hand', 'Have flumazenil (reversal agent) available for IV use', 'NEVER abruptly discontinue after prolonged use — taper over weeks to months', 'Fall precautions in elderly — high-risk for hip fracture', 'Do not mix IV preparation with other drugs in the same syringe', 'Counsel patients: do not drive or operate machinery', 'Alcohol markedly potentiates CNS and respiratory depression'],
    contraindications: ['Respiratory depression or failure', 'Myasthenia gravis', 'Severe hepatic impairment', 'Sleep apnoea syndrome', 'Acute narrow-angle glaucoma', 'Pregnancy (especially 1st trimester — neonatal withdrawal/floppy infant)'],
  },

  'Lorazepam': {
    class: 'Benzodiazepine', subclass: 'Anxiolytic / Anticonvulsant',
    overview: 'Intermediate-acting benzodiazepine (half-life 10–20 hrs). Preferred IV anticonvulsant for status epilepticus due to rapid CNS entry and reliable duration. No active metabolites — safer in hepatic impairment.',
    indications: ['Status epilepticus (first-line IV)', 'Acute anxiety and panic attacks', 'Pre-operative sedation and anxiolysis', 'Acute alcohol withdrawal agitation', 'Adjunct in chemotherapy-induced nausea'],
    dosage: 'Status epilepticus: 0.1 mg/kg IV (max 4 mg/dose); repeat once after 10 min if needed. Anxiety: 0.5–2 mg PO BD–TDS. Premed: 1–4 mg IM 1–2 hrs pre-procedure.',
    mechanism: 'GABA-A potentiation → CNS inhibition. Less lipophilic than diazepam → slower redistribution → more sustained anticonvulsant effect at the CNS.',
    sideEffects: ['Sedation', 'Respiratory depression (especially IV)', 'Anterograde amnesia (often clinically useful)', 'Hypotension (IV)', 'Paradoxical excitement', 'Dependence'],
    nursing: ['IV: inject at no more than 2 mg/min; have resuscitation equipment ready', 'Keep the patient recumbent for at least 30 min after IV dose', 'Do not use if solution is discoloured or contains precipitate', 'Monitor level of consciousness hourly after dose', 'IM onset ~20–30 min; IV onset 1–5 min', 'Short-term use only for anxiety — dependence develops within 2–4 weeks'],
    contraindications: ['Respiratory failure', 'Acute narrow-angle glaucoma', 'Severe hepatic disease', 'Myasthenia gravis'],
  },

  'Alprazolam': {
    class: 'Benzodiazepine', subclass: 'Anxiolytic (high-potency, short-acting)',
    overview: 'High-potency short-acting benzodiazepine (half-life 6–12 hrs). First-line pharmacotherapy for panic disorder in many guidelines. High dependence and abuse potential — major concern.',
    indications: ['Panic disorder (with or without agoraphobia)', 'Generalised anxiety disorder', 'Social anxiety disorder'],
    dosage: 'Panic disorder: 0.5–1 mg TDS; titrate to 1–4 mg/day. GAD: 0.25–0.5 mg TDS. Max 4 mg/day. XR formulation available (OD dosing).',
    mechanism: 'GABA-A potentiation → rapid anxiolysis and antipanic effects.',
    sideEffects: ['Physical and psychological dependence (very high risk)', 'Sedation', 'Memory and cognitive impairment', 'Rebound panic and anxiety between doses', 'Depression', 'Abuse potential'],
    nursing: ['HIGHEST abuse potential of commonly used benzodiazepines — monitor for signs of misuse', 'NEVER stop abruptly — risk of withdrawal seizures and severe rebound panic; taper over months', 'Educate strongly: not for long-term use (>4 weeks)', 'Do not combine with opioids, alcohol, or other CNS depressants', 'Obtain baseline mental status; monitor depression throughout therapy'],
    contraindications: ['Acute narrow-angle glaucoma', 'Severe respiratory depression', 'Pregnancy', 'Alcohol intoxication'],
  },

  'Clonazepam': {
    class: 'Benzodiazepine', subclass: 'Anticonvulsant / Anxiolytic',
    overview: 'Long-acting benzodiazepine (half-life 18–60 hrs) with strong anticonvulsant properties. Used in epilepsy, panic disorder, and movement disorders. Tolerance to anticonvulsant effect develops over months.',
    indications: ['Absence seizures', 'Myoclonic epilepsy', 'Lennox-Gastaut syndrome (adjunct)', 'Panic disorder', 'Restless legs syndrome', 'Acute mania (adjunct)'],
    dosage: 'Epilepsy: 0.5 mg BD initially; increase by 0.5 mg every 3 days to 4–8 mg/day. Panic disorder: 0.25–1 mg BD. Max 20 mg/day.',
    mechanism: 'GABA-A enhancement → raises seizure threshold; long half-life gives sustained anticonvulsant coverage.',
    sideEffects: ['Sedation (often problematic)', 'Ataxia', 'Behavioural disturbance (especially in children)', 'Cognitive impairment', 'Tolerance to anticonvulsant effect', 'Withdrawal seizures if abruptly stopped', 'Hypersalivation'],
    nursing: ['Taper dose very slowly when discontinuing — withdrawal seizures can be life-threatening', 'Assess for mood and behavioural changes regularly (especially in children)', 'Warn about next-day sedation and driving impairment', 'Fall risk in elderly and ataxic patients', 'Monitor for tolerance (increasing seizure frequency after initial control)', 'Caution in respiratory disease'],
    contraindications: ['Severe hepatic disease', 'Respiratory failure', 'Myasthenia gravis', 'Acute narrow-angle glaucoma'],
  },

  'Midazolam': {
    class: 'Benzodiazepine', subclass: 'Ultra-short-acting Sedative / Anaesthetic adjunct',
    overview: 'Ultra-short-acting water-soluble benzodiazepine (half-life 1.5–2.5 hrs). Water-soluble at low pH but lipophilic at physiological pH — allows IM/IV/buccal/intranasal routes. Causes profound anterograde amnesia — used for procedural sedation and anaesthetic induction.',
    indications: ['Procedural sedation (endoscopy, cardioversion, minor procedures)', 'Induction and maintenance of anaesthesia', 'ICU sedation (infusion)', 'Status epilepticus (buccal — paediatric/community)', 'Pre-operative anxiolysis', 'Palliative sedation (SC infusion via syringe driver)'],
    dosage: 'Procedural sedation: 1–2.5 mg IV over 2 min; titrate with 0.5–1 mg increments. ICU infusion: 0.02–0.1 mg/kg/hr. Buccal (seizures): 10 mg (adult), 0.2–0.5 mg/kg (child). Premedication: 0.07–0.1 mg/kg IM.',
    mechanism: 'Rapid GABA-A potentiation → sedation, anxiolysis, anterograde amnesia, anticonvulsant effect, and muscle relaxation. Hepatically metabolised (active metabolite α-hydroxy-midazolam accumulates in renal failure).',
    sideEffects: ['Respiratory depression (dose-dependent — can be profound)', 'Apnoea (with rapid IV)', 'Hypotension', 'Anterograde amnesia (clinically useful but patient must consent beforehand)', 'Paradoxical excitement (elderly, children)', 'Hiccups', 'Pain at IV site'],
    nursing: ['MUST have resuscitation equipment, oxygen, and flumazenil immediately available during IV use', 'Monitor O₂ saturation and respiratory rate continuously during sedation', 'Titrate IV slowly — 2 min between increments (elderly: even slower)', 'Obtain informed consent before administration (patient will have amnesia)', 'Buccal route: apply between cheek and gum; time seizure and call emergency services if not resolved in 10 min', 'ICU: daily sedation holds (SAT protocol) to prevent accumulation and prolonged ventilation'],
    contraindications: ['Respiratory failure (except palliative/ICU where ventilation available)', 'Severe hepatic impairment', 'Hypersensitivity', 'Myasthenia gravis'],
  },

  'Temazepam': {
    class: 'Benzodiazepine', subclass: 'Hypnotic',
    overview: 'Intermediate-acting benzodiazepine (half-life 8–20 hrs) specifically marketed for insomnia. More selective hypnotic than diazepam. Controlled substance with significant abuse history.',
    indications: ['Short-term treatment of insomnia (sleep-onset and sleep-maintenance)', 'Pre-operative sedation'],
    dosage: '10–20 mg PO 30 min before bedtime. Elderly: 10 mg. Max 4 weeks use.',
    mechanism: 'GABA-A modulation → ↓ sleep latency, ↑ sleep duration. Does not significantly suppress REM sleep at therapeutic doses.',
    sideEffects: ['Residual morning sedation', 'Dependence', 'Rebound insomnia on stopping', 'Tolerance (develops within 1–2 weeks)', 'Memory impairment', 'Paradoxical excitement (elderly)'],
    nursing: ['Maximum 4 weeks continuous use — document indication and planned duration', 'Counsel on sleep hygiene as primary treatment', 'Do not prescribe to patients with alcohol or drug misuse history', 'Morning hangover — warn about driving impairment next day', 'Fall risk in elderly — avoid if possible'],
    contraindications: ['Respiratory depression', 'Sleep apnoea', 'Severe hepatic disease', 'Myasthenia gravis', 'Pregnancy'],
  },

  'Nitrazepam': {
    class: 'Benzodiazepine', subclass: 'Hypnotic',
    overview: 'Long-acting hypnotic benzodiazepine (half-life 15–38 hrs) largely superseded by shorter-acting agents. Still used in myoclonic epilepsy in children.',
    indications: ['Short-term insomnia (rarely used now)', 'Myoclonic and akinetic seizures in children (Lennox-Gastaut)'],
    dosage: 'Insomnia: 5–10 mg PO at bedtime. Epilepsy (children): 0.3–1 mg/kg/day in 3 divided doses.',
    mechanism: 'GABA-A potentiation; long half-life means cumulative sedation with repeated dosing.',
    sideEffects: ['Significant daytime sedation (long half-life)', 'Cognitive impairment', 'Falls (high risk in elderly)', 'Tolerance and dependence', 'Hypersalivation in children (can cause aspiration)'],
    nursing: ['Rarely appropriate for elderly — long half-life causes daytime hangover and fall risk', 'In children on nitrazepam: watch for excessive secretions and aspiration', 'Do not use >4 weeks for insomnia', 'Taper gradually to discontinue'],
    contraindications: ['Respiratory depression', 'Severe hepatic disease', 'Sleep apnoea', 'Myasthenia gravis'],
  },

  'Zolpidem': {
    class: 'Non-benzodiazepine hypnotic (Z-drug)', subclass: 'Imidazopyridine',
    overview: 'Short-acting Z-drug (half-life 2–3 hrs) selective for GABA-A ω1 subunit → hypnosis with minimal anxiolysis. Significant risk of complex sleep behaviours (sleep-driving, sleep-eating). Controlled substance.',
    indications: ['Short-term treatment of insomnia (sleep-onset difficulty)'],
    dosage: '10 mg PO immediately before bedtime. Elderly or women: 5 mg (slower CYP3A4 clearance). Max 4 weeks.',
    mechanism: 'Selective agonist at ω1 (BZ1/α1) subunit of GABA-A → sedation and hypnosis with less anxiolysis, anticonvulsant, or muscle-relaxant effect than benzodiazepines.',
    sideEffects: ['Complex sleep behaviours: sleepwalking, sleep-driving, sleep-eating, sleep-sex (can occur without memory of event)', 'Next-morning psychomotor impairment (driving risk)', 'Anterograde amnesia', 'Dependence and rebound insomnia', 'Hallucinations (on waking or sleep onset)', 'Headache', 'GI disturbance'],
    nursing: ['MUST be taken immediately before bed and only when patient can get a full 7–8 hrs sleep', 'WARN strongly about complex sleep behaviours — stop and report if these occur', 'Next-morning impairment: do NOT drive until fully alert (may take >8 hrs)', 'Do not take with alcohol, opioids, or CNS depressants', 'Short-term only: 2–4 weeks maximum', 'Higher risk in women and elderly — start with 5 mg'],
    contraindications: ['Severe hepatic impairment', 'Sleep apnoea syndrome', 'Myasthenia gravis', 'Respiratory failure', 'Pregnancy'],
  },

  'Zopiclone': {
    class: 'Non-benzodiazepine hypnotic (Z-drug)', subclass: 'Cyclopyrrolone',
    overview: 'Short-to-intermediate-acting Z-drug (half-life 5–6 hrs); effective for sleep-onset and early morning awakening. Causes bitter metallic taste — characteristic complaint.',
    indications: ['Short-term treatment of insomnia'],
    dosage: '7.5 mg PO at bedtime. Elderly/hepatic impairment: 3.75 mg. Maximum 4 weeks.',
    mechanism: 'Binds GABA-A at benzodiazepine site with some selectivity for α1 subunit → sedation.',
    sideEffects: ['Bitter metallic taste in mouth (very common — warn patients)', 'Daytime sedation', 'Dry mouth', 'Dependence and rebound insomnia', 'Complex sleep behaviours (less than zolpidem but possible)', 'Headache'],
    nursing: ['Warn about characteristic bitter taste — persists into next morning', 'Maximum 4 weeks continuous use', 'Avoid in elderly (falls, cognitive impairment)', 'Do not drive next morning if residual sedation present', 'Taper dose to avoid rebound insomnia', 'Counsel on sleep hygiene as first-line approach'],
    contraindications: ['Respiratory failure', 'Sleep apnoea', 'Severe hepatic impairment', 'Myasthenia gravis', 'Pregnancy'],
  },

  'Zaleplon': {
    class: 'Non-benzodiazepine hypnotic (Z-drug)', subclass: 'Pyrazolopyrimidine',
    overview: 'Ultra-short-acting Z-drug (half-life ~1 hr). So short it can be taken in the middle of the night if at least 4 hrs of sleep remain. Minimal next-morning impairment.',
    indications: ['Sleep-onset insomnia (not sleep-maintenance)'],
    dosage: '10 mg PO at bedtime or after waking if at least 4 hrs of sleep time remain. Elderly: 5 mg. Max 20 mg.',
    mechanism: 'GABA-A ω1 subunit agonist; ultra-short duration due to rapid hepatic metabolism via aldehyde oxidase.',
    sideEffects: ['Amnesia (if taken when not planning to sleep immediately)', 'Perceptual disturbances', 'Dizziness', 'Dependence (lower risk than longer-acting Z-drugs due to short half-life)'],
    nursing: ['Unique advantage: can be taken in the middle of the night with at least 4 hrs remaining (unlike other hypnotics)', 'Negligible next-day cognitive impairment compared to other Z-drugs', 'Short-term use only', 'Food delays absorption — take on empty stomach for fastest onset'],
    contraindications: ['Severe hepatic impairment', 'Respiratory failure', 'Sleep apnoea'],
  },


  // ══════════════════════════════════════════════════════════
  // 2. NON-BENZODIAZEPINE ANXIOLYTICS
  // ══════════════════════════════════════════════════════════

  'Buspirone': {
    class: 'Azapirone', subclass: 'Non-benzodiazepine Anxiolytic',
    overview: 'Non-sedating, non-addictive anxiolytic for GAD. Onset 2–4 weeks — not useful for acute anxiety. No cross-tolerance with benzodiazepines; cannot be used for benzodiazepine withdrawal.',
    indications: ['Generalised anxiety disorder (chronic management)', 'Augmentation therapy in treatment-resistant depression'],
    dosage: '5 mg PO TDS initially; increase by 5 mg every 2–3 days. Target 15–30 mg/day in divided doses. Max 60 mg/day.',
    mechanism: 'Partial agonist at 5-HT1A autoreceptors (reduces serotonergic firing) + partial D2 agonism. No GABA-A activity — hence no sedation or dependence.',
    sideEffects: ['Dizziness', 'Nausea', 'Headache', 'Nervousness', 'Restlessness (akathisia-like)', 'Insomnia'],
    nursing: ['Counsel patients: onset is 2–4 weeks — important for adherence (patients expecting immediate benzo-like relief will stop prematurely)', 'Does NOT cause sedation, dependence, or tolerance — a major advantage', 'Cannot stop benzodiazepine withdrawal — if switching from benzo, taper the benzo separately', 'Avoid with MAOIs (serotonin syndrome)', 'Grapefruit juice may increase levels (CYP3A4)'],
    contraindications: ['MAOIs (serotonin syndrome risk)', 'Severe hepatic or renal impairment'],
  },

  'Hydroxyzine': {
    class: 'Antihistamine (H1)', subclass: 'Piperazine — Anxiolytic / Antipruritic',
    overview: 'First-generation antihistamine with rapid anxiolytic, sedative, and antipruritic effects. Approved for anxiety (unlike most antihistamines). No dependence potential — can be used in patients with substance use disorders.',
    indications: ['Short-term anxiety (especially when sedation is desired)', 'Pruritus (urticaria, eczema, dermatoses)', 'Pre-operative and pre-procedural sedation', 'Nausea and vomiting', 'Anxiety in opioid/benzo misuse patients (no dependence potential)'],
    dosage: 'Anxiety: 25–100 mg PO QDS (max 300 mg/day). Pruritus: 25 mg TDS–QDS. Premed: 25–100 mg IM/PO 1 hr before.',
    mechanism: 'H1 receptor antagonism → antihistaminic, antipruritic, and CNS sedation. Anticholinergic properties at higher doses.',
    sideEffects: ['Sedation (most common)', 'Dry mouth', 'Urinary retention', 'Constipation', 'Blurred vision', 'QT prolongation (at higher doses)', 'Anticholinergic effects (especially elderly)'],
    nursing: ['Monitor QTc if dose is high or patient has cardiac risk factors', 'Useful in patients with addiction history as it has NO dependence potential', 'Anticholinergic effects more pronounced in elderly: confusion, urinary retention, constipation', 'Fall precautions (sedation)', 'Not for long-term anxiety management'],
    contraindications: ['QT prolongation', 'Porphyria', 'Pregnancy (1st trimester)', 'Urinary retention', 'Glaucoma'],
  },


  // ══════════════════════════════════════════════════════════
  // 3. TYPICAL (FIRST-GENERATION) ANTIPSYCHOTICS
  // ══════════════════════════════════════════════════════════

  'Haloperidol': {
    class: 'Typical Antipsychotic', subclass: 'Butyrophenone',
    overview: 'High-potency typical antipsychotic with potent D2 blockade. Highly effective for positive symptoms and acute agitation. High EPS risk; low metabolic burden. Available IV/IM for acute settings.',
    indications: ['Schizophrenia (positive symptoms)', 'Acute psychosis', 'Acute agitation (IM/IV)', 'Mania (adjunct)', 'Delirium (low dose — evidence limited but widely used)', 'Tourette syndrome', 'Antiemetic (very low dose)', 'Intractable hiccups'],
    dosage: 'Oral psychosis: 2–10 mg BD–TDS. Acute agitation (IM): 5 mg; may repeat. Delirium (IV): 0.5–2 mg. Elderly: 0.5–2 mg. Depot (haloperidol decanoate): 50–300 mg IM every 4 weeks.',
    mechanism: 'Potent D2 receptor blockade in mesolimbic (antipsychotic), mesocortical (negative symptoms worsened), nigrostriatal (EPS), and tuberoinfundibular (hyperprolactinaemia) pathways.',
    sideEffects: ['Extrapyramidal side effects (EPS): acute dystonia, parkinsonism, akathisia (very common)', 'Tardive dyskinesia (long-term use)', 'QT prolongation (especially IV)', 'Neuroleptic Malignant Syndrome (NMS — rare but fatal)', 'Sedation', 'Hyperprolactinaemia (galactorrhoea, amenorrhoea, erectile dysfunction)', 'Orthostatic hypotension'],
    nursing: ['MONITOR for EPS at every review — have procyclidine or benztropine available to treat acute dystonia', 'IV haloperidol: continuous ECG monitoring mandatory (QT prolongation risk)', 'Watch for NMS: hyperthermia >38°C, muscle rigidity, altered consciousness, autonomic instability — STOP drug and manage as emergency', 'Akathisia (inner restlessness) is often mistaken for worsening psychosis — do not increase dose', 'Educate patients about tardive dyskinesia risk with long-term use', 'Monitor prolactin level every 6 months'],
    contraindications: ["Parkinson's disease", 'QT prolongation / long QT syndrome', 'Coma or severe CNS depression', 'Pheochromocytoma'],
  },

  'Chlorpromazine': {
    class: 'Typical Antipsychotic', subclass: 'Phenothiazine (aliphatic)',
    overview: 'The first antipsychotic (1952). Low-potency with high sedative and anticholinergic effects. Rarely first-choice now but still used for refractory cases and palliative symptom control.',
    indications: ['Schizophrenia', 'Acute mania', 'Psychomotor agitation', 'Nausea/vomiting (refractory)', 'Hiccups (intractable)', 'Palliative sedation'],
    dosage: 'Psychosis: 25–100 mg TDS–QDS. Acute agitation: 25–50 mg IM. Antiemetic: 10–25 mg PO/IM TDS.',
    mechanism: 'D2 blockade (less potent than haloperidol) + H1, alpha-1, muscarinic antagonism → broad receptor blockade.',
    sideEffects: ['Profound sedation (H1 blockade)', 'Orthostatic hypotension (alpha-1 blockade)', 'Anticholinergic effects (dry mouth, urinary retention, blurred vision)', 'EPS (less than haloperidol)', 'Tardive dyskinesia', 'Photosensitivity', 'Cholestatic jaundice', 'Agranulocytosis (rare)', 'NMS'],
    nursing: ['Monitor BP carefully — significant orthostatic hypotension, especially first dose', 'Avoid sun exposure — photosensitivity causes severe sunburn (use high-SPF sunscreen)', 'Wear gloves when handling — contact dermatitis risk in healthcare workers', 'Sedation may be beneficial in acute agitation', 'ECG monitoring if high doses'],
    contraindications: ['Coma', 'Bone marrow depression', 'Phaeochromocytoma', 'Porphyria'],
  },

  'Fluphenazine': {
    class: 'Typical Antipsychotic', subclass: 'Phenothiazine (piperazine) — Depot',
    overview: 'High-potency typical antipsychotic used primarily as a long-acting depot injection for adherence in schizophrenia.',
    indications: ['Schizophrenia (maintenance therapy via depot)', 'Psychosis'],
    dosage: 'Oral: 2.5–10 mg/day in divided doses. Depot (fluphenazine decanoate): 12.5–50 mg IM every 2–5 weeks (test dose 12.5 mg first).',
    mechanism: 'Potent D2 blockade similar to haloperidol.',
    sideEffects: ['High EPS risk (dystonia, akathisia, parkinsonism)', 'Tardive dyskinesia', 'Hyperprolactinaemia', 'NMS (rare)', 'Sedation (less than chlorpromazine)'],
    nursing: ['Administer test dose (12.5 mg) at least 1 week before first therapeutic depot dose to assess tolerability', 'Inject deep IM into gluteal or deltoid using Z-track technique', 'Document injection site and date — rotate sites', 'EPS monitoring essential — akathisia can persist for weeks after injection', 'Educate patient that depot provides sustained release over weeks — missing one appointment has consequences'],
    contraindications: ['Coma', 'Severe CNS depression', 'Liver disease', 'Blood dyscrasias'],
  },

  'Zuclopenthixol': {
    class: 'Typical Antipsychotic', subclass: 'Thioxanthene — Depot / Acuphase',
    overview: 'Available in three formulations: oral, Acuphase (short-acting depot 2–3 days) for acute agitation, and decanoate (long-acting depot 2–4 weeks). Acuphase is unique for managing very acute psychosis requiring sustained but limited sedation.',
    indications: ['Acute psychosis (Acuphase — for 2–3 days sedation)', 'Schizophrenia maintenance (decanoate)', 'Mania'],
    dosage: 'Acuphase: 50–150 mg IM (max 400 mg per course, max 4 injections over 2 weeks). Decanoate: 200–400 mg IM every 2–4 weeks.',
    mechanism: 'D2 and D1 blockade; alpha-1 antagonism; some H1 blockade.',
    sideEffects: ['EPS', 'Sedation', 'Hypotension', 'Tardive dyskinesia', 'Pain at injection site', 'NMS'],
    nursing: ['Acuphase is NOT the same as the decanoate — never confuse them (duration of action is completely different)', 'Monitor respiratory rate and LOC after Acuphase injection in acute settings', 'Rotate gluteal injection sites and document', 'Do not give Acuphase IV — IM only', 'Avoid alcohol and other CNS depressants during Acuphase treatment'],
    contraindications: ['CNS depression', 'Coma', 'Alcohol/barbiturate intoxication', 'Circulatory collapse'],
  },

  'Sulpiride': {
    class: 'Typical Antipsychotic', subclass: 'Substituted benzamide',
    overview: 'Selective D2/D3 antagonist. At low doses acts on presynaptic receptors (activating/antidepressant-like). At higher doses blocks postsynaptic receptors (antipsychotic). Lower EPS risk than classic phenothiazines.',
    indications: ['Schizophrenia (especially negative symptoms)', 'Depression (low dose — some guidelines)', 'Tourette syndrome'],
    dosage: 'Schizophrenia: 200–400 mg BD (max 2400 mg/day). Negative symptoms: lower doses 200–600 mg/day.',
    mechanism: 'Selective D2 and D3 receptor antagonism; does not block D1 or muscarinic receptors.',
    sideEffects: ['Hyperprolactinaemia (prominent)', 'Insomnia (especially at low doses)', 'Weight gain', 'EPS (lower risk)', 'QT prolongation'],
    nursing: ['Monitor prolactin — galactorrhoea and amenorrhoea common', 'Less sedating than other antipsychotics — actually may cause insomnia', 'Renally cleared — dose reduction in renal impairment', 'Monitor QTc at higher doses'],
    contraindications: ['Phaeochromocytoma', 'QT prolongation', 'Prolactin-dependent tumours'],
  },


  // ══════════════════════════════════════════════════════════
  // 4. ATYPICAL (SECOND-GENERATION) ANTIPSYCHOTICS
  // ══════════════════════════════════════════════════════════

  'Risperidone': {
    class: 'Atypical Antipsychotic', subclass: 'Benzisoxazole',
    overview: 'Most widely prescribed atypical antipsychotic. Effective for positive and negative symptoms with lower EPS than typical antipsychotics. Available as oral, orodispersible, and long-acting depot (Risperdal Consta every 2 weeks; Perseris monthly).',
    indications: ['Schizophrenia', 'Acute and maintenance bipolar mania', 'Irritability and aggression in autism spectrum disorder', 'Tourette syndrome'],
    dosage: '1–2 mg PO BD initially; titrate to 4–8 mg/day. Elderly: 0.5 mg BD. Max 16 mg/day. Depot (Consta): 25–50 mg IM every 2 weeks (continue oral overlap for 3 weeks).',
    mechanism: 'D2 and 5-HT2A antagonism → antipsychotic effect with reduced nigrostriatal D2 blockade at therapeutic doses → lower EPS than haloperidol.',
    sideEffects: ['Weight gain (moderate)', 'Hyperprolactinaemia (most of any atypical — sexual dysfunction, galactorrhoea, osteoporosis)', 'EPS at higher doses', 'Sedation', 'Orthostatic hypotension (especially on initiation)', 'Metabolic syndrome', 'QT prolongation'],
    nursing: ['Monitor metabolic profile: weight, waist circumference, fasting glucose, lipids at baseline and every 3–6 months', 'Prolactin levels if sexual dysfunction or menstrual changes reported', 'Monitor BP on initiation — significant first-dose hypotension', 'Depot: oral risperidone must continue for 3 weeks after first injection (depot takes time to reach therapeutic level)', 'EPS monitoring — at higher doses, akathisia and parkinsonism can occur', 'Educate patients: do not drive until effect of drug is known'],
    contraindications: ['QT prolongation', 'Dementia-related psychosis (↑ mortality and stroke risk — black box warning)'],
  },

  'Olanzapine': {
    class: 'Atypical Antipsychotic', subclass: 'Thienobenzodiazepine',
    overview: 'Broad-spectrum atypical antipsychotic; among the most effective for schizophrenia. Highly effective but has the worst metabolic profile of all atypicals — significant weight gain, diabetes, and dyslipidaemia.',
    indications: ['Schizophrenia', 'Acute mania (monotherapy and adjunct)', 'Bipolar maintenance', 'Acute agitation (IM)', 'Antiemetic adjunct in chemotherapy (off-label)', 'Treatment-resistant depression (adjunct to fluoxetine — Symbyax)'],
    dosage: '5–10 mg PO OD initially; usual dose 10–20 mg/day. Acute agitation (IM): 5–10 mg (max 20 mg/24 hrs). Depot (Zyprexa Relprevv): 150–405 mg IM every 2–4 weeks — REMS required.',
    mechanism: 'D2, D1, 5-HT2A/2C, H1, muscarinic M1–4, and alpha-1 antagonism → broad sedation and metabolic effects.',
    sideEffects: ['Weight gain (most significant — often 4–7 kg in first month)', 'New-onset type 2 diabetes mellitus', 'Dyslipidaemia', 'Sedation (H1 blockade)', 'Anticholinergic effects (dry mouth, constipation)', 'EPS (mild, lower than risperidone)', 'Orthostatic hypotension', 'Post-injection delirium sedation syndrome (depot — rare, 0.07% per injection)'],
    nursing: ['WEIGH patient at every visit — metabolic risk is class-leading among atypicals', 'Fasting glucose and HbA1c: baseline, then 3-monthly for first year', 'Fasting lipids: baseline, 3 months, then annually', 'IM olanzapine: do NOT give IV; do NOT combine with IV benzodiazepines (cardiorespiratory arrest risk)', 'Depot (Relprevv): observe patient in registered clinic for at least 3 hrs after injection (post-injection delirium syndrome)', 'Diabetic patients: close glycaemic monitoring — olanzapine can precipitate DKA'],
    contraindications: ['Narrow-angle glaucoma', 'Paralytic ileus'],
  },

  'Quetiapine': {
    class: 'Atypical Antipsychotic', subclass: 'Dibenzothiazepine',
    overview: 'Versatile atypical antipsychotic used across schizophrenia, bipolar spectrum, and as antidepressant adjunct. Low EPS due to low D2 affinity. Sedating properties mean low-dose quetiapine is widely (and controversially) prescribed off-label for insomnia.',
    indications: ['Schizophrenia', 'Bipolar mania (acute and maintenance)', 'Bipolar depression', 'Adjunct in MDD (standard dose)', 'Insomnia (low dose — off-label but very common)'],
    dosage: 'Schizophrenia: 150–750 mg/day in 2 doses. Bipolar depression: 50–300 mg OD at night (XR). MDD adjunct: 50–150 mg/day. Insomnia (off-label): 25–50 mg at night.',
    mechanism: 'D2 and 5-HT2A antagonism (low D2 affinity) + strong H1, alpha-1 blockade → sedation at low doses; antipsychotic effect at higher D2 occupancy.',
    sideEffects: ['Sedation (very common — H1 and alpha-1 blockade)', 'Weight gain', 'Orthostatic hypotension (especially initiation)', 'Hyperglycaemia', 'Dyslipidaemia', 'QT prolongation', 'Dry mouth', 'Constipation', 'EPS (minimal — low D2 affinity)'],
    nursing: ['Metabolic monitoring: weight, glucose, lipids as for other atypicals', 'First-dose hypotension: advise rising slowly, especially elderly — morning BP check', 'Evening dosing maximises sedative benefit and minimises daytime drowsiness', 'Avoid abrupt discontinuation — significant withdrawal symptoms (nausea, insomnia, vomiting)', 'Off-label insomnia use: counsel about metabolic risks even at low doses', 'QTc monitoring if cardiac risk factors'],
    contraindications: ['QT prolongation', 'Concurrent CYP3A4 inhibitors (increase quetiapine levels significantly)'],
  },

  'Clozapine': {
    class: 'Atypical Antipsychotic', subclass: 'Dibenzodiazepine — Treatment-Resistant',
    overview: 'The gold-standard antipsychotic for treatment-resistant schizophrenia. Only antipsychotic proven to reduce suicidality. Unique receptor profile with weak D2 blockade — hence no EPS or tardive dyskinesia. MANDATORY weekly FBC monitoring due to life-threatening agranulocytosis (1%). Can only be prescribed through approved patient monitoring services.',
    indications: ['Treatment-resistant schizophrenia (failed ≥2 adequate antipsychotic trials)', 'Reducing suicidal behaviour in schizophrenia/schizoaffective disorder'],
    dosage: '12.5 mg OD–BD on day 1; increase gradually. Therapeutic range usually 300–450 mg/day. Max 900 mg/day. SLOW TITRATION IS ESSENTIAL.',
    mechanism: 'D4, 5-HT2A/2C, H1, muscarinic M1–4, alpha-1/2 antagonism + weak D2 blockade. Unique profile explains therapeutic efficacy without EPS.',
    sideEffects: ['Agranulocytosis (1% — potentially fatal — mandatory haematological monitoring)', 'Seizures (dose-dependent — 3–5% at high doses)', 'Myocarditis and cardiomyopathy (first 6–8 weeks)', 'Metabolic syndrome (weight gain, diabetes — highest of all antipsychotics)', 'Hypersalivation (sialorrhoea — extremely common, embarrassing)', 'Severe constipation (can progress to ileus — potentially fatal)', 'Sedation', 'Orthostatic hypotension', 'Tachycardia'],
    nursing: ['ABSOLUTE REQUIREMENT: FBC weekly for 18 weeks → fortnightly for 12 months → monthly thereafter; CANNOT be dispensed without current blood result', 'STOP IMMEDIATELY if neutrophils <1.5 × 10⁹/L (or per local protocol) and do NOT re-challenge', 'ECG and troponin in first 8 weeks — myocarditis risk (must investigate any fever or chest pain)', 'BOWEL CHART essential — document bowel movements; constipation can lead to fatal paralytic ileus', 'For hypersalivation: positioning, hyoscine patch, pirenzepine — warn patient', 'Seizure precautions at higher doses; low-dose sodium valproate sometimes co-prescribed prophylactically', 'Only dispense via Clozaril Patient Monitoring Service (or equivalent national programme)', 'If dose missed >48 hrs, do NOT restart at previous dose — must re-titrate from beginning (risk of orthostatic collapse and respiratory arrest)'],
    contraindications: ['History of clozapine-induced agranulocytosis or severe neutropenia', 'Bone marrow suppression or blood dyscrasia', 'Severe cardiac disease (myocarditis, cardiomyopathy)', 'Paralytic ileus or bowel obstruction', 'Uncontrolled epilepsy', 'Alcohol or drug psychosis', 'Severe renal or hepatic failure'],
  },

  'Aripiprazole': {
    class: 'Atypical Antipsychotic', subclass: 'Dopamine-Serotonin System Stabiliser',
    overview: 'Unique partial D2 agonist — acts as functional antagonist at hyperdopaminergic mesolimbic pathway but partial agonist at hypodopaminergic mesocortical pathway. Minimal metabolic side effects. No prolactin elevation. Increasingly used as augmentation in depression.',
    indications: ['Schizophrenia', 'Bipolar I disorder (acute mania and maintenance)', 'Adjunct in MDD', 'Tourette syndrome', 'Irritability in autism spectrum disorder', 'Agitation in bipolar/schizophrenia (IM)'],
    dosage: '10–15 mg PO OD; usual range 10–30 mg/day. IM (acute agitation): 9.75 mg (max 29.25 mg/day). Depot (Abilify Maintena): 400 mg IM monthly; (Aristada): every 4–8 weeks.',
    mechanism: 'Partial D2 and D3 agonist + partial 5-HT1A agonist + 5-HT2A antagonist. As "stabiliser" — functional antagonism in high-DA states, partial agonism in low-DA states.',
    sideEffects: ['Akathisia (inner restlessness — most troublesome side effect)', 'Insomnia (activating)', 'Nausea (initial)', 'Weight neutral (or minimal gain)', 'Impulse control disorders: pathological gambling, hypersexuality, compulsive shopping (especially at higher doses)', 'Headache'],
    nursing: ['Akathisia monitoring critical — often mistaken for worsening anxiety or psychosis; if treatment-emergent akathisia, consider dose reduction or add propranolol/clonazepam', 'Counsel about impulse control disorder risk — ask specifically about gambling, spending, sexual behaviours', 'Give in morning (activating drug — insomnia if given at night)', 'Minimal metabolic monitoring required — major advantage over other atypicals', 'Safe in patients with metabolic syndrome, diabetes, or obesity', 'Depot: overlap oral aripiprazole for first 14 days after first injection'],
    contraindications: ['Hypersensitivity to aripiprazole'],
  },

  'Amisulpride': {
    class: 'Atypical Antipsychotic', subclass: 'Substituted benzamide (atypical)',
    overview: 'Selective D2/D3 antagonist. At low doses (50–300 mg/day) preferentially blocks presynaptic autoreceptors → increases dopaminergic transmission (beneficial for negative symptoms and depression). At higher doses, blocks postsynaptic receptors (antipsychotic). Does not cross BBB easily at low doses.',
    indications: ['Schizophrenia (positive and negative symptoms)', 'Dysthymia and mild depression (low dose)'],
    dosage: 'Acute schizophrenia: 400–800 mg/day in 2 doses. Negative symptoms predominant: 50–300 mg/day. Max 1200 mg/day.',
    mechanism: 'Selective D2 and D3 antagonism; no H1, muscarinic, or alpha-1 blockade.',
    sideEffects: ['Hyperprolactinaemia (high — similar to risperidone)', 'QT prolongation (significant — dose-dependent)', 'Weight gain (moderate)', 'Insomnia (less sedating)', 'EPS (dose-dependent)', 'Renally excreted — accumulates in renal failure'],
    nursing: ['ECG mandatory — significant QT prolongation risk especially at higher doses; do not use with other QT-prolonging agents', 'Monitor prolactin — sexual dysfunction, amenorrhoea, and galactorrhoea common', 'Renally cleared — significant dose reduction needed in renal impairment', 'Electrolytes (K⁺, Mg²⁺) before and during therapy — hypokalaemia worsens QT risk'],
    contraindications: ['QT prolongation', 'Known phaeochromocytoma', 'Prolactin-dependent tumours', 'Severe renal impairment (dose adjustment required)'],
  },

  'Paliperidone': {
    class: 'Atypical Antipsychotic', subclass: 'Benzisoxazole — active metabolite of risperidone',
    overview: 'Active 9-hydroxy metabolite of risperidone. Not hepatically metabolised — renally excreted. Available as once-daily extended-release oral and long-acting injectable depot (monthly or 3-monthly).',
    indications: ['Schizophrenia', 'Schizoaffective disorder'],
    dosage: 'Oral (Invega): 6 mg OD; range 3–12 mg. Depot (Sustenna): 150 mg IM on day 1, 100 mg on day 8, then 75–150 mg monthly.',
    mechanism: 'D2 and 5-HT2A antagonism — same as risperidone (its parent compound).',
    sideEffects: ['Hyperprolactinaemia (prominent)', 'Weight gain', 'EPS', 'QT prolongation', 'Orthostatic hypotension', 'Metabolic effects'],
    nursing: ['Swallow extended-release tablets whole — the empty tablet shell may appear in stool (reassure patient)', 'Depot: use correct needles provided with kit; deltoid or gluteal injection', 'Renal dose adjustment required — renally excreted', 'Monitor metabolic parameters and prolactin level', 'Three-monthly depot (Trinza): do NOT administer until patient established on monthly depot for at least 4 months'],
    contraindications: ['Severe renal impairment', 'QT prolongation', 'Dementia-related psychosis'],
  },

  'Lurasidone': {
    class: 'Atypical Antipsychotic', subclass: 'Benzisothiazol derivative',
    overview: 'Modern atypical with particularly strong evidence for bipolar depression. Weight-neutral and metabolically neutral. Must be taken with food (≥350 kcal) for adequate absorption.',
    indications: ['Schizophrenia', 'Bipolar I depression (monotherapy or adjunct with lithium/valproate)'],
    dosage: '40 mg OD with food; range 40–160 mg for schizophrenia; 20–120 mg for bipolar depression.',
    mechanism: 'D2 and 5-HT2A antagonism + potent 5-HT7 antagonism (antidepressant effect) + partial 5-HT1A agonism.',
    sideEffects: ['Akathisia', 'Somnolence', 'Nausea', 'Weight neutral (major advantage)', 'EPS (dose-dependent)'],
    nursing: ['MUST be taken with food (≥350 calories) — absorption reduced by 50% without food', 'Metabolically favourable — less monitoring required than olanzapine/quetiapine', 'Once daily dosing — simplifies adherence', 'Dose reduction required with CYP3A4 inhibitors'],
    contraindications: ['Concurrent strong CYP3A4 inhibitors (e.g., ketoconazole, clarithromycin)', 'Concurrent strong CYP3A4 inducers (e.g., rifampicin)'],
  },


  // ══════════════════════════════════════════════════════════
  // 5. SSRIs
  // ══════════════════════════════════════════════════════════

  'Fluoxetine': {
    class: 'SSRI', subclass: 'Selective Serotonin Reuptake Inhibitor',
    overview: 'First-in-class and longest-acting SSRI (half-life 1–4 days; active metabolite norfluoxetine half-life 4–16 days). Safest SSRI for abrupt discontinuation due to long half-life — virtually no discontinuation syndrome. Inhibits CYP2D6 (many drug interactions).',
    indications: ['Major depressive disorder', 'Obsessive-compulsive disorder (OCD)', 'Bulimia nervosa', 'Panic disorder', 'Premenstrual dysphoric disorder (PMDD)', 'Bipolar depression (with olanzapine — Symbyax)'],
    dosage: 'MDD: 20 mg PO OD in the morning; may increase to 40–60 mg after 4 weeks. OCD: up to 60–80 mg. Bulimia: 60 mg OD.',
    mechanism: 'Highly selective serotonin transporter (SERT) blockade → ↑ synaptic serotonin. Minimal affinity for histamine, muscarinic, and alpha receptors.',
    sideEffects: ['Nausea and GI upset (initial — improves after 1–2 weeks)', 'Insomnia and agitation (activating — give in the morning)', 'Sexual dysfunction (↓ libido, delayed orgasm, anorgasmia)', 'Initial anxiety worsening (first 1–2 weeks)', 'Serotonin syndrome (with serotonergic co-prescriptions)', 'Hyponatraemia (especially elderly)', 'Bleeding risk (platelet dysfunction)'],
    nursing: ['Give in the MORNING — activating drug; evening dosing causes insomnia', 'WARN patients: will feel worse in first 1–2 weeks before improvement (anxiety, agitation); adherence is critical', 'Suicide risk is highest in the first 4 weeks of treatment (particularly in those under 25 — monitor closely)', 'Onset of antidepressant effect: 4–6 weeks (may be 8–12 weeks for full response)', 'Long half-life: can be stopped without taper (unlike other SSRIs)', 'CYP2D6 inhibitor — check drug interactions (particularly with tamoxifen, codeine, TCAs)'],
    contraindications: ['MAOIs (minimum 14-day washout each way; 5 weeks when switching from fluoxetine to MAOI)', 'Concurrent pimozide or thioridazine', 'Mania without mood stabiliser cover'],
  },

  'Sertraline': {
    class: 'SSRI', subclass: 'Selective Serotonin Reuptake Inhibitor',
    overview: 'The most commonly prescribed antidepressant worldwide. Preferred SSRI in cardiac patients (lowest cardiovascular drug interactions), pregnancy, and breastfeeding. Moderate CYP2D6 inhibitor — fewer interactions than fluoxetine.',
    indications: ['Major depressive disorder', 'Panic disorder', 'OCD', 'PTSD', 'Social anxiety disorder', 'PMDD'],
    dosage: '50 mg PO OD; increase by 25–50 mg every 1–2 weeks. Usual effective dose: 50–150 mg. Max 200 mg/day.',
    mechanism: 'Potent, highly selective SERT inhibition; minimal off-target receptor activity.',
    sideEffects: ['Nausea and diarrhoea (most common GI SSRI — worse than others)', 'Sexual dysfunction', 'Insomnia', 'Dry mouth', 'Sweating', 'Hyponatraemia (elderly)', 'Bruising / ↑ bleeding risk'],
    nursing: ['Preferred SSRI in pregnancy and post-MI patients', 'Nausea can be reduced by taking with food', 'Onset: 4–6 weeks; partial response may be seen at 2 weeks', 'Monitor sodium in elderly (hyponatraemia risk)', 'Taper dose on discontinuation (avoid discontinuation syndrome)', 'Safer than fluoxetine for CYP2D6 interactions — preferred in patients on tamoxifen or multiple medications'],
    contraindications: ['MAOIs', 'Concurrent pimozide'],
  },

  'Escitalopram': {
    class: 'SSRI', subclass: 'Selective Serotonin Reuptake Inhibitor',
    overview: 'S-enantiomer of citalopram. Most selective SSRI — minimal off-target receptor activity. Generally best-tolerated SSRI with fewest drug interactions. Very slight QT prolongation risk (less than racemic citalopram).',
    indications: ['Major depressive disorder', 'Generalised anxiety disorder', 'Social anxiety disorder', 'Panic disorder', 'OCD'],
    dosage: '10 mg PO OD; increase to 20 mg after 1 week if needed. Elderly: maximum 10 mg/day.',
    mechanism: 'Highly selective SERT inhibition (most selective of all SSRIs). The S-enantiomer is the active component of citalopram.',
    sideEffects: ['Nausea (usually mild)', 'Insomnia', 'Sexual dysfunction', 'Headache', 'Dry mouth', 'QT prolongation (slight risk)', 'Hyponatraemia'],
    nursing: ['Generally best-tolerated SSRI — good first-choice for anxious or tolerability-sensitive patients', 'Elderly: maximum 10 mg/day (QT risk and reduced clearance)', 'Monitor QTc if used with other QT-prolonging agents', 'Fewer drug interactions than fluoxetine/paroxetine', 'Onset 2–4 weeks; full response at 4–8 weeks'],
    contraindications: ['MAOIs', 'QT prolongation', 'Concomitant citalopram (same compound)'],
  },

  'Citalopram': {
    class: 'SSRI', subclass: 'Selective Serotonin Reuptake Inhibitor',
    overview: 'Racemic SSRI (S+R enantiomers). Clean interaction profile with few CYP450 interactions. Dose-dependent QT prolongation — maximum daily dose restricted to 40 mg (20 mg in elderly).',
    indications: ['Major depressive disorder', 'Panic disorder', 'OCD'],
    dosage: '20 mg PO OD; increase to 40 mg if needed. Elderly/hepatic impairment: maximum 20 mg/day.',
    mechanism: 'SERT inhibition (both enantiomers contribute, but S-enantiomer more potent — hence escitalopram is preferred).',
    sideEffects: ['QT prolongation (dose-dependent — the primary safety concern)', 'Nausea', 'Sexual dysfunction', 'Insomnia', 'Hyponatraemia', 'Sweating'],
    nursing: ['MAXIMUM 40 mg/day in adults; MAXIMUM 20 mg/day in elderly, hepatic impairment, and CYP2C19 poor metabolisers (e.g., Asians)', 'ECG monitoring if dose is >40 mg or if patient has cardiac risk factors', 'QT interaction: avoid with other QT-prolonging drugs', 'Monitor sodium in elderly patients', 'Clean drug interaction profile — good choice when polypharmacy is a concern'],
    contraindications: ['MAOIs', 'QT prolongation / long QT syndrome', 'Congenital long QT syndrome'],
  },

  'Paroxetine': {
    class: 'SSRI', subclass: 'Selective Serotonin Reuptake Inhibitor',
    overview: 'SSRI with the highest anticholinergic burden and most severe discontinuation syndrome. Potent CYP2D6 inhibitor. Avoid in pregnancy (cardiac defects in neonates). Most problematic SSRI to stop abruptly.',
    indications: ['MDD', 'Panic disorder', 'Social anxiety disorder', 'PTSD', 'OCD', 'Generalised anxiety disorder', 'Premenstrual dysphoric disorder'],
    dosage: '20 mg PO OD; increase to 50 mg/day. CR formulation available (12.5–62.5 mg).',
    mechanism: 'SERT inhibition + moderate muscarinic M1 receptor antagonism (anticholinergic activity) + potent CYP2D6 inhibition.',
    sideEffects: ['Sexual dysfunction (greatest of any SSRI)', 'Weight gain (significant)', 'Discontinuation syndrome (most severe — electric shock sensations "brain zaps", dizziness, nausea, irritability)', 'Anticholinergic effects (dry mouth, constipation, blurred vision)', 'Sedation', 'Excessive sweating'],
    nursing: ['NEVER stop abruptly — must taper very slowly (over months in long-term users) to avoid severe discontinuation syndrome', 'Warn patients about "brain zaps" and flu-like discontinuation effects if doses missed', 'AVOID in pregnancy — increased risk of neonatal cardiac septal defects and neonatal behavioural syndrome', 'Potent CYP2D6 inhibitor — major interactions with codeine, tamoxifen, TCAs, antipsychotics', 'Educate about sexual side effects — major reason for non-adherence'],
    contraindications: ['MAOIs', 'Pregnancy (especially 1st trimester)', 'Concurrent thioridazine or pimozide'],
  },

  'Fluvoxamine': {
    class: 'SSRI', subclass: 'Selective Serotonin Reuptake Inhibitor',
    overview: 'SSRI with particular evidence in OCD. Potent CYP1A2 and CYP3A4 inhibitor — most drug interactions of any SSRI. Sigma-1 receptor agonism may contribute to antidepressant and anxiolytic effects.',
    indications: ['Obsessive-compulsive disorder (OCD — first choice)', 'Social anxiety disorder', 'Major depressive disorder'],
    dosage: '50 mg OD at night initially; increase to 100–300 mg/day (doses >100 mg given in 2 doses). Max 300 mg/day.',
    mechanism: 'SERT inhibition + sigma-1 receptor agonism + potent CYP1A2/CYP3A4 inhibition.',
    sideEffects: ['Nausea and vomiting (most common GI effects of any SSRI)', 'Somnolence (give at night)', 'Sexual dysfunction', 'Multiple drug interactions (major limitation)'],
    nursing: ['Take at bedtime (significant nausea if taken in morning)', 'Potent CYP1A2 inhibitor — dramatically increases levels of theophylline, clozapine, warfarin, tizanidine — ALWAYS check drug interactions before prescribing', 'Nausea improves significantly after first few weeks', 'Good first-choice for OCD', 'Do not use with melatonin (CYP1A2 interaction — excessive sedation)'],
    contraindications: ['MAOIs', 'Concurrent tizanidine (dangerous hypotension)', 'Concurrent thioridazine or pimozide'],
  },


  // ══════════════════════════════════════════════════════════
  // 6. SNRIs
  // ══════════════════════════════════════════════════════════

  'Venlafaxine': {
    class: 'SNRI', subclass: 'Serotonin-Noradrenaline Reuptake Inhibitor',
    overview: 'First SNRI. Dose-dependent mechanism: at ≤75 mg predominantly serotonergic; at ≥150 mg also noradrenergic. Strong evidence for depression and anxiety. XR formulation preferred (fewer GI side effects, once daily). Severe discontinuation syndrome — never stop abruptly.',
    indications: ['Major depressive disorder', 'Generalised anxiety disorder', 'Panic disorder', 'Social anxiety disorder', 'Neuropathic pain (especially SNRI class effect)'],
    dosage: '37.5–75 mg OD (XR) initially; titrate to 75–225 mg. Max 375 mg/day. Immediate release: BD–TDS dosing.',
    mechanism: 'SERT and NET (noradrenaline transporter) inhibition → ↑ synaptic serotonin and noradrenaline. NET inhibition begins at ~150 mg.',
    sideEffects: ['Nausea (common early)', 'Hypertension (dose-dependent — can raise BP 5–7 mmHg)', 'Elevated heart rate', 'Sexual dysfunction (comparable to SSRIs)', 'Sweating', 'Dry mouth', 'Discontinuation syndrome (severe — similar to paroxetine)', 'Headache'],
    nursing: ['MONITOR blood pressure at every visit — dose-dependent hypertension; pre-existing hypertension must be controlled before starting', 'NEVER stop abruptly — taper over several weeks to months (one of worst discontinuation syndromes — "electric shocks", severe nausea, profound dizziness)', 'Onset of effect: 2–4 weeks', 'Serotonin syndrome risk with tramadol, triptans, linezolid, methylene blue', 'Take with food to reduce nausea', 'If a dose is missed, take ASAP but never double dose'],
    contraindications: ['MAOIs (minimum 14-day washout)', 'Uncontrolled hypertension', 'Mania'],
  },

  'Duloxetine': {
    class: 'SNRI', subclass: 'Serotonin-Noradrenaline Reuptake Inhibitor',
    overview: 'Balanced SNRI with equal serotonin and noradrenaline reuptake inhibition at all doses (unlike venlafaxine). Strong evidence for diabetic peripheral neuropathy and fibromyalgia. Also used for stress urinary incontinence (noradrenergic effect on urethral sphincter).',
    indications: ['Major depressive disorder', 'Generalised anxiety disorder', 'Diabetic peripheral neuropathy', 'Fibromyalgia', 'Chronic musculoskeletal pain', 'Stress urinary incontinence'],
    dosage: 'Depression/anxiety: 30–60 mg OD (may go to 120 mg). Neuropathic pain: 60–120 mg OD. Urinary incontinence: 40 mg BD.',
    mechanism: 'Potent and balanced SERT and NET reuptake inhibition at all doses.',
    sideEffects: ['Nausea (most common)', 'Dry mouth', 'Sweating', 'Dizziness', 'Constipation', 'Sexual dysfunction', 'Hypertension (less than venlafaxine)', 'Hepatotoxicity (rare but significant — avoid in liver disease)', 'Discontinuation syndrome'],
    nursing: ['Must be swallowed whole — do NOT crush or chew capsules (enteric coating required to prevent GI upset)', 'Monitor LFTs — hepatotoxicity reported (rare); avoid in significant liver disease or alcohol use disorder', 'Monitor blood pressure (noradrenergic component)', 'Taper on discontinuation', 'Good first choice for patients with comorbid depression and neuropathic pain', 'Capsules can be opened and sprinkled on food if swallowing difficult (but do NOT crush granules)'],
    contraindications: ['MAOIs', 'Hepatic impairment or alcohol use disorder', 'Uncontrolled narrow-angle glaucoma', 'Uncontrolled hypertension'],
  },

  'Desvenlafaxine': {
    class: 'SNRI', subclass: 'Active metabolite of venlafaxine',
    overview: 'Active O-desmethyl metabolite of venlafaxine; renally eliminated (no CYP2D6 metabolism required). Consistent SNRI activity regardless of CYP2D6 metaboliser status. Less drug interactions than venlafaxine.',
    indications: ['Major depressive disorder'],
    dosage: '50 mg OD (effective and usually maximum dose). Higher doses offer no additional benefit.',
    mechanism: 'Balanced SERT and NET reuptake inhibition.',
    sideEffects: ['Nausea', 'Dizziness', 'Sweating', 'Constipation', 'Sexual dysfunction', 'Discontinuation syndrome'],
    nursing: ['Swallow whole — extended-release formulation', 'Good option when CYP2D6 polymorphism is a concern', 'Taper on discontinuation', 'Monitor BP'],
    contraindications: ['MAOIs', 'Uncontrolled hypertension'],
  },


  // ══════════════════════════════════════════════════════════
  // 7. TRICYCLIC ANTIDEPRESSANTS (TCAs)
  // ══════════════════════════════════════════════════════════

  'Amitriptyline': {
    class: 'Tricyclic Antidepressant (TCA)', subclass: 'Tertiary amine',
    overview: 'Prototype TCA; highly effective but now rarely first-line for depression due to side effect burden and lethality in overdose. Still widely used at low doses for neuropathic pain, migraine prophylaxis, and nocturnal enuresis.',
    indications: ['Depression (historical 1st line; now 2nd-3rd line)', 'Neuropathic pain (postherpetic neuralgia, diabetic neuropathy)', 'Migraine prophylaxis', 'Tension headache prophylaxis', 'Fibromyalgia', 'Nocturnal enuresis in children', 'Irritable bowel syndrome (low dose)'],
    dosage: 'Depression: 25–75 mg at night initially; titrate to 75–200 mg. Neuropathic pain/migraine: 10–75 mg at night. Elderly: 10–25 mg.',
    mechanism: 'Inhibits SERT and NET → antidepressant effect. Also blocks H1 (sedation), muscarinic M1 (anticholinergic), alpha-1 (hypotension), and sodium channels (cardiac toxicity in overdose).',
    sideEffects: ['Anticholinergic: dry mouth, constipation, urinary retention, blurred vision, confusion', 'Sedation (H1 blockade — often beneficial)', 'Orthostatic hypotension', 'Cardiac arrhythmias (QRS widening, QT prolongation)', 'Weight gain', 'Sexual dysfunction', 'LETHAL in overdose (sodium channel blockade → ventricular arrhythmia)'],
    nursing: ['ECG BEFORE starting (QTc, conduction abnormalities, PR interval)', 'OVERDOSE IS LIFE-THREATENING — fatal at 10–20× therapeutic dose; restrict supply (max 1-week prescription in high suicide risk)', 'AVOID in elderly (high risk: falls, delirium, urinary retention, arrhythmias — Beers criteria)', 'Take at NIGHT (sedating; helps with insomnia component of depression and pain)', 'Suicide risk assessment mandatory at initiation, 1 week, 2 weeks, 4 weeks', 'Oral care education — severe dry mouth promotes dental caries'],
    contraindications: ['Recent myocardial infarction (<3 months)', 'Heart block (any degree)', 'MAOIs (14-day washout)', 'Mania', 'Urinary retention', 'Narrow-angle glaucoma', 'Porphyria'],
  },

  'Nortriptyline': {
    class: 'Tricyclic Antidepressant (TCA)', subclass: 'Secondary amine (metabolite of amitriptyline)',
    overview: 'Active metabolite of amitriptyline. More noradrenergic; less anticholinergic and sedating than amitriptyline — better tolerated in elderly. Good evidence for neuropathic pain.',
    indications: ['Depression (better tolerated TCA)', 'Neuropathic pain', 'Migraine prophylaxis', 'Smoking cessation (adjunct)'],
    dosage: '25 mg TDS–QDS initially; therapeutic range: 50–150 mg/day. Serum levels available (50–150 ng/mL).',
    mechanism: 'Primarily NET inhibition (noradrenergic); less SERT. Less anticholinergic than amitriptyline.',
    sideEffects: ['Less sedation than amitriptyline', 'Less anticholinergic', 'Orthostatic hypotension', 'Cardiac toxicity in overdose (less than amitriptyline but still significant)', 'Weight gain'],
    nursing: ['Preferred TCA in elderly (less anticholinergic, less sedating)', 'Serum level monitoring useful (therapeutic window: 50–150 ng/mL; cardiac risk >500 ng/mL)', 'ECG before and during treatment', 'Still lethal in overdose — restrict supply if suicide risk'],
    contraindications: ['Recent MI', 'Heart block', 'MAOIs', 'Mania', 'Urinary retention'],
  },

  'Imipramine': {
    class: 'Tricyclic Antidepressant (TCA)', subclass: 'Tertiary amine',
    overview: 'First TCA ever synthesised (1957). Parent compound metabolised to desipramine. Used for depression, nocturnal enuresis in children, and panic disorder.',
    indications: ['Major depressive disorder', 'Nocturnal enuresis in children', 'Panic disorder', 'Chronic pain'],
    dosage: 'Depression: 75–150 mg/day in divided doses. Nocturnal enuresis (children): 25 mg at bedtime.',
    mechanism: 'SERT and NET inhibition + anticholinergic + H1 + alpha-1 blockade.',
    sideEffects: ['Anticholinergic effects (prominent)', 'Sedation', 'Orthostatic hypotension', 'Cardiac toxicity in overdose', 'Weight gain'],
    nursing: ['Monitor ECG — conduction disturbances', 'Restrict supply in suicidal patients', 'Children: bedwetting use — short-term only; ECG before starting (QTc)', 'Anticholinergic monitoring'],
    contraindications: ['Recent MI', 'Heart block', 'MAOIs', 'Acute narrow-angle glaucoma'],
  },

  'Clomipramine': {
    class: 'Tricyclic Antidepressant (TCA)', subclass: 'Chlorinated derivative — most serotonergic TCA',
    overview: 'Most serotonergic TCA. Gold standard pharmacotherapy for OCD (most efficacious, though side effects limit tolerability vs SSRIs). Also effective for depression and panic disorder.',
    indications: ['OCD (strongest evidence)', 'Major depressive disorder', 'Panic disorder', 'Cataplexy in narcolepsy', 'Phobias'],
    dosage: 'OCD: 25 mg OD initially; increase to 100–250 mg/day. Max 250 mg/day. Depression: similar dosing.',
    mechanism: 'Potent SERT inhibition (most of any TCA) + NET inhibition + anticholinergic effects.',
    sideEffects: ['Seizures (dose-dependent — risk increases >250 mg/day)', 'Anticholinergic effects', 'Sedation', 'Sexual dysfunction (ejaculation failure — prominent)', 'Weight gain', 'Orthostatic hypotension', 'Cardiac toxicity in overdose'],
    nursing: ['Seizure risk: do not exceed 250 mg/day; use with caution in patients with epilepsy', 'ECG before and during treatment', 'Warn about ejaculation problems — very common and often cause of non-adherence in men', 'Despite side effects, may still be necessary in SSRI-refractory OCD', 'Lethal in overdose — restrict supply'],
    contraindications: ['Recent MI', 'Heart block', 'MAOIs', 'Epilepsy (relative)', 'Urinary retention'],
  },

  'Doxepin': {
    class: 'Tricyclic Antidepressant (TCA)', subclass: 'Dibenzoxepine',
    overview: 'TCA with very potent H1 antihistamine activity — highly sedating. At very low doses (3–6 mg) licensed for insomnia (sleep-maintenance). Higher doses used for depression and pruritus.',
    indications: ['Depression', 'Anxiety disorders', 'Sleep-maintenance insomnia (low dose 3–6 mg)', 'Chronic pruritus', 'Neuropathic pain'],
    dosage: 'Depression: 75–150 mg at night. Insomnia: 3–6 mg OD within 30 min of bedtime. Pruritus: 25–50 mg TDS.',
    mechanism: 'SERT and NET inhibition at higher doses; extreme H1 potency at all doses (30× more potent than diphenhydramine).',
    sideEffects: ['Profound sedation (most sedating TCA)', 'Anticholinergic effects', 'Weight gain', 'Orthostatic hypotension', 'Cardiac toxicity in overdose'],
    nursing: ['Insomnia dose (3–6 mg): no anticholinergic effects at this dose; only histamine blockade — relatively safe', 'Therapeutic antidepressant doses: standard TCA safety precautions apply', 'Next-morning sedation can occur even at insomnia doses — warn about driving'],
    contraindications: ['Urinary retention', 'MAOIs', 'Glaucoma', 'Severe respiratory depression'],
  },


  // ══════════════════════════════════════════════════════════
  // 8. MAOIs
  // ══════════════════════════════════════════════════════════

  'Phenelzine': {
    class: 'MAOI', subclass: 'Irreversible non-selective MAOI (phenylethylamine)',
    overview: 'Non-selective, irreversible MAOI effective for atypical depression and anxiety. Largely superseded due to dietary restrictions (tyramine — risk of hypertensive crisis) and multiple drug interactions. Reserved for treatment-resistant cases.',
    indications: ['Atypical depression (hypersomnia, hyperphagia, mood reactivity, leaden paralysis)', 'Treatment-resistant depression', 'Panic disorder', 'Social phobia', 'PTSD'],
    dosage: '15 mg TDS initially; increase to 60–90 mg/day. Therapeutic response may take 4–6 weeks.',
    mechanism: 'Irreversible inhibition of MAO-A and MAO-B → ↑ synaptic serotonin, noradrenaline, dopamine. Enzyme recovery takes 2 weeks (new enzyme synthesis required).',
    sideEffects: ['Hypertensive crisis (with tyramine-rich foods — CHEESE REACTION)', 'Severe serotonin syndrome (with serotonergic drugs)', 'Orthostatic hypotension', 'Weight gain', 'Oedema', 'Insomnia', 'Anticholinergic effects', 'Hepatotoxicity (phenelzine — rare)'],
    nursing: ['STRICT DIETARY RESTRICTIONS: avoid aged cheeses, cured meats, fermented foods, broad beans, Marmite, tap beer, red wine — tyramine accumulation → hypertensive crisis (BP >200 mmHg, headache, stroke)', 'DRUG INTERACTION CARD: must be carried by patient at all times — show to all healthcare providers', '14-day washout before starting/stopping any serotonergic drug', 'If hypertensive crisis: phentolamine IV or GTN SL — attend emergency immediately', 'Educate about OTC decongestants (pseudoephedrine — hypertensive crisis) and pethidine (serotonin syndrome)', 'DIETARY RESTRICTIONS continue for 14 days after stopping'],
    contraindications: ['SSRIs, SNRIs, TCAs, other MAOIs (serotonin syndrome)', 'Sympathomimetics (amphetamine, pseudoephedrine)', 'Pethidine (meperidine) — potentially fatal', 'Tramadol', 'Buspirone', 'Hepatic impairment', 'Phaeochromocytoma', 'Cerebrovascular disease'],
  },

  'Tranylcypromine': {
    class: 'MAOI', subclass: 'Irreversible non-selective MAOI (amphetamine-like)',
    overview: 'Irreversible non-selective MAOI structurally similar to amphetamine. Slightly stimulating — less sedating than phenelzine. High hypertensive crisis and serotonin syndrome risk.',
    indications: ['Treatment-resistant depression', 'Atypical depression'],
    dosage: '10 mg BD initially; increase to 30–60 mg/day.',
    mechanism: 'Irreversible MAO-A and MAO-B inhibition → ↑ monoamines. Structurally resembles amphetamine — mild stimulant properties.',
    sideEffects: ['Hypertensive crisis (cheese reaction)', 'Insomnia (stimulant properties — give before 2 pm)', 'Serotonin syndrome', 'Orthostatic hypotension', 'Hepatotoxicity'],
    nursing: ['Same dietary tyramine restrictions as phenelzine', 'Give doses before 2 pm (stimulating — causes insomnia if given later)', 'Same drug interaction warnings as all MAOIs', '2-week washout before and after switching antidepressants'],
    contraindications: ['Same as phenelzine'],
  },

  'Moclobemide': {
    class: 'RIMA', subclass: 'Reversible Inhibitor of MAO-A',
    overview: 'Reversible, selective MAO-A inhibitor. Much safer than irreversible MAOIs. Dietary tyramine restriction minimal (tyramine competes with drug). Fewer drug interactions. Good for atypical depression and social phobia.',
    indications: ['Major depressive disorder', 'Social anxiety disorder', 'Atypical depression'],
    dosage: '150 mg BD–TDS. Max 600 mg/day. Take AFTER meals (reduces tyramine displacement).',
    mechanism: 'Reversible, competitive MAO-A inhibition → ↑ serotonin, noradrenaline (not dopamine via MAO-B). Tyramine can displace drug and be metabolised (reversibility = safety).',
    sideEffects: ['Insomnia', 'Nausea', 'Dizziness', 'Headache', 'Mild serotonin syndrome (with serotonergic drugs)', 'Hypertensive crisis (possible but rare — much less than irreversible MAOIs)'],
    nursing: ['Far safer than irreversible MAOIs — no strict tyramine diet required (avoid very large amounts of tyramine-rich foods)', 'Take AFTER meals (reduces tyramine interaction)', 'Still avoid SSRIs, strong serotonergic drugs (serotonin syndrome risk)', 'Give morning/lunchtime doses — can cause insomnia if taken in evening', 'Good choice when MAOI is needed but patient cannot adhere to strict tyramine diet'],
    contraindications: ['SSRIs, clomipramine, pethidine, dextromethorphan (serotonin syndrome)', 'Phaeochromocytoma', 'Hepatic impairment'],
  },


  // ══════════════════════════════════════════════════════════
  // 9. OTHER ANTIDEPRESSANTS
  // ══════════════════════════════════════════════════════════

  'Mirtazapine': {
    class: 'NaSSA', subclass: 'Noradrenergic and Specific Serotonergic Antidepressant',
    overview: 'Unique antidepressant mechanism. Paradoxically more sedating at 15 mg than 30 mg (at 15 mg, H1 blockade dominates; at 30 mg, increased NE/5-HT offsets H1 sedation). No sexual side effects (does not inhibit reuptake). Useful when insomnia, anorexia, or weight loss accompanies depression.',
    indications: ['Major depressive disorder', 'Depression with insomnia', 'Depression with anorexia/weight loss', 'Nausea in palliative care', 'Augmentation in treatment-resistant depression'],
    dosage: '15 mg PO OD at bedtime; increase to 30 mg after 1–2 weeks; maximum 45 mg. IMPORTANT: lower dose (15 mg) is MORE sedating than higher dose (30 mg).',
    mechanism: 'Alpha-2 receptor antagonism (increases NE and 5-HT release) + 5-HT2 and 5-HT3 receptor blockade (reduces nausea, improves tolerability) + H1 antagonism (sedation, appetite stimulation).',
    sideEffects: ['Sedation (usually beneficial — therapeutic at night)', 'Significant weight gain and increased appetite', 'Dry mouth', 'Constipation', 'Agranulocytosis (rare — 0.1%)', 'Restless legs syndrome (worsens or induces)'],
    nursing: ['Take at NIGHT — strongly sedating; this is often beneficial for depression with insomnia', 'Warn about substantial weight gain — baseline weight; monthly monitoring', 'Excellent choice in: underweight depressed patients, those needing sleep, elderly', 'NO sexual dysfunction (strong advantage over SSRIs/SNRIs)', 'FBC if patient develops fever, sore throat, or oral ulcers (agranulocytosis)', 'May worsen or precipitate restless legs syndrome'],
    contraindications: ['MAOIs', 'Hypersensitivity'],
  },

  'Bupropion': {
    class: 'NDRI', subclass: 'Noradrenaline-Dopamine Reuptake Inhibitor',
    overview: 'Unique antidepressant with dopaminergic activity — activating and pro-sexual (opposite of SSRIs). Also licensed for smoking cessation (Zyban). Lowers seizure threshold (dose-related). No weight gain; may cause weight loss.',
    indications: ['Major depressive disorder (especially with fatigue, hypersomnia, sexual dysfunction with other antidepressants)', 'Seasonal affective disorder', 'Smoking cessation (Zyban)', 'ADHD (off-label)'],
    dosage: 'Depression: 150 mg SR OD for 3 days, then 150 mg BD (max 400 mg/day; no single dose >150 mg). Smoking cessation: 150 mg OD for 6 days, then 150 mg BD for 7–12 weeks.',
    mechanism: 'Inhibits reuptake of noradrenaline and dopamine; no serotonergic activity; no anticholinergic, H1, or alpha-1 activity.',
    sideEffects: ['Seizures (dose-related — major risk at >450 mg/day)', 'Insomnia and agitation (activating)', 'Dry mouth', 'Nausea', 'Headache', 'Weight neutral/loss', 'Hypertension', 'Tinnitus'],
    nursing: ['SEIZURE RISK: do not exceed 150 mg per dose; do not crush SR/XL tablets; taper if stopping; avoid in patients with seizure history, eating disorders, head injury, alcohol withdrawal', 'Give last dose no later than early afternoon — causes insomnia if taken in evening', 'Activating profile — good for depression with fatigue and hypersomnia', 'Smoking cessation: start 1–2 weeks before quit date; combine with NRT for best outcomes', 'Does NOT cause sexual dysfunction — useful for patients on other antidepressants (augmentation)', 'Monitor blood pressure'],
    contraindications: ['Seizure disorder', 'Eating disorders (bulimia, anorexia — increased seizure risk)', 'Concurrent MAOIs', 'Alcohol withdrawal', 'Brain tumour or head trauma'],
  },

  'Agomelatine': {
    class: 'Melatonergic Antidepressant', subclass: 'MT1/MT2 agonist + 5-HT2C antagonist',
    overview: 'Novel mechanism antidepressant. Does not inhibit reuptake. Restores circadian rhythm. Hepatotoxicity requires mandatory LFT monitoring. No sexual side effects. No discontinuation syndrome.',
    indications: ['Major depressive disorder (with disturbed sleep-wake cycle)'],
    dosage: '25 mg at bedtime; increase to 50 mg after 2 weeks if needed.',
    mechanism: 'Melatonin MT1/MT2 receptor agonism → resynchronises circadian rhythms (sleep phase). 5-HT2C antagonism → ↑ frontocortical dopamine and noradrenaline release → antidepressant effect.',
    sideEffects: ['Hepatotoxicity (significant — mandatory monitoring)', 'Nausea', 'Dizziness', 'Headache', 'Somnolence', 'No sexual side effects', 'No discontinuation syndrome'],
    nursing: ['LFTs MANDATORY before starting and at 3, 6, 12, and 24 weeks — hepatotoxicity can be severe; do NOT prescribe if ALT >3× ULN', 'STOP if transaminases rise significantly or patient develops jaundice, dark urine, or abdominal pain', 'Avoid in alcohol use disorder (↑ hepatotoxicity risk)', 'Take at bedtime — melatonergic action on sleep', 'No discontinuation syndrome — can be stopped abruptly', 'No weight gain, no sexual dysfunction — good tolerability profile'],
    contraindications: ['Hepatic impairment', 'ALT >3× upper limit of normal', 'Alcohol use disorder', 'CYP1A2 inhibitors (fluvoxamine, ciprofloxacin — greatly increase agomelatine levels)'],
  },

  'Trazodone': {
    class: 'SARI', subclass: 'Serotonin Antagonist and Reuptake Inhibitor',
    overview: 'Sedating antidepressant with complex mechanism. At low doses (50–100 mg) sedative effect dominates — widely used (off-label) for insomnia. At antidepressant doses (200–400 mg) serotonergic reuptake inhibition contributes. Can cause priapism.',
    indications: ['Major depressive disorder', 'Insomnia (especially in depression — off-label at low dose)', 'Anxiety', 'Agitation in dementia'],
    dosage: 'Depression: 150 mg/day in divided doses; increase to 300–600 mg. Insomnia: 50–100 mg at bedtime.',
    mechanism: '5-HT2A and 5-HT2C antagonism (antidepressant, sedation) + SERT inhibition (at higher doses) + alpha-1 and H1 blockade (sedation).',
    sideEffects: ['Sedation (often therapeutic)', 'Priapism (rare but medical emergency — 0.1%)', 'Orthostatic hypotension', 'Dizziness', 'Nausea', 'Dry mouth', 'Headache'],
    nursing: ['WARN MALE PATIENTS about priapism (prolonged, painful erection) — must seek immediate medical attention (urological emergency within 4 hrs); caution with sildenafil', 'Good choice for depressed patients with insomnia (no dependence unlike benzodiazepines)', 'Orthostatic hypotension — advise to rise slowly; given at night reduces impact', 'Take with food to reduce nausea', 'Useful in elderly with agitation and dementia-related sleep disturbance'],
    contraindications: ['MAOIs', 'Recent MI', 'Concurrent alpha-blockers (severe hypotension)'],
  },

  'Reboxetine': {
    class: 'NRI', subclass: 'Noradrenaline Reuptake Inhibitor',
    overview: 'Selective noradrenaline reuptake inhibitor. Pure noradrenergic mechanism — may improve motivation, concentration, and fatigue. Limited evidence for efficacy vs other antidepressants.',
    indications: ['Major depressive disorder (second-line)'],
    dosage: '4 mg BD; increase to 10 mg/day after 3–4 weeks. Max 12 mg/day.',
    mechanism: 'Highly selective NET inhibition → ↑ noradrenaline. No serotonergic, dopaminergic, or anticholinergic activity.',
    sideEffects: ['Insomnia', 'Dry mouth', 'Constipation', 'Urinary hesitancy/retention', 'Tachycardia', 'Hypertension', 'Sweating'],
    nursing: ['Monitor urinary symptoms — NET inhibition can cause urinary retention (particularly in older men with BPH)', 'Monitor blood pressure and heart rate', 'Less evidence than SSRIs — typically not first-line'],
    contraindications: ['MAOIs', 'Urinary retention', 'Severe renal impairment'],
  },


  // ══════════════════════════════════════════════════════════
  // 10. MOOD STABILISERS
  // ══════════════════════════════════════════════════════════

  'Lithium': {
    class: 'Mood Stabiliser', subclass: 'Alkali metal salt — Monovalent cation',
    overview: 'Gold-standard mood stabiliser for bipolar disorder. Highly effective for mania prevention and augmentation of antidepressants in resistant depression. EXTREMELY narrow therapeutic index (therapeutic: 0.6–1.0 mmol/L; toxic: >1.5 mmol/L). Lithium toxicity is a medical emergency. Regular serum level, renal, and thyroid monitoring is mandatory for life.',
    indications: ['Bipolar disorder (mania prevention — most evidence)', 'Acute mania (adjunct)', 'Augmentation of antidepressants in treatment-resistant MDD', 'Recurrent depression prevention', 'Reduction of suicidal behaviour', 'Cluster headache (off-label)'],
    dosage: 'Usually 400–1200 mg/day in divided doses. Dose adjusted to achieve serum level 0.6–1.0 mmol/L (12 hrs post-dose). Elderly: lower doses. Check level 5–7 days after each dose change.',
    mechanism: 'Multiple mechanisms: inhibits inositol monophosphatase (↓ inositol recycling), modulates GSK-3β → neuroprotective effects. Mimics Na⁺ → affects neuronal excitability.',
    sideEffects: ['Fine tremor (at therapeutic levels)', 'Polyuria and polydipsia (nephrogenic diabetes insipidus)', 'Weight gain', 'Hypothyroidism (30% — long-term)', 'Cognitive slowing and memory impairment', 'Acne and psoriasis', 'Cardiac effects (T-wave changes)', 'TOXICITY (>1.5 mmol/L): coarse tremor, vomiting, diarrhoea, confusion, ataxia, seizures, renal failure, coma'],
    nursing: ['SERUM LEVEL monitoring: every 5–7 days until stable, then every 3 months; ALWAYS 12 hrs post-dose (standardised timing)', 'RENAL FUNCTION (eGFR, creatinine) every 3–6 months — lithium causes chronic interstitial nephritis', 'THYROID FUNCTION (TSH) every 6 months — hypothyroidism common; treat with levothyroxine without stopping lithium', 'LITHIUM TOXICITY SIGNS to educate patients: coarse tremor, confusion, vomiting, diarrhoea, muscle twitching → STOP lithium and attend emergency immediately', 'Dehydration, NSAIDs, ACE inhibitors, and thiazides REDUCE lithium excretion → toxicity risk; advise adequate fluid intake', 'Provide lithium alert card', 'ECG baseline and annually — T-wave changes expected but monitor for arrhythmias', 'PREGNANCY: Ebstein anomaly risk (small but real); use in pregnancy requires specialist assessment'],
    contraindications: ['Severe renal impairment', 'Cardiac disease (arrhythmias, recent MI)', 'Addison disease', 'Pregnancy (1st trimester — relative; requires risk-benefit discussion)', 'Dehydration or low-sodium diet'],
  },

  'Sodium Valproate': {
    class: 'Mood Stabiliser / Anticonvulsant', subclass: 'Branched-chain fatty acid',
    overview: 'Broad-spectrum anticonvulsant and mood stabiliser. CATEGORY X IN PREGNANCY — risk of neural tube defects (1–2%), craniofacial abnormalities, and persistent cognitive impairment in the child. Women of childbearing potential must not be prescribed valproate unless absolutely necessary (VALPROATE PREVENT Programme in UK).',
    indications: ['Generalised epilepsy (absence, myoclonic, tonic-clonic)', 'Focal seizures', 'Bipolar disorder (acute mania; maintenance)', 'Migraine prophylaxis'],
    dosage: 'Epilepsy: 500 mg–2 g/day in 2 divided doses; titrate. Bipolar: 750–2000 mg/day. Monitor serum levels (50–100 mg/L).',
    mechanism: 'Sodium channel blockade + calcium channel blockade (T-type) + enhances GABA synthesis and inhibits its breakdown → broad anticonvulsant effect.',
    sideEffects: ['TERATOGENICITY (Category X): neural tube defects (spina bifida), cardiac defects, developmental delay, cognitive impairment (IQ reduction ~10 points in exposed children)', 'Hepatotoxicity (particularly in children <2 years)', 'Pancreatitis', 'Thrombocytopaenia and platelet dysfunction', 'Weight gain', 'Hair loss (telogen effluvium — reversible)', 'Tremor', 'GI upset'],
    nursing: ['ABSOLUTELY MUST NOT BE PRESCRIBED to girls or women of childbearing potential without: (1) specialist confirmation no other option is suitable, (2) confirmed effective contraception, (3) annual written consent (Pregnancy Prevention Programme)', 'LFTs: baseline and every 6 months (especially in first 6 months; children at highest risk)', 'FBC and platelets: before surgery or if bruising occurs', 'Serum level monitoring every 3–6 months', 'Pancreatitis: counsel to report severe abdominal pain immediately', 'Hair loss: usually temporary — reassure but monitor'],
    contraindications: ['Pregnancy — ABSOLUTE CONTRAINDICATION unless no alternative (neural tube defects, developmental harm)', 'Women of childbearing age without confirmed effective contraception and annual specialist review', 'Hepatic disease or personal/family history of hepatic dysfunction', 'Porphyria', 'Urea cycle disorders'],
  },

  'Carbamazepine': {
    class: 'Mood Stabiliser / Anticonvulsant', subclass: 'Dibenzazepine',
    overview: 'First-line for focal seizures and trigeminal neuralgia. Second-line mood stabiliser (bipolar). Potent CYP450 enzyme inducer — autoinduction reduces its own levels and interacts with many drugs. HLA-B*1502 allele in South/East Asian patients confers extremely high risk of Stevens-Johnson syndrome.',
    indications: ['Focal (partial) seizures', 'Generalised tonic-clonic seizures', 'Trigeminal neuralgia', 'Bipolar disorder (mania prevention — 2nd line)', 'Alcohol withdrawal (alternative)'],
    dosage: '100–200 mg BD initially; increase by 200 mg weekly. Usual: 400–1200 mg/day in 2–4 divided doses. Therapeutic level: 4–12 mg/L.',
    mechanism: 'Sodium channel blockade → stabilises neuronal membranes → reduces repetitive firing. Also inhibits noradrenaline reuptake (mood effect).',
    sideEffects: ['Stevens-Johnson syndrome / toxic epidermal necrolysis (SJS/TEN — life-threatening; risk ↑↑↑ in HLA-B*1502 carriers)', 'Diplopia and dizziness at initiation', 'Hyponatraemia (SIADH — common, especially elderly)', 'Agranulocytosis and aplastic anaemia (rare)', 'Hepatotoxicity', 'Enzyme induction — many drug interactions', 'Teratogenic (neural tube defects)'],
    nursing: ['HLA-B*1502 SCREENING mandatory before prescribing in South Asian, East Asian, and South-East Asian patients (SJS/TEN risk up to 10% vs 0.01% general population)', 'STOP immediately if rash develops — risk of life-threatening SJS/TEN', 'Sodium monitoring (serum Na⁺) every 3–6 months — hyponatraemia common (can cause confusion or fits)', 'FBC and LFTs baseline and every 3 months for first year', 'Enzyme inducer: interacts with OCP (use barrier method), warfarin, phenytoin, statins, antiretrovirals — check ALL drugs', 'Serum level monitoring: every 3–6 months; check level if seizures worsen (autoinduction reduces own levels over time)'],
    contraindications: ['AV block', 'MAOIs', 'History of bone marrow suppression', 'Porphyria', 'HLA-B*1502 positive (relative — if another agent can be used)'],
  },

  'Lamotrigine': {
    class: 'Mood Stabiliser / Anticonvulsant', subclass: 'Phenyltriazine',
    overview: 'Broad-spectrum anticonvulsant with strong evidence as mood stabiliser — particularly for bipolar depression. Safest anticonvulsant in pregnancy. SLOW titration is MANDATORY to prevent potentially fatal Stevens-Johnson syndrome. Valproate doubles lamotrigine levels.',
    indications: ['Focal and generalised seizures', 'Lennox-Gastaut syndrome (adjunct)', 'Bipolar disorder (especially bipolar depression and maintenance)', 'Prevention of depressive relapse in bipolar'],
    dosage: 'WITHOUT valproate: 25 mg OD × 2 wks → 50 mg OD × 2 wks → 100 mg OD → target 100–200 mg BD. WITH valproate (doubles lamotrigine level — MUST halve doses): 25 mg alternate days × 2 wks → 25 mg OD × 2 wks → 50 mg OD → target 100–200 mg/day.',
    mechanism: 'Voltage-gated sodium channel blockade → inhibits presynaptic glutamate release → reduces excitatory neurotransmission.',
    sideEffects: ['Stevens-Johnson syndrome / TEN (risk is TITRATION-SPEED DEPENDENT — too-rapid dose increase is the primary cause)', 'Diplopia', 'Dizziness', 'Headache', 'Rash (non-SJS rash occurs in 10% — must be taken seriously)', 'Insomnia'],
    nursing: ['SLOW TITRATION IS NON-NEGOTIABLE — SJS risk is directly related to how fast the dose is increased; document titration schedule carefully', 'STOP IMMEDIATELY if ANY rash develops — even mild rash must be assessed; benign rash vs SJS cannot be distinguished by appearance alone early on', 'Valproate critically increases lamotrigine levels — HALVE the dose when used together (valproate inhibits lamotrigine glucuronidation)', 'OCP reduces lamotrigine levels by 50% — dose adjustment needed; lamotrigine also may reduce OCP efficacy', 'Safer in pregnancy than carbamazepine or valproate — safest anticonvulsant in pregnancy'],
    contraindications: ['Hypersensitivity to lamotrigine'],
  },


  // ══════════════════════════════════════════════════════════
  // 11. ANTICONVULSANTS (NON-MOOD-STABILISER)
  // ══════════════════════════════════════════════════════════

  'Phenytoin': {
    class: 'Anticonvulsant', subclass: 'Hydantoin — Narrow Therapeutic Index',
    overview: 'Classic anticonvulsant with narrow therapeutic index and zero-order (saturable) pharmacokinetics — small dose changes cause large plasma level changes. Potent CYP450 enzyme inducer. Multiple cosmetic side effects. Avoid in pregnancy.',
    indications: ['Focal and generalised tonic-clonic seizures', 'Status epilepticus (IV — second-line after benzodiazepines)', 'Trigeminal neuralgia (second-line)'],
    dosage: 'Maintenance: 200–400 mg/day PO in 1–2 doses. Status epilepticus: 15–20 mg/kg IV at MAXIMUM 50 mg/min (25 mg/min elderly). Therapeutic level: 10–20 mg/L (free level 1–2 mg/L in hypoalbuminaemia).',
    mechanism: 'Blocks voltage-gated Na⁺ channels in inactivated state → prevents repetitive high-frequency firing → stabilises seizure focus.',
    sideEffects: ['Gingival hyperplasia (20–50%)', 'Hirsutism', 'Coarsening of facial features', 'Acne', 'Peripheral neuropathy (long-term)', 'Ataxia, nystagmus, dysarthria (toxic levels)', 'Megaloblastic anaemia (folate antagonism)', 'Osteoporosis (enzyme induction → ↓ Vitamin D)', 'Teratogenic (foetal hydantoin syndrome)', 'Stevens-Johnson syndrome', 'Paradoxical seizure aggravation at toxic levels'],
    nursing: ['SERUM LEVEL MONITORING: target 10–20 mg/L; check 2 weeks after any dose change (zero-order kinetics means non-linear relationship between dose and level)', 'IV administration: cardiac monitoring and MAXIMUM rate 50 mg/min (cardiac arrest, hypotension, and arrhythmia with faster infusion)', 'GINGIVAL HYPERPLASIA: oral hygiene is essential — refer to dentist; use soft toothbrush, regular flossing', 'Drug interactions: enzyme inducer (affects warfarin, OCP, statins, antibiotics) — check ALL co-prescriptions', 'PROTEIN BINDING: in patients with hypoalbuminaemia (liver disease, nephrotic syndrome), check free phenytoin level', 'Avoid in pregnancy (foetal hydantoin syndrome) — switch to lamotrigine if possible'],
    contraindications: ['Sinus bradycardia', 'Heart block (any degree)', 'Porphyria', 'Pregnancy'],
  },

  'Levetiracetam': {
    class: 'Anticonvulsant', subclass: 'Pyrrolidine derivative — Broad-spectrum',
    overview: 'Modern broad-spectrum anticonvulsant. Unique mechanism. No enzyme induction — minimal drug interactions. No requirement for serum level monitoring. Renally eliminated. Safe in pregnancy (relatively). Main concern: psychiatric side effects (mood, behaviour, aggression).',
    indications: ['Focal seizures (adjunct and monotherapy)', 'Generalised tonic-clonic seizures', 'Myoclonic seizures (juvenile myoclonic epilepsy)', 'Status epilepticus (IV — 2nd-line)', 'Prophylaxis post traumatic brain injury'],
    dosage: '250–500 mg BD initially; increase by 500 mg/day every 2–4 weeks. Usual effective: 1000–3000 mg/day. IV available (same dosing).',
    mechanism: 'Binds synaptic vesicle glycoprotein SV2A → modulates vesicular neurotransmitter release → reduces excitatory neurotransmission at seizure focus.',
    sideEffects: ['Behavioural and psychiatric effects: irritability, aggression, depression, anxiety (up to 13%)', 'Somnolence', 'Headache', 'Dizziness', 'Fatigue', 'Psychosis (rare)'],
    nursing: ['MONITOR MOOD AND BEHAVIOUR at every review — inform family members to report changes in irritability or aggression', 'Screen for depression and suicidal ideation', 'No enzyme induction → no interaction with OCP, warfarin, or other antiepileptics', 'Dose reduction required in renal impairment (renally eliminated)', 'Safe in pregnancy (relatively — preferred over valproate/carbamazepine)', 'No dietary restrictions, no serum level monitoring required'],
    contraindications: ['Hypersensitivity to levetiracetam or pyrrolidone derivatives'],
  },

  'Gabapentin': {
    class: 'Anticonvulsant / Analgesic', subclass: 'GABA analogue (but does not act on GABA receptors)',
    overview: 'Used primarily for neuropathic pain; anticonvulsant adjunct. Despite its name, does not act on GABA receptors. Significant misuse and abuse potential — now a controlled substance in many countries. Poor oral bioavailability that saturates (non-linear absorption).',
    indications: ['Neuropathic pain (postherpetic neuralgia, diabetic neuropathy)', 'Focal seizures (adjunct)', 'Restless legs syndrome', 'Fibromyalgia', 'Hot flushes (post-menopausal, cancer)', 'Alcohol withdrawal (adjunct)'],
    dosage: 'Neuropathic pain: 300 mg on day 1, 300 mg BD on day 2, 300 mg TDS on day 3; titrate to 1800–3600 mg/day in 3 doses. Seizures (adjunct): 300 mg TDS, up to 3600 mg/day.',
    mechanism: 'Binds alpha-2-delta (α2δ) subunit of voltage-gated calcium channels → reduces calcium entry → ↓ excitatory neurotransmitter (glutamate, substance P) release at synapses.',
    sideEffects: ['Somnolence and fatigue', 'Dizziness', 'Ataxia', 'Peripheral oedema (ankle swelling)', 'Weight gain', 'Visual disturbance', 'Cognitive impairment', 'Misuse/dependence (especially IV drug users — euphoric at high doses)'],
    nursing: ['CONTROLLED SUBSTANCE in UK and increasing number of jurisdictions (Class C) — assess misuse risk before prescribing, especially in patients with substance use history', 'Non-linear absorption — saturation at higher doses; spread doses evenly through the day', 'Renally eliminated — DOSE REDUCTION essential in renal impairment (risk of severe toxicity including encephalopathy)', 'Do NOT stop abruptly after prolonged use — withdrawal seizures possible', 'CAUTION with opioids — respiratory depression risk (combination causes disproportionate respiratory depression)', 'Peripheral oedema: elevate legs, may respond to dose reduction'],
    contraindications: ['Hypersensitivity', 'Acute pancreatitis (relative)'],
  },

  'Pregabalin': {
    class: 'Anticonvulsant / Analgesic / Anxiolytic', subclass: 'GABA analogue',
    overview: 'More potent and better absorbed than gabapentin (linear absorption). Class C controlled substance in UK due to misuse. Also has anxiolytic indication (GAD). Commonly misused particularly in combination with opioids.',
    indications: ['Neuropathic pain (first-line for peripheral neuropathy and postherpetic neuralgia)', 'Focal seizures (adjunct)', 'Generalised anxiety disorder', 'Fibromyalgia'],
    dosage: 'Neuropathic pain/seizures: 75 mg BD; increase to 150 mg BD after 3–7 days; max 300 mg BD. GAD: 75 mg BD; max 200 mg TDS.',
    mechanism: 'Same as gabapentin (α2δ calcium channel subunit binding) but better bioavailability and faster onset.',
    sideEffects: ['Dizziness', 'Somnolence', 'Weight gain (significant)', 'Peripheral oedema', 'Euphoria at high doses (abuse potential)', 'Blurred vision', 'Dry mouth', 'Cognitive impairment'],
    nursing: ['CLASS C CONTROLLED SUBSTANCE in UK — high misuse potential, especially combined with opioids or benzodiazepines (respiratory depression deaths)', 'Do not prescribe to patients with known misuse history unless carefully justified', 'Linear absorption (unlike gabapentin) — dose proportional to effect', 'Renal dose adjustment required (renally eliminated)', 'Do NOT stop abruptly — taper to avoid withdrawal (anxiety, insomnia, seizures)', 'Monitor weight — weight gain can be substantial'],
    contraindications: ['Hypersensitivity to pregabalin'],
  },

  'Phenobarbitone (Phenobarbital)': {
    class: 'Anticonvulsant', subclass: 'Barbiturate',
    overview: 'Oldest anticonvulsant still in use. Very long half-life (75–120 hrs) — once-daily dosing and self-tapers slowly. First-line in resource-limited settings (low cost). Controlled substance. Enzyme inducer. High sedation and dependence.',
    indications: ['Generalised tonic-clonic seizures', 'Focal seizures', 'Status epilepticus (IV — 3rd-line)', 'Neonatal seizures', 'Alcohol withdrawal (severe)'],
    dosage: 'Adults: 60–180 mg OD at night. Status epilepticus: 15–20 mg/kg IV (max rate 100 mg/min). Children: weight-based.',
    mechanism: 'GABA-A receptor modulation → increases duration of Cl⁻ channel opening (unlike benzodiazepines which increase frequency). Also inhibits glutamate. Direct membrane depressant at high doses.',
    sideEffects: ['Sedation (significant)', 'Cognitive impairment', 'Paradoxical hyperactivity in children', 'Enzyme induction (major — affects many drugs)', 'Osteoporosis', 'Folate deficiency', 'Dependence', 'Respiratory depression (toxic doses)'],
    nursing: ['Long half-life (>3 days) — once daily dosing at night; takes 2–3 weeks to reach steady state', 'Potent enzyme inducer — check drug interactions (OCP, warfarin, antiretrovirals, statins, other anticonvulsants)', 'Do not stop abruptly — risk of withdrawal seizures (may take weeks to develop due to long half-life)', 'Supplement with calcium and vitamin D (enzyme induction → ↓ vitamin D)', 'Serum level monitoring (therapeutic 15–40 mg/L)'],
    contraindications: ['Acute porphyria', 'Severe respiratory depression', 'Hepatic impairment', 'Addiction history (relative)'],
  },

  'Topiramate': {
    class: 'Anticonvulsant', subclass: 'Sulphamate-substituted monosaccharide',
    overview: 'Broad-spectrum anticonvulsant also licensed for migraine prophylaxis. Causes cognitive side effects ("dopamax") — impairs memory, word-finding, and concentration. Also causes appetite suppression and weight loss. Risk of metabolic acidosis and renal calculi.',
    indications: ['Focal seizures (adjunct and monotherapy)', 'Generalised seizures', 'Lennox-Gastaut syndrome (adjunct)', 'Migraine prophylaxis', 'Cluster headache (off-label)'],
    dosage: 'Epilepsy: 25 mg OD initially; increase by 25–50 mg/day every 1–2 weeks; target 200–400 mg/day in 2 doses. Migraine: 25 mg at night → 100 mg/day.',
    mechanism: 'Na⁺ channel blockade + GABA-A enhancement + glutamate (AMPA/kainate) blockade + carbonic anhydrase inhibition.',
    sideEffects: ['Cognitive impairment ("word-finding difficulty", poor concentration, memory loss — "dopamax")', 'Weight loss and appetite suppression', 'Paraesthesia (carbonic anhydrase inhibition)', 'Metabolic acidosis', 'Nephrolithiasis (kidney stones — carbonic anhydrase in kidney)', 'Myopia and acute glaucoma (rare but emergency)', 'Teratogenic (oral clefts)'],
    nursing: ['WARN about cognitive side effects — impact on work, driving, and quality of life; consider dose reduction if severe', 'Adequate hydration essential — reduces kidney stone risk (aim 2–3 L water/day)', 'Monitor bicarbonate — metabolic acidosis (can worsen bone density and affect growth in children)', 'Any sudden visual change or eye pain — STOP and refer immediately (acute angle-closure glaucoma)', 'Avoid in pregnancy (oral clefts)', 'Carbonic anhydrase inhibition can cause heat intolerance (reduced sweating) — warn in hot environments'],
    contraindications: ['Nephrolithiasis (renal calculi) — relative', 'Pregnancy', 'Metabolic acidosis'],
  },

  'Oxcarbazepine': {
    class: 'Anticonvulsant', subclass: 'Keto-derivative of carbamazepine',
    overview: 'Structural analogue of carbamazepine with better tolerability and fewer drug interactions. Converted to active monohydroxy metabolite (MHD). Less enzyme induction than carbamazepine but still induces OCP metabolism.',
    indications: ['Focal seizures', 'Generalised tonic-clonic seizures', 'Trigeminal neuralgia (alternative to carbamazepine)'],
    dosage: '300 mg BD initially; increase to 900–1800 mg/day.',
    mechanism: 'Sodium channel blockade (same mechanism as carbamazepine).',
    sideEffects: ['Hyponatraemia (MORE common than carbamazepine — monitor carefully)', 'Dizziness', 'Diplopia', 'Headache', 'Ataxia', 'Rash (10% cross-sensitivity with carbamazepine)', 'SJS (lower risk than carbamazepine but still possible)'],
    nursing: ['Monitor serum sodium at baseline, 2 weeks, 6 weeks, then 6-monthly (hyponatraemia more common than with carbamazepine)', 'Cross-hypersensitivity with carbamazepine in 25–30% — test if SJS history unclear', 'Still interacts with OCP (advise additional contraception)', 'HLA-B*1502 screening still advised in Asian patients (SJS risk)', 'No autoinduction (unlike carbamazepine) — levels are more predictable'],
    contraindications: ['AV block', 'Hypersensitivity', 'History of SJS with carbamazepine (risk of cross-reaction)'],
  },

  'Ethosuximide': {
    class: 'Anticonvulsant', subclass: 'Succinimide',
    overview: 'First-line for childhood absence epilepsy. ONLY effective for absence seizures — does NOT treat other seizure types. Used as monotherapy; may aggravate tonic-clonic seizures if used as sole agent in mixed epilepsy.',
    indications: ['Absence epilepsy (first-line)', 'Myoclonic seizures (adjunct)'],
    dosage: 'Children (3–6 years): 250 mg OD; increase by 250 mg every 1–2 weeks. Children >6 years and adults: 500–1500 mg/day.',
    mechanism: 'Selective T-type (transient) calcium channel blockade in thalamic neurons → disrupts thalamocortical 3 Hz spike-wave discharge → stops absence episodes.',
    sideEffects: ['GI upset (nausea, vomiting) — take with food', 'Drowsiness', 'Hiccups', 'Ataxia', 'SLE-like syndrome (rare)', 'Blood dyscrasias (rare)'],
    nursing: ['Effective ONLY for absence seizures — educate parents/patients', 'May unmask or worsen tonic-clonic seizures if not combined with broad-spectrum agent in mixed epilepsy', 'Take with food to reduce GI side effects', 'Serum level monitoring: therapeutic range 40–100 mg/L', 'FBC periodically (blood dyscrasia risk)'],
    contraindications: ['Hepatic or renal impairment (severe)', 'Porphyria'],
  },

  'Vigabatrin': {
    class: 'Anticonvulsant', subclass: 'GABA transaminase inhibitor',
    overview: 'Used specifically for infantile spasms (West syndrome — first-line with or without steroids) and refractory focal seizures. CAUSES PERMANENT IRREVERSIBLE VISUAL FIELD DEFECTS in 30–50% of patients — mandatory visual monitoring.',
    indications: ['Infantile spasms (West syndrome) — first-line', 'Refractory focal seizures (adults — 3rd-line adjunct)'],
    dosage: 'Infantile spasms: 50–150 mg/kg/day. Focal seizures (adults): 500 mg BD; increase to 1000–3000 mg/day.',
    mechanism: 'Irreversible inhibition of GABA aminotransferase → ↑ CNS GABA → anticonvulsant effect.',
    sideEffects: ['PERMANENT IRREVERSIBLE VISUAL FIELD DEFECTS (bilateral concentric — 30–50% of patients)', 'Sedation', 'Weight gain', 'Depression and agitation', 'MRI signal changes in basal ganglia (transient in infants — usually resolves)'],
    nursing: ['MANDATORY VISUAL FIELD TESTING at baseline, every 3 months during treatment, and 3–6 monthly thereafter — visual field defects are PERMANENT and IRREVERSIBLE', 'Inform patients they may not notice the visual field loss (peripheral) — must be tested formally', 'Document consent discussion — major risk must be discussed and documented before prescribing', 'Benefits outweigh risks in infantile spasms (where it is first-line despite risk)', 'Report any visual deterioration, behavioural change, or depression'],
    contraindications: ['Pre-existing significant visual field defects'],
  },

  'Clobazam': {
    class: 'Benzodiazepine Anticonvulsant', subclass: '1,5-benzodiazepine',
    overview: '1,5-benzodiazepine with more anticonvulsant and less sedative effects than 1,4-benzodiazepines (e.g., diazepam). Used as add-on therapy in epilepsy. Tolerance to anticonvulsant effect develops over months.',
    indications: ['Focal and generalised seizures (adjunct)', 'Lennox-Gastaut syndrome (adjunct)', 'Seizure clusters / catamenial epilepsy (intermittent use)'],
    dosage: '5–15 mg OD–BD. Max 60 mg/day.',
    mechanism: 'GABA-A potentiation. 1,5-benzodiazepine structure → preferential anticonvulsant effect with less sedation than diazepam.',
    sideEffects: ['Sedation (less than diazepam)', 'Ataxia', 'Tolerance to anticonvulsant effect', 'Dependence', 'Behavioural disturbance (children)'],
    nursing: ['Monitor for tolerance development — increasing seizure frequency after initial control', 'Taper dose very slowly when stopping (withdrawal seizures)', 'Useful as intermittent treatment around menstruation in catamenial epilepsy (cycle-based dosing)', 'Controlled substance — dependence potential'],
    contraindications: ['Respiratory failure', 'Myasthenia gravis', 'Severe hepatic impairment'],
  },


  // ══════════════════════════════════════════════════════════
  // 12. OPIOID ANALGESICS
  // ══════════════════════════════════════════════════════════

  'Morphine': {
    class: 'Opioid Analgesic', subclass: 'Natural opioid — Phenanthrene',
    overview: 'Gold-standard opioid for severe pain. Multiple routes: oral (IR and MR), SC, IV, IM, epidural. Active metabolite morphine-6-glucuronide (M6G) accumulates in renal failure → prolonged effect and toxicity.',
    indications: ['Severe acute pain (post-operative, trauma, acute MI)', 'Chronic cancer pain (WHO ladder step 3)', 'Dyspnoea in acute pulmonary oedema', 'Palliative care (pain and dyspnoea)'],
    dosage: 'Acute pain: 2.5–10 mg SC/IV every 2–4 hrs (titrate to pain). Oral IR: 5–20 mg every 4 hrs. MR (MST): 30–200 mg BD. Always prescribe IR as rescue alongside MR.',
    mechanism: 'Agonist at μ (mu) opioid receptors in brain, spinal cord, and peripheral tissues → ↓ pain transmission + euphoria, respiratory depression, constipation, urinary retention.',
    sideEffects: ['Respiratory depression (dose-limiting — most serious)', 'Constipation (universal — always prescribe laxative)', 'Nausea/vomiting (common initially)', 'Sedation', 'Hypotension', 'Urinary retention', 'Pruritus (histamine release — SC/IM)', 'Myoclonus (at high doses/renal failure)', 'Dependence and tolerance (with chronic use)'],
    nursing: ['ALWAYS have naloxone available and know how to administer it', 'Monitor respiratory rate: HOLD if <12 breaths/min and reassess', 'PRESCRIBE LAXATIVE concurrently (e.g., senna + docusate) — constipation affects virtually all patients', 'Nausea: prescribe antiemetic (haloperidol/metoclopramide) for first few days', 'Pain and sedation assessment every 1–2 hrs post IV dose', 'RENAL IMPAIRMENT: active metabolite (M6G) accumulates — reduce dose and frequency; monitor for confusion, myoclonus (accumulation signs)', 'Equianalgesic conversion table essential when switching opioids'],
    contraindications: ['Respiratory depression (without ventilatory support)', 'Raised intracranial pressure (head injury without monitoring)', 'Paralytic ileus', 'Acute severe asthma', 'MAOIs'],
  },

  'Codeine': {
    class: 'Opioid Analgesic', subclass: 'Natural opioid — Prodrug',
    overview: 'Prodrug requiring conversion to morphine by CYP2D6. Highly variable CYP2D6 activity: poor metabolisers (7–10% of population) get NO analgesia; ultra-rapid metabolisers (1–2% — common in Ethiopian/North African populations) get potentially fatal morphine concentrations. AVOID in children under 12.',
    indications: ['Mild-moderate pain (adjunct with paracetamol)', 'Cough suppression', 'Symptomatic diarrhoea'],
    dosage: '30–60 mg PO every 4–6 hrs. Max 240 mg/day. Cough: 10–20 mg every 4–6 hrs.',
    mechanism: 'Prodrug → CYP2D6 converts to morphine (active). ~10% of dose becomes morphine in normal metabolisers.',
    sideEffects: ['Constipation', 'Nausea', 'Sedation', 'Respiratory depression (ultra-rapid metabolisers at risk)', 'Dependence', 'Itching'],
    nursing: ['AVOID IN CHILDREN <12 YEARS — deaths reported post-tonsillectomy/adenoidectomy (ultra-rapid metabolisers)', 'AVOID IN BREASTFEEDING — morphine passes into breast milk; ultra-rapid metaboliser mothers → infant morphine toxicity', 'Poor metabolisers: no analgesic benefit — switch to opioid not requiring CYP2D6 (e.g., morphine, oxycodone)', 'Constipation management always needed', 'Be alert for signs of ultra-rapid metabolism: excessive drowsiness, slurred speech, breathing difficulty with normal doses'],
    contraindications: ['Children <12 years', 'Post-tonsillectomy/adenoidectomy pain in <18 years', 'Breastfeeding', 'Respiratory depression', 'Acute abdomen'],
  },

  'Tramadol': {
    class: 'Opioid Analgesic / SNRI', subclass: 'Synthetic opioid — Atypical',
    overview: 'Dual mechanism: weak μ-opioid agonist + serotonin and noradrenaline reuptake inhibition. Lower physical dependence than morphine but significant serotonin syndrome risk. Can cause seizures — lowers seizure threshold. Controlled substance.',
    indications: ['Moderate to severe pain', 'Neuropathic pain component'],
    dosage: '50–100 mg PO every 4–6 hrs (IR). XR: 100–300 mg OD. Max 400 mg/day (300 mg in elderly).',
    mechanism: 'Weak μ-opioid receptor agonism (~1/6000 morphine potency) + SERT and NET inhibition (both enantiomers contribute).',
    sideEffects: ['Nausea/vomiting (prominent — ~30%)', 'Dizziness', 'Serotonin syndrome (with SSRIs, SNRIs, MAOIs, linezolid)', 'Seizures (dose-dependent; with concurrent antidepressants)', 'Constipation (less than morphine)', 'Dependence', 'Hypoglycaemia (rare)'],
    nursing: ['CHECK drug list ALWAYS — risk of serotonin syndrome with SSRIs, SNRIs, TCAs, MAOIs, triptans, linezolid, methylene blue', 'SEIZURE RISK: caution in patients with epilepsy, head injury, on antidepressants', 'Taper to discontinue — withdrawal includes atypical SNRI-type symptoms alongside opioid withdrawal', 'Less constipation than pure opioids but not zero — laxatives may still be needed', 'Nausea: most common early — antiemetic if required; usually improves after first few days'],
    contraindications: ['MAOIs', 'Uncontrolled epilepsy', 'Severe renal impairment', 'Acute intoxication with alcohol/opioids/sedatives'],
  },

  'Oxycodone': {
    class: 'Opioid Analgesic', subclass: 'Semi-synthetic opioid',
    overview: 'Potent semi-synthetic opioid. Approximately 1.5× more potent than morphine orally. Available as IR (OxyNorm), controlled-release (OxyContin), and combination with naloxone (Targinact — reduces constipation). Significant abuse potential.',
    indications: ['Moderate to severe pain', 'Cancer pain', 'Post-operative pain', 'Chronic non-cancer pain (specialist supervision)'],
    dosage: 'IR (OxyNorm): 5–10 mg every 4–6 hrs. CR (OxyContin): 10–80 mg BD (adjust based on 24-hr IR requirement). IV: 1–5 mg every 4 hrs.',
    mechanism: 'Agonist at μ and κ opioid receptors. Primarily hepatically metabolised to oxymorphone (CYP3A4, 2D6).',
    sideEffects: ['Respiratory depression', 'Constipation', 'Nausea', 'Sedation', 'Hypotension', 'Physical dependence', 'High abuse potential (OxyContin was central to opioid epidemic)'],
    nursing: ['DO NOT CRUSH or chew controlled-release (OxyContin) tablets — dangerous rapid release of full dose', 'Naloxone available at all times', 'Monitor respiratory rate and pain scores', 'Assess bowel movements — prescribe laxative', 'High abuse potential — monitor for misuse signs', 'Oxycodone 10 mg oral ≈ morphine 15 mg oral (for equianalgesic conversion)'],
    contraindications: ['Respiratory depression', 'Severe asthma', 'Paralytic ileus', 'MAOIs'],
  },

  'Fentanyl': {
    class: 'Opioid Analgesic', subclass: 'Synthetic opioid — Phenylpiperidine',
    overview: 'Highly potent synthetic opioid (75–100× morphine). Multiple routes: IV (peri-operative, ICU), transdermal patch (chronic pain), buccal/sublingual/intranasal (breakthrough pain). Transdermal not for opioid-naive patients or acute pain.',
    indications: ['Peri-operative analgesia (IV)', 'ICU analgesia/sedation', 'Chronic cancer pain (transdermal patch — change every 72 hrs)', 'Breakthrough cancer pain (buccal lozenge, sublingual tablet, intranasal)'],
    dosage: 'IV: 1–2 mcg/kg bolus; ICU infusion 25–200 mcg/hr. Transdermal: 12–100 mcg/hr (for opioid-tolerant patients ONLY). Buccal lozenge (Actiq): 200–1600 mcg (titrate individually).',
    mechanism: 'Potent μ-opioid receptor agonist. High lipophilicity → rapid CNS penetration.',
    sideEffects: ['Respiratory depression (severe at rapid IV infusion)', 'Chest wall rigidity (rapid IV)', 'Constipation', 'Sedation', 'Hypotension', 'Nausea', 'Patch: local skin reaction', 'Physical dependence'],
    nursing: ['Transdermal patch: apply to non-irritated, hairless skin (chest, upper arm, back); rotate sites; avoid heat sources (hot bath, electric blanket — accelerates absorption)', 'Patch: takes 12–24 hrs to reach therapeutic level; continue existing analgesia during this time; dispose of safely (fatal to children)', 'Rapid IV fentanyl: give SLOWLY — rapid infusion causes chest wall rigidity (wooden chest) making ventilation impossible; treat with naloxone or neuromuscular blockade', 'Buccal/intranasal products: do NOT use to convert from other fentanyl products (breakthrough dose must be titrated individually — not linearly related to patch dose)', 'Naloxone reversal: fentanyl half-life shorter than naloxone — monitor for re-narcotisation'],
    contraindications: ['Opioid-naive patients (transdermal patches)', 'Respiratory depression', 'Acute or short-duration post-operative pain (patches)', 'Severe hepatic impairment (relative)'],
  },

  'Hydromorphone': {
    class: 'Opioid Analgesic', subclass: 'Semi-synthetic opioid — Hydrogenated ketone of morphine',
    overview: 'Approximately 5–7.5× more potent than morphine. Useful in patients with intractable pain requiring high opioid doses, morphine intolerance, or renal impairment (no active metabolite accumulation in contrast to morphine). Available IV, SC, and oral.',
    indications: ['Severe pain (cancer, post-operative)', 'Opioid rotation from morphine (renal impairment or intolerance)'],
    dosage: 'Oral: 1.3–2 mg every 3–4 hrs. SC/IV: 0.2–0.6 mg every 2–3 hrs. Modified release: 8–64 mg OD.',
    mechanism: 'Potent μ-opioid receptor agonist. Metabolised to hydromorphone-3-glucuronide (H3G — neuroexcitatory, but clinical significance uncertain).',
    sideEffects: ['Respiratory depression', 'Constipation', 'Nausea', 'Sedation', 'Pruritus (less histamine release than morphine)'],
    nursing: ['Equianalgesic conversion: morphine 10 mg IV = hydromorphone 1.5 mg IV; oral morphine 30 mg = oral hydromorphone 7.5 mg', 'Less pruritus than morphine (less histamine release)', 'Safer than morphine in renal impairment (less active metabolite accumulation)', 'Naloxone available', 'Very potent — calculation errors are common; always double-check dose calculations'],
    contraindications: ['Respiratory depression', 'Paralytic ileus', 'Raised ICP'],
  },

  'Methadone': {
    class: 'Opioid Analgesic / Opioid Use Disorder Treatment', subclass: 'Synthetic opioid — NMDA antagonist',
    overview: 'Long-acting opioid with complex pharmacokinetics (half-life 8–59 hrs — highly variable). Used for opioid substitution therapy and refractory cancer pain. QT-prolonging. Difficult to titrate safely — specialist use only. Also NMDA receptor antagonism (useful for neuropathic pain).',
    indications: ['Opioid use disorder (substitution therapy)', 'Refractory cancer pain (rotation from other opioids)', 'Neuropathic cancer pain (NMDA antagonism useful)'],
    dosage: 'Opioid substitution: 10–80 mg OD supervised (dispensed daily initially). Cancer pain: highly individualised — specialist only.',
    mechanism: 'Full μ-opioid receptor agonist + NMDA receptor antagonism (neuropathic pain component).',
    sideEffects: ['QT prolongation (significant — can cause torsades de pointes)', 'Respiratory depression (accumulation due to variable half-life)', 'Constipation', 'Sedation (particularly during loading phase)', 'Oedema', 'Sweating'],
    nursing: ['ECG MANDATORY at baseline, 1 month, then 6-monthly — QTc >500 ms warrants dose review', 'Extremely variable half-life: accumulation risk during titration phase — most overdose deaths occur in first 1–2 weeks of treatment; monitor closely', 'Drug interactions: CYP3A4 inducers (rifampicin, carbamazepine) reduce methadone levels → withdrawal; inhibitors increase levels', 'Supervised consumption in addiction treatment — once stable, take-home doses allowed', 'Methadone overdose: naloxone infusion often required (naloxone half-life shorter than methadone)'],
    contraindications: ['QTc >500 ms', 'Concurrent class I or III antiarrhythmics', 'Respiratory depression'],
  },

  'Buprenorphine': {
    class: 'Partial Opioid Agonist', subclass: 'Semi-synthetic opioid — Ceiling effect',
    overview: 'Partial μ-opioid agonist with ceiling effect on respiratory depression (safer in overdose than full agonists). High receptor affinity — can displace other opioids (precipitate withdrawal). Used for opioid use disorder (Suboxone with naloxone) and severe pain (patches, buccal). Transdermal available for chronic pain.',
    indications: ['Opioid use disorder (sublingual — with naloxone to deter IV misuse)', 'Severe chronic pain (transdermal patch)', 'Peri-operative analgesia'],
    dosage: 'Opioid use disorder (Suboxone): 4–24 mg SL daily. Pain patches (BuTrans): 5–20 mcg/hr every 7 days. Peri-op: 300 mcg SL.',
    mechanism: 'Partial μ-agonist (high receptor affinity, low intrinsic activity) + κ-antagonist. Ceiling effect on respiratory depression at high doses.',
    sideEffects: ['Headache', 'Nausea', 'Constipation (less than full agonists)', 'Sweating', 'Insomnia', 'Precipitates withdrawal if given while other opioids occupy receptors'],
    nursing: ['HIGH RECEPTOR AFFINITY — will displace other opioids and precipitate acute withdrawal if patient is still on other opioids; induction must occur in mild withdrawal (COWS score ≥8)', 'Sublingual: dissolve under tongue; do not chew or swallow (poor oral bioavailability)', 'Patches: rotate sites; avoid heat over patch; 7-day patch (BuTrans)', 'NALOXONE REVERSAL IS DIFFICULT — buprenorphine competes with naloxone; very high doses of naloxone may be required', 'Suboxone (buprenorphine + naloxone): naloxone component is NOT absorbed sublingually but is if injected — deters IV misuse'],
    contraindications: ['Severe respiratory insufficiency', 'Acute alcohol intoxication', 'Severe hepatic impairment'],
  },

  'Naloxone': {
    class: 'Opioid Antagonist', subclass: 'Pure μ-opioid receptor antagonist',
    overview: 'EMERGENCY TREATMENT for opioid overdose. Reverses opioid-induced respiratory depression rapidly. Shorter half-life than most opioids — repeat dosing or infusion may be required. Can precipitate acute withdrawal.',
    indications: ['Opioid overdose (respiratory depression, unconsciousness)', 'Post-operative opioid reversal', 'Combination with oxycodone (Targinact) or buprenorphine (Suboxone) to deter misuse'],
    dosage: 'Overdose: 0.4–2 mg IV/IM/SC every 2–3 min until respiratory rate adequate (max 10 mg — if no response, question opioid diagnosis). Infusion: 2/3 of effective bolus dose per hour.',
    mechanism: 'Competitive antagonist at μ, δ, and κ opioid receptors — no intrinsic agonist activity.',
    sideEffects: ['Acute opioid withdrawal (agitation, tachycardia, sweating, vomiting, severe pain)', 'Pulmonary oedema (rare — with precipitated withdrawal)', 'Arrhythmias (rare)', 'Hypertension'],
    nursing: ['SHORT HALF-LIFE (30–90 min): most opioids last longer — monitor for re-narcotisation (patient wakes, then becomes unconscious again); repeat doses or infusion often required', 'TITRATE to restore respiratory function — not to full reversal (avoid precipitating severe withdrawal)', 'Community overdose (Narcan nasal spray): trained carers/patients can administer IM or intranasal — provide to patients at risk on high-dose opioids', 'Opioid infusion patients: calculate infusion rate after effective bolus', 'Document time of administration and response — time last opioid dose given'],
    contraindications: ['No absolute contraindications in life-threatening overdose', 'Caution: known opioid-dependent patients (will precipitate withdrawal)'],
  },

  'Naltrexone': {
    class: 'Opioid Antagonist', subclass: 'Long-acting oral opioid antagonist',
    overview: 'Long-acting pure opioid antagonist for opioid and alcohol use disorder. Blocks opioid receptors for 24–72 hrs — if opioids used while taking naltrexone, no euphoria occurs (deterrent effect). Extended-release IM formulation (Vivitrol) given monthly.',
    indications: ['Opioid use disorder (maintenance — after detoxification)', 'Alcohol use disorder (reduces craving and relapse)'],
    dosage: 'Oral: 50 mg OD (or 100 mg on alternate days). Extended-release IM (Vivitrol): 380 mg every 4 weeks.',
    mechanism: 'Competitive μ, δ, and κ opioid receptor antagonism. In alcohol use disorder: blocks endogenous opioid release triggered by alcohol → reduces rewarding effects.',
    sideEffects: ['Hepatotoxicity (at doses higher than therapeutic — monitor LFTs)', 'Nausea', 'Headache', 'Insomnia', 'Injection site reactions (depot)', 'Precipitates acute withdrawal if opioids still in system'],
    nursing: ['MUST be opioid-free for 7–10 days (oral opioids) or 10–14 days (methadone) before starting — do opioid challenge or check urine if uncertain; administering naltrexone to opioid-dependent patient causes precipitated acute withdrawal', 'LFTs at baseline and if hepatotoxicity suspected (monitor AST/ALT)', 'Counsel: if opioids are used while on naltrexone, the usual dose will not work — dangerous if patient then takes a larger dose trying to overcome the block', 'Depot: inject into gluteal muscle; do not rub injection site', 'Motivational counselling essential alongside pharmacotherapy'],
    contraindications: ['Acute hepatitis or liver failure', 'Current opioid use (within 7–10 days)', 'Acute opioid withdrawal'],
  },


  // ══════════════════════════════════════════════════════════
  // 13. CNS-ACTING ANALGESICS (NON-OPIOID)
  // ══════════════════════════════════════════════════════════

  'Paracetamol (Acetaminophen)': {
    class: 'Non-opioid Analgesic / Antipyretic', subclass: 'Para-aminophenol derivative',
    overview: 'Most widely used analgesic globally. Acts centrally. Minimal anti-inflammatory effect. LETHAL in overdose via delayed hepatotoxicity — greatest risk with delayed or inadequate treatment with N-acetylcysteine.',
    indications: ['Mild to moderate pain', 'Fever (pyrexia)', 'Adjunct in moderate-severe pain (multimodal analgesia)', 'Post-operative pain (IV)'],
    dosage: 'Adults: 500 mg–1 g PO/PR every 4–6 hrs (max 4 g/day). Elderly/liver risk: max 2 g/day. IV: 1 g over 15 min (max 4 g/day). Children: 15 mg/kg every 4–6 hrs.',
    mechanism: 'Inhibits COX in CNS (especially COX-3/COX-1 variant) → central antipyretic and analgesic effect. Also activates descending serotonergic pathways. Minimal peripheral anti-inflammatory activity.',
    sideEffects: ['Hepatotoxicity in overdose (major, potentially fatal)', 'Rare: thrombocytopaenia, agranulocytosis', 'Nephrotoxicity (chronic high-dose use)', 'Hypersensitivity (rare)'],
    nursing: ['OVERDOSE MANAGEMENT: treat with N-acetylcysteine (NAC) within 8–10 hours of ingestion for maximum benefit — delayed treatment allows hepatotoxicity to progress', 'NEVER exceed 4 g/day in healthy adults; REDUCE to 2 g/day in: hepatic disease, alcoholism, malnutrition, elderly', 'Hidden paracetamol: CHECK ALL medications patient takes — many combo products contain paracetamol (co-codamol, co-dydramol, Lemsip, Tylenol) — double dosing is common', 'IV administration: give over minimum 15 min — rapid infusion causes hypotension', 'Regular dosing gives better analgesia than PRN'],
    contraindications: ['Severe hepatic impairment', 'Hypersensitivity to paracetamol'],
  },


  // ══════════════════════════════════════════════════════════
  // 14. GENERAL ANAESTHETICS
  // ══════════════════════════════════════════════════════════

  'Propofol': {
    class: 'IV General Anaesthetic', subclass: 'Alkylphenol',
    overview: 'Most widely used IV induction agent. Ultra-short acting (offset within minutes — hepatic conjugation + redistribution). Produces smooth induction, minimal hangover, antiemetic property. Only anaesthetic used for TIVA (total intravenous anaesthesia). Propofol infusion syndrome: rare but fatal with prolonged high-dose infusion.',
    indications: ['Induction and maintenance of general anaesthesia', 'Procedural sedation (ICU, endoscopy)', 'Total intravenous anaesthesia (TIVA)', 'Refractory status epilepticus (ICU)'],
    dosage: 'Induction: 1–2.5 mg/kg IV (titrate); elderly: 1–1.5 mg/kg. Maintenance: 4–12 mg/kg/hr. Sedation: 0.3–4 mg/kg/hr. Status epilepticus: 1–2 mg/kg bolus, infusion.',
    mechanism: 'Enhances GABA-A activity (possibly different site to benzodiazepines) → CNS depression. Also inhibits NMDA receptors and sodium channels.',
    sideEffects: ['Pain on injection (common — mitigated by lidocaine pretreatment or large vein)', 'Hypotension (vasodilation + negative inotropy)', 'Apnoea at induction', 'Bradycardia', 'Propofol infusion syndrome (PIS): metabolic acidosis, hyperlipidaemia, rhabdomyolysis, cardiac failure — rare but fatal; occurs with >4 mg/kg/hr for >48 hrs', 'Green urine (benign — propofol chromogen metabolites)', 'Antiemetic effect (useful post-operatively)'],
    nursing: ['Contains egg lecithin and soybean oil — CHECK allergy history (avoid in soy/egg allergy)', 'Pain on injection: pretreat vein with lidocaine 20–40 mg IV, or use antecubital fossa (large vein)', 'Strict aseptic technique — lipid emulsion is excellent bacterial growth medium; use each vial within 6 hrs of opening', 'Propofol infusion syndrome: monitor triglycerides, lactate, and CPK in ICU patients on prolonged infusions (>48 hrs at >4 mg/kg/hr)', 'Monitor BP continuously — hypotension common on induction; have vasopressor ready'],
    contraindications: ['Allergy to soya or eggs (relative — preparation contains soybean oil and egg lecithin)', 'Patients <3 years (use restricted formulation)', 'High lipid states (severe hypertriglyceridaemia)'],
  },

  'Thiopentone (Thiopental)': {
    class: 'IV General Anaesthetic', subclass: 'Barbiturate',
    overview: 'Ultra-short-acting barbiturate. Historically the gold standard for RSI. Reduces intracranial pressure — useful in neurosurgery. Largely superseded by propofol but still used for status epilepticus and in resource-limited settings. Causes tissue necrosis if extravasated.',
    indications: ['Induction of general anaesthesia (RSI — 2nd line after ketamine)', 'Refractory status epilepticus', 'Neurosurgery (ICP reduction)', 'Neuroprotection in cardiac arrest (limited evidence)'],
    dosage: 'Induction: 3–5 mg/kg IV (reduce for elderly/haemodynamically compromised). Status epilepticus: 75–125 mg IV boluses.',
    mechanism: 'Potent GABA-A modulator (direct activation at anaesthetic doses). Reduces cerebral metabolic rate and ICP.',
    sideEffects: ['Laryngospasm (more than propofol)', 'Hypotension', 'Extravasation: tissue necrosis (arterial injection → limb ischaemia)', 'Bronchospasm', 'Porphyria crisis (absolute contraindication in porphyria)'],
    nursing: ['ARTERIAL INJECTION is a medical emergency — causes intense burning, arrhythmias, arterial spasm, distal ischaemia; inject papaverine and star tissue management protocol', 'EXTRAVASATION: significant tissue injury — use large antecubital or central vein', 'PORPHYRIA: absolutely contraindicated (precipitates life-threatening porphyric crisis)', 'Laryngospasm: more likely than propofol — have suxamethonium and intubation kit immediately available'],
    contraindications: ['Acute porphyria (absolute)', 'Status asthmaticus', 'Severe cardiovascular disease', 'Airway obstruction where intubation planned'],
  },

  'Ketamine': {
    class: 'IV General Anaesthetic / Analgesic', subclass: 'Phencyclidine derivative — Dissociative anaesthetic',
    overview: 'Unique anaesthetic — produces "dissociative" anaesthesia (patient appears awake but is unaware). Maintains airway reflexes and spontaneous respiration at subanesthetic doses. Sympathomimetic — increases HR and BP (useful in haemodynamic compromise). Used in emergency medicine, paediatrics, and battlefield trauma. Low-dose infusions for refractory depression (esketamine nasal spray licensed).',
    indications: ['Procedural sedation (paediatrics, emergency)', 'Induction in haemodynamically compromised patients', 'RSI for severe asthma (bronchodilator)', 'Analgesia (low-dose IV/IM — multimodal)', 'Treatment-resistant depression (esketamine — Spravato)', 'Battlefield/resource-limited anaesthesia'],
    dosage: 'Induction: 1–2 mg/kg IV or 4–6 mg/kg IM. Analgesia (sub-anaesthetic): 0.1–0.5 mg/kg IV. Procedural sedation: 1–2 mg/kg IV over 1–2 min.',
    mechanism: 'NMDA receptor antagonism → dissociative state. Also opioid receptor agonism (low affinity). Sympathomimetic: inhibits catecholamine reuptake → ↑ HR and BP.',
    sideEffects: ['Emergence reactions: hallucinations, vivid dreams, dysphoria, agitation (more common in adults; reduced by benzodiazepine premedication)', 'Increased HR and BP (problematic in hypertensives; beneficial in shock)', 'Hypersalivation (administer with glycopyrrolate)', 'Nausea/vomiting', 'Laryngospasm (rare but can occur)', 'Increased ICP and intraocular pressure', 'Cystitis with recreational/chronic use'],
    nursing: ['EMERGENCE REACTIONS: prophylactic benzodiazepine (midazolam 2 mg IV) greatly reduces emergence phenomena in adults', 'Maintain quiet environment during recovery', 'Glycopyrrolate IV before ketamine reduces excessive secretions (important to prevent aspiration)', 'ICP: traditionally avoided in head injury — evidence now challenges this, but discuss with anaesthetist', 'AIRWAY REFLEXES INTACT at subanesthetic doses — but do not assume patient is protecting their airway; monitor continuously', 'Acute asthma: ketamine is the preferred induction agent (bronchodilator via catecholamine release)'],
    contraindications: ['Hypertensive emergency (unless benefits outweigh risks)', 'Conditions where ICP rise is dangerous (raised ICP — relative)', 'Psychiatric conditions with psychosis (relative)', 'Severe cardiovascular disease'],
  },

  'Etomidate': {
    class: 'IV General Anaesthetic', subclass: 'Carboxylated imidazole',
    overview: 'Provides cardiovascular stability on induction — minimal effect on BP and HR. Ideal for haemodynamically compromised patients. SINGLE DOSE causes adrenal suppression (inhibits cortisol synthesis) — avoid repeated doses or prolonged infusion. Causes myoclonus on injection.',
    indications: ['Induction of anaesthesia in haemodynamically unstable patients', 'RSI in cardiovascular compromise', 'Emergency intubation in septic shock or severe haemodynamic instability'],
    dosage: '0.1–0.3 mg/kg IV. One dose only — avoid repeated/continuous dosing.',
    mechanism: 'GABA-A potentiation → anaesthesia. Also inhibits 11β-hydroxylase in adrenal cortex → ↓ cortisol synthesis.',
    sideEffects: ['Adrenal suppression (even single dose — lasts 6–24 hrs; prolonged in sick patients)', 'Myoclonus (involuntary movements — can mimic seizures; reduce with fentanyl pretreatment)', 'Pain on injection', 'Nausea/vomiting (higher incidence than propofol)', 'Hiccups'],
    nursing: ['ADRENAL SUPPRESSION: consider hydrocortisone supplementation if patient is septic or critically ill after etomidate induction', 'Myoclonus: pretreat with fentanyl 2–3 mcg/kg IV or small dose of midazolam', 'Preferred over propofol and thiopentone when haemodynamic stability is critical (sepsis, hypovolaemia, cardiac tamponade)', 'DO NOT use as infusion for ICU sedation (prolonged adrenal suppression)'],
    contraindications: ['Adrenocortical insufficiency (relative)', 'Porphyria (relative)'],
  },

  'Sevoflurane': {
    class: 'Inhalational Anaesthetic', subclass: 'Volatile halogenated ether',
    overview: 'Most widely used volatile anaesthetic for maintenance of anaesthesia. Sweet smell — well tolerated for inhalation induction (especially paediatrics). Rapid onset and offset. MAC (minimum alveolar concentration) = 2% in adults. Compound A produced in low-flow circuits (theoretical renal toxicity — avoid <2 L/min flow).',
    indications: ['Induction of anaesthesia (mask induction — children)', 'Maintenance of general anaesthesia'],
    dosage: 'Induction: 3–8% with O₂/N₂O. Maintenance: 0.5–3% (adjusted to clinical response). MAC-adjusted for age and co-medications.',
    mechanism: 'Potentiates GABA-A + inhibits NMDA + activates two-pore potassium channels → loss of consciousness and amnesia. Also depresses myocardial contractility and causes vasodilation.',
    sideEffects: ['Dose-dependent cardiovascular depression', 'Respiratory depression', 'Malignant hyperthermia (rare but life-threatening — genetic susceptibility)', 'Hepatotoxicity (rare — trifluoroacetyl halide metabolites)', 'Emergence agitation (especially children)', 'Compound A nephrotoxicity (theoretical — low-flow use)'],
    nursing: ['MALIGNANT HYPERTHERMIA (MH): if unexplained temperature rise, rigidity, tachycardia, and CO₂ — STOP volatile immediately; call for help; give dantrolene 2.5 mg/kg IV; ice packs; MH hotline', 'MH TRIGGER AGENT: volatile anaesthetics and suxamethonium are the primary triggers — confirm MH family history before administering', 'Use minimum fresh gas flows ≥2 L/min with sevoflurane to avoid Compound A accumulation', 'Paediatric emergence agitation: ensure adequate analgesia; parental presence during recovery can help'],
    contraindications: ['Known or suspected malignant hyperthermia susceptibility', 'Severe hepatic disease (relative)'],
  },

  'Isoflurane': {
    class: 'Inhalational Anaesthetic', subclass: 'Volatile halogenated ether',
    overview: 'Older volatile anaesthetic; not used for induction (pungent, irritant smell). Cardiovascular stable (preserves cardiac output via reflex tachycardia). Good for maintenance. Metabolised only 0.2% (low hepatotoxicity risk). MAC = 1.2%.',
    indications: ['Maintenance of general anaesthesia', 'ICU sedation (via anaesthetic conserving device)'],
    dosage: 'Maintenance: 0.5–2.5%. ICU sedation: 0.5–1.5% via ANACONDA/AnaConDa device.',
    mechanism: 'Same mechanisms as sevoflurane (GABA-A, NMDA, K+ channels). Coronary vasodilator — may cause coronary steal in severe CAD.',
    sideEffects: ['Respiratory depression', 'Coronary steal (steal-prone coronary anatomy)', 'Malignant hyperthermia trigger', 'Uterine relaxation (used in obstetric procedures)', 'Minimal hepatotoxicity (less metabolised than halothane)'],
    nursing: ['MH trigger — same precautions as sevoflurane', 'Not suitable for induction (pungent — bronchospasm risk in mask induction)', 'Coronary steal: avoid in patients with steal-prone coronary anatomy (significant CAD)'],
    contraindications: ['Known MH susceptibility', 'History of halothane hepatitis (cross-sensitivity possible)'],
  },

  'Nitrous Oxide (N₂O)': {
    class: 'Inhalational Anaesthetic / Analgesic', subclass: 'Inorganic gas',
    overview: 'Weak anaesthetic (MAC 104% — cannot produce anaesthesia alone at atmospheric pressure) but potent analgesic and anxiolytic. Used as 50% Entonox (50% N₂O + 50% O₂) for procedural analgesia. Inactivates Vitamin B12 irreversibly — avoid in B12 deficiency and with prolonged/repeated use.',
    indications: ['Procedural analgesia (labour, minor procedures, dressing changes — Entonox)', 'Anaesthetic adjunct (MAC-sparing)', 'Anxiolysis in dentistry'],
    dosage: 'Entonox: inhaled on demand. Anaesthetic adjunct: 50–70% N₂O with oxygen.',
    mechanism: 'NMDA receptor antagonism (primary analgesic mechanism) + modest GABA-A activity + endogenous opioid release.',
    sideEffects: ['Nausea (common — activate antiemetic)', 'Diffusion hypoxia (on discontinuation — give 100% O₂ for 5 min)', 'Vitamin B12 inactivation (irreversible — methionine synthase inhibition; prolonged/repeated use causes subacute combined degeneration of spinal cord, peripheral neuropathy, megaloblastic anaemia)', 'Bowel gas expansion (diffuses into closed gas spaces)', 'Occupational exposure (theatre staff — subfertility risk with chronic exposure)'],
    nursing: ['ENTONOX: self-administered — instruct patient to breathe normally through mouthpiece when they feel pain coming', 'DIFFUSION HYPOXIA: give 100% O₂ for 5 min after stopping N₂O (N₂O diffuses out of blood into alveoli and dilutes O₂)', 'AVOID in: pneumothorax, bowel obstruction, middle ear surgery, gas embolism, B12 deficiency, and any closed air space (N₂O diffuses in rapidly, expanding the space)', 'REPEATED EXPOSURE: at-risk groups — theatre staff, recreational users (balloons/chargers); monitor B12 levels'],
    contraindications: ['Vitamin B12 deficiency', 'Pneumothorax', 'Bowel obstruction', 'Middle ear disease with membrane integrity issues', 'Air embolism', 'Intracranial air (post-pneumoencephalography)'],
  },


  // ══════════════════════════════════════════════════════════
  // 15. LOCAL ANAESTHETICS
  // ══════════════════════════════════════════════════════════

  'Lidocaine (Lignocaine)': {
    class: 'Local Anaesthetic / Antiarrhythmic', subclass: 'Amide local anaesthetic',
    overview: 'Most widely used local anaesthetic. Rapid onset (3–5 min), intermediate duration (1–2 hrs; 2–4 hrs with adrenaline). Also used IV as class Ib antiarrhythmic. Used topically (EMLA cream, throat spray, IV lidocaine for laryngoscopy). Maximum safe dose must not be exceeded.',
    indications: ['Local/regional anaesthesia (infiltration, nerve blocks, spinal, epidural)', 'Topical anaesthesia (EMLA cream, throat spray)', 'Ventricular arrhythmias (IV — class Ib)', 'Post-operative IV lidocaine infusion (reduces opioid requirements)', 'Antitussive (nebulised — intubation)'],
    dosage: 'Infiltration: 0.5–2% solution. WITHOUT adrenaline: max 3 mg/kg (absolute max 200 mg). WITH adrenaline (1:200,000): max 7 mg/kg (absolute max 500 mg). Antiarrhythmic: 1–1.5 mg/kg IV bolus, then 1–4 mg/min infusion.',
    mechanism: 'Sodium channel blockade (binds inactivated channel state) → prevents action potential propagation in nerve fibres. Small unmyelinated fibres (pain, temperature) blocked first → differential block.',
    sideEffects: ['CNS toxicity (early: perioral tingling, tinnitus, dizziness, visual disturbances; late: confusion, seizures, LOC)', 'Cardiovascular toxicity (at toxic levels: bradycardia, hypotension, ventricular arrhythmias, cardiac arrest)', 'Allergic reactions (rare with amide type)', 'Methaemoglobinaemia (EMLA — particularly in neonates)'],
    nursing: ['CALCULATE MAXIMUM DOSE before infiltration — use body weight and concentration of solution; document calculation', 'ASPIRATION before each injection (every 3–5 mL) — inadvertent IV injection causes immediate CNS and cardiac toxicity', 'SIGNS OF SYSTEMIC TOXICITY: ask patient about tingling around mouth, metallic taste, ringing in ears (prodromal); if these occur STOP; have lipid emulsion (Intralipid) available', 'ADRENALINE MIXTURE: do NOT use in end-arteries (fingers, toes, nose, ear, penis) — ischaemia', 'Never use with cocaine (potentiates cardiac toxicity)'],
    contraindications: ['Hypersensitivity (amide allergy — rare)', 'Complete heart block (IV antiarrhythmic use)', 'Severe hepatic failure (metabolised by liver)'],
  },

  'Bupivacaine': {
    class: 'Local Anaesthetic', subclass: 'Long-acting amide',
    overview: 'Long-acting local anaesthetic (4–8 hrs; up to 12 hrs with adrenaline). Preferred for spinal anaesthesia and post-operative epidural analgesia. More CARDIAC TOXIC than lidocaine — cardiotoxicity is more refractory to treatment. Levobupivacaine (S-isomer) is less cardiotoxic.',
    indications: ['Epidural analgesia (labour, post-operative)', 'Spinal anaesthesia (heavy bupivacaine — isobaric or hyperbaric)', 'Peripheral nerve blocks (long duration)', 'Local infiltration'],
    dosage: 'Spinal: heavy bupivacaine 0.5% 2–3 mL. Epidural: 0.1–0.25% ± fentanyl. Peripheral blocks: 0.25–0.5%. Max dose (without adrenaline): 2 mg/kg (absolute max 150 mg).',
    mechanism: 'Sodium channel blockade (same mechanism as lidocaine but slower onset, longer duration due to high protein binding and lipid solubility).',
    sideEffects: ['Cardiotoxicity: ventricular fibrillation and resistant cardiac arrest (dose-dependent; more severe than lidocaine)', 'CNS toxicity (similar to lidocaine)', 'Spinal: total spinal anaesthesia (if epidural dose injected intrathecally)', 'Hypotension (epidural/spinal — sympathetic blockade)'],
    nursing: ['MAXIMUM DOSE STRICTLY ENFORCED — bupivacaine cardiac toxicity is resistant to standard resuscitation; HAVE INTRALIPID 20% IMMEDIATELY AVAILABLE for lipid rescue', 'Epidural: ALWAYS use test dose first (3 mL with adrenaline — if heart rate increases >20 bpm, intravascular catheter likely)', 'Spinal bupivacaine ("heavy"): patient position affects level of block — confirm desired level before sitting patient up', 'EPIDURAL vs INTRATHECAL: epidural doses given intrathecally cause total spinal anaesthesia (bilateral paralysis, apnoea, unconsciousness) — emergency management required', 'Lipid rescue: intralipid 20% 1.5 mL/kg IV bolus, then infusion for severe cardiovascular collapse from local anaesthetic toxicity'],
    contraindications: ["IV regional anaesthesia (Bier's block) — never use bupivacaine for this (cardiac toxicity if tourniquet fails)", 'Known hypersensitivity'],
  },

  'Prilocaine': {
    class: 'Local Anaesthetic', subclass: 'Amide — Lower toxicity',
    overview: 'Amide local anaesthetic with lower toxicity than lidocaine (metabolised faster). Preferred for IV regional anaesthesia (Bier\'s block). Causes methaemoglobinaemia at higher doses (a metabolite, o-toluidine, oxidises Hb).',
    indications: ["IV regional anaesthesia (Bier's block)", 'Infiltration and nerve blocks', 'EMLA cream (with lidocaine — topical)', 'Dental anaesthesia'],
    dosage: "Bier's block: 0.5% 40–50 mL (200–250 mg total). Infiltration: max 6 mg/kg WITHOUT adrenaline (prilocaine max is higher than lidocaine).",
    mechanism: 'Sodium channel blockade. Metabolite (o-toluidine) oxidises haemoglobin to methaemoglobin (cannot carry oxygen).',
    sideEffects: ['Methaemoglobinaemia (at doses >600 mg — cyanosis unresponsive to O₂)', 'CNS toxicity (lower risk than lidocaine at equivalent doses)'],
    nursing: ["Bier's block: tourniquet must remain inflated for minimum 20 min after injection (prevents systemic bolus of local anaesthetic — cardiac arrest risk)", 'Methaemoglobinaemia: if cyanosis develops after prilocaine (especially unresponsive to O₂ — SpO₂ unreliable in metHb), treat with methylene blue 1–2 mg/kg IV', 'EMLA cream: apply under occlusive dressing 60–90 min before venepuncture in children'],
    contraindications: ['G6PD deficiency (methaemoglobinaemia treatment with methylene blue will fail)', 'Congenital or acquired methaemoglobinaemia', 'Neonates <3 months for EMLA (risk of methaemoglobinaemia)'],
  },

  'Ropivacaine': {
    class: 'Local Anaesthetic', subclass: 'Long-acting amide (pure S-enantiomer)',
    overview: 'Long-acting local anaesthetic (similar to bupivacaine). SAFER cardiac profile than bupivacaine — less lipid soluble and less potent at cardiac sodium channels. Preferred for high-volume blocks and continuous epidural infusions. Good sensory-motor differential block at low concentrations.',
    indications: ['Epidural analgesia (labour, post-operative)', 'Major peripheral nerve blocks (interscalene, femoral, sciatic, TAP block)', 'Local infiltration (large volume)', 'Wound infiltration catheters'],
    dosage: 'Epidural: 0.1–0.2% for analgesia; 0.5–0.75% for surgical block. Peripheral nerve blocks: 0.375–0.75%. Max 3 mg/kg (225 mg) in healthy adults.',
    mechanism: 'Na⁺ channel blockade. Pure S-enantiomer → preferential sensory block at low concentrations (differential block advantage for obstetric/post-op analgesia).',
    sideEffects: ['CNS toxicity (similar to bupivacaine)', 'Cardiovascular toxicity (significantly less than bupivacaine)', 'Hypotension (epidural)'],
    nursing: ['Preferred over bupivacaine for large-volume blocks (safer cardiac profile)', 'Test dose still recommended for epidural insertion', 'Intralipid available', 'Low concentration (0.1–0.2%) epidural infusions: excellent analgesia with minimal motor block — patient can mobilise (important for post-operative recovery)'],
    contraindications: ['IV regional anaesthesia (use prilocaine)', 'Hypersensitivity'],
  },

  'Cocaine': {
    class: 'Local Anaesthetic / Vasoconstrictor', subclass: 'Ester local anaesthetic',
    overview: 'Only local anaesthetic with intrinsic vasoconstrictor activity (blocks catecholamine reuptake → vasoconstriction). Used exclusively in ENT/nasal procedures where both anaesthesia and vasoconstriction are needed. Controlled substance. NOT used for injection (cardiac and CNS toxicity, abuse potential).',
    indications: ['Topical anaesthesia for ENT procedures (rhinoscopy, nasal surgery)', 'Dacryocystorhinostomy'],
    dosage: 'Topical: 4–10% solution applied to nasal mucosa on cotton pledgets or spray. Max 1.5 mg/kg.',
    mechanism: 'Blocks Na⁺ channels (anaesthesia) + blocks noradrenaline reuptake (vasoconstriction). Only local anaesthetic with both properties.',
    sideEffects: ['Cardiovascular: hypertension, tachycardia, arrhythmias', 'CNS stimulation: agitation, seizures', 'Mydriasis', 'Nasal mucosal damage with repeated use', 'Controlled drug — misuse potential'],
    nursing: ['Controlled substance — document use carefully', 'Monitor BP and HR during and after application', 'Do NOT exceed maximum dose — cardiac risk', 'NEVER give by injection'],
    contraindications: ['Severe hypertension', 'Cardiovascular disease', 'MAOIs (hypertensive crisis)', 'Thyrotoxicosis'],
  },


  // ══════════════════════════════════════════════════════════
  // 16. NEUROMUSCULAR BLOCKING AGENTS
  // ══════════════════════════════════════════════════════════

  'Suxamethonium (Succinylcholine)': {
    class: 'Depolarising Neuromuscular Blocker', subclass: 'Depolarising NMB',
    overview: 'Only depolarising NMB in clinical use. Ultra-rapid onset (60 sec) and ultra-short duration (10–15 min). Drug of choice for rapid sequence intubation (RSI). CAUSES malignant hyperthermia and lethal hyperkalaemia in susceptible patients. No antagonist available.',
    indications: ['Rapid sequence intubation (RSI) — emergency intubation', 'Laryngospasm treatment (small dose)', 'Electroconvulsive therapy (ECT — modified)'],
    dosage: 'RSI: 1–1.5 mg/kg IV. Laryngospasm: 0.1 mg/kg IV. ECT: 1 mg/kg IV.',
    mechanism: 'Acts as acetylcholine agonist at nicotinic receptors → persistent depolarisation (no repolarisation) → paralysis. Broken down by plasma cholinesterase (pseudocholinesterase).',
    sideEffects: ['MALIGNANT HYPERTHERMIA (life-threatening — MH trigger)', 'HYPERKALAEMIA (contraindicated in burns, crush injury, denervation, prolonged immobility, renal failure)', 'Bradycardia (especially 2nd dose, children)', 'Myalgia (post-operative fasciculation pain)', 'Raised intraocular pressure (avoid in open eye injury)', 'Raised intragastric pressure', 'Prolonged block with pseudocholinesterase deficiency (dibucaine number test)'],
    nursing: ['MH TRIGGER: screen family history; if MH susceptible — use rocuronium instead for RSI (can be reversed with sugammadex)', 'HYPERKALAEMIA CONTRAINDICATIONS: do NOT give in: burn injuries (48 hrs old – 6 months post-burn), crush injury, spinal cord injury/denervation, prolonged immobilisation — serum K⁺ can rise to fatal levels (8–10 mmol/L)', 'BRADYCARDIA: pretreat with atropine in children (repeated dosing causes bradycardia); ensure ECG monitoring', 'No reversal agent: if prolonged block occurs (pseudocholinesterase deficiency), support ventilation until spontaneous recovery', 'FASCICULATIONS before paralysis — warn surgical team'],
    contraindications: ['Known or suspected malignant hyperthermia susceptibility', 'Burn injuries (after first 48 hrs to 6 months)', 'Acute denervation injuries', 'Severe renal failure with hyperkalaemia', 'Penetrating eye injury', 'Pseudocholinesterase deficiency (relative)', 'Myopathies (Duchenne)'],
  },

  'Rocuronium': {
    class: 'Non-depolarising Neuromuscular Blocker', subclass: 'Aminosteroid NMB',
    overview: 'Fastest-onset non-depolarising NMB. At 1.2 mg/kg (high dose), onset equivalent to suxamethonium (60–90 sec) — preferred alternative for RSI (especially where suxamethonium contraindicated). Fully reversible with sugammadex (within seconds).',
    indications: ['Intubation and surgical relaxation', 'Rapid sequence intubation (high-dose — 1.2 mg/kg)', 'ICU neuromuscular blockade (ARDS)'],
    dosage: 'Intubation: 0.6 mg/kg. RSI (high dose): 1.2 mg/kg. Maintenance: 0.1–0.2 mg/kg boluses or infusion. ICU: 0.3–0.6 mg/kg/hr infusion.',
    mechanism: 'Competitive antagonist at nicotinic acetylcholine receptors at neuromuscular junction → competitive blockade of acetylcholine → flaccid paralysis.',
    sideEffects: ['Residual neuromuscular blockade (most common complication — monitor with TOF)', 'Anaphylaxis (highest rate of anaphylaxis of NMBs in some series)', 'Histamine release (less than atracurium)', 'Tachycardia (vagolytic)'],
    nursing: ['TOF (train-of-four) neuromuscular monitoring essential — assess degree of block, guide dosing, confirm adequate recovery before extubation', 'SUGAMMADEX: reversal agent; encapsulates rocuronium; 16 mg/kg reverses even deep block within 3 min (emergency reversal of high-dose RSI rocuronium)', 'ANAPHYLAXIS: highest anaphylaxis rate of NMBs — have adrenaline and resuscitation equipment available', 'ICU: daily sedation vacation also involves NMB holiday to assess neurological function', 'NEVER use in awake or conscious patients without adequate induction anaesthesia (awareness and terror)'],
    contraindications: ['Use without secured airway and ability to ventilate', 'Hypersensitivity to rocuronium'],
  },

  'Vecuronium': {
    class: 'Non-depolarising Neuromuscular Blocker', subclass: 'Aminosteroid NMB',
    overview: 'Intermediate-duration non-depolarising NMB. Minimal cardiovascular effects. Requires reconstitution (powder). Metabolised hepatically — accumulates in hepatic failure.',
    indications: ['Surgical neuromuscular blockade', 'ICU sedation (NMB component)'],
    dosage: 'Intubation: 0.1 mg/kg. Maintenance: 0.01–0.05 mg/kg. ICU infusion: 0.8–1.4 mcg/kg/min.',
    mechanism: 'Competitive nicotinic acetylcholine receptor antagonist at NMJ.',
    sideEffects: ['Residual block', 'Accumulation in hepatic failure', 'Minimal histamine release', 'Minimal cardiovascular effects (advantage over atracurium)'],
    nursing: ['TOF monitoring to guide dosing', 'Reversible with neostigmine (with atropine or glycopyrrolate) or sugammadex', 'Reduce dose in hepatic failure — accumulation', 'Reconstitute powder with water for injection'],
    contraindications: ['Without secured airway', 'Severe hepatic failure (reduce dose significantly)'],
  },

  'Atracurium': {
    class: 'Non-depolarising Neuromuscular Blocker', subclass: 'Benzylisoquinolinium NMB',
    overview: 'Intermediate-duration NMB. Eliminated by Hofmann elimination (spontaneous non-enzymatic degradation at physiological pH/temp) + ester hydrolysis — SAFE in renal and hepatic failure (organ-independent elimination). Produces laudanosine metabolite (CNS stimulant — seizures at very high levels in ICU).',
    indications: ['Surgical NMB', 'ICU NMB (renal/hepatic failure patients — preferred)'],
    dosage: 'Intubation: 0.4–0.6 mg/kg. Maintenance: 0.1–0.2 mg/kg. ICU infusion: 0.3–0.6 mg/kg/hr.',
    mechanism: 'Competitive nicotinic receptor antagonism at NMJ. Hofmann elimination does not require liver or kidney.',
    sideEffects: ['Histamine release (bronchospasm, hypotension, flushing — inject slowly)', 'Laudanosine accumulation at high doses (ICU — theoretical seizure risk)', 'Residual block'],
    nursing: ['PREFERRED in renal and hepatic failure (organ-independent elimination)', 'Inject SLOWLY to reduce histamine release — flushing, hypotension, bronchospasm with rapid injection', 'TOF monitoring essential', 'Reversible with neostigmine (+ anticholinergic) or sugammadex', 'Cold storage: 2–8°C; discard after 24 hrs at room temperature'],
    contraindications: ['Without secured airway', 'Asthma (relative — histamine release risk; cisatracurium preferred)'],
  },

  'Sugammadex': {
    class: 'NMB Reversal Agent', subclass: 'Modified gamma-cyclodextrin',
    overview: 'Revolutionary reversal agent that encapsulates aminosteroid NMBs (rocuronium > vecuronium). Immediate pharmacological reversal regardless of depth of block. Completely transformed management of rocuronium-induced NMB and "cannot intubate, cannot oxygenate" scenario.',
    indications: ['Reversal of rocuronium or vecuronium NMB (any depth)', 'Emergency reversal (cannot intubate, cannot oxygenate) after high-dose rocuronium RSI'],
    dosage: 'Routine reversal (T2 of TOF): 2 mg/kg IV. Deep block (Post-tetanic count 1–2): 4 mg/kg IV. Immediate emergency reversal: 16 mg/kg IV.',
    mechanism: 'Forms stable 1:1 complex with rocuronium (or vecuronium) — encapsulates drug, removes it from NMJ, and sequesters it in plasma → rapid reversal of NMB.',
    sideEffects: ['Bradycardia (rare)', 'Hypersensitivity and anaphylaxis (rare but serious)', 'Interaction with hormonal contraceptives (sugammadex may capture progesterone — treat as missed OCP dose for 7 days)', 'Re-curarisation if insufficient dose given'],
    nursing: ['16 mg/kg EMERGENCY DOSE: for cannot-intubate, cannot-oxygenate scenario after high-dose rocuronium — fastest reversal available (NMB resolves in 3 min)', 'Must monitor TOF after administration to confirm adequate reversal (TOF ratio >0.9 before extubation)', 'HORMONAL CONTRACEPTIVES: warn female patients — may reduce effectiveness; use additional contraception for 7 days', 'Do NOT use as substitute for adequate anaesthetic depth — reversal of paralysis does not mean patient is awake'],
    contraindications: ['Hypersensitivity', 'Renal failure (drug-complex excreted renally — can be dialysed)'],
  },

  'Neostigmine': {
    class: 'Anticholinesterase / NMB Reversal', subclass: 'Quaternary ammonium carbamate',
    overview: 'Acetylcholinesterase inhibitor used to reverse non-depolarising NMB. MUST be given with anticholinergic (glycopyrrolate or atropine) to counteract muscarinic side effects (bradycardia, increased secretions). Cannot reverse deep block — only effective when spontaneous recovery has begun (T2 of TOF visible).',
    indications: ['Reversal of non-depolarising NMB (when TOF shows T2)', 'Myasthenia gravis treatment (neostigmine)', 'Paralytic ileus (neostigmine IV)'],
    dosage: 'NMB reversal: 0.05 mg/kg (max 5 mg) IV with glycopyrrolate 0.2 mg per 1 mg neostigmine.',
    mechanism: 'Reversible inhibition of acetylcholinesterase → acetylcholine accumulates at NMJ → competes with and displaces residual NMB. Also acts at muscarinic receptors (glycopyrrolate counteracts this).',
    sideEffects: ['Bradycardia (counteracted by glycopyrrolate)', 'Increased secretions, bronchospasm (muscarinic)', 'GI: nausea, vomiting, increased motility', 'Cannot reverse deep block (inadequate in high residual NMB — use sugammadex instead)'],
    nursing: ['ALWAYS give with glycopyrrolate (preferred — no CNS effect) or atropine — without anticholinergic, severe bradycardia and hypersalivation will occur', 'TOF monitoring: administer only when T2 is visible (spontaneous recovery begun); neostigmine cannot reverse deep block — causes paradoxical weakness', 'Monitor HR and BP after administration', 'Maximum dose: 5 mg — further neostigmine paradoxically causes muscle weakness (depolarising block)'],
    contraindications: ['Deep neuromuscular block (use sugammadex instead)', 'Intestinal or urinary obstruction', 'Peritonitis'],
  },


  // ══════════════════════════════════════════════════════════
  // 17. ANTI-PARKINSON DRUGS
  // ══════════════════════════════════════════════════════════

  'Levodopa / Carbidopa (Co-careldopa)': {
    class: "Anti-Parkinson Drug", subclass: 'Dopamine precursor + DDC inhibitor',
    overview: "Most effective drug for Parkinson's disease motor symptoms. Levodopa is converted to dopamine in the brain. Carbidopa (or benserazide) prevents peripheral conversion (reduces dose required and side effects). Long-term use causes motor fluctuations ('wearing off', on-off phenomenon) and dyskinesias.",
    indications: ["Parkinson's disease (motor symptoms — tremor, rigidity, bradykinesia)", 'Restless legs syndrome (low-dose)'],
    dosage: 'Starting: Madopar 62.5 (50 mg levodopa + 12.5 mg benserazide) TDS. Titrate every 2 weeks. Typical maintenance: 400–600 mg levodopa/day in 3–5 divided doses.',
    mechanism: 'Levodopa crosses BBB and is converted to dopamine by aromatic amino acid decarboxylase (AAAD). Carbidopa/benserazide inhibit peripheral AAAD → more levodopa enters brain.',
    sideEffects: ["Nausea and vomiting (dopamine in periphery — domperidone is best antiemetic as it doesn't cross BBB)", 'Orthostatic hypotension', 'Dyskinesias (involuntary movements — with long-term use)', "Motor fluctuations: 'wearing off' (dose wears off before next dose), 'on-off' phenomena", 'Hallucinations and psychosis (dopaminergic excess)', 'Impulse control disorders', 'Melanoma (monitor skin — association observed)'],
    nursing: ["TIMING IS CRITICAL — give exactly at prescribed times; even 15-30 min late causes acute motor deterioration ('off')", "Protein-rich foods compete with levodopa absorption (same transporter) — take 30 min before meals or 1 hr after", 'Nausea: use DOMPERIDONE (not metoclopramide — crosses BBB and worsens Parkinsonism)', "Sudden withdrawal causes neuroleptic malignant syndrome-like state — NEVER stop abruptly (especially peri-operatively)", 'Monitor for hallucinations, impulse control disorders (gambling, hypersexuality, binge eating)', 'Warn about wearing off — keep diary; may need dose frequency increase or addition of COMT inhibitor'],
    contraindications: ['MAOIs (hypertensive crisis — 14-day washout; MAO-B inhibitors are safe)', 'Narrow-angle glaucoma', 'Psychosis (relative)'],
  },

  'Pramipexole': {
    class: "Anti-Parkinson Drug", subclass: 'Dopamine Agonist (D2/D3)',
    overview: "Non-ergot dopamine agonist. Used as monotherapy in early Parkinson's disease (delays dyskinesia vs levodopa) and as adjunct in advanced disease. Also first-line for restless legs syndrome. Causes significant impulse control disorders.",
    indications: ["Parkinson's disease (monotherapy early; adjunct to levodopa in advanced)", 'Restless legs syndrome'],
    dosage: "Parkinson's: 0.088 mg TDS initially; titrate slowly to 0.5–1.5 mg TDS. RLS: 0.088–0.54 mg daily in evening.",
    mechanism: 'Selective D2, D3, and D4 receptor agonist — mimics dopamine in striatum.',
    sideEffects: ['Impulse control disorders: pathological gambling, hypersexuality, compulsive shopping, binge eating (up to 17% — major concern)', 'Excessive daytime sleepiness and sudden sleep onset ("sleep attacks" while driving)', 'Nausea', 'Hallucinations', 'Orthostatic hypotension', 'Ankle oedema'],
    nursing: ['IMPULSE CONTROL DISORDERS: ASK specifically about gambling, sexual behaviours, spending, eating at every visit — often denied or hidden; involve family members', 'SLEEP ATTACKS: warn that sudden irresistible sleepiness can occur without warning — do NOT drive if this occurs; report immediately', 'Dose reduction needed in renal impairment', 'Start LOW and increase SLOW — particularly in elderly (hallucinations)', 'Orthostatic hypotension on initiation — rise slowly, BP monitoring'],
    contraindications: ['Hypersensitivity'],
  },

  'Ropinirole': {
    class: "Anti-Parkinson Drug", subclass: 'Dopamine Agonist (D2/D3)',
    overview: 'Non-ergot dopamine agonist similar to pramipexole. Available in immediate and extended-release formulations. Also licensed for restless legs syndrome.',
    indications: ["Parkinson's disease", 'Restless legs syndrome'],
    dosage: "PD: 0.25 mg TDS initially; titrate to 3–9 mg TDS. XL: 2 mg OD → 24 mg OD. RLS: 0.25 mg at bedtime → titrate.",
    mechanism: 'D2 and D3 receptor agonist.',
    sideEffects: ['Impulse control disorders (same as pramipexole)', 'Nausea', 'Somnolence and sleep attacks', 'Hallucinations', 'Orthostatic hypotension', 'Peripheral oedema'],
    nursing: ['Same counselling as pramipexole — impulse control disorders, sleep attacks, orthostatic hypotension', 'Hepatically metabolised (unlike pramipexole) — caution in hepatic impairment', 'XL formulation: swallow whole'],
    contraindications: ['Hypersensitivity'],
  },

  'Selegiline': {
    class: "Anti-Parkinson Drug", subclass: 'MAO-B Inhibitor',
    overview: 'Selective irreversible MAO-B inhibitor. At standard doses, selective for MAO-B (does not inhibit MAO-A) → can be used with levodopa and without tyramine dietary restrictions. Extends effect of levodopa by preventing dopamine breakdown. Mild neuroprotective effect possibly.',
    indications: ["Parkinson's disease (adjunct to levodopa to reduce wearing-off; rarely as monotherapy early)", 'Adjunct to reduce levodopa dose requirement'],
    dosage: '5 mg with breakfast and 5 mg at lunch (not evening — insomnia via amphetamine metabolites). Max 10 mg/day.',
    mechanism: 'Irreversible inhibition of MAO-B → ↓ dopamine breakdown in basal ganglia → ↑ dopaminergic effect.',
    sideEffects: ['Insomnia (amphetamine metabolites — do not give after noon)', 'Nausea', 'Orthostatic hypotension', 'Serotonin syndrome (with serotonergic drugs)', 'At toxic doses: loss of MAO-B selectivity → cheese reaction risk'],
    nursing: ['Give doses before noon — metabolites (amphetamine-like) cause insomnia if given in the afternoon or evening', 'Standard doses (≤10 mg/day): no tyramine restriction needed (MAO-B selective)', 'INTERACTIONS: avoid pethidine (fatal serotonin syndrome), SSRIs, tramadol at standard doses too', 'Can allow reduction in levodopa dose (reduce by 30% when adding selegiline)'],
    contraindications: ['Pethidine (meperidine) — serotonin syndrome', 'Concurrent SSRIs/SNRIs (serotonin syndrome risk)'],
  },

  'Rasagiline': {
    class: "Anti-Parkinson Drug", subclass: 'MAO-B Inhibitor (2nd generation)',
    overview: 'Irreversible MAO-B inhibitor. Unlike selegiline, metabolised to aminoindan (not amphetamine) → less insomnia. Once-daily dosing.',
    indications: ["Parkinson's disease (monotherapy in early disease; adjunct in advanced)", 'Wearing-off treatment'],
    dosage: '1 mg PO OD. Adjunct with levodopa: 0.5–1 mg OD.',
    mechanism: 'Irreversible MAO-B inhibition → ↑ striatal dopamine.',
    sideEffects: ['Headache', 'Arthralgia', 'Nausea', 'Hallucinations (adjunct to levodopa)', 'Serotonin syndrome (with serotonergic drugs)', 'Melanoma monitoring (association observed)'],
    nursing: ['Once-daily dosing — good adherence; no amphetamine metabolites (can be given at any time)', 'Same drug interactions as selegiline (avoid pethidine, SSRIs, sympathomimetics)', 'Skin examination for melanoma (dermatological association)', 'MAO-B inhibitor — no tyramine dietary restriction at therapeutic dose'],
    contraindications: ['Concurrent SSRIs, SNRIs, other MAOIs', 'Pethidine'],
  },

  'Entacapone': {
    class: "Anti-Parkinson Drug", subclass: 'COMT Inhibitor',
    overview: 'Catechol-O-methyltransferase (COMT) inhibitor used as adjunct to levodopa/carbidopa to extend its effect and reduce wearing-off. Only acts peripherally. Turns urine orange-brown (harmless).',
    indications: ["Parkinson's disease with end-of-dose wearing-off (adjunct to levodopa)"],
    dosage: '200 mg with each levodopa dose. Max 2000 mg/day.',
    mechanism: 'Inhibits COMT enzyme → ↓ peripheral metabolism of levodopa to 3-O-methyldopa → more levodopa available to cross BBB.',
    sideEffects: ['Orange-brown urine discolouration (harmless — warn patient)', 'Diarrhoea (5–10%)', 'Dyskinesias (as dopaminergic effect prolonged — may need to reduce levodopa dose)', 'Nausea', 'Liver toxicity (rare — monitor LFTs)', 'Skin discolouration'],
    nursing: ['WARN about orange-brown urine — harmless but alarming if unexpected', 'ALWAYS prescribed alongside each levodopa dose — has no effect without levodopa', 'Dyskinesias may worsen (dopaminergic excess) — may need to reduce levodopa dose by 10–30%', 'Diarrhoea: if persistent, discontinue and reassess', 'LFTs at baseline and during treatment'],
    contraindications: ['Phaeochromocytoma', 'MAOIs (not MAO-B inhibitors — combination of COMT inhibitor + MAOI-A causes hypertensive crisis)'],
  },

  'Amantadine': {
    class: "Anti-Parkinson Drug / Antiviral", subclass: 'NMDA antagonist',
    overview: 'Weak NMDA receptor antagonist with dopamine-releasing and anticholinergic properties. Used for drug-induced dyskinesias in Parkinson\'s disease and influenza. Also reduces levodopa-induced dyskinesias.',
    indications: ["Levodopa-induced dyskinesias in Parkinson's disease", "Early Parkinson's disease (mild symptoms)", 'Influenza A (antiviral — largely superseded)', 'Drug-induced EPS'],
    dosage: '100 mg BD (max 300 mg/day). Reduce dose in renal impairment.',
    mechanism: 'NMDA receptor blockade → ↓ glutamatergic excitotoxicity. Also releases dopamine from presynaptic stores and anticholinergic properties.',
    sideEffects: ['Livedo reticularis (mottled skin discolouration — harmless, dose-related)', 'Ankle oedema', 'Hallucinations (especially elderly)', 'Insomnia', 'Dry mouth and constipation', 'Withdrawal: sudden discontinuation → parkinsonian crisis or NMS-like state'],
    nursing: ['NEVER stop abruptly — withdrawal can precipitate parkinsonian crisis; taper slowly', 'Livedo reticularis: warn patients about purple-red mottling of skin (usually lower legs) — benign, disappears on stopping', 'Hallucinations more likely in elderly — monitor cognitive function', 'Renal dose adjustment essential (renally cleared)', 'Good option to reduce levodopa-induced dyskinesias while maintaining motor benefit'],
    contraindications: ['Severe renal impairment', 'Epilepsy (relative)', 'Closed-angle glaucoma'],
  },

  'Procyclidine': {
    class: "Anticholinergic / Anti-Parkinson / EPS Treatment", subclass: 'Muscarinic M1 antagonist',
    overview: 'Anticholinergic used for drug-induced EPS (extrapyramidal side effects from antipsychotics) and Parkinson\'s disease. Rapid-acting IM/IV for acute dystonia. NOT preferred for idiopathic Parkinson\'s disease in elderly (anticholinergic cognitive and urinary side effects).',
    indications: ['Drug-induced EPS: acute dystonia, parkinsonism, akathisia', 'Antipsychotic-induced EPS (prophylaxis or treatment)', "Parkinson's disease (adjunct — less used now)"],
    dosage: 'Oral: 2.5–5 mg TDS. Acute dystonia (IM/IV): 5–10 mg, repeat after 20 min if needed.',
    mechanism: 'Muscarinic (M1) receptor blockade → reduces cholinergic excess in basal ganglia → restores dopamine-acetylcholine balance.',
    sideEffects: ['Dry mouth', 'Blurred vision', 'Urinary retention', 'Constipation', 'Confusion and memory impairment (especially elderly)', 'Tachycardia', 'Glaucoma exacerbation'],
    nursing: ['ACUTE DYSTONIA (IM/IV procyclidine): dramatic rapid relief of muscle spasms — document response time', 'ELDERLY: avoid if possible — significant anticholinergic cognitive burden; consider switching antipsychotic to one with lower EPS rather than adding procyclidine', 'Akathisia: procyclidine less effective than propranolol or clonazepam for akathisia', 'Urinary retention: monitor urinary output in elderly men (BPH)'],
    contraindications: ['Narrow-angle glaucoma', 'Urinary retention', 'Paralytic ileus', 'Myasthenia gravis'],
  },


  // ══════════════════════════════════════════════════════════
  // 18. ANTI-DEMENTIA DRUGS
  // ══════════════════════════════════════════════════════════

  'Donepezil': {
    class: 'Acetylcholinesterase Inhibitor', subclass: 'Anti-dementia (Piperidine)',
    overview: 'Most widely prescribed cholinesterase inhibitor. Once-daily dosing. Used across mild to severe Alzheimer\'s disease. Also has some evidence in Lewy body dementia and vascular dementia. Symptomatic treatment only — does not alter disease course.',
    indications: ["Alzheimer's disease (mild to severe)", 'Lewy body dementia', 'Vascular dementia (off-label)'],
    dosage: '5 mg PO OD at bedtime initially; increase to 10 mg after 4 weeks. Max 10 mg OD (23 mg tablet available in US for severe AD).',
    mechanism: 'Reversible inhibition of acetylcholinesterase → ↑ acetylcholine at synapses → improves cholinergic neurotransmission in cortex and hippocampus.',
    sideEffects: ['Nausea and vomiting (cholinergic — usually transient)', 'Diarrhoea', 'Insomnia (give in morning if sleep disrupted)', 'Bradycardia (vagotonic)', 'Muscle cramps', 'Vivid dreams', 'Weight loss'],
    nursing: ['Take at BEDTIME normally (vivid dreams can be a problem) — if insomnia problematic, switch to morning dose', 'GI side effects improve with food and usually resolve within 2 weeks', 'BRADYCARDIA: check baseline ECG; monitor HR — avoid in sick sinus syndrome or significant bradycardia', 'Manage expectations: modest symptomatic improvement (modest delay in cognitive/functional decline); does NOT stop progression', 'Benefits may only be apparent when drug is stopped (family/caregivers notice worsening)'],
    contraindications: ['Sick sinus syndrome or other supraventricular conduction disorders', 'Peptic ulcer (increases gastric acid)', 'Asthma/COPD (relative — cholinergic bronchoconstriction)'],
  },

  'Rivastigmine': {
    class: 'Dual Acetyl- and Butyrylcholinesterase Inhibitor', subclass: 'Anti-dementia',
    overview: 'Unique dual inhibitor of both acetylcholinesterase AND butyrylcholinesterase. Available as patch (preferred — smoother levels, better GI tolerance, better adherence). Licensed for dementia in Parkinson\'s disease — the key distinguishing indication.',
    indications: ["Alzheimer's disease (mild to moderate)", "Parkinson's disease dementia (distinctive — preferred agent)", 'Lewy body dementia'],
    dosage: 'Oral (capsules): 1.5 mg BD with food; titrate every 4 weeks to 6 mg BD. Patch (Exelon): 4.6 mg/24 hrs → 9.5 mg/24 hrs → 13.3 mg/24 hrs.',
    mechanism: 'Carbamate-type reversible inhibitor of both AChE and BuChE → ↑ acetylcholine at synaptic cleft; BuChE inhibition may offer additional benefit as BuChE increases with disease progression.',
    sideEffects: ['Nausea and vomiting (significant with oral — major cause of discontinuation)', 'Diarrhoea', 'Weight loss', 'Dizziness', 'Bradycardia', 'Local skin irritation (patch — common)', 'Application site reactions'],
    nursing: ['PATCH: rotate application site (back, upper arm, chest) daily; avoid reusing same site for 14 days; document site', 'PATCH ADVANTAGE: steady drug levels; significantly fewer GI side effects; once daily application aids adherence in dementia patients', 'GI side effects (oral): take with food; if vomiting, consider switching to patch', 'Parkinson\'s disease dementia: preferred drug — donepezil can worsen tremor in PD; rivastigmine does not', 'Discontinuing oral: if missed doses for >3 days, re-titrate from lowest dose (GI side effects recur)'],
    contraindications: ['Severe hepatic impairment', 'Sick sinus syndrome (bradycardia)'],
  },

  'Galantamine': {
    class: 'Acetylcholinesterase Inhibitor + Nicotinic Receptor Modulator', subclass: 'Anti-dementia',
    overview: 'Dual mechanism: AChE inhibition + allosteric potentiation of nicotinic receptors. Derived from snowdrop bulbs. XR formulation once daily. Licensed for mild-moderate Alzheimer\'s only.',
    indications: ["Alzheimer's disease (mild to moderate)", 'Vascular dementia (with Alzheimer\'s pathology)'],
    dosage: 'Immediate release: 4 mg BD × 4 weeks → 8 mg BD × 4 weeks → 12 mg BD. XR: 8 mg OD → 16 mg OD → 24 mg OD.',
    mechanism: 'Reversible AChE inhibitor + allosteric modulator (sensitiser) of nicotinic acetylcholine receptors — potentiates cholinergic neurotransmission via two separate mechanisms.',
    sideEffects: ['Nausea and vomiting', 'Anorexia', 'Diarrhoea', 'Bradycardia', 'Dizziness', 'Weight loss'],
    nursing: ['Take with food — reduces nausea', 'Titrate slowly — GI side effects dose-related', 'Monitor HR and BP', 'XR formulation preferable (once daily, better tolerability)'],
    contraindications: ['Severe renal impairment (CrCl <9 mL/min)', 'Severe hepatic impairment'],
  },

  'Memantine': {
    class: 'NMDA Receptor Antagonist', subclass: 'Anti-dementia',
    overview: 'Only non-cholinesterase anti-dementia drug. Different mechanism — NMDA receptor blockade. Used for moderate-severe Alzheimer\'s disease. Can be combined with cholinesterase inhibitors (additive benefit). Generally better tolerated than AChE inhibitors.',
    indications: ["Moderate to severe Alzheimer's disease", 'Can be combined with donepezil in moderate-severe disease'],
    dosage: '5 mg OD initially; increase by 5 mg weekly. Target: 10 mg BD (20 mg/day).',
    mechanism: 'Uncompetitive NMDA receptor antagonist — blocks excessive glutamate activity (excitotoxicity in AD) while allowing physiological NMDA receptor activation for memory and learning.',
    sideEffects: ['Generally well tolerated', 'Dizziness', 'Headache', 'Constipation', 'Confusion (less than AChE inhibitors — no cholinergic side effects)', 'Hallucinations (rare)'],
    nursing: ['Better tolerated than AChE inhibitors — good choice in patients who cannot tolerate GI side effects', 'Can be combined with donepezil for additive benefit in moderate-severe AD', 'Dose reduction needed in renal impairment (renally cleared)', 'Alkaline urine (urinary tract infections, diet, antacids) reduces renal excretion and can increase drug levels'],
    contraindications: ['Severe renal impairment'],
  },


  // ══════════════════════════════════════════════════════════
  // 19. ADHD MEDICATIONS
  // ══════════════════════════════════════════════════════════

  'Methylphenidate': {
    class: 'CNS Stimulant / ADHD Medication', subclass: 'Dopamine and Noradrenaline Reuptake Inhibitor',
    overview: 'First-line pharmacotherapy for ADHD in children and adults. Multiple formulations: IR (4–6 hrs), intermediate-release (6–8 hrs), and long-acting XR (8–12 hrs). Schedule II controlled substance. Significant cardiovascular monitoring required.',
    indications: ['ADHD (attention-deficit/hyperactivity disorder)', 'Narcolepsy (off-label)'],
    dosage: 'Children: 5 mg BD (IR) initially; titrate to 20–60 mg/day. XR (Concerta, Ritalin LA): 18–72 mg OD. Adults: up to 80–100 mg/day.',
    mechanism: 'Blocks reuptake of dopamine and noradrenaline transporter → ↑ synaptic DA and NA in prefrontal cortex → improves executive function, attention, impulse control.',
    sideEffects: ['Decreased appetite and weight loss (major — particularly in children)', 'Insomnia (give before 3–4 pm)', 'Headache', 'Abdominal pain', 'Tachycardia and hypertension', 'Growth suppression in children (with long-term use — "drug holidays" in summer)', 'Psychological dependence (controlled substance)', 'Tics (may exacerbate pre-existing tic disorder)', 'Rebound effect when dose wears off'],
    nursing: ['CARDIOVASCULAR: ECG and BP/HR at baseline; check for personal and family history of cardiac disease (sudden death risk — small but real); monitor BP and HR at each dose adjustment', 'GROWTH: plot height and weight on centile chart at every visit — drug holidays (school holidays) considered to allow catch-up growth', 'APPETITE: administer after breakfast (not before — reduces food intake); monitor weight; calorie-dense meals in evening after drug wears off', 'ABUSE POTENTIAL: controlled substance; monitor for diversion; use tamper-resistant formulations (XR)', 'XR TABLETS: swallow whole — do NOT crush or chew (Concerta uses osmotic delivery system)', 'Capsules (Ritalin LA, Equasym XL): can be opened and sprinkled on food'],
    contraindications: ['Cardiovascular disease, arrhythmias, structural cardiac defects', 'Hypertension (uncontrolled)', 'Hyperthyroidism', 'MAOIs (14-day washout)', 'Glaucoma', 'History of psychosis'],
  },

  'Atomoxetine': {
    class: 'Selective Noradrenaline Reuptake Inhibitor / ADHD', subclass: 'Non-stimulant ADHD medication',
    overview: 'Only licensed non-stimulant for ADHD. Not a controlled substance — advantage in patients with substance use disorders or abuse risk. Delayed onset (4–6 weeks). Also shows benefit for anxiety comorbidity. HEPATOTOXICITY rare but reported — monitor LFTs.',
    indications: ['ADHD (children ≥6 years, adolescents, and adults)', 'ADHD with comorbid anxiety or substance use disorder'],
    dosage: '<70 kg: 0.5 mg/kg/day × 1 month, then 1 mg/kg/day. Max 1.4 mg/kg or 100 mg/day (whichever less). >70 kg: 40 mg/day → 80 mg → 100 mg.',
    mechanism: 'Selective NET inhibition in prefrontal cortex → ↑ noradrenaline (and downstream dopamine) → improved executive function. No D2 receptor activity — no stimulant properties.',
    sideEffects: ['Hepatotoxicity (rare — monitor LFTs; discontinue if jaundice, RUQ pain)', 'Decreased appetite', 'Nausea and vomiting', 'Somnolence OR insomnia', 'Tachycardia and hypertension', 'Suicidal ideation (children and adolescents — black box warning)', 'Sexual dysfunction (adults)', 'Urinary retention'],
    nursing: ['BLACK BOX WARNING: increased suicidal ideation in children and adolescents — monitor closely especially in first 4 weeks', 'LFTs: baseline and if symptoms of hepatotoxicity develop (jaundice, dark urine, RUQ pain)', 'SLOW ONSET: counsel patients and families — benefit takes 4–6 weeks; do not discontinue prematurely', 'Non-stimulant: no abuse or diversion concern; no need for controlled substance monitoring', 'BP and HR monitoring at each visit', 'Can be taken with food to reduce nausea'],
    contraindications: ['MAOIs (14-day washout)', 'Narrow-angle glaucoma', 'Severe cardiovascular disease', 'Hepatic failure'],
  },

  'Lisdexamfetamine': {
    class: 'CNS Stimulant / ADHD Medication', subclass: 'Amphetamine prodrug',
    overview: 'Inactive prodrug of d-amphetamine — cleaved by hydrolysis in RBCs. Lower abuse potential than amphetamine (slower activation, delayed peak). Longest-acting ADHD medication (12–14 hrs). Also licensed for binge eating disorder (unique).',
    indications: ['ADHD (children ≥6 years, adolescents, and adults) — when IR methylphenidate inadequate', 'Binge eating disorder (adults)'],
    dosage: 'ADHD: 20–30 mg OD in morning; titrate weekly by 10 mg increments; max 70 mg OD.',
    mechanism: 'Prodrug → d-amphetamine (active) → releases DA and NA from presynaptic vesicles + inhibits reuptake → ↑ catecholamines in prefrontal cortex.',
    sideEffects: ['Decreased appetite (prominent)', 'Insomnia', 'Tachycardia and hypertension', 'Growth suppression in children', 'Anxiety', 'Dry mouth', 'Weight loss', 'Potentially: psychosis and mania at high doses'],
    nursing: ['Give in MORNING — very long duration (12–14 hrs); late dosing causes profound insomnia', 'Cardiovascular monitoring (same as methylphenidate)', 'Growth monitoring in children', 'Lower abuse potential due to prodrug design — still schedule II', 'Can open capsule and dissolve in water for those unable to swallow'],
    contraindications: ['Same as methylphenidate: cardiovascular disease, hypertension, MAOIs, glaucoma, hyperthyroidism'],
  },


  // ══════════════════════════════════════════════════════════
  // 20. ANTI-MIGRAINE DRUGS
  // ══════════════════════════════════════════════════════════

  'Sumatriptan': {
    class: 'Triptan', subclass: '5-HT1B/1D receptor agonist',
    overview: 'First-in-class triptan. Gold-standard acute migraine treatment. Constricts dilated cranial blood vessels and inhibits trigeminal pain signalling. Contraindicated in cardiovascular disease (vasoconstrictive). Available oral, SC (fastest), and nasal spray.',
    indications: ['Acute migraine with or without aura', 'Cluster headache (SC only)'],
    dosage: 'Oral: 50–100 mg at onset; repeat after 2 hrs if needed (max 300 mg/day). SC: 6 mg (max 12 mg/day). Nasal spray: 10–20 mg per nostril.',
    mechanism: '5-HT1B agonism: constricts dilated meningeal/cranial blood vessels. 5-HT1D agonism: inhibits trigeminal nerve activation and neuropeptide (CGRP) release → interrupts migraine cascade.',
    sideEffects: ['Chest tightness, pressure, heaviness (non-cardiac — coronary vasospasm in susceptible individuals)', 'Tingling and flushing', 'Dizziness', 'Fatigue after attack', 'Medication overuse headache (if taken >10 days/month)', 'Vasospasm (serious — avoid in cardiovascular disease)'],
    nursing: ['Take at ONSET of headache (before severe — most effective early)', 'Chest pain or tightness: if cardiac cause suspected, do NOT give further triptans and seek assessment', 'MEDICATION OVERUSE HEADACHE: if patient requires triptans >10 days/month, they are at risk of chronic daily headache from overuse — discuss prophylaxis', 'SC: fastest onset (15 min) — preferred for severe rapid-onset attacks and cluster headache', 'Serotonin syndrome: rare but possible with SSRIs/SNRIs — counsel'],
    contraindications: ['Coronary artery disease, angina, prior MI', 'Uncontrolled hypertension', 'Stroke or TIA', 'Peripheral vascular disease', 'Concurrent ergotamine or within 24 hrs', 'MAOIs or within 2 weeks', 'Hemiplegic or basilar migraine'],
  },

  'Rizatriptan': {
    class: 'Triptan', subclass: '5-HT1B/1D agonist',
    overview: 'Fast-acting triptan with rapid oral absorption. Available as wafer (Maxalt Melt) that dissolves on tongue — useful when vomiting accompanies migraine. Interaction with propranolol (common migraine prophylactic) — reduce rizatriptan dose.',
    indications: ['Acute migraine'],
    dosage: '10 mg PO at onset; may repeat after 2 hrs. Max 20 mg/day. If on propranolol: use 5 mg dose.',
    mechanism: '5-HT1B/1D receptor agonism → same as sumatriptan.',
    sideEffects: ['Chest tightness', 'Dizziness', 'Fatigue', 'Nausea', 'Dry mouth'],
    nursing: ['Melt wafer: dissolve on tongue, no water needed (good for nausea/vomiting with migraine)', 'PROPRANOLOL interaction: propranolol inhibits MAO-A, increasing rizatriptan levels — reduce dose to 5 mg', 'Same cardiovascular contraindications as all triptans'],
    contraindications: ['Same as sumatriptan'],
  },

  'Ergotamine': {
    class: 'Ergot Alkaloid', subclass: 'Vasoconstrictor — Migraine',
    overview: 'Older migraine abortive treatment largely superseded by triptans. More side effects, more vasoconstrictive, longer duration of action. Higher addiction/overuse potential. Still available, sometimes combined with caffeine (Cafergot).',
    indications: ['Acute migraine (when triptans are unavailable or contraindicated)'],
    dosage: '1–2 mg SL or PO at onset; repeat every 30 min. Max 6 mg per attack, 10 mg per week.',
    mechanism: 'Alpha-adrenergic agonist + 5-HT receptor agonist + partial dopamine agonist → intense vasoconstriction.',
    sideEffects: ['Nausea and vomiting (prominent)', 'Peripheral vasospasm (ischaemia — extremities, ergotism)', 'Medication overuse headache (high potential)', 'Uterine stimulation (contraindicated in pregnancy)', 'Fibrotic reactions (pleural, retroperitoneal — with ergotamine derivatives)'],
    nursing: ['ERGOTISM: prolonged use causes ischaemia of extremities — check peripheral pulses; burning, tingling in extremities requires urgent evaluation', 'Maximum dose per week must be strictly adhered to', 'Do not use within 24 hrs of triptan', 'AVOID in pregnancy (oxytocic effect — uterine contractions, premature labour)', 'Monitor for overuse headache'],
    contraindications: ['Pregnancy', 'Cardiovascular disease', 'Hypertension', 'Peripheral vascular disease', 'Renal or hepatic failure', 'Concurrent triptans or within 24 hrs'],
  },

  'Propranolol': {
    class: 'Beta-Blocker', subclass: 'Migraine Prophylaxis / Non-selective β-blocker',
    overview: 'Most commonly used drug for migraine prophylaxis. Non-selective beta-blocker. Also used for anxiety (social anxiety, performance anxiety), hypertension, angina, thyrotoxicosis, and tremor. Reduces migraine frequency by 50% in many patients.',
    indications: ['Migraine prophylaxis (reduces frequency and severity)', 'Hypertension', 'Angina', 'Rate control in AF', 'Performance anxiety / situational anxiety', 'Essential tremor', 'Hyperthyroidism (adjunct)'],
    dosage: 'Migraine prophylaxis: 40 mg BD–TDS; increase to 240 mg/day. Anxiety: 40 mg PRN (30 min before). LA formulation: 80–160 mg OD.',
    mechanism: 'Non-selective β1 and β2 blockade → ↓ sympathetic activity. Migraine mechanism: may reduce noradrenergic neuronal firing, inhibit serotonin-induced platelet aggregation, reduce cortical spreading depression.',
    sideEffects: ['Bradycardia', 'Fatigue and weakness', 'Bronchoconstriction (β2 blockade — avoid in asthma/COPD)', 'Cold extremities', 'Masking hypoglycaemia (diabetic patients)', 'Vivid dreams (lipophilic — crosses BBB)', 'Erectile dysfunction', 'Worsening heart failure (if acute)'],
    nursing: ['ASTHMA: non-selective beta-blockade → potentially fatal bronchospasm in asthmatic patients (even low doses); use topiramate or amitriptyline instead', 'Never stop abruptly (rebound tachycardia, angina, or arrhythmias)', 'Monitor resting HR — hold if <50 bpm', 'Diabetics: masks hypoglycaemia symptoms (tachycardia) — only sweating remains as warning sign', 'Performance anxiety: single PRN dose 30–40 min before event (no need to be on regular therapy)'],
    contraindications: ['Asthma or significant reactive airway disease', 'Uncontrolled heart failure', '2nd or 3rd degree heart block', 'Severe bradycardia', 'Phaeochromocytoma (without alpha-blocker first)'],
  },

  'Topiramate (Migraine Prophylaxis)': {
    class: 'Anticonvulsant / Migraine Prophylaxis', subclass: 'Sulphamate monosaccharide',
    overview: 'Effective migraine prophylaxis (50% reduction in attack frequency in clinical trials). Licensed for migraine prevention. Weight loss effect is an advantage for obese migraine patients. Cognitive side effects limit tolerability. TERATOGENIC — avoid in women of childbearing potential.',
    indications: ['Migraine prophylaxis (reducing frequency)'],
    dosage: '25 mg OD at night initially; increase by 25 mg every 2 weeks to 50–100 mg BD.',
    mechanism: 'Sodium channel blockade + GABA enhancement + glutamate (AMPA) blockade + carbonic anhydrase inhibition (see anticonvulsant entry).',
    sideEffects: ['Cognitive impairment — "Dopamax" (most dose-limiting)', 'Weight loss (advantage if overweight)', 'Paraesthesia', 'Metabolic acidosis', 'Kidney stones', 'Acute glaucoma'],
    nursing: ['Start LOW, go SLOW — minimises cognitive side effects', 'Adequate hydration (2–3 L/day) — reduces kidney stone risk', 'AVOID in pregnancy — oral clefts (register all pregnancies)', 'Cognitive effects: warn about work and driving impairment', 'Acute red eye and visual change: STOP immediately and refer (acute glaucoma)'],
    contraindications: ['Pregnancy', 'History of kidney stones (relative)', 'Metabolic acidosis'],
  },

  'Amitriptyline (Migraine Prophylaxis)': {
    class: 'TCA / Migraine Prophylaxis', subclass: 'Preventive migraine drug',
    overview: 'Low-dose amitriptyline is one of the most effective and commonly used migraine prophylactics. At prophylactic doses (10–50 mg), side effects are generally mild. Particularly useful in patients with comorbid depression, anxiety, or insomnia.',
    indications: ['Migraine prophylaxis', 'Tension-type headache prophylaxis', 'Comorbid depression with migraine', 'Post-concussion headache'],
    dosage: '10 mg PO at bedtime initially; increase by 10 mg every 2 weeks to 50–75 mg (prophylactic doses much lower than antidepressant doses).',
    mechanism: 'Mechanism of migraine prevention not fully understood — may involve serotonin and noradrenaline modulation, NMDA antagonism, sodium channel effects.',
    sideEffects: ['Dry mouth (most common at these doses)', 'Sedation (beneficial if insomnia present)', 'Weight gain (long-term)', 'Constipation', 'Urinary hesitancy', 'At low doses: much better tolerated than at antidepressant doses'],
    nursing: ['Take at BEDTIME — sedating; morning sedation usually minimal at low prophylactic doses', 'Onset of prophylactic benefit: 4–8 weeks', 'ECG before starting (QTc monitoring)', 'Avoid in elderly if possible (anticholinergic burden)'],
    contraindications: ['Heart block', 'MAOIs', 'Urinary retention', 'Recent MI'],
  },


  // ══════════════════════════════════════════════════════════
  // 21. SUBSTANCE MISUSE / DEPENDENCE
  // ══════════════════════════════════════════════════════════

  'Chlordiazepoxide': {
    class: 'Benzodiazepine', subclass: 'Long-acting — Alcohol Withdrawal Management',
    overview: 'Long-acting benzodiazepine used specifically for alcohol withdrawal. The long half-life provides self-tapering effect (similar to long-acting diazepam). Given in a structured reducing regimen over 5–10 days.',
    indications: ['Acute alcohol withdrawal (community and hospital)', 'Prevention of alcohol withdrawal seizures', 'Alcohol withdrawal delirium tremens (as part of protocol)'],
    dosage: 'Fixed-schedule (inpatient): 30–50 mg QDS on day 1, reduce by 10 mg every 2 days over 10 days (total course). Symptom-triggered (outpatient CIWA): 25–50 mg TDS–QDS PRN for CIWA score ≥8.',
    mechanism: 'GABA-A potentiation → cross-tolerance with ethanol at GABA-A receptor → replaces ethanol, then gradually withdrawn → prevents withdrawal seizures and delirium.',
    sideEffects: ['Sedation', 'Respiratory depression', 'Dependence (short-term use in detoxification setting minimises this)', 'Accumulation in elderly/hepatic failure (long half-life)'],
    nursing: ['CIWA-Ar score: assess every 1–4 hrs during withdrawal management; titrate doses to score ≥8', 'THIAMINE (Pabrinex IV) MUST be given BEFORE any glucose/dextrose: glucose without thiamine precipitates Wernicke encephalopathy (Wernicke-Korsakoff syndrome)', 'Wernicke triad: confusion, ophthalmoplegia, ataxia — treat immediately with high-dose IV thiamine (Pabrinex)', 'Monitor: pulse, BP, temperature, respiratory rate, CIWA score', 'Hepatic impairment: use oxazepam or lorazepam instead (no active metabolites — shorter half-life safer)'],
    contraindications: ['Respiratory failure', 'Myasthenia gravis', 'Severe hepatic failure (use oxazepam or lorazepam)'],
  },

  'Disulfiram': {
    class: 'Alcohol Deterrent', subclass: 'Aldehyde Dehydrogenase Inhibitor',
    overview: 'Causes intensely unpleasant reaction if alcohol consumed — deters drinking by fear of reaction. Requires full commitment from patient (and ideally supported person). Can only be started after 24 hrs alcohol abstinence. Supervised consumption recommended.',
    indications: ['Alcohol use disorder (deterrent therapy — adjunct to counselling)'],
    dosage: '200 mg PO OD (can go to 500 mg). Must be alcohol-free for ≥24 hrs before first dose.',
    mechanism: 'Irreversibly inhibits aldehyde dehydrogenase → acetaldehyde (ethanol metabolite) accumulates → extremely unpleasant disulfiram-ethanol reaction (DER).',
    sideEffects: ['Drowsiness and fatigue (at therapeutic doses)', 'Metallic taste', 'Peripheral neuropathy (long-term)', 'Hepatotoxicity', 'Disulfiram-ethanol reaction: flushing, tachycardia, palpitations, hypotension, nausea/vomiting, headache, chest pain, dyspnoea — can be severe and potentially fatal with large alcohol intake'],
    nursing: ['Thorough counselling and written consent BEFORE starting — patient must understand the DER reaction', 'ALCOHOL IN ANY FORM causes DER: mouthwash, cough syrups, hand sanitiser (transdermal absorption), food cooked with wine or spirits — educate comprehensively', 'DER symptoms last 30–60 min after small intake; can last several hours with large intake; severe DER (cardiovascular collapse) — emergency management', 'Supervised disulfiram: taken in front of spouse, family, or pharmacist — increases effectiveness', 'LFTs at baseline and every 2 weeks for 2 months, then every 6 months (hepatotoxicity)', 'Contraindicated with metronidazole (psychosis) and warfarin (increases anticoagulation)'],
    contraindications: ['Cardiovascular disease (DER can precipitate MI or arrhythmias)', 'Severe hepatic impairment', 'Psychosis', 'Metronidazole (severe psychosis/confusion)', 'Pregnancy', 'Peripheral neuropathy'],
  },

  'Acamprosate': {
    class: 'Anti-craving Agent', subclass: 'GABA/Glutamate Modulator — Alcohol Dependence',
    overview: 'Reduces craving and maintains abstinence in alcohol use disorder. Must be combined with counselling. Works best in patients who have already achieved abstinence. Does NOT cause DER with alcohol — patient can drink without severe reaction (but this defeats the purpose).',
    indications: ['Alcohol use disorder (maintaining abstinence after detoxification)', 'Adjunct to counselling in alcohol dependence'],
    dosage: '666 mg PO TDS (with meals) for patients >60 kg. 333 mg TDS if <60 kg or renal impairment. Start after alcohol withdrawal is complete. Continue for 1 year.',
    mechanism: 'Structural analogue of GABA. Restores balance between inhibitory GABA and excitatory glutamate systems disrupted by chronic alcohol use → reduces neuronal hyperexcitability of withdrawal/protracted abstinence → ↓ craving.',
    sideEffects: ['Diarrhoea (most common)', 'Nausea', 'Abdominal pain', 'Generally well tolerated', 'Rash (rare)'],
    nursing: ['Start AFTER alcohol detoxification is complete (not during active withdrawal)', 'No DER — can continue even if patient relapses (unlike disulfiram); reinforce abstinence rather than stopping drug', 'TDS dosing with meals aids adherence and reduces GI side effects', 'Dose reduction in renal impairment (renally excreted)', 'Counselling is ESSENTIAL alongside medication'],
    contraindications: ['Severe renal impairment (CrCl <30 mL/min)', 'Severe hepatic impairment', 'Pregnancy'],
  },

  'Varenicline': {
    class: 'Smoking Cessation Aid', subclass: 'Partial nicotinic acetylcholine receptor agonist',
    overview: 'Most effective single pharmacotherapy for smoking cessation (RR 2.27× placebo vs NRT 1.58×). Partial nicotinic α4β2 receptor agonist — reduces withdrawal symptoms AND blocks nicotine from binding (reduces reward). Neuropsychiatric side effects (depression, suicidality) historically controversial — more recent evidence suggests lower risk than initially thought.',
    indications: ['Smoking cessation (adults)'],
    dosage: 'Days 1–3: 0.5 mg OD. Days 4–7: 0.5 mg BD. Week 2 onwards: 1 mg BD. Total 12 weeks; repeat course for maximum benefit.',
    mechanism: 'Partial α4β2 nicotinic acetylcholine receptor agonist: agonist action reduces withdrawal symptoms; partial agonism means lower dopamine release than full nicotine → reduced reward; competitive antagonism blocks nicotine binding → reduces smoking satisfaction.',
    sideEffects: ['Nausea (most common — take with food, reduce dose if needed)', 'Vivid/abnormal dreams and sleep disturbance', 'Headache', 'Depression and mood changes', 'Suicidal ideation (rare — monitor especially if psychiatric history)', 'Cardiovascular events (controversial — slight signal in established cardiovascular disease)'],
    nursing: ['Nausea: take with food and full glass of water; reduces significantly after first 2 weeks', 'NEUROPSYCHIATRIC: counsel patient and family to monitor for depression, mood changes, irritability, suicidal thoughts — stop and seek help if these occur', 'SET QUIT DATE: patient should stop smoking 1–2 weeks after starting medication (allows therapeutic level to build up)', 'Combine with counselling for best outcomes', 'Can use during pregnancy only if other methods fail — limited data'],
    contraindications: ['Severe renal impairment (dose reduction needed)', 'Pregnancy (limited data — avoid if possible)', 'Serious psychiatric disorder (use with caution — specialist supervision)'],
  },

  'Nicotine Replacement Therapy (NRT)': {
    class: 'Smoking Cessation Aid', subclass: 'Nicotinic receptor agonist (replacement)',
    overview: 'Multiple formulations: patch (24-hr or 16-hr), gum, lozenge, inhaler, nasal spray, microtab. Can combine patch (long-acting baseline) with faster-acting formulation (gum, lozenge) for breakthrough craving — combination NRT most effective of NRT options.',
    indications: ['Smoking cessation (nicotine dependence)'],
    dosage: 'Patch: 21 mg/24 hrs (heavy smokers >10 cigarettes/day) or 14 mg → 7 mg. Gum: 4 mg (>25 cig/day), 2 mg (others) — chew-rest-park technique.',
    mechanism: 'Replaces nicotine from cigarettes → satisfies craving and reduces withdrawal; gradual dose reduction weans off nicotine.',
    sideEffects: ['Patch: skin irritation (rotate sites), vivid dreams (24-hr patch — remove at night)', 'Gum: jaw ache, hiccups, nausea, dental issues (avoid in denture wearers)', 'Nasal spray: nasal irritation', 'Inhaler: cough', 'Cardiovascular stimulation (safe in stable cardiovascular disease)'],
    nursing: ['Gum technique: chew slowly until peppery taste → park in cheek → chew again → park; 30 min per piece; avoid eating 15 min before and during use', 'Patches: apply to hairless, dry skin; rotate sites daily; 16-hr patch (remove at bedtime): less vivid dreams; 24-hr: more consistent nicotine delivery', 'Combination NRT: patch + gum/lozenge is more effective than either alone', 'Safe in cardiovascular disease (nicotine without CO and other combustion toxins)'],
    contraindications: ['Active MI (very recent, haemodynamically unstable)', 'Severe arrhythmias', 'Pregnancy (use only if benefit outweighs risk)'],
  },

};

// ============================================================
// INSTRUCTIONS FOR INTEGRATION
// ============================================================
//
// In your drugProfiles.js, replace all CNS entries with the
// above entries from CNS_DRUG_PROFILES. Then update your
// export at the bottom of drugProfiles.js as follows:
//
// import { CNS_DRUG_PROFILES } from './drugProfiles_CNS_expanded';
//
// export const DRUG_PROFILES = {
//   ...CNS_DRUG_PROFILES,
//   // ... all your other non-CNS drug entries remain below ...
// };
//
// ============================================================
// DRUG COUNT SUMMARY
// ============================================================
// 1.  Benzodiazepines & Z-drugs           : 9 drugs
// 2.  Non-BZD anxiolytics                 : 2 drugs
// 3.  Typical antipsychotics              : 5 drugs
// 4.  Atypical antipsychotics             : 7 drugs
// 5.  SSRIs                               : 6 drugs
// 6.  SNRIs                               : 3 drugs
// 7.  TCAs                                : 5 drugs
// 8.  MAOIs / RIMAs                       : 3 drugs
// 9.  Other antidepressants               : 5 drugs
// 10. Mood stabilisers                    : 3 drugs
// 11. Anticonvulsants                     : 9 drugs
// 12. Opioid analgesics & antagonists     : 8 drugs
// 13. Non-opioid CNS analgesics           : 1 drug
// 14. General anaesthetics                : 7 drugs
// 15. Local anaesthetics                  : 5 drugs
// 16. NMBAs & reversal agents             : 6 drugs
// 17. Anti-Parkinson drugs                : 7 drugs
// 18. Anti-dementia drugs                 : 4 drugs
// 19. ADHD medications                    : 3 drugs
// 20. Anti-migraine drugs                 : 5 drugs
// 21. Substance misuse / dependence       : 5 drugs
// ─────────────────────────────────────────────────────────────
// TOTAL CNS DRUGS IN THIS FILE            : ~118 drugs
// ============================================================
