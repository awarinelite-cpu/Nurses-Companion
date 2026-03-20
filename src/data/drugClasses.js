// ============================================================
// drugClasses.js — EMDEX June 2023–May 2024 Complete Dataset
// 21 Drug Categories | 100+ Subclasses | 600+ Drugs
// ============================================================

export const DRUG_CLASSES = [

  // ─── 1: CNS DRUGS ───────────────────────────────────────────
  {
    id: 'cns', name: 'Central Nervous System (CNS) Drugs', icon: '🧠',
    emdex: '1',
    subclasses: [
      {
        name: 'Anxiolytics & Hypnotics',
        drugs: [
          'Diazepam', 'Lorazepam', 'Alprazolam', 'Clonazepam', 'Nitrazepam',
          'Temazepam', 'Triazolam', 'Chlordiazepoxide', 'Midazolam',
          'Zolpidem', 'Zopiclone', 'Buspirone', 'Hydroxyzine', 'Melatonin',
        ],
      },
      {
        name: 'Antipsychotics',
        drugs: [
          'Haloperidol', 'Chlorpromazine', 'Trifluoperazine', 'Fluphenazine',
          'Thioridazine', 'Perphenazine', 'Zuclopenthixol', 'Flupentixol',
          'Risperidone', 'Olanzapine', 'Quetiapine', 'Clozapine',
          'Aripiprazole', 'Amisulpride', 'Paliperidone', 'Ziprasidone',
          'Lurasidone', 'Asenapine', 'Brexpiprazole',
        ],
      },
      {
        name: 'Antidotes to Antipsychotic Drugs',
        drugs: [
          'Biperiden', 'Procyclidine', 'Trihexyphenidyl (Benzhexol)',
          'Benztropine', 'Orphenadrine', 'Promethazine',
        ],
      },
      {
        name: 'Tricyclic Antidepressants (TCAs)',
        drugs: [
          'Amitriptyline', 'Imipramine', 'Clomipramine', 'Nortriptyline',
          'Doxepin', 'Trimipramine', 'Dosulepin (Dothiepin)', 'Amoxapine',
        ],
      },
      {
        name: 'SSRIs',
        drugs: [
          'Fluoxetine', 'Sertraline', 'Paroxetine', 'Citalopram',
          'Escitalopram', 'Fluvoxamine',
        ],
      },
      {
        name: 'SNRIs & Other Antidepressants',
        drugs: [
          'Venlafaxine', 'Duloxetine', 'Desvenlafaxine', 'Mirtazapine',
          'Trazodone', 'Bupropion', 'Agomelatine', 'Reboxetine',
          'Moclobemide',
        ],
      },
      {
        name: 'Mood Stabilisers (Bipolar)',
        drugs: ['Lithium', 'Sodium Valproate', 'Carbamazepine', 'Lamotrigine', 'Quetiapine'],
      },
      {
        name: 'Drugs for OCD & Panic Attacks',
        drugs: [
          'Sertraline', 'Fluoxetine', 'Paroxetine', 'Fluvoxamine',
          'Clomipramine', 'Venlafaxine', 'Buspirone',
        ],
      },
      {
        name: 'Anti-Parkinson Drugs',
        drugs: [
          'Levodopa-Carbidopa (Sinemet)', 'Levodopa', 'Carbidopa',
          'Pramipexole', 'Ropinirole', 'Rotigotine', 'Amantadine',
          'Selegiline', 'Rasagiline', 'Entacapone', 'Tolcapone',
          'Benztropine', 'Trihexyphenidyl (Benzhexol)', 'Biperiden',
          'Propranolol', 'Primidone',
        ],
      },
      {
        name: 'Anticonvulsants / Antiepileptics',
        drugs: [
          'Phenytoin', 'Carbamazepine', 'Oxcarbazepine', 'Sodium Valproate',
          'Levetiracetam', 'Lamotrigine', 'Topiramate', 'Gabapentin',
          'Pregabalin', 'Phenobarbitone', 'Primidone', 'Diazepam',
          'Lorazepam', 'Clonazepam', 'Ethosuximide', 'Vigabatrin',
          'Tiagabine', 'Felbamate', 'Lacosamide', 'Perampanel',
          'Zonisamide', 'Acetazolamide', 'Pyridoxine (for neonatal seizures)',
        ],
      },
      {
        name: 'Non-Opioid Analgesics & Antipyretics',
        drugs: [
          'Paracetamol (Acetaminophen)', 'Aspirin', 'Ibuprofen', 'Diclofenac',
          'Naproxen', 'Indomethacin', 'Piroxicam', 'Mefenamic Acid',
          'Ketorolac', 'Nefopam', 'Phenazone', 'Metamizole (Dipyrone)',
        ],
      },
      {
        name: 'Opioid Analgesics',
        drugs: [
          'Morphine', 'Codeine', 'Tramadol', 'Fentanyl', 'Oxycodone',
          'Hydromorphone', 'Pethidine (Meperidine)', 'Buprenorphine',
          'Methadone', 'Nalbuphine', 'Pentazocine', 'Tapentadol',
          'Dihydrocodeine',
        ],
      },
      {
        name: 'Drugs Used in Migraine',
        drugs: [
          'Sumatriptan', 'Rizatriptan', 'Zolmitriptan', 'Naratriptan',
          'Almotriptan', 'Eletriptan', 'Ergotamine', 'Dihydroergotamine',
          'Methysergide', 'Metoclopramide', 'Domperidone', 'Prochlorperazine',
          'Propranolol', 'Amitriptyline', 'Topiramate', 'Valproate',
          'Pizotifen', 'Flunarizine',
        ],
      },
      {
        name: 'Anti-Dementia Drugs',
        drugs: [
          'Donepezil', 'Rivastigmine', 'Galantamine', 'Memantine',
        ],
      },
      {
        name: 'ADHD Drugs',
        drugs: [
          'Methylphenidate', 'Dextroamphetamine', 'Lisdexamfetamine',
          'Atomoxetine', 'Guanfacine', 'Clonidine',
        ],
      },
      {
        name: 'Substance Dependence Programs',
        drugs: [
          'Methadone', 'Buprenorphine', 'Naltrexone', 'Naloxone',
          'Disulfiram', 'Acamprosate', 'Nicotine Replacement Therapy',
          'Varenicline', 'Bupropion',
        ],
      },
      {
        name: 'Antivertigo Preparations',
        drugs: [
          'Betahistine', 'Cinnarizine', 'Promethazine', 'Meclizine',
          'Cyclizine', 'Dimenhydrinate', 'Prochlorperazine',
        ],
      },
      {
        name: 'Other CNS Drugs',
        drugs: [
          'Caffeine', 'Modafinil', 'Piracetam', 'Baclofen', 'Dantrolene',
        ],
      },
    ],
  },

  // ─── 2: MUSCULOSKELETAL & JOINT ─────────────────────────────
  {
    id: 'msk', name: 'Musculoskeletal & Joint Diseases', icon: '🦴',
    emdex: '2',
    subclasses: [
      {
        name: 'Traditional NSAIDs (tNSAIDs)',
        drugs: [
          'Ibuprofen', 'Diclofenac', 'Naproxen', 'Indomethacin', 'Piroxicam',
          'Mefenamic Acid', 'Ketoprofen', 'Aceclofenac', 'Flurbiprofen',
          'Sulindac', 'Tolmetin', 'Phenylbutazone', 'Oxaprozin',
        ],
      },
      {
        name: 'COX-2 Inhibitors (Coxibs)',
        drugs: [
          'Celecoxib', 'Etoricoxib', 'Meloxicam', 'Nimesulide', 'Parecoxib',
          'Lumiracoxib',
        ],
      },
      {
        name: 'DMARDs (Non-Biologics)',
        drugs: [
          'Methotrexate', 'Hydroxychloroquine', 'Sulfasalazine',
          'Leflunomide', 'Azathioprine', 'Gold Sodium Thiomalate',
          'Penicillamine', 'Chloroquine',
        ],
      },
      {
        name: 'DMARDs (Biologics)',
        drugs: [
          'Infliximab', 'Adalimumab', 'Etanercept', 'Certolizumab',
          'Golimumab', 'Rituximab', 'Abatacept', 'Tocilizumab',
          'Secukinumab', 'Ixekizumab', 'Ustekinumab', 'Baricitinib',
          'Tofacitinib',
        ],
      },
      {
        name: 'Corticosteroids (MSK)',
        drugs: [
          'Prednisolone', 'Methylprednisolone', 'Dexamethasone',
          'Triamcinolone', 'Betamethasone',
        ],
      },
      {
        name: 'Gout & Hyperuricaemia',
        drugs: [
          'Colchicine', 'Allopurinol', 'Febuxostat', 'Probenecid',
          'Rasburicase', 'Benzbromarone', 'Indomethacin',
        ],
      },
      {
        name: 'Centrally Acting Muscle Relaxants',
        drugs: [
          'Baclofen', 'Tizanidine', 'Cyclobenzaprine', 'Methocarbamol',
          'Carisoprodol', 'Chlorzoxazone', 'Diazepam', 'Mephenesin',
          'Tolperisone',
        ],
      },
      {
        name: 'Peripherally Acting Muscle Relaxants & Cholinesterase Inhibitors',
        drugs: [
          'Suxamethonium', 'Vecuronium', 'Rocuronium', 'Atracurium',
          'Cisatracurium', 'Pancuronium', 'Mivacurium',
          'Neostigmine', 'Pyridostigmine', 'Edrophonium', 'Sugammadex',
        ],
      },
      {
        name: 'Drugs Affecting Bone Structure',
        drugs: [
          'Alendronate', 'Risedronate', 'Ibandronate', 'Zoledronic Acid',
          'Denosumab', 'Teriparatide', 'Strontium Ranelate',
          'Calcium Carbonate', 'Calcium Gluconate', 'Cholecalciferol (Vit D3)',
          'Ergocalciferol (Vit D2)', 'Calcitriol', 'Alfacalcidol',
          'Raloxifene',
        ],
      },
      {
        name: 'Topical Anti-Rheumatic Drugs',
        drugs: [
          'Diclofenac Gel', 'Ketoprofen Gel', 'Piroxicam Gel',
          'Ibuprofen Gel', 'Capsaicin Cream', 'Methyl Salicylate',
          'Camphor', 'Menthol',
        ],
      },
      {
        name: 'Enzymes & Combination Preparations',
        drugs: [
          'Chymotrypsin', 'Serratiopeptidase', 'Bromelain',
          'Trypsin-Chymotrypsin', 'Hyaluronidase',
        ],
      },
      {
        name: 'Other MSK Drugs',
        drugs: [
          'Glucosamine', 'Chondroitin', 'Diacerhein', 'Hyaluronic Acid',
          'Colchicine (tophi)', 'Cinchocaine',
        ],
      },
    ],
  },

  // ─── 3: ANAESTHESIA ─────────────────────────────────────────
  {
    id: 'anaes', name: 'Drugs Used in Anaesthesia', icon: '💉',
    emdex: '3',
    subclasses: [
      {
        name: 'IV General Anaesthetic Agents',
        drugs: [
          'Propofol', 'Ketamine', 'Thiopentone (Thiopental)',
          'Etomidate', 'Methohexital',
        ],
      },
      {
        name: 'Volatile Inhalational Agents',
        drugs: [
          'Isoflurane', 'Sevoflurane', 'Desflurane', 'Halothane', 'Enflurane',
        ],
      },
      {
        name: 'Inhalational Gases',
        drugs: ['Nitrous Oxide', 'Oxygen', 'Entonox (N2O + O2)'],
      },
      {
        name: 'Preoperative Medication & Sedation',
        drugs: [
          'Midazolam', 'Diazepam', 'Lorazepam', 'Atropine', 'Glycopyrrolate',
          'Hyoscine (Scopolamine)', 'Droperidol', 'Promethazine',
          'Ondansetron', 'Metoclopramide', 'Ranitidine', 'Omeprazole',
          'Fentanyl', 'Morphine', 'Ketamine (sub-anaesthetic)',
        ],
      },
      {
        name: 'Anaesthetic Muscle Relaxants',
        drugs: [
          'Suxamethonium', 'Rocuronium', 'Vecuronium', 'Atracurium',
          'Cisatracurium', 'Pancuronium', 'Mivacurium',
        ],
      },
      {
        name: 'Cholinesterase Inhibitors (Reversal)',
        drugs: ['Neostigmine', 'Pyridostigmine', 'Edrophonium', 'Sugammadex'],
      },
      {
        name: 'Local Anaesthetics',
        drugs: [
          'Lidocaine (Lignocaine)', 'Bupivacaine', 'Levobupivacaine',
          'Ropivacaine', 'Prilocaine', 'Mepivacaine', 'Benzocaine',
          'Tetracaine (Amethocaine)', 'Cocaine (topical ENT)',
          'Procaine', 'Articaine',
        ],
      },
      {
        name: 'Analgesics & Opioid Antagonists (Anaesthesia)',
        drugs: [
          'Fentanyl', 'Remifentanil', 'Alfentanil', 'Sufentanil',
          'Morphine', 'Naloxone', 'Naltrexone',
        ],
      },
      {
        name: 'Blood Substitutes & IV Fluids',
        drugs: [
          'Normal Saline (0.9% NaCl)', 'Hartmann\'s Solution (Ringer\'s Lactate)',
          'Dextrose 5%', 'Dextrose 10%', 'Dextrose Saline',
          'Gelatin (Gelofusine)', 'Hydroxyethyl Starch (HES)',
          'Albumin 4.5%', 'Albumin 20%', 'Dextran',
        ],
      },
      {
        name: 'Other Anaesthesia Agents',
        drugs: [
          'Dexmedetomidine', 'Clonidine', 'Magnesium Sulphate (anaesthesia)',
          'Adrenaline (with local)', 'Hyaluronidase',
        ],
      },
    ],
  },

  // ─── 4: GASTROINTESTINAL ────────────────────────────────────
  {
    id: 'gi', name: 'Gastrointestinal Diseases', icon: '🫃',
    emdex: '4',
    subclasses: [
      {
        name: 'Antacids',
        drugs: [
          'Magnesium Trisilicate', 'Aluminium Hydroxide', 'Calcium Carbonate',
          'Sodium Bicarbonate', 'Magnesium Hydroxide (Milk of Magnesia)',
          'Hydrotalcite', 'Almasilate', 'Sucralfate',
        ],
      },
      {
        name: 'H2-Receptor Antagonists (H2RAs)',
        drugs: ['Ranitidine', 'Famotidine', 'Cimetidine', 'Nizatidine'],
      },
      {
        name: 'Proton Pump Inhibitors (PPIs)',
        drugs: [
          'Omeprazole', 'Pantoprazole', 'Lansoprazole', 'Esomeprazole',
          'Rabeprazole', 'Dexlansoprazole',
        ],
      },
      {
        name: 'Prostaglandins (GI)',
        drugs: ['Misoprostol', 'Enprostil'],
      },
      {
        name: 'H. Pylori Eradication',
        drugs: [
          'Amoxicillin + Clarithromycin + Omeprazole (Triple Therapy)',
          'Metronidazole + Omeprazole + Clarithromycin',
          'Bismuth Subcitrate', 'Tetracycline (H.pylori)',
          'Levofloxacin (H.pylori)',
        ],
      },
      {
        name: 'Other Antiulcer Medicines',
        drugs: ['Sucralfate', 'Carbenoxolone', 'Bismuth Subcitrate'],
      },
      {
        name: 'Antispasmodics',
        drugs: [
          'Hyoscine Butylbromide (Buscopan)', 'Mebeverine', 'Peppermint Oil',
          'Dicyclomine', 'Propantheline', 'Alverine',
        ],
      },
      {
        name: 'Oral Rehydration',
        drugs: ['Oral Rehydration Salts (ORS)', 'Oral Rehydration Solution (WHO)'],
      },
      {
        name: 'Anti-Diarrhoeal Drugs',
        drugs: [
          'Loperamide', 'Codeine Phosphate', 'Diphenoxylate + Atropine',
          'Bismuth Subsalicylate', 'Racecadotril (Acetorphan)',
        ],
      },
      {
        name: 'Adsorbents & Bulk-Forming Agents',
        drugs: [
          'Kaolin', 'Pectin', 'Activated Charcoal', 'Ispaghula Husk (Psyllium)',
          'Methylcellulose',
        ],
      },
      {
        name: 'Anti-Diarrhoeal Microorganisms (Probiotics)',
        drugs: [
          'Saccharomyces boulardii', 'Lactobacillus acidophilus',
          'Bifidobacterium', 'Lacteol Fort',
        ],
      },
      {
        name: 'Stimulant Laxatives',
        drugs: [
          'Bisacodyl', 'Senna (Sennosides)', 'Sodium Picosulphate',
          'Glycerol Suppositories', 'Castor Oil',
        ],
      },
      {
        name: 'Osmotic Laxatives',
        drugs: [
          'Lactulose', 'Macrogol (Polyethylene Glycol / Movicol)',
          'Magnesium Hydroxide', 'Magnesium Sulphate', 'Sorbitol',
          'Phosphate Enema',
        ],
      },
      {
        name: 'Lubricant Laxatives',
        drugs: ['Liquid Paraffin', 'Docusate Sodium'],
      },
      {
        name: 'Antiemetic Drugs',
        drugs: [
          'Metoclopramide', 'Domperidone', 'Ondansetron', 'Granisetron',
          'Tropisetron', 'Palonosetron', 'Prochlorperazine',
          'Promethazine', 'Cyclizine', 'Meclizine', 'Hyoscine',
          'Aprepitant', 'Dexamethasone (antiemetic)', 'Haloperidol (antiemetic)',
        ],
      },
      {
        name: 'Anti-Haemorrhoidal Drugs',
        drugs: [
          'Lignocaine + Hydrocortisone (Proctosedyl)',
          'Cinchocaine + Hydrocortisone', 'Bismuth Subgallate',
          'Peru Balsam', 'Zinc Oxide (suppositories)',
        ],
      },
      {
        name: 'GI Anti-Inflammatory Drugs',
        drugs: [
          'Mesalazine (5-ASA)', 'Sulfasalazine', 'Olsalazine', 'Balsalazide',
          'Prednisolone (IBD)', 'Budesonide (IBD)',
        ],
      },
      {
        name: 'Bile & Liver Therapy',
        drugs: [
          'Ursodeoxycholic Acid (UDCA)', 'Chenodeoxycholic Acid',
          'Cholestyramine', 'Silymarin (Milk Thistle)',
        ],
      },
      {
        name: 'GI Miscellaneous',
        drugs: [
          'Simethicone (Wind-eze)', 'Dimeticone', 'Pancreatin (Creon)',
          'Peppermint Oil capsules', 'Alvimopan',
        ],
      },
    ],
  },

  // ─── 5: CARDIOVASCULAR ──────────────────────────────────────
  {
    id: 'cvs', name: 'Cardiovascular System Drugs', icon: '❤️',
    emdex: '5',
    subclasses: [
      {
        name: 'Drugs for Heart Failure',
        drugs: [
          'Furosemide (Frusemide)', 'Spironolactone', 'Eplerenone',
          'Enalapril', 'Lisinopril', 'Ramipril', 'Captopril',
          'Carvedilol', 'Bisoprolol', 'Metoprolol',
          'Digoxin', 'Milrinone', 'Dobutamine',
          'Sacubitril/Valsartan (Entresto)', 'Ivabradine',
          'Empagliflozin', 'Dapagliflozin',
        ],
      },
      {
        name: 'Low-Ceiling Diuretics (Thiazides)',
        drugs: [
          'Hydrochlorothiazide', 'Chlorthalidone', 'Indapamide',
          'Bendroflumethiazide', 'Metolazone', 'Xipamide',
        ],
      },
      {
        name: 'High-Ceiling (Loop) Diuretics',
        drugs: [
          'Furosemide (Frusemide)', 'Bumetanide', 'Torsemide',
          'Ethacrynic Acid',
        ],
      },
      {
        name: 'Potassium-Sparing Diuretics',
        drugs: [
          'Spironolactone', 'Eplerenone', 'Amiloride', 'Triamterene',
          'Finerenone',
        ],
      },
      {
        name: 'Osmotic Diuretics',
        drugs: ['Mannitol', 'Urea', 'Glycerol (Glycerin)'],
      },
      {
        name: 'Beta-Blockers (Cardioselective)',
        drugs: [
          'Atenolol', 'Bisoprolol', 'Metoprolol', 'Nebivolol',
          'Betaxolol', 'Acebutolol',
        ],
      },
      {
        name: 'Beta-Blockers (Non-Selective)',
        drugs: [
          'Propranolol', 'Carvedilol', 'Labetalol', 'Nadolol',
          'Sotalol', 'Pindolol', 'Timolol',
        ],
      },
      {
        name: 'Vasodilators',
        drugs: [
          'Hydralazine', 'Minoxidil', 'Sodium Nitroprusside',
          'Isosorbide Dinitrate', 'Isosorbide Mononitrate',
          'Glyceryl Trinitrate (GTN/Nitroglycerin)', 'Diazoxide',
        ],
      },
      {
        name: 'Alpha-Adrenoceptor Blockers',
        drugs: ['Prazosin', 'Doxazosin', 'Terazosin', 'Alfuzosin', 'Tamsulosin'],
      },
      {
        name: 'Centrally Acting Antihypertensives',
        drugs: [
          'Methyldopa', 'Clonidine', 'Moxonidine', 'Rilmenidine', 'Guanfacine',
        ],
      },
      {
        name: 'ACE Inhibitors',
        drugs: [
          'Lisinopril', 'Enalapril', 'Ramipril', 'Captopril', 'Perindopril',
          'Fosinopril', 'Trandolapril', 'Quinapril', 'Benazepril', 'Moexipril',
        ],
      },
      {
        name: 'Angiotensin Receptor Blockers (ARBs)',
        drugs: [
          'Losartan', 'Valsartan', 'Candesartan', 'Irbesartan',
          'Olmesartan', 'Telmisartan', 'Eprosartan', 'Azilsartan',
        ],
      },
      {
        name: 'Calcium Channel Blockers',
        drugs: [
          'Amlodipine', 'Nifedipine', 'Felodipine', 'Lercanidipine',
          'Lacidipine', 'Isradipine', 'Nicardipine', 'Nimodipine',
          'Verapamil', 'Diltiazem',
        ],
      },
      {
        name: 'Anti-Arrhythmic Drugs',
        drugs: [
          'Adenosine', 'Amiodarone', 'Flecainide', 'Propafenone',
          'Lidocaine (IV)', 'Mexiletine', 'Procainamide',
          'Digoxin', 'Verapamil', 'Diltiazem', 'Sotalol',
          'Ibutilide', 'Dofetilide', 'Ivabradine', 'Dronedarone',
        ],
      },
      {
        name: 'Anti-Anginal Drugs',
        drugs: [
          'Glyceryl Trinitrate (GTN)', 'Isosorbide Dinitrate',
          'Isosorbide Mononitrate', 'Atenolol', 'Metoprolol',
          'Bisoprolol', 'Amlodipine', 'Nifedipine', 'Verapamil',
          'Diltiazem', 'Nicorandil', 'Ranolazine', 'Ivabradine',
          'Trimetazidine',
        ],
      },
      {
        name: 'Anticoagulants',
        drugs: [
          'Warfarin', 'Heparin (Unfractionated)', 'Enoxaparin (LMWH)',
          'Dalteparin (LMWH)', 'Tinzaparin (LMWH)', 'Fondaparinux',
          'Rivaroxaban', 'Apixaban', 'Edoxaban', 'Dabigatran',
          'Bivalirudin', 'Argatroban', 'Lepirudin',
        ],
      },
      {
        name: 'Antiplatelet Drugs',
        drugs: [
          'Aspirin (low dose)', 'Clopidogrel', 'Ticagrelor', 'Prasugrel',
          'Dipyridamole', 'Ticlopidine', 'Cilostazol',
          'Abciximab', 'Eptifibatide', 'Tirofiban',
        ],
      },
      {
        name: 'Fibrinolytic (Thrombolytic) Drugs',
        drugs: [
          'Streptokinase', 'Alteplase (tPA)', 'Reteplase', 'Tenecteplase',
          'Urokinase',
        ],
      },
      {
        name: 'Statins (HMG CoA Reductase Inhibitors)',
        drugs: [
          'Atorvastatin', 'Rosuvastatin', 'Simvastatin', 'Pravastatin',
          'Fluvastatin', 'Lovastatin', 'Pitavastatin',
        ],
      },
      {
        name: 'Fibrates & Other Lipid-Regulating Drugs',
        drugs: [
          'Fenofibrate', 'Gemfibrozil', 'Bezafibrate', 'Ciprofibrate',
          'Ezetimibe', 'Omega-3 Fatty Acids', 'Evolocumab', 'Alirocumab',
          'Cholestyramine', 'Colestipol', 'Colesevelam', 'Nicotinic Acid',
        ],
      },
      {
        name: 'Vasopressors & Inotropes',
        drugs: [
          'Noradrenaline (Norepinephrine)', 'Adrenaline (Epinephrine)',
          'Dopamine', 'Dobutamine', 'Vasopressin', 'Terlipressin',
          'Phenylephrine', 'Milrinone', 'Levosimendan',
          'Metaraminol',
        ],
      },
      {
        name: 'Drugs for Hypotension',
        drugs: ['Fludrocortisone', 'Midodrine', 'Ephedrine'],
      },
      {
        name: 'Vasoprotectives',
        drugs: [
          'Diosmin', 'Hesperidin', 'Rutoside', 'Troxerutin',
          'Horse Chestnut Extract',
        ],
      },
      {
        name: 'Electrolyte Solutions for Cardioplegia',
        drugs: [
          'Potassium Chloride (cardioplegia)', 'Bretschneider Solution',
          'Del Nido Cardioplegia',
        ],
      },
    ],
  },

  // ─── 6: BLOOD & NUTRITION ───────────────────────────────────
  {
    id: 'blood', name: 'Drugs Affecting Blood & Nutrition', icon: '🩸',
    emdex: '6',
    subclasses: [
      {
        name: 'Iron Deficiency & Megaloblastic Anaemia',
        drugs: [
          'Ferrous Sulphate', 'Ferrous Gluconate', 'Ferrous Fumarate',
          'Ferric Carboxymaltose', 'Iron Sucrose (IV)', 'Iron Dextran (IV)',
          'Folic Acid', 'Cyanocobalamin (B12)', 'Hydroxocobalamin',
          'Methylcobalamin',
        ],
      },
      {
        name: 'Hypoplastic, Haemolytic & Renal Anaemias',
        drugs: [
          'Erythropoietin (EPO)', 'Darbepoetin Alfa', 'Methoxy Polyethylene Glycol-Epoetin Beta',
          'Danazol', 'Oxymetholone', 'Prednisolone (haemolytic)',
        ],
      },
      {
        name: 'Anticoagulants (Haematology)',
        drugs: [
          'Warfarin', 'Heparin (Unfractionated)', 'Enoxaparin (LMWH)',
          'Rivaroxaban', 'Apixaban', 'Dabigatran', 'Fondaparinux',
        ],
      },
      {
        name: 'Reversal of Anticoagulation',
        drugs: [
          'Protamine Sulphate', 'Phytomenadione (Vitamin K1)',
          'Idarucizumab (Praxbind)', 'Andexanet Alfa', 'Ciraparantag',
          'Fresh Frozen Plasma (FFP)', 'Prothrombin Complex Concentrate (PCC)',
        ],
      },
      {
        name: 'Antifibrinolytics & Haemostatics',
        drugs: [
          'Tranexamic Acid', 'Aminocaproic Acid', 'Ethamsylate',
          'Aprotinin',
        ],
      },
      {
        name: 'Antiplatelet (Haematology)',
        drugs: ['Aspirin (low dose)', 'Clopidogrel', 'Ticagrelor', 'Dipyridamole'],
      },
      {
        name: 'Blood Coagulation Factors',
        drugs: [
          'Factor VIII Concentrate', 'Factor IX Concentrate',
          'Factor VIIa (NovoSeven)', 'Factor XIII',
          'Von Willebrand Factor Concentrate', 'Desmopressin (DDAVP)',
        ],
      },
      {
        name: 'Fibrinolytic Drugs (Blood)',
        drugs: ['Streptokinase', 'Alteplase', 'Tenecteplase', 'Urokinase'],
      },
      {
        name: 'Other Haemostatic Agents',
        drugs: ['Thrombin (topical)', 'Fibrin Glue', 'Gelatin Sponge', 'Oxidised Cellulose'],
      },
      {
        name: 'Blood Products & Plasma Substitutes',
        drugs: [
          'Whole Blood', 'Packed Red Blood Cells (PRBC)', 'Platelets',
          'Fresh Frozen Plasma (FFP)', 'Cryoprecipitate',
          'Albumin 4.5%', 'Albumin 20%', 'Gelatin (Gelofusine)',
          'Hydroxyethyl Starch (HES)', 'Dextran',
          'Human Normal Immunoglobulin (IVIG)',
        ],
      },
      {
        name: 'Fat-Soluble Vitamins',
        drugs: [
          'Vitamin A (Retinol)', 'Vitamin D2 (Ergocalciferol)',
          'Vitamin D3 (Cholecalciferol)', 'Calcitriol', 'Alfacalcidol',
          'Vitamin E (Tocopherol)', 'Vitamin K1 (Phytomenadione)',
          'Vitamin K2 (Menaquinone)',
        ],
      },
      {
        name: 'Water-Soluble Vitamins',
        drugs: [
          'Vitamin C (Ascorbic Acid)', 'Vitamin B1 (Thiamine)',
          'Vitamin B2 (Riboflavin)', 'Vitamin B3 (Niacin/Nicotinamide)',
          'Vitamin B5 (Pantothenic Acid)', 'Vitamin B6 (Pyridoxine)',
          'Vitamin B7 (Biotin)', 'Folic Acid (B9)',
          'Cyanocobalamin (B12)', 'Hydroxocobalamin',
          'Multivitamin Preparations',
        ],
      },
      {
        name: 'Minerals',
        drugs: [
          'Calcium Carbonate', 'Calcium Gluconate', 'Magnesium Sulphate',
          'Magnesium Oxide', 'Zinc Sulphate', 'Potassium Chloride',
          'Potassium Citrate', 'Sodium Chloride', 'Phosphate Supplements',
          'Selenium', 'Copper', 'Manganese', 'Iodine',
        ],
      },
      {
        name: 'Appetite Stimulants',
        drugs: [
          'Cyproheptadine', 'Megestrol Acetate', 'Dronabinol',
          'Mirtazapine (appetite)', 'Zinc Sulphate (appetite)',
        ],
      },
      {
        name: 'Oral Electrolyte Solutions',
        drugs: [
          'Oral Rehydration Salts (ORS)', 'Oral Potassium',
          'Sodium Bicarbonate Oral',
        ],
      },
      {
        name: 'Parenteral Electrolyte Solutions',
        drugs: [
          'Normal Saline (0.9% NaCl)', 'Hartmann\'s / Ringer\'s Lactate',
          'Dextrose 5%', 'Dextrose 10%', 'Dextrose 50%',
          'Half-Normal Saline (0.45% NaCl)', 'Dextrose Saline',
          'Potassium Chloride (IV)', 'Sodium Bicarbonate (IV)',
          'Magnesium Sulphate (IV)', 'Calcium Gluconate (IV)',
          'Calcium Chloride (IV)',
        ],
      },
      {
        name: 'Parenteral Nutrition',
        drugs: [
          'Total Parenteral Nutrition (TPN)', 'Intralipid (IV Fat Emulsion)',
          'Amino Acid Solutions (Vamin)', 'Glutamine (IV)',
        ],
      },
      {
        name: 'Peritoneal Dialysis Solutions',
        drugs: [
          'Peritoneal Dialysis Solution 1.36%', 'Peritoneal Dialysis Solution 2.27%',
          'Peritoneal Dialysis Solution 3.86%', 'Icodextrin (Extraneal)',
        ],
      },
    ],
  },

  // ─── 7: RESPIRATORY ─────────────────────────────────────────
  {
    id: 'resp', name: 'Respiratory Tract Drugs', icon: '🫁',
    emdex: '7',
    subclasses: [
      {
        name: 'Short-Acting Beta-2 Agonists (SABAs)',
        drugs: ['Salbutamol (Albuterol)', 'Terbutaline', 'Fenoterol'],
      },
      {
        name: 'Long-Acting Beta-2 Agonists (LABAs)',
        drugs: ['Salmeterol', 'Formoterol', 'Vilanterol', 'Indacaterol'],
      },
      {
        name: 'Short-Acting Muscarinic Antagonists (SAMAs)',
        drugs: ['Ipratropium (SAMA)'],
      },
      {
        name: 'Long-Acting Muscarinic Antagonists (LAMAs)',
        drugs: ['Tiotropium (LAMA)', 'Aclidinium', 'Glycopyrronium', 'Umeclidinium'],
      },
      {
        name: 'Inhaled Corticosteroids (ICS)',
        drugs: [
          'Beclometasone', 'Budesonide', 'Fluticasone', 'Ciclesonide',
          'Mometasone', 'Flunisolide',
        ],
      },
      {
        name: 'Combination Inhalers',
        drugs: [
          'Salbutamol + Ipratropium (Combivent)',
          'Salmeterol + Fluticasone (Seretide)',
          'Formoterol + Budesonide (Symbicort)',
          'Formoterol + Beclometasone (Foster)',
          'Vilanterol + Fluticasone (Relvar)',
          'Tiotropium + Olodaterol (Spiolto)',
          'Umeclidinium + Vilanterol (Anoro)',
        ],
      },
      {
        name: 'Prophylactic / Mast Cell Stabilisers',
        drugs: [
          'Sodium Cromoglicate', 'Nedocromil Sodium', 'Montelukast',
          'Zafirlukast',
        ],
      },
      {
        name: 'Xanthines',
        drugs: ['Theophylline', 'Aminophylline'],
      },
      {
        name: 'Other Systemic Asthma/COPD Drugs',
        drugs: [
          'Prednisolone (oral)', 'Methylprednisolone (IV)',
          'Omalizumab', 'Mepolizumab', 'Benralizumab', 'Dupilumab',
          'Roflumilast', 'Azithromycin (COPD prophylaxis)',
        ],
      },
      {
        name: 'Expectorants & Mucolytics',
        drugs: [
          'Bromhexine', 'Ambroxol', 'Carbocisteine (Mucodyne)',
          'Acetylcysteine (NAC)', 'Guaifenesin', 'Ipecacuanha',
          'Dornase Alfa (Pulmozyme)', 'Hypertonic Saline (nebulised)',
        ],
      },
      {
        name: 'Cough Suppressants',
        drugs: [
          'Codeine (Linctus)', 'Dextromethorphan', 'Pholcodine',
          'Benzonatate', 'Noscapine',
        ],
      },
      {
        name: 'Other Respiratory Drugs',
        drugs: [
          'Surfactant (Poractant Alfa / Curosurf)',
          'Caffeine Citrate (neonatal apnoea)',
          'Sildenafil (pulmonary hypertension)',
          'Bosentan', 'Ambrisentan', 'Riociguat',
          'Epoprostenol (Flolan)', 'Iloprost',
          'Doxapram (respiratory stimulant)',
          'Acetylcysteine (IV for paracetamol OD)',
        ],
      },
    ],
  },

  // ─── 8: ANTIALLERGICS & ANAPHYLAXIS ─────────────────────────
  {
    id: 'allergy', name: 'Antiallergics & Anaphylaxis Drugs', icon: '🤧',
    emdex: '8',
    subclasses: [
      {
        name: 'First-Generation Antihistamines',
        drugs: [
          'Chlorphenamine (Chlorpheniramine)', 'Promethazine', 'Diphenhydramine',
          'Hydroxyzine', 'Cyclizine', 'Meclizine', 'Clemastine',
          'Cyproheptadine', 'Alimemazine (Trimeprazine)',
        ],
      },
      {
        name: 'Second-Generation Antihistamines',
        drugs: [
          'Loratadine', 'Cetirizine', 'Fexofenadine', 'Desloratadine',
          'Levocetirizine', 'Bilastine', 'Rupatadine', 'Mizolastine',
          'Ebastine', 'Azelastine',
        ],
      },
      {
        name: 'Sympathomimetics (Allergy & Anaphylaxis)',
        drugs: [
          'Adrenaline (Epinephrine) 1:1000',
          'Adrenaline Auto-Injector (EpiPen)',
          'Ephedrine', 'Pseudoephedrine', 'Phenylephrine',
          'Oxymetazoline', 'Xylometazoline',
        ],
      },
      {
        name: 'Corticosteroids (Allergy)',
        drugs: [
          'Prednisolone', 'Hydrocortisone (IV)', 'Dexamethasone',
          'Methylprednisolone',
          'Beclometasone (nasal)', 'Fluticasone (nasal)', 'Mometasone (nasal)',
          'Budesonide (nasal)',
        ],
      },
    ],
  },

  // ─── 9: ANTI-INFECTIVES ─────────────────────────────────────
  {
    id: 'infective', name: 'Anti-Infective Drugs', icon: '🦠',
    emdex: '9',
    subclasses: [
      {
        name: 'Penicillins',
        drugs: [
          'Amoxicillin', 'Ampicillin', 'Flucloxacillin', 'Cloxacillin',
          'Co-Amoxiclav (Amoxicillin-Clavulanate)', 'Piperacillin-Tazobactam',
          'Benzylpenicillin (Penicillin G)', 'Phenoxymethylpenicillin (Penicillin V)',
          'Procaine Benzylpenicillin', 'Benzathine Benzylpenicillin',
          'Temocillin', 'Pivmecillinam',
        ],
      },
      {
        name: 'Cephalosporins',
        drugs: [
          'Cefalexin (1st Gen)', 'Cefradine (1st Gen)', 'Cefadroxil (1st Gen)',
          'Cefuroxime (2nd Gen)', 'Cefaclor (2nd Gen)',
          'Ceftriaxone (3rd Gen)', 'Cefotaxime (3rd Gen)',
          'Ceftazidime (3rd Gen)', 'Cefixime (3rd Gen)',
          'Cefpodoxime (3rd Gen)', 'Cefdinir (3rd Gen)',
          'Cefepime (4th Gen)', 'Ceftaroline (5th Gen)',
          'Ceftolozane-Tazobactam', 'Ceftazidime-Avibactam',
        ],
      },
      {
        name: 'Other Beta-Lactams (Carbapenems & Monobactams)',
        drugs: [
          'Meropenem', 'Imipenem-Cilastatin', 'Ertapenem', 'Doripenem',
          'Aztreonam',
        ],
      },
      {
        name: 'Chloramphenicol',
        drugs: ['Chloramphenicol (systemic)', 'Chloramphenicol Eye Drops'],
      },
      {
        name: 'Quinolones & Fluoroquinolones',
        drugs: [
          'Ciprofloxacin', 'Norfloxacin', 'Ofloxacin', 'Levofloxacin',
          'Moxifloxacin', 'Nalidixic Acid', 'Nitrofurantoin',
        ],
      },
      {
        name: 'Tetracyclines',
        drugs: [
          'Tetracycline', 'Doxycycline', 'Minocycline', 'Oxytetracycline',
          'Tigecycline',
        ],
      },
      {
        name: 'Macrolides',
        drugs: [
          'Azithromycin', 'Clarithromycin', 'Erythromycin', 'Roxithromycin',
          'Spiramycin', 'Fidaxomicin',
        ],
      },
      {
        name: 'Aminoglycosides',
        drugs: [
          'Gentamicin', 'Amikacin', 'Tobramycin', 'Netilmicin',
          'Streptomycin', 'Kanamycin', 'Neomycin',
        ],
      },
      {
        name: 'Nitroimidazoles',
        drugs: ['Metronidazole', 'Tinidazole', 'Ornidazole', 'Secnidazole'],
      },
      {
        name: 'Sulphonamides & Trimethoprim',
        drugs: [
          'Co-Trimoxazole (Trimethoprim + Sulfamethoxazole)',
          'Sulfamethoxazole', 'Trimethoprim', 'Sulfadiazine',
          'Silver Sulfadiazine (topical)', 'Sulfadoxine-Pyrimethamine (SP)',
        ],
      },
      {
        name: 'Lincosamides',
        drugs: ['Clindamycin', 'Lincomycin'],
      },
      {
        name: 'Glycopeptides & Others',
        drugs: [
          'Vancomycin', 'Teicoplanin', 'Daptomycin', 'Linezolid',
          'Tedizolid', 'Rifaximin', 'Spectinomycin', 'Furazolidone',
          'Fosfomycin', 'Nitrofurantoin', 'Colistin (Polymyxin E)',
          'Polymyxin B',
        ],
      },
      {
        name: 'Antileprosy Drugs',
        drugs: ['Dapsone', 'Clofazimine', 'Rifampicin'],
      },
      {
        name: 'Antituberculosis Drugs',
        drugs: [
          'Isoniazid (INH)', 'Rifampicin', 'Pyrazinamide', 'Ethambutol',
          'Streptomycin', 'Rifabutin', 'Rifapentine',
          'Bedaquiline', 'Delamanid', 'Linezolid (TB)',
          'Capreomycin', 'Cycloserine', 'Ethionamide', 'Para-Aminosalicylic Acid (PAS)',
          'Levofloxacin (TB)', 'Moxifloxacin (TB)',
        ],
      },
      {
        name: 'Systemic Antifungal Drugs',
        drugs: [
          'Fluconazole', 'Itraconazole', 'Voriconazole', 'Posaconazole',
          'Isavuconazole', 'Amphotericin B (deoxycholate)',
          'Liposomal Amphotericin B', 'Nystatin (systemic)',
          'Caspofungin', 'Micafungin', 'Anidulafungin',
          'Flucytosine', 'Griseofulvin', 'Terbinafine (systemic)',
        ],
      },
      {
        name: 'Antimalarial Drugs (ACTs)',
        drugs: [
          'Artemether-Lumefantrine (Coartem)', 'Artesunate-Amodiaquine',
          'Artesunate-Mefloquine', 'Dihydroartemisinin-Piperaquine (DHAP)',
          'Artesunate-Pyronaridine',
        ],
      },
      {
        name: 'Antimalarial Drugs (Severe Malaria)',
        drugs: [
          'Artesunate (IV/IM)', 'Quinine (IV)', 'Quinine + Doxycycline',
          'Quinidine Gluconate',
        ],
      },
      {
        name: 'Antimalarial Drugs (Prophylaxis & Others)',
        drugs: [
          'Chloroquine', 'Mefloquine', 'Atovaquone-Proguanil (Malarone)',
          'Primaquine', 'Tafenoquine', 'Doxycycline (malaria prophylaxis)',
          'Sulfadoxine-Pyrimethamine (SP / Fansidar)',
        ],
      },
      {
        name: 'Antiprotozoal (Amoeba, Giardia, Trichomonas)',
        drugs: [
          'Metronidazole', 'Tinidazole', 'Secnidazole', 'Diloxanide Furoate',
          'Paromomycin', 'Iodoquinol', 'Nitazoxanide',
        ],
      },
      {
        name: 'Antileishmanial Drugs',
        drugs: [
          'Sodium Stibogluconate (Pentostam)', 'Meglumine Antimoniate',
          'Miltefosine', 'Amphotericin B (Leishmania)',
          'Pentamidine', 'Paromomycin (Leishmania)',
        ],
      },
      {
        name: 'Antitrypanosomal Drugs',
        drugs: [
          'Suramin', 'Melarsoprol', 'Eflornithine', 'Nifurtimox',
          'Pentamidine', 'Benznidazole',
        ],
      },
      {
        name: 'Antipneumocystis & Antitoxoplasma',
        drugs: [
          'Co-Trimoxazole (PCP prophylaxis/treatment)', 'Pentamidine (nebulised)',
          'Atovaquone', 'Dapsone + Pyrimethamine', 'Pyrimethamine + Sulfadiazine',
          'Clindamycin + Pyrimethamine',
        ],
      },
      {
        name: 'Intestinal Anthelmintics',
        drugs: [
          'Albendazole', 'Mebendazole', 'Praziquantel', 'Pyrantel',
          'Levamisole', 'Ivermectin', 'Niclosamide', 'Oxfendazole',
          'Thiabendazole',
        ],
      },
      {
        name: 'Antifilarials',
        drugs: [
          'Diethylcarbamazine (DEC)', 'Ivermectin', 'Albendazole',
          'Doxycycline (Wolbachia)',
        ],
      },
      {
        name: 'Trematode (Fluke) & Schistosomiasis',
        drugs: ['Praziquantel', 'Oxamniquine', 'Triclabendazole'],
      },
      {
        name: 'Antiviral (Herpes & CMV)',
        drugs: [
          'Aciclovir (Acyclovir)', 'Valaciclovir', 'Famciclovir',
          'Ganciclovir', 'Valganciclovir', 'Foscarnet', 'Cidofovir',
        ],
      },
      {
        name: 'Antiviral (Hepatitis)',
        drugs: [
          'Tenofovir (TDF)', 'Entecavir', 'Lamivudine (3TC)',
          'Adefovir', 'Telbivudine',
          'Sofosbuvir', 'Ledipasvir-Sofosbuvir (Harvoni)',
          'Sofosbuvir-Velpatasvir (Epclusa)',
          'Glecaprevir-Pibrentasvir (Maviret)',
          'Ribavirin', 'Peginterferon Alfa',
        ],
      },
      {
        name: 'Neuraminidase Inhibitors (Influenza)',
        drugs: ['Oseltamivir (Tamiflu)', 'Zanamivir', 'Baloxavir', 'Peramivir'],
      },
      {
        name: 'Antiretroviral (ARV) — NRTIs',
        drugs: [
          'Tenofovir (TDF)', 'Tenofovir Alafenamide (TAF)',
          'Lamivudine (3TC)', 'Emtricitabine (FTC)',
          'Zidovudine (AZT)', 'Abacavir (ABC)', 'Stavudine (d4T)',
          'Didanosine (ddI)',
        ],
      },
      {
        name: 'Antiretroviral (ARV) — NNRTIs',
        drugs: [
          'Efavirenz (EFV)', 'Nevirapine (NVP)', 'Rilpivirine',
          'Etravirine', 'Doravirine',
        ],
      },
      {
        name: 'Antiretroviral (ARV) — Protease Inhibitors',
        drugs: [
          'Lopinavir/Ritonavir (LPV/r)', 'Atazanavir/Ritonavir',
          'Darunavir/Ritonavir', 'Ritonavir (boosting)',
          'Cobicistat (boosting)', 'Fosamprenavir', 'Tipranavir',
        ],
      },
      {
        name: 'Antiretroviral (ARV) — Integrase Inhibitors (INSTIs)',
        drugs: [
          'Dolutegravir (DTG)', 'Raltegravir', 'Elvitegravir',
          'Bictegravir', 'Cabotegravir',
        ],
      },
      {
        name: 'Antiretroviral Fixed-Dose Combinations',
        drugs: [
          'TDF + 3TC + EFV (1st line adult)',
          'TDF + 3TC + DTG',
          'TDF + FTC + EFV (Atripla)',
          'TDF + FTC + Rilpivirine (Complera)',
          'ABC + 3TC + DTG (Triumeq)',
          'Bictegravir + TAF + FTC (Biktarvy)',
          'Cabotegravir + Rilpivirine LA (injectable)',
        ],
      },
      {
        name: 'HIV Opportunistic Infection Prevention',
        drugs: [
          'Co-Trimoxazole (prophylaxis)', 'Isoniazid (TB preventive therapy)',
          'Fluconazole (crypto prophylaxis)', 'Azithromycin (MAC prophylaxis)',
          'Aciclovir (HSV prophylaxis)',
        ],
      },
      {
        name: 'Other Antivirals',
        drugs: [
          'Ribavirin (RSV)', 'Remdesivir', 'Molnupiravir',
          'Nirmatrelvir-Ritonavir (Paxlovid)',
          'Lopinavir-Ritonavir (COVID)', 'Interferons',
        ],
      },
    ],
  },

  // ─── 10: ENDOCRINE ──────────────────────────────────────────
  {
    id: 'endo', name: 'Endocrine System Drugs', icon: '⚗️',
    emdex: '10',
    subclasses: [
      {
        name: 'Rapid-Acting Insulin Analogues',
        drugs: ['Insulin Lispro (Humalog)', 'Insulin Aspart (NovoRapid)', 'Insulin Glulisine (Apidra)'],
      },
      {
        name: 'Short-Acting Insulins',
        drugs: ['Insulin Regular (Actrapid)', 'Soluble Human Insulin (Humulin R)'],
      },
      {
        name: 'Intermediate-Acting Insulins',
        drugs: ['Insulin NPH (Insulatard)', 'Isophane Insulin (Humulin N)'],
      },
      {
        name: 'Long-Acting Insulin Analogues',
        drugs: [
          'Insulin Glargine (Lantus)', 'Insulin Detemir (Levemir)',
          'Insulin Degludec (Tresiba)',
        ],
      },
      {
        name: 'Premixed Insulins',
        drugs: [
          'Biphasic Isophane 30/70 (Mixtard)',
          'Biphasic Aspart 30 (NovoMix 30)',
          'Lispro Mix 25 / 50 (Humalog Mix)',
        ],
      },
      {
        name: 'Sulfonylureas',
        drugs: [
          'Glibenclamide (Glyburide)', 'Glimepiride', 'Gliclazide',
          'Glipizide', 'Tolbutamide', 'Chlorpropamide',
        ],
      },
      {
        name: 'Biguanides',
        drugs: ['Metformin'],
      },
      {
        name: 'Thiazolidinediones (TZDs)',
        drugs: ['Pioglitazone', 'Rosiglitazone'],
      },
      {
        name: 'DPP-4 Inhibitors (Gliptins)',
        drugs: [
          'Sitagliptin', 'Vildagliptin', 'Saxagliptin',
          'Linagliptin', 'Alogliptin',
        ],
      },
      {
        name: 'Alpha-Glucosidase Inhibitors',
        drugs: ['Acarbose', 'Miglitol', 'Voglibose'],
      },
      {
        name: 'SGLT-2 Inhibitors',
        drugs: [
          'Empagliflozin', 'Dapagliflozin', 'Canagliflozin',
          'Ertugliflozin',
        ],
      },
      {
        name: 'GLP-1 Receptor Agonists',
        drugs: [
          'Semaglutide', 'Liraglutide', 'Exenatide', 'Dulaglutide',
          'Albiglutide', 'Tirzepatide',
        ],
      },
      {
        name: 'Hypoglycaemia Management',
        drugs: [
          'Glucagon', 'Dextrose 50% (IV)', 'Dextrose 10% (IV)',
          'Oral Glucose', 'Diazoxide',
        ],
      },
      {
        name: 'Thyroid Hormones',
        drugs: [
          'Levothyroxine (T4)', 'Liothyronine (T3)',
          'Combined T3/T4 (Armour Thyroid)',
        ],
      },
      {
        name: 'Antithyroid Drugs',
        drugs: [
          'Carbimazole', 'Propylthiouracil (PTU)',
          'Potassium Iodide', 'Lugol\'s Iodine',
          'Radioactive Iodine (I-131)',
        ],
      },
      {
        name: 'Corticosteroids (Endocrine)',
        drugs: [
          'Prednisolone', 'Hydrocortisone', 'Dexamethasone',
          'Methylprednisolone', 'Betamethasone', 'Fludrocortisone',
          'Triamcinolone', 'Deflazacort',
        ],
      },
      {
        name: 'Oestrogens',
        drugs: [
          'Ethinylestradiol', 'Conjugated Oestrogens', 'Oestradiol (HRT)',
          'Oestriol',
        ],
      },
      {
        name: 'Progestogens',
        drugs: [
          'Progesterone', 'Medroxyprogesterone Acetate', 'Norethisterone',
          'Levonorgestrel', 'Desogestrel', 'Dydrogesterone',
          'Megestrol Acetate',
        ],
      },
      {
        name: 'Androgens',
        drugs: [
          'Testosterone (IM/patch/gel)', 'Testosterone Undecanoate',
          'Danazol', 'Oxandrolone',
        ],
      },
      {
        name: 'Pituitary & Hypothalamic Hormones',
        drugs: [
          'Clomifene (Anti-oestrogen/Ovulation inducer)',
          'Letrozole (Ovulation induction)',
          'FSH (Follitropin Alpha/Beta)',
          'LH (Luteinising Hormone)',
          'hCG (Human Chorionic Gonadotropin)',
          'Gonadotropin-Releasing Hormone (GnRH)',
          'Leuprorelin (GnRH analogue)', 'Buserelin', 'Goserelin',
          'Triptorelin', 'Cetrorelix', 'Ganirelix',
          'Oxytocin', 'Vasopressin (ADH)', 'Desmopressin (DDAVP)',
          'Growth Hormone (Somatropin)',
          'Octreotide (Somatostatin analogue)',
          'Lanreotide', 'Pasireotide',
          'ACTH (Tetracosactide)',
          'Thyrotropin Alfa (TSH)',
        ],
      },
      {
        name: 'Other Endocrine Drugs',
        drugs: [
          'Cabergoline', 'Bromocriptine',
          'Metyrapone', 'Mitotane', 'Ketoconazole (Cushing\'s)',
          'Mifepristone (Cushing\'s)', 'Pasireotide (Cushing\'s)',
          'Cinacalcet', 'Parathyroid Hormone (PTH)',
          'Pegvisomant (acromegaly)',
        ],
      },
    ],
  },

  // ─── 11: REPRODUCTIVE & URINARY ─────────────────────────────
  {
    id: 'repro', name: 'Reproductive Health, Perinatal & Urinary', icon: '👶',
    emdex: '11',
    subclasses: [
      {
        name: 'Uterotonics',
        drugs: [
          'Oxytocin', 'Ergometrine', 'Carbetocin',
          'Misoprostol', 'Syntometrine (Oxytocin + Ergometrine)',
          'Carboprost', 'Dinoprostone (PGE2)',
        ],
      },
      {
        name: 'Tocolytics (Antioxytocics)',
        drugs: [
          'Nifedipine (tocolytic)', 'Salbutamol (tocolytic)',
          'Ritodrine', 'Terbutaline (tocolytic)',
          'Atosiban', 'Indomethacin (tocolytic)',
          'Magnesium Sulphate (neuroprotection)',
        ],
      },
      {
        name: 'Nausea & Vomiting in Pregnancy',
        drugs: [
          'Metoclopramide', 'Promethazine', 'Ondansetron',
          'Cyclizine', 'Doxylamine + Pyridoxine (Diclegis)',
          'Ginger', 'Meclizine',
        ],
      },
      {
        name: 'Genital Anti-Infectives (Antifungal)',
        drugs: [
          'Clotrimazole (vaginal)', 'Miconazole (vaginal)',
          'Nystatin (vaginal)', 'Fluconazole (oral)',
          'Econazole (vaginal)', 'Terconazole',
        ],
      },
      {
        name: 'Genital Anti-Infectives (Other)',
        drugs: [
          'Metronidazole (vaginal)', 'Clindamycin (vaginal)',
          'Benzathine Benzylpenicillin (syphilis)',
          'Doxycycline (STI)', 'Azithromycin (STI)',
          'Ceftriaxone (gonorrhoea)', 'Aciclovir (genital herpes)',
        ],
      },
      {
        name: 'Oral Hormonal Contraceptives',
        drugs: [
          'Combined Oral Contraceptive Pill (COCP)',
          'Ethinylestradiol + Levonorgestrel',
          'Ethinylestradiol + Norethisterone',
          'Ethinylestradiol + Desogestrel',
          'Ethinylestradiol + Gestodene',
          'Ethinylestradiol + Drospirenone',
          'Progesterone-Only Pill (POP)', 'Desogestrel (POP)',
          'Norethisterone (POP)',
        ],
      },
      {
        name: 'Injectable & Implantable Contraceptives',
        drugs: [
          'Medroxyprogesterone (Depo-Provera IM)',
          'Norethisterone Enanthate (NET-EN)',
          'Levonorgestrel Implant (Jadelle/Norplant)',
          'Etonogestrel Implant (Implanon)',
        ],
      },
      {
        name: 'Emergency Contraception',
        drugs: [
          'Emergency Contraception (Levonorgestrel)',
          'Ulipristal Acetate (EllaOne)', 'Copper IUD (post-coital)',
        ],
      },
      {
        name: 'Intrauterine Contraceptives',
        drugs: ['Copper IUD', 'Levonorgestrel IUS (Mirena)'],
      },
      {
        name: 'Drugs for Genito-Urinary Disorders',
        drugs: [
          'Tamsulosin (BPH)', 'Alfuzosin (BPH)', 'Finasteride (BPH)',
          'Dutasteride (BPH)', 'Solifenacin (OAB)', 'Oxybutynin (OAB)',
          'Tolterodine (OAB)', 'Mirabegron (OAB)', 'Darifenacin (OAB)',
          'Sildenafil (ED)', 'Tadalafil (ED)', 'Vardenafil (ED)',
          'Avanafil (ED)',
          'Phenazopyridine (urological pain)',
          'Hyoscine Butylbromide (urological spasm)',
        ],
      },
    ],
  },

  // ─── 12: ANTINEOPLASTIC & IMMUNOSUPPRESSIVE ──────────────────
  {
    id: 'onco', name: 'Antineoplastic, Immunosuppressive & Palliative', icon: '🎗️',
    emdex: '12',
    subclasses: [
      {
        name: 'Alkylating Agents',
        drugs: [
          'Cyclophosphamide', 'Ifosfamide', 'Chlorambucil',
          'Melphalan', 'Busulfan', 'Carmustine (BCNU)', 'Lomustine (CCNU)',
          'Temozolomide', 'Bendamustine', 'Dacarbazine',
        ],
      },
      {
        name: 'Cytotoxic Antibiotics',
        drugs: [
          'Doxorubicin', 'Epirubicin', 'Daunorubicin', 'Idarubicin',
          'Bleomycin', 'Mitomycin C', 'Actinomycin D', 'Mitoxantrone',
        ],
      },
      {
        name: 'Antimetabolites',
        drugs: [
          'Methotrexate', '5-Fluorouracil (5-FU)', 'Capecitabine',
          'Cytarabine (Ara-C)', 'Gemcitabine', 'Pemetrexed',
          'Fludarabine', 'Cladribine', 'Clofarabine', 'Mercaptopurine',
          'Thioguanine',
        ],
      },
      {
        name: 'Vinca Alkaloids & Etoposide',
        drugs: [
          'Vincristine', 'Vinblastine', 'Vinorelbine', 'Vindesine',
          'Etoposide', 'Teniposide',
        ],
      },
      {
        name: 'Platinum Compounds',
        drugs: ['Cisplatin', 'Carboplatin', 'Oxaliplatin'],
      },
      {
        name: 'Taxanes',
        drugs: ['Paclitaxel', 'Docetaxel', 'Cabazitaxel', 'Nab-Paclitaxel (Abraxane)'],
      },
      {
        name: 'Topoisomerase Inhibitors',
        drugs: ['Irinotecan', 'Topotecan'],
      },
      {
        name: 'Monoclonal Antibodies (Oncology)',
        drugs: [
          'Trastuzumab (Herceptin)', 'Bevacizumab (Avastin)',
          'Rituximab', 'Cetuximab', 'Panitumumab', 'Pertuzumab',
          'Atezolizumab', 'Pembrolizumab (Keytruda)', 'Nivolumab',
          'Ipilimumab', 'Durvalumab', 'Avelumab',
        ],
      },
      {
        name: 'Protein Kinase Inhibitors',
        drugs: [
          'Imatinib (Gleevec)', 'Dasatinib', 'Nilotinib', 'Ponatinib',
          'Gefitinib', 'Erlotinib', 'Afatinib', 'Osimertinib',
          'Sorafenib', 'Sunitinib', 'Pazopanib', 'Regorafenib',
          'Vemurafenib', 'Dabrafenib', 'Trametinib',
          'Ibrutinib', 'Acalabrutinib', 'Idelalisib',
        ],
      },
      {
        name: 'Proteasome Inhibitors',
        drugs: ['Bortezomib', 'Carfilzomib', 'Ixazomib'],
      },
      {
        name: 'Hormone Therapy (Cancer)',
        drugs: [
          'Tamoxifen', 'Fulvestrant', 'Anastrozole', 'Letrozole',
          'Exemestane', 'Leuprorelin', 'Goserelin', 'Bicalutamide',
          'Enzalutamide', 'Abiraterone', 'Flutamide', 'Medroxyprogesterone',
          'Megestrol Acetate', 'Diethylstilboestrol (DES)',
        ],
      },
      {
        name: 'Immunosuppressive Drugs',
        drugs: [
          'Azathioprine', 'Ciclosporin (Cyclosporine)', 'Tacrolimus',
          'Mycophenolate Mofetil (MMF)', 'Sirolimus (Rapamycin)',
          'Everolimus', 'Methotrexate (immunosuppression)',
          'Prednisolone (immunosuppression)',
          'Basiliximab', 'Daclizumab', 'Belatacept',
        ],
      },
      {
        name: 'Calcineurin Inhibitors',
        drugs: ['Ciclosporin', 'Tacrolimus', 'Pimecrolimus (topical)', 'Tacrolimus (topical)'],
      },
      {
        name: 'TNF-Alpha Inhibitors',
        drugs: [
          'Infliximab', 'Adalimumab', 'Etanercept',
          'Certolizumab', 'Golimumab',
        ],
      },
      {
        name: 'Immunostimulants',
        drugs: [
          'Filgrastim (G-CSF)', 'Lenograstim', 'Pegfilgrastim',
          'Erythropoietin', 'Interferon Alpha', 'Interferon Beta',
          'Interferon Gamma', 'Thalidomide', 'Lenalidomide',
          'BCG (bladder cancer)', 'Aldesleukin (IL-2)',
        ],
      },
      {
        name: 'Supportive Care / Palliative',
        drugs: [
          'Mesna (Uromitexan)', 'Leucovorin (Folinic Acid)',
          'Granisetron', 'Ondansetron', 'Aprepitant',
          'Dexamethasone (antiemetic oncology)',
          'Allopurinol (tumour lysis)', 'Rasburicase',
          'Zoledronic Acid (bone mets)', 'Denosumab (bone mets)',
          'Morphine (palliative)', 'Fentanyl (palliative patch)',
          'Ketamine (palliative)', 'Midazolam (palliative)',
        ],
      },
    ],
  },

  // ─── 13: OPHTHALMOLOGICAL ───────────────────────────────────
  {
    id: 'eye', name: 'Ophthalmological Preparations', icon: '👁️',
    emdex: '13',
    subclasses: [
      {
        name: 'Ophthalmic Anti-Infective Drugs',
        drugs: [
          'Chloramphenicol Eye Drops', 'Gentamicin Eye Drops',
          'Tobramycin Eye Drops', 'Ciprofloxacin Eye Drops',
          'Ofloxacin Eye Drops', 'Levofloxacin Eye Drops',
          'Moxifloxacin Eye Drops', 'Fusidic Acid Eye Drops',
          'Azithromycin Eye Drops', 'Neomycin Eye Drops',
          'Aciclovir Eye Ointment', 'Ganciclovir Eye Gel',
          'Natamycin Eye Drops', 'Voriconazole Eye Drops',
        ],
      },
      {
        name: 'Ophthalmic Anti-Inflammatory / Anti-Allergic',
        drugs: [
          'Dexamethasone Eye Drops', 'Prednisolone Eye Drops',
          'Fluorometholone Eye Drops', 'Betamethasone Eye Drops',
          'Ketorolac Eye Drops', 'Diclofenac Eye Drops',
          'Nepafenac Eye Drops', 'Bromfenac Eye Drops',
          'Olopatadine Eye Drops', 'Ketotifen Eye Drops',
          'Azelastine Eye Drops', 'Sodium Cromoglicate Eye Drops',
          'Lodoxamide Eye Drops',
        ],
      },
      {
        name: 'Mydriatics & Cycloplegics',
        drugs: [
          'Atropine Eye Drops', 'Cyclopentolate', 'Tropicamide',
          'Homatropine', 'Phenylephrine Eye Drops',
        ],
      },
      {
        name: 'Antiglaucoma — Prostaglandin Analogues',
        drugs: [
          'Latanoprost', 'Travoprost', 'Bimatoprost', 'Tafluprost',
          'Unoprostone',
        ],
      },
      {
        name: 'Antiglaucoma — Beta-Blockers (Eye)',
        drugs: [
          'Timolol Eye Drops', 'Betaxolol Eye Drops',
          'Levobunolol Eye Drops', 'Carteolol Eye Drops',
        ],
      },
      {
        name: 'Antiglaucoma — Carbonic Anhydrase Inhibitors',
        drugs: [
          'Dorzolamide', 'Brinzolamide', 'Acetazolamide (systemic glaucoma)',
        ],
      },
      {
        name: 'Antiglaucoma — Alpha-2 Agonists',
        drugs: ['Brimonidine', 'Apraclonidine'],
      },
      {
        name: 'Antiglaucoma — Miotics',
        drugs: ['Pilocarpine Eye Drops', 'Carbachol Eye Drops'],
      },
      {
        name: 'Fixed-Combination Glaucoma Drugs',
        drugs: [
          'Timolol + Dorzolamide (Cosopt)',
          'Timolol + Latanoprost (Xalacom)',
          'Timolol + Brimonidine',
          'Timolol + Travoprost (DuoTrav)',
        ],
      },
      {
        name: 'Ophthalmic Local Anaesthetics',
        drugs: [
          'Tetracaine (Amethocaine) Eye Drops',
          'Proxymetacaine Eye Drops', 'Oxybuprocaine Eye Drops',
        ],
      },
      {
        name: 'Miscellaneous Eye Preparations',
        drugs: [
          'Artificial Tears (Hypromellose)', 'Carbomer Gel',
          'Sodium Hyaluronate Eye Drops', 'Polyvinyl Alcohol Eye Drops',
          'Lubricating Eye Ointment',
          'Ranibizumab (Lucentis — anti-VEGF)',
          'Bevacizumab (off-label anti-VEGF)',
          'Aflibercept (Eylea — anti-VEGF)',
          'Verteporfin (photodynamic therapy)',
          'Acetylcholine (intraocular)', 'Fluorescein (diagnostic)',
        ],
      },
    ],
  },

  // ─── 14: ENT DRUGS ──────────────────────────────────────────
  {
    id: 'ent', name: 'Ear, Nose & Throat (ENT) Drugs', icon: '👂',
    emdex: '14',
    subclasses: [
      {
        name: 'Ear — Anti-Infective & Anti-Inflammatory',
        drugs: [
          'Ciprofloxacin Ear Drops', 'Ofloxacin Ear Drops',
          'Gentamicin Ear Drops', 'Chloramphenicol Ear Drops',
          'Neomycin + Dexamethasone (Otosporin)',
          'Betamethasone + Neomycin Ear Drops',
          'Clotrimazole Ear Drops (otomycosis)',
          'Acetic Acid Ear Drops',
        ],
      },
      {
        name: 'Ear Wax Removal',
        drugs: [
          'Sodium Bicarbonate Ear Drops', 'Olive Oil Ear Drops',
          'Urea Hydrogen Peroxide (Exterol)',
          'Docusate Sodium (Waxsol)',
          'Arachis Oil Ear Drops',
        ],
      },
      {
        name: 'Intranasal Corticosteroids',
        drugs: [
          'Fluticasone Nasal Spray', 'Mometasone Nasal Spray',
          'Budesonide Nasal Spray', 'Beclometasone Nasal Spray',
          'Triamcinolone Nasal Spray', 'Flunisolide Nasal Spray',
          'Ciclesonide Nasal Spray',
        ],
      },
      {
        name: 'Nasal Decongestants',
        drugs: [
          'Oxymetazoline Nasal Drops', 'Xylometazoline Nasal Spray',
          'Naphazoline', 'Tramazoline',
          'Pseudoephedrine (systemic)', 'Phenylephrine (systemic)',
        ],
      },
      {
        name: 'Essential Oils & Nasal Combination Products',
        drugs: [
          'Menthol + Eucalyptus Inhalation', 'Olbas Oil',
          'Nasonex (mometasone + antihistamine)',
        ],
      },
      {
        name: 'Cauterisation & Throat Drugs',
        drugs: [
          'Silver Nitrate (cauterisation)', 'Trichloroacetic Acid',
          'Benzydamine Mouthwash/Spray (Difflam)',
          'Cetylpyridinium Lozenges', 'Amylmetacresol + Dichlorobenzyl (Strepsils)',
          'Lidocaine Throat Spray',
        ],
      },
    ],
  },

  // ─── 15: DERMATOLOGICAL ─────────────────────────────────────
  {
    id: 'derm', name: 'Dermatological Drugs', icon: '🧴',
    emdex: '15',
    subclasses: [
      {
        name: 'Topical Antibacterial Preparations',
        drugs: [
          'Mupirocin (Bactroban)', 'Fusidic Acid (cream)',
          'Neomycin + Bacitracin', 'Silver Sulfadiazine',
          'Chlortetracycline Ointment', 'Clindamycin Gel/Lotion',
          'Erythromycin Topical', 'Tetracycline Topical',
          'Bacitracin', 'Metronidazole Gel',
        ],
      },
      {
        name: 'Topical Antifungal Preparations',
        drugs: [
          'Clotrimazole Cream', 'Miconazole Cream', 'Terbinafine Cream',
          'Econazole Cream', 'Ketoconazole Cream/Shampoo',
          'Nystatin Cream', 'Griseofulvin (topical)',
          'Tolnaftate', 'Undecylenic Acid',
        ],
      },
      {
        name: 'Scabicides & Pediculicides',
        drugs: [
          'Permethrin 5% (scabies)', 'Benzyl Benzoate',
          'Ivermectin Lotion', 'Malathion Lotion',
          'Permethrin 1% (head lice)', 'Pyrethrin',
        ],
      },
      {
        name: 'Topical Antiviral Preparations',
        drugs: [
          'Aciclovir 5% Cream', 'Penciclovir Cream',
          'Podophyllotoxin (warts)', 'Imiquimod (warts/BCC)',
        ],
      },
      {
        name: 'Topical Anti-Inflammatory & Antipruritic',
        drugs: [
          'Hydrocortisone Cream 1%', 'Clobetasone Butyrate 0.05%',
          'Betamethasone Valerate 0.1%', 'Mometasone Furoate 0.1%',
          'Clobetasol Propionate 0.05%', 'Fluocinolone Acetonide',
          'Triamcinolone Acetonide (topical)', 'Diflucortolone Valerate',
          'Calamine Lotion', 'Menthol in Aqueous Cream',
          'Pramoxine', 'Doxepin Cream',
        ],
      },
      {
        name: 'Astringents, Antiseptics & Protectants',
        drugs: [
          'Povidone Iodine', 'Chlorhexidine Gluconate',
          'Hydrogen Peroxide 3%', 'Zinc Oxide', 'Calamine',
          'Aqueous Cream', 'Emulsifying Ointment', 'White Soft Paraffin',
          'Liquid Paraffin', 'Glycerol (Glycerin)',
        ],
      },
      {
        name: 'Acne Preparations',
        drugs: [
          'Benzoyl Peroxide', 'Tretinoin (Retinoic Acid)',
          'Adapalene', 'Tazarotene', 'Clindamycin Gel',
          'Erythromycin + Zinc (Zineryt)', 'Doxycycline (oral acne)',
          'Isotretinoin (oral)', 'Azelaic Acid', 'Salicylic Acid',
          'Niacinamide (topical)',
        ],
      },
      {
        name: 'Psoriasis Preparations',
        drugs: [
          'Coal Tar', 'Dithranol', 'Calcipotriol', 'Tacalcitol',
          'Betamethasone + Calcipotriol (Dovobet)',
          'Methotrexate (systemic psoriasis)',
          'Ciclosporin (psoriasis)', 'Acitretin',
          'Secukinumab', 'Ixekizumab', 'Adalimumab (psoriasis)',
          'Ustekinumab', 'Guselkumab', 'Risankizumab',
        ],
      },
      {
        name: 'Wart Preparations',
        drugs: [
          'Salicylic Acid (warts)', 'Podophyllotoxin',
          'Imiquimod 5%', 'Cryotherapy (liquid nitrogen)',
        ],
      },
      {
        name: 'Other Dermatologicals',
        drugs: [
          'Amorolfine Nail Lacquer', 'Ciclopirox Nail Lacquer',
          'Tazarotene (gel)', 'Minoxidil 2%/5% (hair loss)',
          'Finasteride (oral — alopecia)',
          'Dapsone Gel (acne)', 'Ivermectin Cream (rosacea)',
          'Metronidazole Gel (rosacea)',
          'Wound Dressings (hydrocolloid, alginate)',
        ],
      },
    ],
  },

  // ─── 16: DISINFECTANTS & ANTISEPTICS ────────────────────────
  {
    id: 'disinfect', name: 'Disinfectants & Antiseptics', icon: '🧹',
    emdex: '16',
    subclasses: [
      { name: 'Alcohols', drugs: ['Isopropyl Alcohol 70%', 'Ethanol 70%', 'Industrial Methylated Spirit'] },
      { name: 'Aldehydes', drugs: ['Glutaraldehyde 2%', 'Formaldehyde', 'Ortho-Phthalaldehyde (OPA)'] },
      { name: 'Cationic Surfactants', drugs: ['Benzalkonium Chloride', 'Cetrimide', 'Benzethonium Chloride'] },
      { name: 'Chlorhexidine Salts', drugs: ['Chlorhexidine Gluconate', 'Chlorhexidine + Cetrimide (Savlon)', 'Chlorhexidine Surgical Scrub'] },
      { name: 'Chlorine Compounds', drugs: ['Sodium Hypochlorite (Milton, Jik)', 'Chlorinated Lime', 'Sodium Dichloroisocyanurate'] },
      { name: 'Dyes', drugs: ['Crystal Violet (Gentian Violet)', 'Brilliant Green', 'Acriflavine'] },
      { name: 'Hydrogen Peroxide', drugs: ['Hydrogen Peroxide 3%', 'Hydrogen Peroxide 6%', 'Vaporised H2O2 (VHP)'] },
      { name: 'Iodine Compounds', drugs: ['Povidone Iodine (Betadine)', 'Iodine Tincture', 'Iodine + KI Solution'] },
      { name: 'Phenols & Related', drugs: ['Phenol', 'Cresol', 'Lysol', 'Thymol', 'Triclosan'] },
      { name: 'Potassium Permanganate', drugs: ['Potassium Permanganate 0.01% Solution'] },
    ],
  },

  // ─── 17: IMMUNOLOGICAL PRODUCTS & VACCINES ──────────────────
  {
    id: 'vaccine', name: 'Immunological Products & Vaccines', icon: '💉',
    emdex: '17',
    subclasses: [
      {
        name: 'Vaccines for Universal Immunisation (EPI)',
        drugs: [
          'BCG Vaccine', 'OPV (Oral Polio Vaccine)',
          'IPV (Inactivated Polio Vaccine)',
          'DTP (Diphtheria-Tetanus-Pertussis)',
          'DPT-HepB-Hib (Pentavalent)',
          'Hepatitis B Vaccine', 'Hepatitis A Vaccine',
          'Haemophilus influenzae type b (Hib) Vaccine',
          'Measles Vaccine', 'Measles-Mumps-Rubella (MMR)',
          'Pneumococcal Conjugate Vaccine (PCV)',
          'HPV Vaccine (Cervarix / Gardasil)',
          'Rotavirus Vaccine (Rotarix)',
          'Yellow Fever Vaccine',
          'Meningococcal Conjugate Vaccine (MenA)',
          'Typhoid Conjugate Vaccine (TCV)',
          'Varicella (Chickenpox) Vaccine',
          'COVID-19 Vaccines (various)',
        ],
      },
      {
        name: 'Vaccines for Specific Groups',
        drugs: [
          'Cholera Vaccine', 'Influenza Vaccine (annual)',
          'Rabies Vaccine', 'Japanese Encephalitis Vaccine',
          'Dengue Vaccine (Dengvaxia)',
          'Tick-Borne Encephalitis Vaccine',
          'Anthrax Vaccine', 'Smallpox Vaccine (Vaccinia)',
          'Rubella Vaccine', 'Mumps Vaccine',
        ],
      },
      {
        name: 'Sera & Immunoglobulins (Passive Immunity)',
        drugs: [
          'Human Normal Immunoglobulin (IVIG)',
          'Anti-D Immunoglobulin (RhoGAM)',
          'Hepatitis B Immunoglobulin (HBIG)',
          'Rabies Immunoglobulin (RIG)',
          'Tetanus Immunoglobulin (TIG)',
          'Varicella-Zoster Immunoglobulin (VZIG)',
          'Antivenom (Snake Bite — polyvalent)',
          'Antivenom (Scorpion)',
          'Diphtheria Antitoxin',
          'Botulinum Antitoxin',
          'Immune sera (various)',
        ],
      },
    ],
  },

  // ─── 18: DENTAL FORMULARY ───────────────────────────────────
  {
    id: 'dental', name: 'Dental Formulary', icon: '🦷',
    emdex: '18',
    subclasses: [
      {
        name: 'Dental Local Anaesthetics',
        drugs: [
          'Lidocaine + Adrenaline (dental cartridge)',
          'Articaine + Adrenaline', 'Mepivacaine',
          'Prilocaine + Felypressin',
          'Benzocaine Gel (topical)', 'EMLA Cream',
        ],
      },
      {
        name: 'Dental Analgesics',
        drugs: [
          'Paracetamol (Acetaminophen)', 'Ibuprofen', 'Diclofenac',
          'Naproxen', 'Codeine', 'Tramadol', 'Aspirin',
        ],
      },
      {
        name: 'Dental Anti-Infectives',
        drugs: [
          'Amoxicillin', 'Co-Amoxiclav', 'Metronidazole',
          'Clindamycin', 'Doxycycline', 'Erythromycin',
          'Fluconazole (oral candidiasis)', 'Miconazole Gel (oral)',
          'Nystatin Oral Suspension',
          'Aciclovir (herpetic stomatitis)',
        ],
      },
      {
        name: 'Mucosal Ulceration & Inflammation',
        drugs: [
          'Benzydamine Mouthwash (Difflam)', 'Chlorhexidine Mouthwash',
          'Triamcinolone in Orabase', 'Hydrocortisone Pellets (Corlan)',
          'Carmellose Paste', 'Choline Salicylate Gel',
        ],
      },
      {
        name: 'Drugs for Orofacial Pain',
        drugs: [
          'Amitriptyline (neuropathic dental pain)', 'Gabapentin',
          'Carbamazepine (trigeminal neuralgia)', 'Diazepam (TMJ)',
        ],
      },
      {
        name: 'Dry Mouth & Caries Prevention',
        drugs: [
          'Saliva Substitute (Biotène)', 'Pilocarpine (Salagen)',
          'Cevimeline', 'Fluoride Varnish', 'Fluoride Gel',
          'Chlorhexidine Varnish',
        ],
      },
    ],
  },

  // ─── 19: ANTIDOTES & POISONING ──────────────────────────────
  {
    id: 'antidote', name: 'Antidotes & Substances Used in Poisoning', icon: '☠️',
    emdex: '19',
    subclasses: [
      {
        name: 'General Care & Non-Specific Treatment',
        drugs: [
          'Activated Charcoal', 'Ipecacuanha Syrup (historic)',
          'Gastric Lavage (procedure)', 'Whole Bowel Irrigation (PEG solution)',
        ],
      },
      {
        name: 'Specific Antidotes',
        drugs: [
          'Acetylcysteine (N-Acetylcysteine — paracetamol OD)',
          'Naloxone (opioid OD)', 'Naltrexone',
          'Atropine (organophosphate poisoning)',
          'Pralidoxime (organophosphate)',
          'Obidoxime',
          'Desferrioxamine (iron poisoning)',
          'Deferiprone', 'Deferasirox',
          'Dimercaprol (BAL — heavy metal)',
          'Sodium Calcium Edetate (EDTA — lead)',
          'Penicillamine (heavy metal chelation)',
          'Succimer (DMSA — lead/mercury)',
          'Methylene Blue (methaemoglobinaemia)',
          'Hydroxocobalamin (cyanide)',
          'Dicobalt Edetate (cyanide)',
          'Sodium Thiosulphate (cyanide)',
          'Protamine Sulphate (heparin OD)',
          'Phytomenadione (Vitamin K1 — warfarin OD)',
          'Flumazenil (benzodiazepine OD)',
          'Calcium Gluconate (magnesium toxicity)',
          'Fomepizole (methanol/ethylene glycol)',
          'Ethanol (methanol OD)',
          'Idarucizumab (dabigatran reversal)',
          'Andexanet Alfa (factor Xa reversal)',
          'Digoxin-specific Fab antibodies (Digibind)',
          'Glucagon (beta-blocker/calcium channel OD)',
          'Insulin + Dextrose (high-dose — calcium channel OD)',
        ],
      },
    ],
  },

  // ─── 20: DIAGNOSTIC AGENTS & EQUIPMENT ──────────────────────
  {
    id: 'diag', name: 'Diagnostic Agents, Medical Consumables & Equipment', icon: '🔬',
    emdex: '20',
    subclasses: [
      {
        name: 'Radiocontrast Media (Non-Iodinated)',
        drugs: ['Gadolinium (MRI contrast)', 'Barium Sulphate (GI contrast)', 'Iron Oxide Nanoparticles'],
      },
      {
        name: 'Radiocontrast Media (Iodinated)',
        drugs: [
          'Iohexol (Omnipaque)', 'Iodixanol (Visipaque)',
          'Iopamidol (Isovue)', 'Ioversol', 'Iopromide',
          'Diatrizoate (ionic)',
        ],
      },
      {
        name: 'MRI Contrast Media',
        drugs: [
          'Gadolinium DTPA (Magnevist)', 'Gadodiamide (Omniscan)',
          'Gadobutrol (Gadovist)', 'Gadoteridol',
        ],
      },
      {
        name: 'Diagnostic — Gastric, Myasthenia, Ophthalmology',
        drugs: [
          'Edrophonium (Tensilon test)', 'Pentagastrin (gastric function)',
          'Fluorescein Sodium (ophthalmic diagnostic)',
          'Indocyanine Green (ICG)', 'Methacholine (bronchial challenge)',
        ],
      },
      {
        name: 'Diagnostic — Infectious Disease',
        drugs: [
          'Tuberculin PPD (Mantoux test)', 'Histoplasmin',
          'Coccidioidin',
        ],
      },
      {
        name: 'Diagnostic — Endocrine',
        drugs: [
          'Tetracosactide (Synacthen test)', 'GnRH (LHRH test)',
          'TRH (Thyrotropin releasing hormone test)',
          'Glucagon (GH stimulation)',
          'Insulin (insulin tolerance test)',
        ],
      },
    ],
  },

  // ─── 21: NATURAL HEALTH PRODUCTS ────────────────────────────
  {
    id: 'nhp', name: 'Natural Health Products (NHPs)', icon: '🌿',
    emdex: '21',
    subclasses: [
      {
        name: 'Multivitamins & Minerals',
        drugs: [
          'Multivitamin + Mineral Tablets', 'Multivitamin Syrup (Paediatric)',
          'Prenatal Multivitamins', 'B-Complex Vitamins',
          'Zinc + Vitamin C', 'Calcium + Vitamin D3',
          'Iron + Folic Acid (combined)',
        ],
      },
      {
        name: 'Dietary Supplements for Diabetes',
        drugs: [
          'Chromium Picolinate', 'Alpha-Lipoic Acid',
          'Bitter Melon (Momordica charantia)', 'Gymnema Sylvestre',
          'Cinnamon Extract', 'Fenugreek',
        ],
      },
      {
        name: 'Herbal Preparations',
        drugs: [
          'Artemisia annua (Sweet Wormwood)', 'Moringa oleifera',
          'Garlic (Allium sativum)', 'Ginger (Zingiber officinale)',
          'Echinacea', 'Ginkgo Biloba', 'Saw Palmetto',
          'St John\'s Wort (Hypericum)', 'Valerian',
          'Silymarin / Milk Thistle', 'Aloe Vera',
          'Turmeric (Curcumin)', 'Neem (Azadirachta indica)',
          'Psyllium Husk', 'Senna (herbal)',
          'Eucalyptus Oil', 'Lavender Oil',
        ],
      },
    ],
  },

];

// ─── Flat list of all drugs with class/subclass metadata ─────
export const ALL_DRUGS = DRUG_CLASSES.flatMap(cls =>
  cls.subclasses.flatMap(sub =>
    sub.drugs.map(name => ({
      name,
      class: cls.name,
      classId: cls.id,
      subclass: sub.name,
      icon: cls.icon,
      emdex: cls.emdex || '',
    }))
  )
);

// De-duplicate (same drug may appear in multiple subclasses)
const seen = new Set();
export const UNIQUE_DRUGS = ALL_DRUGS.filter(d => {
  if (seen.has(d.name)) return false;
  seen.add(d.name);
  return true;
});
