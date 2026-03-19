// src/data/drugClasses.js
export const DRUG_CLASSES = [
  {
    id:"antibiotics", name:"Antibiotics & Antimicrobials", icon:"🦠", desc:"Infection Control",
    subclasses:[
      { name:"Penicillins", drugs:["Amoxicillin","Ampicillin","Flucloxacillin","Piperacillin-Tazobactam","Co-Amoxiclav","Benzylpenicillin","Phenoxymethylpenicillin"] },
      { name:"Cephalosporins", drugs:["Cefalexin (1st Gen)","Cefuroxime (2nd Gen)","Ceftriaxone (3rd Gen)","Cefixime (3rd Gen)","Cefepime (4th Gen)","Ceftaroline (5th Gen)"] },
      { name:"Macrolides", drugs:["Azithromycin","Clarithromycin","Erythromycin","Roxithromycin","Spiramycin"] },
      { name:"Fluoroquinolones", drugs:["Ciprofloxacin","Levofloxacin","Moxifloxacin","Ofloxacin","Norfloxacin","Gemifloxacin"] },
      { name:"Aminoglycosides", drugs:["Gentamicin","Amikacin","Tobramycin","Streptomycin","Neomycin","Netilmicin"] },
      { name:"Tetracyclines", drugs:["Doxycycline","Tetracycline","Minocycline","Tigecycline","Demeclocycline"] },
      { name:"Sulfonamides / Trimethoprim", drugs:["Co-Trimoxazole (Septrin)","Trimethoprim","Sulfadiazine","Sulfamethoxazole"] },
      { name:"Nitroimidazoles", drugs:["Metronidazole","Tinidazole","Secnidazole","Ornidazole"] },
      { name:"Carbapenems", drugs:["Meropenem","Imipenem-Cilastatin","Ertapenem","Doripenem"] },
      { name:"Glycopeptides", drugs:["Vancomycin","Teicoplanin","Dalbavancin","Oritavancin"] },
      { name:"Antifungals", drugs:["Fluconazole","Itraconazole","Voriconazole","Amphotericin B","Nystatin","Clotrimazole","Ketoconazole","Micafungin","Caspofungin","Terbinafine"] },
      { name:"Antivirals", drugs:["Aciclovir (Acyclovir)","Valaciclovir","Ganciclovir","Oseltamivir (Tamiflu)","Zanamivir","Remdesivir","Ribavirin","Lopinavir-Ritonavir"] },
      { name:"Anti-TB Agents", drugs:["Isoniazid (INH)","Rifampicin","Pyrazinamide","Ethambutol","Streptomycin","Rifabutin","Bedaquiline","Linezolid (TB)"] },
      { name:"Antifungals (Topical)", drugs:["Clotrimazole Cream","Miconazole","Nystatin Cream","Terbinafine Cream","Econazole"] },
      { name:"Antiretrovirals (ARVs)", drugs:["Tenofovir (TDF)","Lamivudine (3TC)","Efavirenz (EFV)","Nevirapine (NVP)","Lopinavir/Ritonavir (LPV/r)","Dolutegravir","Emtricitabine","Abacavir","Atazanavir","Darunavir","Raltegravir","Zidovudine (AZT)"] }
    ]
  },
  {
    id:"analgesics", name:"Analgesics & Pain Management", icon:"💊", desc:"Pain Control",
    subclasses:[
      { name:"Non-Opioid Analgesics", drugs:["Paracetamol (Acetaminophen)","Aspirin","Ibuprofen","Naproxen","Diclofenac","Ketorolac","Mefenamic Acid","Celecoxib","Etoricoxib","Indomethacin"] },
      { name:"Opioid Analgesics", drugs:["Morphine","Codeine","Tramadol","Fentanyl","Oxycodone","Pethidine (Meperidine)","Buprenorphine","Methadone","Hydromorphone","Tapentadol"] },
      { name:"Opioid Antagonists", drugs:["Naloxone (Narcan)","Naltrexone","Methylnaltrexone"] },
      { name:"Neuropathic Pain", drugs:["Gabapentin","Pregabalin","Amitriptyline","Duloxetine","Carbamazepine","Capsaicin","Lidocaine Patch"] },
      { name:"Antimigraine Agents", drugs:["Sumatriptan","Rizatriptan","Zolmitriptan","Ergotamine","Topiramate","Propranolol (migraine prophylaxis)","Amitriptyline (migraine)","Valproate (migraine)"] }
    ]
  },
  {
    id:"cardiovascular", name:"Cardiovascular Drugs", icon:"❤️", desc:"Heart & Blood Vessels",
    subclasses:[
      { name:"ACE Inhibitors", drugs:["Lisinopril","Ramipril","Enalapril","Perindopril","Captopril","Quinapril","Fosinopril","Trandolapril"] },
      { name:"ARBs (Angiotensin Receptor Blockers)", drugs:["Losartan","Valsartan","Irbesartan","Candesartan","Telmisartan","Olmesartan","Azilsartan"] },
      { name:"Beta-Blockers", drugs:["Atenolol","Metoprolol","Bisoprolol","Carvedilol","Propranolol","Nebivolol","Labetalol","Sotalol","Esmolol"] },
      { name:"Calcium Channel Blockers", drugs:["Amlodipine","Nifedipine","Diltiazem","Verapamil","Felodipine","Lercanidipine","Nimodipine","Clevidipine"] },
      { name:"Diuretics", drugs:["Furosemide (Frusemide)","Spironolactone","Hydrochlorothiazide","Bendroflumethiazide","Indapamide","Chlortalidone","Metolazone","Amiloride","Triamterene","Eplerenone","Acetazolamide","Mannitol"] },
      { name:"Nitrates", drugs:["Glyceryl Trinitrate (GTN/Nitroglycerin)","Isosorbide Mononitrate","Isosorbide Dinitrate","Sodium Nitroprusside"] },
      { name:"Antiarrhythmics", drugs:["Amiodarone","Digoxin","Adenosine","Lidocaine (cardiac)","Flecainide","Propafenone","Mexiletine","Ivabradine","Dronedarone","Atropine"] },
      { name:"Anticoagulants", drugs:["Heparin (Unfractionated)","Enoxaparin (LMWH)","Dalteparin (LMWH)","Warfarin","Rivaroxaban","Apixaban","Dabigatran","Edoxaban","Fondaparinux","Argatroban"] },
      { name:"Antiplatelets", drugs:["Aspirin (low dose)","Clopidogrel","Ticagrelor","Prasugrel","Dipyridamole","Ticlopidine","Cangrelor","Vorapaxar"] },
      { name:"Thrombolytics", drugs:["Alteplase (tPA)","Streptokinase","Tenecteplase","Reteplase","Urokinase"] },
      { name:"Inotropes & Vasopressors", drugs:["Dobutamine","Dopamine","Noradrenaline (Norepinephrine)","Adrenaline (Epinephrine)","Milrinone","Levosimendan","Vasopressin","Phenylephrine"] }
    ]
  },
  {
    id:"diabetes", name:"Antidiabetics", icon:"🩸", desc:"Blood Sugar Control",
    subclasses:[
      { name:"Insulins", drugs:["Insulin Regular (Actrapid)","Insulin NPH (Insulatard)","Insulin Glargine (Lantus)","Insulin Detemir (Levemir)","Insulin Lispro (Humalog)","Insulin Aspart (Novorapid)","Insulin Degludec (Tresiba)","Premixed Insulin 70/30"] },
      { name:"Biguanides", drugs:["Metformin"] },
      { name:"Sulphonylureas", drugs:["Glibenclamide","Glimepiride","Gliclazide","Glipizide","Tolbutamide","Chlorpropamide"] },
      { name:"SGLT-2 Inhibitors", drugs:["Empagliflozin","Dapagliflozin","Canagliflozin","Ertugliflozin"] },
      { name:"GLP-1 Agonists", drugs:["Exenatide","Liraglutide","Semaglutide","Dulaglutide","Albiglutide","Lixisenatide"] },
      { name:"DPP-4 Inhibitors", drugs:["Sitagliptin","Saxagliptin","Linagliptin","Vildagliptin","Alogliptin","Trelagliptin"] },
      { name:"Alpha-glucosidase Inhibitors", drugs:["Acarbose","Miglitol","Voglibose"] }
    ]
  },
  {
    id:"lipid", name:"Lipid-Lowering Agents", icon:"🫀", desc:"Cholesterol Control",
    subclasses:[
      { name:"Statins", drugs:["Atorvastatin","Simvastatin","Rosuvastatin","Pravastatin","Fluvastatin","Lovastatin","Pitavastatin"] },
      { name:"Fibrates", drugs:["Fenofibrate","Gemfibrozil","Bezafibrate","Ciprofibrate"] },
      { name:"Bile Acid Sequestrants", drugs:["Cholestyramine","Colestipol","Colesevelam"] },
      { name:"PCSK9 Inhibitors", drugs:["Evolocumab","Alirocumab","Inclisiran"] },
      { name:"Other Lipid Agents", drugs:["Ezetimibe","Omega-3 Fatty Acids","Lomitapide"] }
    ]
  },
  {
    id:"respiratory", name:"Respiratory Drugs", icon:"🫁", desc:"Lung & Airway",
    subclasses:[
      { name:"SABA (Short-Acting Beta-2 Agonists)", drugs:["Salbutamol (Albuterol)","Terbutaline","Levosalbutamol","Fenoterol"] },
      { name:"LABA (Long-Acting Beta-2 Agonists)", drugs:["Salmeterol","Formoterol","Vilanterol","Indacaterol","Olodaterol"] },
      { name:"Anticholinergics (SAMA/LAMA)", drugs:["Ipratropium (SAMA)","Tiotropium (LAMA)","Aclidinium","Glycopyrronium","Umeclidinium"] },
      { name:"Inhaled Corticosteroids (ICS)", drugs:["Beclometasone","Budesonide","Fluticasone","Ciclesonide","Mometasone"] },
      { name:"Leukotriene Antagonists", drugs:["Montelukast","Zafirlukast","Zileuton"] },
      { name:"Xanthines", drugs:["Theophylline","Aminophylline","Doxofylline"] },
      { name:"Mucolytics", drugs:["Carbocisteine","N-acetylcysteine (NAC)","Ambroxol","Bromhexine"] }
    ]
  },
  {
    id:"gi", name:"Gastrointestinal Drugs", icon:"🫃", desc:"Stomach & Bowel",
    subclasses:[
      { name:"Proton Pump Inhibitors (PPIs)", drugs:["Omeprazole","Pantoprazole","Lansoprazole","Esomeprazole","Rabeprazole"] },
      { name:"H2 Blockers", drugs:["Ranitidine","Famotidine","Cimetidine","Nizatidine"] },
      { name:"Antacids", drugs:["Magnesium Trisilicate","Aluminium Hydroxide","Calcium Carbonate","Sodium Bicarbonate"] },
      { name:"Antiemetics", drugs:["Metoclopramide","Ondansetron","Promethazine","Domperidone","Cyclizine","Granisetron","Prochlorperazine","Aprepitant"] },
      { name:"Laxatives", drugs:["Lactulose","Bisacodyl","Senna","Macrogol (Movicol)","Docusate","Liquid Paraffin","Glycerine Suppositories","Ispaghula Husk"] },
      { name:"Antidiarrhoeals", drugs:["Loperamide","Oral Rehydration Salts (ORS)","Codeine Phosphate","Bismuth Subsalicylate"] },
      { name:"Antispasmodics", drugs:["Hyoscine Butylbromide (Buscopan)","Mebeverine","Dicycloverine","Alverine"] }
    ]
  },
  {
    id:"cns", name:"CNS / Neurological Drugs", icon:"🧠", desc:"Brain & Nerves",
    subclasses:[
      { name:"Antiepileptics", drugs:["Phenytoin","Carbamazepine","Sodium Valproate","Levetiracetam","Lamotrigine","Phenobarbitone","Topiramate","Oxcarbazepine","Gabapentin","Pregabalin","Clobazam","Clonazepam"] },
      { name:"Antiparkinsonian Agents", drugs:["Levodopa","Levodopa-Carbidopa (Sinemet)","Pramipexole","Ropinirole","Entacapone","Selegiline","Amantadine","Bromocriptine","Trihexyphenidyl"] },
      { name:"General Anaesthetics", drugs:["Propofol","Ketamine","Thiopentone","Isoflurane","Sevoflurane","Nitrous Oxide","Etomidate"] },
      { name:"Local Anaesthetics", drugs:["Lidocaine","Bupivacaine","Ropivacaine","Prilocaine","Benzocaine","Levobupivacaine"] },
      { name:"Muscle Relaxants", drugs:["Suxamethonium","Vecuronium","Atracurium","Rocuronium","Baclofen","Dantrolene","Tizanidine"] }
    ]
  },
  {
    id:"psychiatric", name:"Psychiatric Drugs", icon:"🧘", desc:"Mental Health",
    subclasses:[
      { name:"SSRIs (Antidepressants)", drugs:["Fluoxetine","Sertraline","Citalopram","Escitalopram","Paroxetine","Fluvoxamine"] },
      { name:"SNRIs (Antidepressants)", drugs:["Venlafaxine","Duloxetine","Desvenlafaxine","Milnacipran"] },
      { name:"TCAs (Tricyclic Antidepressants)", drugs:["Amitriptyline","Imipramine","Clomipramine","Nortriptyline","Doxepin","Desipramine"] },
      { name:"Typical Antipsychotics", drugs:["Haloperidol","Chlorpromazine","Fluphenazine","Trifluoperazine","Zuclopenthixol","Flupenthixol","Sulpiride"] },
      { name:"Atypical Antipsychotics", drugs:["Risperidone","Olanzapine","Quetiapine","Clozapine","Aripiprazole","Amisulpride","Paliperidone","Lurasidone"] },
      { name:"Mood Stabilisers", drugs:["Lithium","Sodium Valproate","Lamotrigine","Carbamazepine"] },
      { name:"Benzodiazepines / Anxiolytics", drugs:["Diazepam","Lorazepam","Clonazepam","Alprazolam","Midazolam","Temazepam","Oxazepam","Chlordiazepoxide"] },
      { name:"Hypnotics", drugs:["Zolpidem","Zopiclone","Zaleplon","Melatonin","Nitrazepam"] },
      { name:"ADHD Agents", drugs:["Methylphenidate (Ritalin)","Atomoxetine","Dexamfetamine","Lisdexamfetamine","Guanfacine"] }
    ]
  },
  {
    id:"hormones", name:"Hormones & Endocrine", icon:"⚗️", desc:"Hormonal Conditions",
    subclasses:[
      { name:"Corticosteroids", drugs:["Prednisolone","Hydrocortisone","Dexamethasone","Betamethasone","Methylprednisolone","Fludrocortisone","Triamcinolone"] },
      { name:"Thyroid Agents", drugs:["Levothyroxine (T4)","Carbimazole","Propylthiouracil","Liothyronine (T3)","Radioactive Iodine"] },
      { name:"Oestrogens", drugs:["Oestradiol","Conjugated Oestrogens","Ethinylestradiol","Oestriol"] },
      { name:"Progestogens", drugs:["Progesterone","Medroxyprogesterone","Norethisterone","Levonorgestrel","Desogestrel","Dydrogesterone"] },
      { name:"Oral Contraceptives", drugs:["Combined Oral Contraceptive Pill (COCP)","Progesterone-Only Pill (POP)","Emergency Contraception (Levonorgestrel)","Ulipristal Acetate"] },
      { name:"ADH Analogues", drugs:["Desmopressin (DDAVP)","Vasopressin","Terlipressin"] },
      { name:"Growth Hormone Agents", drugs:["Somatropin (Growth Hormone)","Octreotide","Lanreotide","Pegvisomant"] }
    ]
  },
  {
    id:"antiparasitics", name:"Antiparasitics / Antimalarials", icon:"🌿", desc:"Parasitic & Malaria",
    subclasses:[
      { name:"Antimalarials", drugs:["Artemether-Lumefantrine (Coartem)","Chloroquine","Quinine","Artesunate","Mefloquine","Primaquine","Atovaquone-Proguanil (Malarone)","Doxycycline (prophylaxis)"] },
      { name:"Anthelmintics", drugs:["Albendazole","Mebendazole","Praziquantel","Ivermectin","Pyrantel","Niclosamide","Diethylcarbamazine (DEC)","Levamisole"] },
      { name:"Antiprotozoals", drugs:["Metronidazole","Tinidazole","Pentamidine","Miltefosine","Diloxanide Furoate"] },
      { name:"Antiscabies / Antipediculosis", drugs:["Permethrin","Benzyl Benzoate","Malathion","Ivermectin (oral)","Lindane"] }
    ]
  }
];

export const ALL_DRUGS = DRUG_CLASSES.flatMap(c =>
  c.subclasses.flatMap(s => s.drugs.map(d => ({ name: d, class: c.name, subclass: s.name })))
);
