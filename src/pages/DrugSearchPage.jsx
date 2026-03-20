import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_DRUGS, DRUG_CLASSES, UNIQUE_DRUGS } from '../data/drugClasses';
import DrugClassBrowse from '../components/DrugClassBrowse';

// ─── Quick launch drugs (updated) ────────────────────────────
const QUICK_DRUGS = [
  'Paracetamol (Acetaminophen)', 'Amoxicillin', 'Metformin',
  'Morphine', 'Furosemide (Frusemide)', 'Omeprazole',
  'Artemether-Lumefantrine (Coartem)', 'Salbutamol (Albuterol)',
  'Doxycycline', 'Prednisolone', 'Ciprofloxacin', 'Vancomycin',
];

const CONDITION_CHIPS = [
  'malaria', 'pain', 'diabetes', 'hypertension', 'infection',
  'asthma', 'HIV', 'tuberculosis', 'heart failure', 'seizure',
  'anaemia', 'depression', 'nausea', 'cancer', 'fungal', 'worms',
  'typhoid', 'liver', 'kidney', 'pregnancy',
];

// ─── Comprehensive Indication Map (EMDEX-aligned) ─────────────
const INDICATION_MAP = [
  // CNS
  { keywords: ['pain', 'analgesic', 'analgesia', 'painkiller', 'headache', 'fever', 'pyrexia', 'antipyretic', 'ache'], drugs: ['Paracetamol (Acetaminophen)', 'Ibuprofen', 'Aspirin', 'Morphine', 'Codeine', 'Tramadol', 'Naproxen', 'Diclofenac', 'Ketorolac', 'Mefenamic Acid', 'Fentanyl', 'Oxycodone', 'Pethidine (Meperidine)', 'Buprenorphine', 'Pentazocine'] },
  { keywords: ['anxiety', 'anxiolytic', 'panic', 'agitation', 'phobia', 'stress disorder'], drugs: ['Diazepam', 'Lorazepam', 'Alprazolam', 'Midazolam', 'Buspirone', 'Sertraline', 'Escitalopram', 'Clonazepam', 'Hydroxyzine'] },
  { keywords: ['sleep', 'insomnia', 'hypnotic', 'sedative', 'sleeplessness'], drugs: ['Zolpidem', 'Zopiclone', 'Nitrazepam', 'Temazepam', 'Diazepam', 'Promethazine', 'Melatonin', 'Hydroxyzine'] },
  { keywords: ['psychosis', 'antipsychotic', 'schizophrenia', 'hallucination', 'delusion', 'psychotic'], drugs: ['Haloperidol', 'Chlorpromazine', 'Risperidone', 'Olanzapine', 'Quetiapine', 'Clozapine', 'Aripiprazole', 'Amisulpride'] },
  { keywords: ['bipolar', 'mania', 'manic', 'mood stabiliser', 'mood disorder'], drugs: ['Lithium', 'Sodium Valproate', 'Carbamazepine', 'Lamotrigine', 'Quetiapine', 'Olanzapine', 'Aripiprazole'] },
  { keywords: ['depression', 'antidepressant', 'depressive', 'ssri', 'snri', 'low mood', 'sad'], drugs: ['Sertraline', 'Fluoxetine', 'Escitalopram', 'Citalopram', 'Venlafaxine', 'Duloxetine', 'Amitriptyline', 'Mirtazapine', 'Trazodone'] },
  { keywords: ['seizure', 'epilepsy', 'epileptic', 'convulsion', 'anticonvulsant', 'antiepileptic', 'status epilepticus', 'fits'], drugs: ['Phenytoin', 'Carbamazepine', 'Sodium Valproate', 'Levetiracetam', 'Lamotrigine', 'Diazepam', 'Lorazepam', 'Phenobarbitone', 'Clonazepam', 'Topiramate'] },
  { keywords: ['migraine', 'triptan', 'aura'], drugs: ['Sumatriptan', 'Rizatriptan', 'Zolmitriptan', 'Paracetamol (Acetaminophen)', 'Ibuprofen', 'Ergotamine', 'Propranolol', 'Topiramate', 'Amitriptyline'] },
  { keywords: ['parkinson', "parkinson's", 'tremor', 'rigidity', 'bradykinesia', 'levodopa'], drugs: ['Levodopa-Carbidopa (Sinemet)', 'Pramipexole', 'Ropinirole', 'Amantadine', 'Selegiline', 'Entacapone', 'Biperiden'] },
  { keywords: ['dementia', 'alzheimer', 'memory loss', 'cognitive decline', 'acetylcholinesterase'], drugs: ['Donepezil', 'Rivastigmine', 'Galantamine', 'Memantine'] },
  { keywords: ['adhd', 'attention deficit', 'hyperactivity', 'methylphenidate', 'ritalin'], drugs: ['Methylphenidate', 'Atomoxetine', 'Lisdexamfetamine', 'Guanfacine'] },
  { keywords: ['vertigo', 'dizziness', 'meniere', 'labyrinthitis', 'motion sickness', 'travel sick'], drugs: ['Betahistine', 'Cinnarizine', 'Prochlorperazine', 'Cyclizine', 'Promethazine', 'Meclizine', 'Dimenhydrinate'] },
  { keywords: ['opioid dependence', 'heroin', 'substance abuse', 'addiction', 'withdrawal', 'methadone'], drugs: ['Methadone', 'Buprenorphine', 'Naltrexone', 'Naloxone', 'Disulfiram', 'Acamprosate'] },
  { keywords: ['muscle spasm', 'muscle relaxant', 'spasticity', 'cramp', 'muscle pain', 'musculoskeletal'], drugs: ['Baclofen', 'Tizanidine', 'Diazepam', 'Methocarbamol', 'Cyclobenzaprine', 'Dantrolene'] },

  // MSK
  { keywords: ['arthritis', 'rheumatoid', 'ra', 'joint pain', 'joint swelling', 'nsaid', 'anti-inflammatory'], drugs: ['Ibuprofen', 'Diclofenac', 'Naproxen', 'Celecoxib', 'Etoricoxib', 'Prednisolone', 'Methotrexate', 'Hydroxychloroquine'] },
  { keywords: ['gout', 'hyperuricemia', 'hyperuricaemia', 'uric acid', 'allopurinol', 'podagra'], drugs: ['Colchicine', 'Allopurinol', 'Febuxostat', 'Indomethacin', 'Prednisolone', 'Probenecid'] },
  { keywords: ['osteoporosis', 'bone density', 'fracture prevention', 'bisphosphonate'], drugs: ['Alendronate', 'Risedronate', 'Zoledronic Acid', 'Denosumab', 'Calcium Carbonate', 'Cholecalciferol (Vit D3)', 'Teriparatide'] },

  // CVS
  { keywords: ['hypertension', 'high blood pressure', 'bp', 'antihypertensive', 'blood pressure'], drugs: ['Amlodipine', 'Lisinopril', 'Ramipril', 'Losartan', 'Atenolol', 'Metoprolol', 'Bisoprolol', 'Furosemide (Frusemide)', 'Hydrochlorothiazide', 'Valsartan', 'Candesartan', 'Nifedipine', 'Carvedilol', 'Indapamide', 'Methyldopa'] },
  { keywords: ['heart failure', 'cardiac failure', 'ccf', 'chf', 'oedema', 'edema', 'fluid overload', 'diuretic'], drugs: ['Furosemide (Frusemide)', 'Spironolactone', 'Enalapril', 'Carvedilol', 'Bisoprolol', 'Digoxin', 'Eplerenone', 'Empagliflozin', 'Dapagliflozin', 'Sacubitril/Valsartan (Entresto)'] },
  { keywords: ['arrhythmia', 'atrial fibrillation', 'af', 'tachycardia', 'bradycardia', 'antiarrhythmic', 'palpitation'], drugs: ['Amiodarone', 'Digoxin', 'Adenosine', 'Flecainide', 'Sotalol', 'Verapamil', 'Diltiazem', 'Propafenone', 'Atenolol', 'Metoprolol'] },
  { keywords: ['angina', 'chest pain', 'coronary', 'ischaemic heart', 'nitrate', 'anti-anginal'], drugs: ['Glyceryl Trinitrate (GTN/Nitroglycerin)', 'Isosorbide Mononitrate', 'Isosorbide Dinitrate', 'Atenolol', 'Amlodipine', 'Nicorandil', 'Ranolazine'] },
  { keywords: ['cholesterol', 'lipid', 'dyslipidemia', 'dyslipidaemia', 'statin', 'triglyceride', 'hyperlipidemia', 'hyperlipidaemia'], drugs: ['Atorvastatin', 'Rosuvastatin', 'Simvastatin', 'Fenofibrate', 'Ezetimibe', 'Evolocumab', 'Pravastatin'] },
  { keywords: ['anticoagulant', 'blood thinner', 'clot', 'dvt', 'pe', 'pulmonary embolism', 'thrombosis', 'warfarin', 'heparin'], drugs: ['Warfarin', 'Heparin (Unfractionated)', 'Enoxaparin (LMWH)', 'Rivaroxaban', 'Apixaban', 'Dabigatran', 'Fondaparinux'] },
  { keywords: ['antiplatelet', 'stroke', 'mi', 'myocardial infarction', 'heart attack', 'acs', 'tia'], drugs: ['Aspirin (low dose)', 'Clopidogrel', 'Ticagrelor', 'Prasugrel', 'Dipyridamole'] },
  { keywords: ['shock', 'vasopressor', 'inotrope', 'septic shock', 'hypotension', 'resuscitation', 'low bp'], drugs: ['Noradrenaline (Norepinephrine)', 'Adrenaline (Epinephrine)', 'Dopamine', 'Dobutamine', 'Vasopressin', 'Milrinone'] },

  // Diabetes/Endocrine
  { keywords: ['diabetes', 'diabetic', 'blood sugar', 'glucose', 'hyperglycemia', 'hyperglycaemia', 'type 2', 'type 1', 'insulin'], drugs: ['Metformin', 'Insulin Regular (Actrapid)', 'Insulin Glargine (Lantus)', 'Insulin NPH (Insulatard)', 'Glibenclamide (Glyburide)', 'Glimepiride', 'Gliclazide', 'Empagliflozin', 'Dapagliflozin', 'Sitagliptin', 'Semaglutide', 'Pioglitazone'] },
  { keywords: ['hypothyroid', 'thyroid', 'hypothyroidism', 'levothyroxine', 'thyroxine', 'goitre', 'myxoedema'], drugs: ['Levothyroxine (T4)', 'Liothyronine (T3)', 'Carbimazole', 'Propylthiouracil (PTU)'] },
  { keywords: ['hyperthyroid', 'thyrotoxicosis', 'graves', 'overactive thyroid', 'antithyroid'], drugs: ['Carbimazole', 'Propylthiouracil (PTU)', 'Propranolol', 'Potassium Iodide', 'Radioactive Iodine (I-131)'] },
  { keywords: ['corticosteroid', 'steroid', 'adrenal', 'addison', 'cushing', 'glucocorticoid'], drugs: ['Prednisolone', 'Hydrocortisone', 'Dexamethasone', 'Methylprednisolone', 'Fludrocortisone'] },

  // GI
  { keywords: ['ulcer', 'gastric', 'stomach acid', 'heartburn', 'gerd', 'gord', 'reflux', 'ppi', 'proton pump', 'h pylori', 'peptic'], drugs: ['Omeprazole', 'Pantoprazole', 'Lansoprazole', 'Esomeprazole', 'Rabeprazole', 'Ranitidine', 'Famotidine', 'Magnesium Trisilicate', 'Sucralfate', 'Misoprostol'] },
  { keywords: ['nausea', 'vomiting', 'antiemetic', 'emesis', 'motion sickness', 'morning sickness'], drugs: ['Metoclopramide', 'Ondansetron', 'Promethazine', 'Domperidone', 'Cyclizine', 'Prochlorperazine', 'Granisetron'] },
  { keywords: ['constipation', 'laxative', 'bowel', 'stool', 'aperient', 'hard stool'], drugs: ['Lactulose', 'Bisacodyl', 'Senna (Sennosides)', 'Macrogol (Polyethylene Glycol / Movicol)', 'Ispaghula Husk (Psyllium)', 'Glycerol Suppositories', 'Docusate Sodium'] },
  { keywords: ['diarrhea', 'diarrhoea', 'loose stool', 'gastroenteritis', 'antidiarrheal', 'dysentery'], drugs: ['Loperamide', 'Oral Rehydration Salts (ORS)', 'Metronidazole', 'Ciprofloxacin', 'Zinc Sulphate', 'Nitazoxanide'] },
  { keywords: ['ibd', 'crohn', 'ulcerative colitis', 'inflammatory bowel', 'colitis'], drugs: ['Mesalazine (5-ASA)', 'Sulfasalazine', 'Prednisolone (IBD)', 'Azathioprine', 'Infliximab', 'Adalimumab'] },
  { keywords: ['bile', 'gallstone', 'cholestasis', 'ursodeoxycholic', 'liver bile'], drugs: ['Ursodeoxycholic Acid (UDCA)', 'Cholestyramine'] },
  { keywords: ['spasm', 'colic', 'abdominal cramp', 'antispasmodic', 'ibs'], drugs: ['Hyoscine Butylbromide (Buscopan)', 'Mebeverine', 'Peppermint Oil', 'Dicyclomine', 'Alverine'] },

  // Respiratory
  { keywords: ['asthma', 'bronchospasm', 'wheeze', 'bronchodilator', 'copd', 'respiratory', 'breathing difficulty', 'inhaler'], drugs: ['Salbutamol (Albuterol)', 'Beclometasone', 'Budesonide', 'Fluticasone', 'Tiotropium (LAMA)', 'Ipratropium (SAMA)', 'Montelukast', 'Theophylline', 'Salmeterol', 'Formoterol'] },
  { keywords: ['cough', 'mucolytic', 'expectorant', 'phlegm', 'sputum', 'productive cough'], drugs: ['Bromhexine', 'Ambroxol', 'Carbocisteine (Mucodyne)', 'Acetylcysteine (NAC)', 'Guaifenesin', 'Codeine (Linctus)', 'Dextromethorphan'] },
  { keywords: ['pneumonia', 'chest infection', 'lrti', 'lower respiratory', 'community acquired'], drugs: ['Amoxicillin', 'Co-Amoxiclav', 'Azithromycin', 'Doxycycline', 'Ceftriaxone (3rd Gen)', 'Levofloxacin', 'Moxifloxacin'] },

  // Infections
  { keywords: ['infection', 'antibiotic', 'bacterial', 'sepsis', 'septicemia', 'septicaemia', 'antimicrobial'], drugs: ['Amoxicillin', 'Co-Amoxiclav', 'Ciprofloxacin', 'Metronidazole', 'Ceftriaxone (3rd Gen)', 'Gentamicin', 'Vancomycin', 'Meropenem', 'Azithromycin', 'Doxycycline', 'Flucloxacillin', 'Piperacillin-Tazobactam'] },
  { keywords: ['malaria', 'antimalarial', 'plasmodium', 'falciparum', 'vivax', 'mosquito'], drugs: ['Artemether-Lumefantrine (Coartem)', 'Artesunate (IV/IM)', 'Chloroquine', 'Quinine (IV)', 'Mefloquine', 'Primaquine', 'Atovaquone-Proguanil (Malarone)', 'Sulfadoxine-Pyrimethamine (SP / Fansidar)'] },
  { keywords: ['typhoid', 'enteric fever', 'salmonella typhi'], drugs: ['Ciprofloxacin', 'Ceftriaxone (3rd Gen)', 'Azithromycin', 'Chloramphenicol (systemic)', 'Co-Trimoxazole (Trimethoprim + Sulfamethoxazole)'] },
  { keywords: ['hiv', 'aids', 'antiretroviral', 'arv', 'art', 'retroviral', 'cd4'], drugs: ['Tenofovir (TDF)', 'Lamivudine (3TC)', 'Efavirenz (EFV)', 'Dolutegravir (DTG)', 'Nevirapine (NVP)', 'Lopinavir/Ritonavir (LPV/r)', 'Zidovudine (AZT)', 'Emtricitabine', 'TDF + 3TC + DTG', 'TDF + 3TC + EFV (1st line adult)'] },
  { keywords: ['tuberculosis', 'tb', 'mycobacterium', 'anti-tb', 'rifampicin', 'isoniazid'], drugs: ['Isoniazid (INH)', 'Rifampicin', 'Pyrazinamide', 'Ethambutol', 'Streptomycin', 'Bedaquiline', 'Levofloxacin (TB)'] },
  { keywords: ['fungal', 'antifungal', 'candida', 'candidiasis', 'thrush', 'tinea', 'ringworm', 'aspergillus', 'cryptococcus'], drugs: ['Fluconazole', 'Itraconazole', 'Voriconazole', 'Nystatin', 'Clotrimazole Cream', 'Amphotericin B (deoxycholate)', 'Caspofungin', 'Terbinafine (systemic)', 'Griseofulvin'] },
  { keywords: ['worm', 'helminth', 'deworming', 'roundworm', 'hookworm', 'tapeworm', 'anthelmintic', 'parasite', 'pinworm', 'threadworm', 'schistosoma', 'bilharzia'], drugs: ['Albendazole', 'Mebendazole', 'Praziquantel', 'Ivermectin', 'Pyrantel', 'Levamisole', 'Diethylcarbamazine (DEC)', 'Niclosamide'] },
  { keywords: ['hepatitis', 'liver virus', 'hbv', 'hcv', 'hepatitis b', 'hepatitis c', 'viral hepatitis'], drugs: ['Tenofovir (TDF)', 'Entecavir', 'Lamivudine (3TC)', 'Sofosbuvir', 'Ledipasvir-Sofosbuvir (Harvoni)', 'Glecaprevir-Pibrentasvir (Maviret)', 'Ribavirin', 'Peginterferon Alfa'] },
  { keywords: ['flu', 'influenza', 'oseltamivir', 'tamiflu', 'antiviral'], drugs: ['Oseltamivir (Tamiflu)', 'Zanamivir', 'Baloxavir', 'Aciclovir (Acyclovir)', 'Valaciclovir'] },
  { keywords: ['herpes', 'hsv', 'cold sore', 'shingles', 'zoster', 'chickenpox', 'varicella'], drugs: ['Aciclovir (Acyclovir)', 'Valaciclovir', 'Famciclovir', 'Aciclovir 5% Cream'] },
  { keywords: ['uti', 'urinary tract infection', 'cystitis', 'pyelonephritis', 'bladder infection'], drugs: ['Nitrofurantoin', 'Trimethoprim', 'Co-Trimoxazole (Trimethoprim + Sulfamethoxazole)', 'Ciprofloxacin', 'Cephalexin (1st Gen)', 'Fosfomycin', 'Ceftriaxone (3rd Gen)'] },

  // Blood
  { keywords: ['anaemia', 'anemia', 'iron deficiency', 'iron', 'haemoglobin', 'hemoglobin', 'low hb', 'pallor'], drugs: ['Ferrous Sulphate', 'Ferric Carboxymaltose', 'Erythropoietin (EPO)', 'Folic Acid', 'Cyanocobalamin (B12)', 'Hydroxocobalamin'] },

  // Kidney/Liver
  { keywords: ['renal', 'kidney', 'ckd', 'aki', 'dialysis', 'nephropathy', 'proteinuria', 'chronic kidney'], drugs: ['Furosemide (Frusemide)', 'Spironolactone', 'Lisinopril', 'Losartan', 'Calcium Carbonate', 'Sevelamer', 'Erythropoietin (EPO)'] },
  { keywords: ['liver', 'hepatic', 'cirrhosis', 'hepatic encephalopathy', 'liver failure', 'ascites'], drugs: ['Ursodeoxycholic Acid (UDCA)', 'Lactulose', 'Rifaximin', 'Prednisolone (IBD)', 'Furosemide (Frusemide)', 'Spironolactone'] },

  // Reproductive
  { keywords: ['contraceptive', 'contraception', 'family planning', 'pill', 'birth control', 'pregnancy prevention'], drugs: ['Combined Oral Contraceptive Pill (COCP)', 'Progesterone-Only Pill (POP)', 'Emergency Contraception (Levonorgestrel)', 'Medroxyprogesterone (Depo-Provera IM)', 'Levonorgestrel Implant (Jadelle/Norplant)', 'Copper IUD'] },
  { keywords: ['preeclampsia', 'eclampsia', 'pregnancy hypertension', 'obstetric', 'labour', 'labor', 'postpartum haemorrhage', 'pph', 'oxytocin', 'uterotonics'], drugs: ['Magnesium Sulphate', 'Labetalol', 'Nifedipine', 'Hydralazine', 'Oxytocin', 'Ergometrine', 'Misoprostol', 'Carbetocin'] },
  { keywords: ['fertility', 'infertility', 'ovulation', 'pcos', 'polycystic ovary', 'clomid', 'ivf'], drugs: ['Clomifene (Anti-oestrogen/Ovulation inducer)', 'Letrozole (Ovulation induction)', 'Metformin', 'FSH (Follitropin Alpha/Beta)', 'Progesterone'] },

  // Cancer
  { keywords: ['cancer', 'chemotherapy', 'oncology', 'tumour', 'tumor', 'malignancy', 'cytotoxic', 'antineoplastic', 'chemo'], drugs: ['Methotrexate', 'Cyclophosphamide', 'Cisplatin', 'Paclitaxel', 'Docetaxel', 'Vincristine', 'Doxorubicin', 'Tamoxifen', 'Imatinib (Gleevec)', 'Trastuzumab (Herceptin)', 'Pembrolizumab (Keytruda)', 'Rituximab'] },
  { keywords: ['immunosuppression', 'transplant', 'rejection', 'lupus', 'sle', 'autoimmune'], drugs: ['Methotrexate', 'Azathioprine', 'Ciclosporin (Cyclosporine)', 'Tacrolimus', 'Mycophenolate Mofetil (MMF)', 'Prednisolone', 'Hydroxychloroquine', 'Infliximab', 'Adalimumab'] },

  // Allergy
  { keywords: ['allergy', 'allergic', 'antihistamine', 'hay fever', 'rhinitis', 'urticaria', 'hives', 'rash', 'angioedema'], drugs: ['Loratadine', 'Cetirizine', 'Fexofenadine', 'Chlorphenamine (Chlorpheniramine)', 'Promethazine', 'Desloratadine', 'Levocetirizine', 'Hydroxyzine'] },
  { keywords: ['anaphylaxis', 'anaphylactic', 'adrenaline', 'epinephrine', 'epipen', 'severe allergy'], drugs: ['Adrenaline (Epinephrine) 1:1000', 'Adrenaline Auto-Injector (EpiPen)', 'Hydrocortisone (IV)', 'Chlorphenamine (Chlorpheniramine)', 'Salbutamol (Albuterol)'] },

  // Anaesthesia
  { keywords: ['anaesthetic', 'anesthetic', 'anaesthesia', 'anesthesia', 'sedation', 'induction', 'intubation', 'general anaesthesia'], drugs: ['Propofol', 'Ketamine', 'Midazolam', 'Thiopentone (Thiopental)', 'Lidocaine (Lignocaine)', 'Bupivacaine', 'Suxamethonium', 'Rocuronium', 'Fentanyl', 'Isoflurane', 'Sevoflurane'] },

  // Poisoning
  { keywords: ['overdose', 'poisoning', 'antidote', 'toxicity', 'toxic'], drugs: ['Acetylcysteine (N-Acetylcysteine — paracetamol OD)', 'Naloxone (opioid OD)', 'Atropine (organophosphate poisoning)', 'Activated Charcoal', 'Flumazenil (benzodiazepine OD)', 'Methylene Blue (methaemoglobinaemia)'] },

  // Vaccines
  { keywords: ['vaccine', 'vaccination', 'immunisation', 'immunization', 'jab', 'epi'], drugs: ['BCG Vaccine', 'Hepatitis B Vaccine', 'Measles Vaccine', 'OPV (Oral Polio Vaccine)', 'DTP (Diphtheria-Tetanus-Pertussis)', 'Yellow Fever Vaccine', 'HPV Vaccine (Cervarix / Gardasil)', 'Influenza Vaccine (annual)', 'COVID-19 Vaccines (various)'] },

  // Ophthalmology
  { keywords: ['eye', 'ocular', 'ophthalmology', 'glaucoma', 'conjunctivitis', 'eye infection', 'eye drops'], drugs: ['Chloramphenicol Eye Drops', 'Ciprofloxacin Eye Drops', 'Timolol Eye Drops', 'Latanoprost', 'Tropicamide', 'Artificial Tears (Hypromellose)', 'Dexamethasone Eye Drops'] },

  // ENT
  { keywords: ['ear', 'otitis', 'otic', 'ear infection', 'ear drop'], drugs: ['Ciprofloxacin Ear Drops', 'Gentamicin Ear Drops', 'Neomycin + Dexamethasone (Otosporin)', 'Sodium Bicarbonate Ear Drops'] },
  { keywords: ['nasal', 'rhinitis', 'sinusitis', 'nose', 'nasal congestion', 'decongestant'], drugs: ['Fluticasone Nasal Spray', 'Mometasone Nasal Spray', 'Oxymetazoline Nasal Drops', 'Xylometazoline Nasal Spray', 'Budesonide Nasal Spray', 'Pseudoephedrine (systemic)'] },

  // Skin
  { keywords: ['skin infection', 'cellulitis', 'impetigo', 'wound', 'topical antibiotic'], drugs: ['Mupirocin (Bactroban)', 'Fusidic Acid (cream)', 'Silver Sulfadiazine', 'Povidone Iodine', 'Chlorhexidine Gluconate'] },
  { keywords: ['eczema', 'dermatitis', 'itching', 'pruritus', 'atopic', 'topical steroid'], drugs: ['Hydrocortisone Cream 1%', 'Betamethasone Valerate 0.1%', 'Mometasone Furoate 0.1%', 'Clobetasol Propionate 0.05%', 'Calamine Lotion', 'Tacrolimus (topical)', 'Pimecrolimus (topical)'] },
  { keywords: ['acne', 'pimple', 'comedone', 'acne vulgaris'], drugs: ['Benzoyl Peroxide', 'Tretinoin (Retinoic Acid)', 'Adapalene', 'Clindamycin Gel', 'Doxycycline (oral acne)', 'Isotretinoin (oral)', 'Azelaic Acid'] },
  { keywords: ['psoriasis', 'plaque', 'scalp psoriasis', 'psoriatic'], drugs: ['Coal Tar', 'Calcipotriol', 'Betamethasone + Calcipotriol (Dovobet)', 'Methotrexate (systemic psoriasis)', 'Secukinumab', 'Adalimumab (psoriasis)'] },
  { keywords: ['scabies', 'mite', 'lice', 'pediculosis', 'infestation'], drugs: ['Permethrin 5% (scabies)', 'Benzyl Benzoate', 'Ivermectin Lotion', 'Permethrin 1% (head lice)', 'Malathion Lotion'] },

  // Nutrition
  { keywords: ['vitamin deficiency', 'malnutrition', 'supplement', 'micronutrient', 'nutritional'], drugs: ['Ferrous Sulphate', 'Folic Acid', 'Cyanocobalamin (B12)', 'Vitamin C (Ascorbic Acid)', 'Vitamin A (Retinol)', 'Cholecalciferol (Vit D3)', 'Zinc Sulphate', 'Multivitamin + Mineral Tablets'] },
];

// ─── getDrugMeta (from flat ALL_DRUGS list) ───────────────────
function getDrugMeta(name) {
  const found = ALL_DRUGS.find(d => d.name === name);
  if (found) return { class: found.class, subclass: found.subclass, icon: found.icon };
  return { class: '', subclass: '', icon: '💊' };
}

// ─── Local search across UNIQUE_DRUGS + INDICATION_MAP ───────
function searchDrugsLocal(term) {
  if (!term || term.trim().length < 1) return [];
  const t = term.toLowerCase().trim();

  const nameMatches = UNIQUE_DRUGS.filter(d =>
    d.name.toLowerCase().includes(t) ||
    d.subclass.toLowerCase().includes(t) ||
    d.class.toLowerCase().includes(t)
  ).map(d => d.name);

  const indicationMatches = [];
  for (const entry of INDICATION_MAP) {
    if (entry.keywords.some(kw => kw.includes(t) || t.includes(kw))) {
      indicationMatches.push(...entry.drugs);
    }
  }

  const seen = new Set();
  const merged = [];
  for (const name of [...nameMatches, ...indicationMatches]) {
    if (!seen.has(name)) {
      seen.add(name);
      merged.push(name);
    }
  }
  return merged.slice(0, 60);
}

// ─── AI search fallback (streaming) ──────────────────────────
async function aiSearchDrugs(term, onResult, onError) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: `You are a clinical pharmacology database. 
When given a drug name, condition, class, or indication, return ONLY a JSON array of matching drug names (strings).
Return maximum 20 drugs. No preamble, no markdown, no explanation — only a valid JSON array.
Example output: ["Metformin","Glibenclamide (Glyburide)","Insulin Glargine (Lantus)"]`,
        messages: [{ role: 'user', content: `Find drugs matching: "${term}". Return ONLY a JSON array of drug names.` }],
      }),
    });

    const data = await response.json();
    const raw = data?.content?.[0]?.text || '[]';
    const clean = raw.replace(/```json|```/g, '').trim();
    const names = JSON.parse(clean);
    if (Array.isArray(names)) onResult(names);
    else onResult([]);
  } catch (err) {
    onError(err.message);
  }
}

// ─── Main Component ──────────────────────────────────────────
export default function DrugSearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiUsed, setAiUsed] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSearch = useCallback((val) => {
    setQuery(val);
    setAiUsed(false);

    if (!val.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }

    // 1️⃣ Instant local search
    const local = searchDrugsLocal(val);
    setResults(local);
    setSearched(true);

    // 2️⃣ If local results are weak (< 3), fall back to AI
    if (local.length < 3 && val.trim().length >= 3) {
      setAiLoading(true);
      aiSearchDrugs(
        val,
        (aiNames) => {
          setAiLoading(false);
          setAiUsed(true);
          // Merge AI results with local (AI first for better relevance)
          const combined = [...new Set([...aiNames, ...local])];
          setResults(combined.slice(0, 48));
        },
        () => setAiLoading(false)
      );
    }
  }, []);

  function handleQuick(name) {
    setQuery(name);
    const local = searchDrugsLocal(name);
    setResults(local);
    setSearched(true);
    setAiUsed(false);
  }

  function goToDrug(name) {
    navigate(`/drug/${encodeURIComponent(name)}`);
  }

  return (
    <div style={{ animation: 'fadeUp 0.3s ease both' }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes shimmer {
          0%{background-position:-400px 0} 100%{background-position:400px 0}
        }
        .ai-shimmer {
          background: linear-gradient(90deg,rgba(74,155,168,0.06) 25%,rgba(74,155,168,0.15) 50%,rgba(74,155,168,0.06) 75%);
          background-size: 400px 100%; animation: shimmer 1.2s infinite;
        }
      `}</style>

      {/* ── Search box ──────────────────────────────────────── */}
      <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          background: 'rgba(255,255,255,0.88)',
          border: '1.5px solid rgba(255,255,255,0.6)',
          borderRadius: 18, padding: '5px 5px 5px 20px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18)', backdropFilter: 'blur(20px)',
        }}>
          <span style={{ fontSize: 16, opacity: 0.5, marginRight: 10 }}>💊</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Search by name, class, condition, indication…"
            style={{
              flex: 1, background: 'transparent', border: 'none', color: '#1e2d2f',
              fontSize: 15, fontFamily: "'Times New Roman', serif", fontWeight: 700,
              padding: '13px 0', outline: 'none',
            }}
          />
          {/* AI loading badge */}
          {aiLoading && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(74,155,168,0.1)', borderRadius: 20,
              padding: '4px 12px', marginRight: 6,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4a9ba8', display: 'inline-block', animation: 'pulse 0.8s infinite' }} />
              <span style={{ fontSize: 11, color: '#4a9ba8', fontFamily: "'Fira Code', monospace", letterSpacing: 1 }}>AI</span>
            </div>
          )}
          {query && (
            <button onClick={() => { setQuery(''); setResults([]); setSearched(false); setAiUsed(false); inputRef.current?.focus(); }}
              style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#7a9ea4', padding: '0 10px' }}>
              ✕
            </button>
          )}
        </div>

        <div style={{ marginTop: 8, textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 1 }}>
          600+ drugs · 21 EMDEX categories · AI-powered search fallback
        </div>
      </div>

      {/* ── Browse by class ──────────────────────────────────── */}
      <DrugClassBrowse />

      {/* ── Quick chips (no results shown yet) ──────────────── */}
      {!searched && (
        <div style={{ marginTop: 18 }}>
          <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Quick search</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {QUICK_DRUGS.map(d => (
              <button key={d} onClick={() => handleQuick(d)} style={chipStyle}>{d}</button>
            ))}
          </div>

          <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 2, textTransform: 'uppercase', marginTop: 18, marginBottom: 10 }}>Search by condition</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {CONDITION_CHIPS.map(c => (
              <button key={c} onClick={() => handleSearch(c)} style={{ ...chipStyle, background: 'rgba(74,155,168,0.15)', borderColor: 'rgba(74,155,168,0.4)', color: '#1e3a3f' }}>{c}</button>
            ))}
          </div>
        </div>
      )}

      {/* ── Results count + AI badge ─────────────────────────── */}
      {searched && (
        <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", color: 'rgba(255,255,255,0.6)', letterSpacing: 2, textTransform: 'uppercase' }}>
            {results.length} drug{results.length !== 1 ? 's' : ''} found for "{query}"
          </span>
          {aiUsed && (
            <span style={{ fontSize: 10, background: 'rgba(74,155,168,0.15)', color: '#4a9ba8', border: '1px solid rgba(74,155,168,0.3)', borderRadius: 20, padding: '2px 10px', fontFamily: "'Fira Code', monospace" }}>
              ✨ AI-enhanced
            </span>
          )}
          {aiLoading && (
            <span className="ai-shimmer" style={{ fontSize: 10, color: '#4a9ba8', border: '1px solid rgba(74,155,168,0.2)', borderRadius: 20, padding: '2px 14px', fontFamily: "'Fira Code', monospace" }}>
              AI searching…
            </span>
          )}
        </div>
      )}

      {/* ── Drug cards grid ──────────────────────────────────── */}
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
                  borderTop: `3px solid ${meta.icon === '💊' ? '#4a9ba8' : '#8b6347'}`,
                  borderRadius: 16, padding: 20,
                  cursor: 'pointer', textAlign: 'left',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                  transition: 'all 0.2s',
                  animation: `fadeUp 0.3s ease ${idx * 0.02}s both`,
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

      {/* ── No results ───────────────────────────────────────── */}
      {searched && results.length === 0 && !aiLoading && (
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
