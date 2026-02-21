export type Language = 'pl' | 'en';

export const translations = {
  pl: {
    // Hero section
    heroTitle: "Zimna Fuzja i LENR: Co Wiemy",
    heroSubtitle: "Kompleksowa analiza badań zimnej fuzji i Reakcji Jądrowych Niskiej Energii, dowodów i perspektyw na przyszłość.",
    
    // Navigation
    contents: "Spis Treści",
    introduction: "Wprowadzenie",
    timeline: "Oś Czasu",
    reproducibility: "Powtarzalność",
    evidenceInventory: "Przegląd Dowodów",
    keyExperiments: "Kluczowe Eksperymenty",
    modelsAndCritiques: "Modele i Krytyka",
    whatToExpect: "Czego Się Spodziewać",
    decisiveExperiments: "Decydujące Eksperymenty",
    experimentalFlowchart: "Schemat Eksperymentalny",
    reactorSchematics: "Schematy Reaktorów",
    references: "Źródła",
    
    // Confidence badges
    confidenceHigh: "Wysoka",
    confidenceMedium: "Średnia",
    confidenceLow: "Niska",
    confidenceVeryLow: "Bardzo Niska",
    
    // Introduction content
    introContent1: "Zimna fuzja (LENR) odnosi się do twierdzeń o energii o skali jądrowej w układach materii skondensowanej w temperaturze otoczenia. Dobrze kontrolowane replikacje nie wykazują silnej produkcji energii netto. Część badań donosi o przerywanym nadmiarze ciepła. Ponowna ocena Nature z 2019 roku nie znalazła dowodów. Nature z 2025 roku poinformował, że elektrochemiczne ładowanie zwiększyło wydajność neutronów z fuzji D-D o ~15%.",
    introContent2: "Dziedzina pozostaje kontrowersyjna, z dziesięcioleciami sprzecznych wyników i trwającą debatą na temat podstawowych mechanizmów i powtarzalności zgłaszanych efektów.",
    
    // Timeline section
    timelineTitle: "Historyczna Oś Czasu",
    timelineIntro: "Od Fleischmann & Pons 1989 przez przeglądy DOE (1989, 2004), prace SRI/McKubre, ponowną ocenę Nature z 2019, wynik pomostowy Nature z 2025, do regulacji fuzji NRC z 2026.",
    
    // Timeline events
    timeline1989_1: "Fleischmann & Pons - twierdzenie o elektrolizie Pd-D",
    timeline1989_2: "Jones i in. - mały sygnał neutronowy (Nature)",
    timeline1989_3: "Lewis i in. - wyniki zerowe (Nature)",
    timeline1989_4: "Raport DOE ERAB - dowody nieprzekonujące",
    timeline1990_1: "Fleischmann & Pons rozszerzają twierdzenia kalorymetryczne",
    timeline1990_2: "Albagli i in. - wielomodalne poszukiwania zerowe",
    timeline1992: "McKubre/SRI - korelacje nadmiaru mocy z ładowaniem D/Pd",
    timeline2004: "Przegląd DOE LENR - dowody niekonkluzywne",
    timeline2019_1: "Nature - ponowna ocena wielu instytucji - brak dowodów",
    timeline2019_2: "Mizuno donosi o nadmiarze ciepła Pd-na-Ni",
    timeline2025: "Nature: elektrochemiczne ładowanie D zwiększa wydajność neutronów fuzji wiązka-cel (~15%)",
    timeline2026: "NRC publikuje strategię regulacji fuzji",
    
    // Reproducibility section
    reproducibilityTitle: "Powtarzalność",
    reproducibilityIntro: "Wiele starannych poszukiwań nie znajduje nadmiaru ciepła ani produktów fuzji. Istnieją pozytywne doniesienia, ale są przerywane. Kluczowe kwestie metodologiczne obejmują:",
    reproducibilityList1: "Typ kalorymetru i kalibracja",
    reproducibilityList2: "Rozliczanie rekombinacji gazów",
    reproducibilityList3: "Współczynniki ładowania D/Pd",
    reproducibilityList4: "Detekcja jądrowa bliska tłu",
    reproducibilityList5: "Czystość i przygotowanie materiałów",
    reproducibilityList6: "Czynniki środowiskowe i kontrole",
    reproducibilityConclusion: "Brak spójnej powtarzalności pozostaje głównym wyzwaniem dla akceptacji dziedziny w głównym nurcie nauki.",
    
    // Evidence section
    evidenceTitle: "Przegląd Dowodów",
    evidenceIntro: "Kategorie rzekomo obserwowanych zjawisk i ich poziomy pewności:",
    evidenceHeat: "Ciepło/nadmiar ciepła",
    evidenceNeutrons: "Neutrony/promienie gamma",
    evidenceNeutronsNote: "(dla małych sygnałów)",
    evidenceTritium: "Tryt",
    evidenceTritiumReported: "(donoszony)",
    evidenceTritiumNuclear: "(pochodzenie jądrowe)",
    evidenceHelium: "Hel-4",
    evidenceTracks: "Ślady CR-39",
    evidenceIsotopic: "Przesunięcia izotopowe",
    evidenceKeyExperiments: "Kluczowe Eksperymenty",
    
    // Experiments data
    exp1Title: "Fleischmann i Pons 1989",
    exp1Measurements: "Kalorymetria + sygnały jądrowe",
    exp1Outcome: "Raportowany nadmiar entalpii",
    
    exp2Title: "Lewis i in. 1989",
    exp2Measurements: "Kalorymetria + neutrony + promienie gamma + tryt + He",
    exp2Outcome: "Brak dowodów",
    
    exp3Title: "Miskelly i in. 1989",
    exp3Measurements: "Krytyka kalorymetrii",
    exp3Outcome: "Artefakty mogą mylić twierdzenia",
    
    exp4Title: "Albagli i in. 1990",
    exp4Measurements: "Kalorymetria stałej temperatury; neutron/γ; He; tryt",
    exp4Outcome: "Brak nadmiaru mocy lub produktów fuzji",
    
    exp5Title: "McKubre/SRI 1992+",
    exp5Measurements: "Kalorymetria + korelacje ładowania",
    exp5Outcome: "Nadmiar mocy skorelowany z D/Pd",
    
    exp6Title: "Mosier-Boss i in. 2009",
    exp6Measurements: "Detektory śladów CR-39",
    exp6Outcome: "Obserwowano potrójne ślady",
    
    exp7Title: "Berlinguette i in. 2019",
    exp7Measurements: "Rygorystyczne testy wielu instytucji",
    exp7Outcome: "Brak dowodów na zimną fuzję",
    
    exp8Title: "Chen i in. 2025",
    exp8Measurements: "Wydajność neutronów z Pd + ładowanie elektrochemiczne",
    exp8Outcome: "~15% zwiększenie szybkości neutronów",
    
    // Models section
    modelsTitle: "Modele i Krytyka",
    modelsIntro: "Trzy fundamentalne ograniczenia kwestionują twierdzenia LENR:",
    modelsCoulombBarrier: "Bariera Coulomba",
    modelsCoulombDesc: "- Reakcje jądrowe wymagają przezwyciężenia odpychania elektrostatycznego",
    modelsCommensurate: "Brak współmiernych produktów",
    modelsCommensurateDesc: "- Energia jądrowa powinna produkować wykrywalne produkty uboczne",
    modelsInconsistent: "Niespójne sygnały",
    modelsInconsistentDesc: "- Wyniki różnią się drastycznie między eksperymentami",
    modelsTheoryFamilies: "Rodziny Teorii",
    modelsLatticeScreening: "Ekranowanie sieci",
    modelsLatticeNote: "(dla małych efektów)",
    modelsCondensed: "Nauka jądrowa materii skondensowanej",
    modelsNeutron: "Mediowane neutronami",
    modelsMuon: "Analogia fuzji katalyzowanej muonami",
    modelsMuonKnown: "(znana)",
    modelsMuonRelevance: "(znaczenie)",
    
    // Expectations section
    expectationsTitle: "Czego Się Spodziewać",
    expectationsDOE: "Ewolucja stanowiska DOE:",
    expectationsDOEText: "nieprzekonujące (1989) → niekonkluzywne (2004) → bieżące monitorowanie.",
    expectationsBaseline: "Scenariusz Bazowy",
    expectationsBaselineText: "Postęp w wyjaśnianiu anomalii, ale nie komercyjna moc LENR w ciągu 10-15 lat. Badania kontynuowane z ulepszonymi metodologiami i okazjonalnymi ciekawymi wynikami.",
    expectationsBreakthrough: "Scenariusz Przełomu",
    expectationsBreakthroughIntro: "Jeśli zostanie ustanowiony powtarzalny efekt:",
    expectations3to5: "3-5 lat:",
    expectations3to5Text: "Niezależna replikacja i zrozumienie mechanizmu",
    expectations5to10: "5-10 lat:",
    expectations5to10Text: "Prototypy inżynierskie i optymalizacja",
    expectations10to20: "10-20 lat:",
    expectations10to20Text: "Wdrożenie komercyjne i skalowanie",
    
    // Experiments section
    experimentsTitle: "Decydujące Eksperymenty",
    experimentsIntro: "Systematyczne podejście do rozwiązania kwestii LENR wymaga rygorystycznych protokołów eksperymentalnych i wieloetapowej walidacji.",
    experimentsFlowchart: "Schemat Eksperymentalny",
    experimentsStage1: "Kalorymetria klasy audytowej",
    experimentsStage1Q: "Nadmiar > 10x chemiczny?",
    experimentsStage1No: "Nie → Brak dowodów",
    experimentsStage1Yes: "Tak → Kontynuuj",
    experimentsStage2: "Produkty jądrowe",
    experimentsStage2Q: "Wykrywalne neutrony/gamma/tryt?",
    experimentsStage2No: "Nie → Efekt chemiczny",
    experimentsStage2Yes: "Tak → Kontynuuj",
    experimentsStage3: "Niezależne replikacje",
    experimentsStage3Q: "≥3 niezależne laboratoria?",
    experimentsStage3No: "Nie → Potrzebne więcej",
    experimentsStage3Yes: "Tak → Potwierdzone LENR",
    
    // Reactor Diagrams section
    reactorTitle: "Schematy Reaktorów",
    reactorPdD: "Komórka Elektrolizy Pd-D",
    reactorThermalJacket: "Płaszcz termiczny",
    reactorCellContainer: "Pojemnik komórki",
    reactorAnode: "Anoda",
    reactorCathode: "Katoda",
    reactorNiH: "Reaktor Ni-H",
    reactorHeater: "Grzałka",
    reactorChamber: "Komora",
    reactorNickelPowder: "Proszek niklu",
    reactorHydrogenGas: "Gaz wodorowy",
    
    // References section
    referencesTitle: "Źródła",
    
    // Language toggle
    languageSwitch: "Język",
    switchToEnglish: "Przełącz na angielski",
    switchToPolish: "Przełącz na polski",
    
    // Common terms
    year: "rok",
    experiment: "eksperyment",
    result: "wynik",
    evidence: "dowód",
    theory: "teoria",
    research: "badania",
    publication: "publikacja",
    scientist: "naukowiec",
    laboratory: "laboratorium",
    measurement: "pomiar",
    temperature: "temperatura",
    energy: "energia",
    nuclear: "jądrowy",
    fusion: "fuzja",
    reaction: "reakcja",
    neutron: "neutron",
    deuterium: "deuter",
    palladium: "pallad",
    nickel: "nikiel",
    hydrogen: "wodór"
  },
  en: {
    // Hero section
    heroTitle: "Cold Fusion & LENR: What We Know",
    heroSubtitle: "A comprehensive analysis of cold fusion and Low Energy Nuclear Reactions research, evidence, and future prospects.",
    
    // Navigation
    contents: "Contents",
    introduction: "Introduction",
    timeline: "Historical Timeline",
    reproducibility: "Reproducibility",
    evidenceInventory: "Evidence Inventory",
    keyExperiments: "Key Experiments",
    modelsAndCritiques: "Models and Critiques",
    whatToExpected: "What to Expect",
    decisiveExperiments: "Decisive Experiments",
    experimentalFlowchart: "Experimental Flowchart",
    reactorSchematics: "Reactor Schematics",
    references: "References",
    
    // Confidence badges
    confidenceHigh: "High",
    confidenceMedium: "Medium",
    confidenceLow: "Low",
    confidenceVeryLow: "Very Low",
    
    // Introduction content
    introContent1: "Cold fusion (LENR) refers to claims of nuclear-scale energy in condensed-matter systems at ambient temperatures. Well-controlled replications find no strong net energy production. A subset reports intermittent excess heat. 2019 Nature re-evaluation found no evidence. 2025 Nature reported electrochemical loading boosted D-D fusion neutron yield by ~15%.",
    introContent2: "The field remains controversial, with decades of conflicting results and ongoing debate about the fundamental mechanisms and reproducibility of claimed effects.",
    
    // Timeline section
    timelineTitle: "Historical Timeline",
    timelineIntro: "From Fleischmann & Pons 1989 through DOE reviews (1989, 2004), SRI/McKubre work, 2019 Nature re-evaluation, 2025 Nature bridge result, to 2026 NRC fusion regulation.",
    
    // Timeline events
    timeline1989_1: "Fleischmann & Pons Pd-D electrolysis claim",
    timeline1989_2: "Jones et al. small neutron signal (Nature)",
    timeline1989_3: "Lewis et al. null results (Nature)",
    timeline1989_4: "DOE ERAB report - evidence not persuasive",
    timeline1990_1: "Fleischmann & Pons expand calorimetry claims",
    timeline1990_2: "Albagli et al. multi-modal null search",
    timeline1992: "McKubre/SRI excess power correlations with D/Pd loading",
    timeline2004: "DOE LENR review - evidence inconclusive",
    timeline2019_1: "Nature multi-institution re-evaluation - no evidence",
    timeline2019_2: "Mizuno reports Pd-on-Ni excess heat",
    timeline2025: "Nature: electrochemical D-loading boosts beam-target fusion neutron yield (~15%)",
    timeline2026: "NRC publishes fusion regulation strategy",
    
    // Reproducibility section
    reproducibilityTitle: "Reproducibility",
    reproducibilityIntro: "Many careful searches find no excess heat or fusion products. Positive reports exist but are intermittent. Key methodological issues include:",
    reproducibilityList1: "Calorimeter type and calibration",
    reproducibilityList2: "Gas recombination accounting",
    reproducibilityList3: "D/Pd loading ratios",
    reproducibilityList4: "Near-background nuclear detection",
    reproducibilityList5: "Material purity and preparation",
    reproducibilityList6: "Environmental factors and controls",
    reproducibilityConclusion: "The lack of consistent reproducibility remains the primary challenge for the field's acceptance in mainstream science.",
    
    // Evidence section
    evidenceTitle: "Evidence Inventory",
    evidenceIntro: "Categories of claimed observations and their confidence levels:",
    evidenceHeat: "Heat/excess heat",
    evidenceNeutrons: "Neutrons/gammas",
    evidenceNeutronsNote: "(for small signals)",
    evidenceTritium: "Tritium",
    evidenceTritiumReported: "(reported)",
    evidenceTritiumNuclear: "(nuclear origin)",
    evidenceHelium: "Helium-4",
    evidenceTracks: "CR-39 tracks",
    evidenceIsotopic: "Isotopic shifts",
    evidenceKeyExperiments: "Key Experiments",
    
    // Experiments data
    exp1Title: "Fleischmann & Pons 1989",
    exp1Measurements: "Calorimetry + nuclear signals",
    exp1Outcome: "Excess enthalpy reported",
    
    exp2Title: "Lewis et al. 1989",
    exp2Measurements: "Calorimetry + neutrons + gammas + tritium + He",
    exp2Outcome: "No evidence",
    
    exp3Title: "Miskelly et al. 1989",
    exp3Measurements: "Calorimetry critique",
    exp3Outcome: "Artifacts can confound claims",
    
    exp4Title: "Albagli et al. 1990",
    exp4Measurements: "Constant-T calorimetry; neutron/γ; He; tritium",
    exp4Outcome: "No excess power or fusion products",
    
    exp5Title: "McKubre/SRI 1992+",
    exp5Measurements: "Calorimetry + loading correlations",
    exp5Outcome: "Excess power correlated with D/Pd",
    
    exp6Title: "Mosier-Boss et al. 2009",
    exp6Measurements: "CR-39 track detectors",
    exp6Outcome: "Triple tracks observed",
    
    exp7Title: "Berlinguette et al. 2019",
    exp7Measurements: "Multi-institution rigorous tests",
    exp7Outcome: "No evidence of cold fusion",
    
    exp8Title: "Chen et al. 2025",
    exp8Measurements: "Neutron yield with Pd + electrochemical loading",
    exp8Outcome: "~15% neutron-rate enhancement",
    
    // Models section
    modelsTitle: "Models and Critiques",
    modelsIntro: "Three fundamental constraints challenge LENR claims:",
    modelsCoulombBarrier: "Coulomb barrier",
    modelsCoulombDesc: "- Nuclear reactions require overcoming electrostatic repulsion",
    modelsCommensurate: "Missing commensurate products",
    modelsCommensurateDesc: "- Nuclear energy should produce detectable nuclear byproducts",
    modelsInconsistent: "Inconsistent signals",
    modelsInconsistentDesc: "- Results vary dramatically between experiments",
    modelsTheoryFamilies: "Theory Families",
    modelsLatticeScreening: "Lattice screening",
    modelsLatticeNote: "(for small effects)",
    modelsCondensed: "Condensed-matter nuclear science",
    modelsNeutron: "Neutron-mediated",
    modelsMuon: "Muon-catalyzed fusion analogy",
    modelsMuonKnown: "(known)",
    modelsMuonRelevance: "(relevance)",
    
    // Expectations section
    expectationsTitle: "What to Expect",
    expectationsDOE: "DOE stance evolution:",
    expectationsDOEText: "not persuasive (1989) → inconclusive (2004) → ongoing monitoring.",
    expectationsBaseline: "Baseline Scenario",
    expectationsBaselineText: "Progress on clarifying anomalies, but not commercial LENR power in 10-15 years. Research continues with improved methodologies and occasional interesting results.",
    expectationsBreakthrough: "Breakthrough Scenario",
    expectationsBreakthroughIntro: "If a reproducible effect is established:",
    expectations3to5: "3-5 years:",
    expectations3to5Text: "Independent replication and mechanism understanding",
    expectations5to10: "5-10 years:",
    expectations5to10Text: "Engineering prototypes and optimization",
    expectations10to20: "10-20 years:",
    expectations10to20Text: "Commercial deployment and scale-up",
    
    // Experiments section
    experimentsTitle: "Decisive Experiments",
    experimentsIntro: "A systematic approach to resolving the LENR question requires rigorous experimental protocols and multi-stage validation.",
    experimentsFlowchart: "Experimental Flowchart",
    experimentsStage1: "Audit-grade calorimetry",
    experimentsStage1Q: "Excess > 10x chemical?",
    experimentsStage1No: "No → Conclude no evidence",
    experimentsStage1Yes: "Yes → Continue",
    experimentsStage2: "Nuclear products",
    experimentsStage2Q: "Detectable neutrons/gamma/tritium?",
    experimentsStage2No: "No → Chemical effect",
    experimentsStage2Yes: "Yes → Continue",
    experimentsStage3: "Independent replications",
    experimentsStage3Q: "≥3 independent laboratories?",
    experimentsStage3No: "No → More needed",
    experimentsStage3Yes: "Yes → Confirmed LENR",
    
    // Reactor Diagrams section
    reactorTitle: "Reactor Diagrams",
    reactorPdD: "Pd-D Electrolysis Cell",
    reactorThermalJacket: "Thermal jacket",
    reactorCellContainer: "Cell container",
    reactorAnode: "Anode",
    reactorCathode: "Cathode",
    reactorNiH: "Ni-H Reactor",
    reactorHeater: "Heater",
    reactorChamber: "Chamber",
    reactorNickelPowder: "Nickel powder",
    reactorHydrogenGas: "Hydrogen gas",
    
    // References section
    referencesTitle: "References",
    
    // Language toggle
    languageSwitch: "Language",
    switchToEnglish: "Switch to English",
    switchToPolish: "Switch to Polish",
    
    // Common terms
    year: "year",
    experiment: "experiment",
    result: "result",
    evidence: "evidence",
    theory: "theory",
    research: "research",
    publication: "publication",
    scientist: "scientist",
    laboratory: "laboratory",
    measurement: "measurement",
    temperature: "temperature",
    energy: "energy",
    nuclear: "nuclear",
    fusion: "fusion",
    reaction: "reaction",
    neutron: "neutron",
    deuterium: "deuterium",
    palladium: "palladium",
    nickel: "nickel",
    hydrogen: "hydrogen"
  }
};

export default translations;