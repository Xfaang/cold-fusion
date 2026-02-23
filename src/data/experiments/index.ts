export interface ExperimentDetail {
  id: string
  titleKey: string
  authors: string
  year: number
  journalKey: string
  paperId?: string
  paperUrl?: string
  confidence: 'high' | 'medium' | 'low' | 'very-low'
  category: 'electrochemical' | 'gas-loading' | 'plasma' | 'theoretical'
  
  // Detailed information
  objectiveKey: string
  methodsKey: string
  resultsKey: string
  replicationStatusKey: string
  significanceKey: string
  limitationsKey: string
  
  // Technical details
  apparatus: string[]
  measurements: string[]
  materials: string[]
  conditions: Record<string, string>
}

export const topTenExperiments: ExperimentDetail[] = [
  {
    id: 'fleischmann-pons-1989',
    titleKey: 'exp1DetailTitle',
    authors: 'M. Fleischmann, S. Pons',
    year: 1989,
    journalKey: 'exp1Journal',
    paperUrl: 'https://www.sciencedirect.com/science/article/abs/pii/0022072889800063',
    confidence: 'medium',
    category: 'electrochemical',
    objectiveKey: 'exp1Objective',
    methodsKey: 'exp1Methods',
    resultsKey: 'exp1Results',
    replicationStatusKey: 'exp1Replication',
    significanceKey: 'exp1Significance',
    limitationsKey: 'exp1Limitations',
    apparatus: ['electrolytic_cell', 'palladium_cathode', 'heavy_water', 'calorimeter'],
    measurements: ['excess_heat', 'neutron_emission', 'tritium_production', 'gamma_rays'],
    materials: ['palladium_wire', 'platinum_anode', 'lithium_deuteroxide'],
    conditions: {
      temperature: '20-50°C',
      current_density: '0.5-8 A/cm²',
      electrolyte: 'LiOD in D2O',
      duration: '100-400 hours'
    }
  },
  {
    id: 'lewis-et-al-1989',
    titleKey: 'exp2DetailTitle',
    authors: 'N.S. Lewis, C.A. Barnes, M.J. Heben, A. Kumar, S.R. Lunt, G.E. McManis, G.M. Miskelly, R.M. Penner, M.J. Sailor, P.G. Santangelo, G.A. Shreve, B.J. Tufts, M.G. Youngquist, R.W. Kavanagh, S.E. Kellogg, R.B. Vogelaar, T.R. Wang, R. Kondrat, R. New',
    year: 1989,
    journalKey: 'exp2Journal',
    paperUrl: 'https://www.nature.com/articles/340525a0',
    confidence: 'high',
    category: 'electrochemical',
    objectiveKey: 'exp2Objective',
    methodsKey: 'exp2Methods',
    resultsKey: 'exp2Results',
    replicationStatusKey: 'exp2Replication',
    significanceKey: 'exp2Significance',
    limitationsKey: 'exp2Limitations',
    apparatus: ['electrolytic_cell', 'palladium_cathode', 'neutron_detectors', 'gamma_spectrometer', 'mass_spectrometer'],
    measurements: ['excess_heat', 'neutron_flux', 'gamma_radiation', 'tritium_concentration', 'helium_detection'],
    materials: ['palladium_wire', 'platinum_anode', 'lithium_deuteroxide', 'heavy_water'],
    conditions: {
      temperature: 'ambient',
      current_density: 'various',
      electrolyte: 'LiOD in D2O',
      duration: 'up to 1000 hours'
    }
  },
  {
    id: 'miskelly-et-al-1989',
    titleKey: 'exp3DetailTitle',
    authors: 'G.M. Miskelly, M.J. Heben, A. Kumar, R.G. Penner, M.J. Sailor, N.S. Lewis',
    year: 1989,
    journalKey: 'exp3Journal',
    paperUrl: 'https://www.science.org/doi/10.1126/science.246.4931.793',
    confidence: 'high',
    category: 'electrochemical',
    objectiveKey: 'exp3Objective',
    methodsKey: 'exp3Methods',
    resultsKey: 'exp3Results',
    replicationStatusKey: 'exp3Replication',
    significanceKey: 'exp3Significance',
    limitationsKey: 'exp3Limitations',
    apparatus: ['calorimeter', 'electrolytic_cell', 'temperature_sensors'],
    measurements: ['heat_production', 'current_efficiency', 'gas_recombination'],
    materials: ['palladium_electrode', 'deuterium_oxide'],
    conditions: {
      temperature: 'controlled',
      current: 'constant',
      electrolyte: 'LiOD solution',
      measurement_precision: 'high_accuracy'
    }
  },
  {
    id: 'albagli-et-al-1990',
    titleKey: 'exp4DetailTitle',
    authors: 'D. Albagli, R. Ballinger, V. Camillone III, R.M. Crooks, R.G. Ingalls, M.J. Musser, R.D. Petrasso, C.K. Chen, B.Y. Chang, T. Zhang, J. Xu, J.A. Schwarz, P. Chen, R.E. Rocklin, J. Wai, F. Wuensche, T. Huang',
    year: 1990,
    journalKey: 'exp4Journal',
    paperUrl: 'https://link.springer.com/article/10.1007/BF01051661',
    confidence: 'high',
    category: 'electrochemical',
    objectiveKey: 'exp4Objective',
    methodsKey: 'exp4Methods',
    resultsKey: 'exp4Results',
    replicationStatusKey: 'exp4Replication',
    significanceKey: 'exp4Significance',
    limitationsKey: 'exp4Limitations',
    apparatus: ['constant_temperature_calorimeter', 'neutron_detectors', 'gamma_spectrometer', 'mass_spectrometer'],
    measurements: ['excess_power', 'neutron_emission', 'gamma_rays', 'helium_production', 'tritium_detection'],
    materials: ['palladium_cathodes', 'deuterium_oxide', 'various_electrolytes'],
    conditions: {
      temperature: 'constant 25°C',
      current_density: '0.1-2 A/cm²',
      duration: '500+ hours',
      controls: 'multiple blanks'
    }
  },
  {
    id: 'mckubre-sri-1992',
    titleKey: 'exp5DetailTitle',
    authors: 'M.C.H. McKubre, S. Crouch-Baker, A.M. Riley, S.I. Smedley, F.L. Tanzella',
    year: 1992,
    journalKey: 'exp5Journal',
    paperUrl: 'https://lenr-canr.org/acrobat/McKubreMCHisothermalf.pdf',
    confidence: 'medium',
    category: 'electrochemical',
    objectiveKey: 'exp5Objective',
    methodsKey: 'exp5Methods',
    resultsKey: 'exp5Results',
    replicationStatusKey: 'exp5Replication',
    significanceKey: 'exp5Significance',
    limitationsKey: 'exp5Limitations',
    apparatus: ['isothermal_calorimeter', 'mass_flow_calorimeter', 'loading_measurement'],
    measurements: ['excess_heat', 'deuterium_loading_ratio', 'current_efficiency'],
    materials: ['palladium_cathodes', 'lithium_deuteroxide', 'heavy_water'],
    conditions: {
      temperature: 'isothermal',
      loading_ratio: '0.7-1.0 D/Pd',
      current_density: 'optimized',
      duration: 'extended periods'
    }
  },
  {
    id: 'bush-eagleton-1991',
    titleKey: 'exp6DetailTitle',
    authors: 'B.F. Bush, J.J. Lagowski, M.H. Miles, G.S. Ostrom',
    year: 1991,
    journalKey: 'exp6Journal',
    confidence: 'medium',
    category: 'electrochemical',
    objectiveKey: 'exp6Objective',
    methodsKey: 'exp6Methods',
    resultsKey: 'exp6Results',
    replicationStatusKey: 'exp6Replication',
    significanceKey: 'exp6Significance',
    limitationsKey: 'exp6Limitations',
    apparatus: ['electrolytic_cells', 'calorimeter', 'helium_analyzer'],
    measurements: ['excess_heat', 'helium_4_production', 'correlation_analysis'],
    materials: ['palladium_cathodes', 'deuterium_oxide', 'electrolyte_solutions'],
    conditions: {
      temperature: 'monitored',
      correlation: 'heat_to_helium_ratio',
      measurement: 'simultaneous',
      controls: 'hydrogen_comparison'
    }
  },
  {
    id: 'mosier-boss-2009',
    titleKey: 'exp7DetailTitle',
    authors: 'P.A. Mosier-Boss, S. Szpak, F.E. Gordon, L.P.G. Forsley',
    year: 2009,
    journalKey: 'exp7Journal',
    paperUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0013468609002217',
    confidence: 'low',
    category: 'electrochemical',
    objectiveKey: 'exp7Objective',
    methodsKey: 'exp7Methods',
    resultsKey: 'exp7Results',
    replicationStatusKey: 'exp7Replication',
    significanceKey: 'exp7Significance',
    limitationsKey: 'exp7Limitations',
    apparatus: ['cr39_detectors', 'pd_ni_cathodes', 'electrolytic_cells'],
    measurements: ['particle_tracks', 'track_density', 'energy_analysis'],
    materials: ['cr39_plastic', 'palladium_nickel_cathodes', 'lithium_chloride'],
    conditions: {
      detector_distance: 'close_contact',
      electrolysis_time: 'extended',
      track_analysis: 'microscopic',
      controls: 'blank_detectors'
    }
  },
  {
    id: 'storms-2007',
    titleKey: 'exp8DetailTitle',
    authors: 'E. Storms',
    year: 2007,
    journalKey: 'exp8Journal',
    confidence: 'medium',
    category: 'gas-loading',
    objectiveKey: 'exp8Objective',
    methodsKey: 'exp8Methods',
    resultsKey: 'exp8Results',
    replicationStatusKey: 'exp8Replication',
    significanceKey: 'exp8Significance',
    limitationsKey: 'exp8Limitations',
    apparatus: ['seebeck_calorimeter', 'gas_loading_system', 'nickel_cathodes'],
    measurements: ['excess_heat', 'helium_production', 'isotopic_analysis'],
    materials: ['nickel_powder', 'hydrogen_gas', 'deuterium_gas'],
    conditions: {
      pressure: 'atmospheric',
      temperature: '200-400°C',
      loading: 'gas_phase',
      measurement: 'long_term'
    }
  },
  {
    id: 'berlinguette-2019',
    titleKey: 'exp9DetailTitle',
    authors: 'C.P. Berlinguette et al. (Multi-institution collaboration)',
    year: 2019,
    journalKey: 'exp9Journal',
    paperUrl: 'https://www.nature.com/articles/s41586-019-1256-6',
    confidence: 'high',
    category: 'electrochemical',
    objectiveKey: 'exp9Objective',
    methodsKey: 'exp9Methods',
    resultsKey: 'exp9Results',
    replicationStatusKey: 'exp9Replication',
    significanceKey: 'exp9Significance',
    limitationsKey: 'exp9Limitations',
    apparatus: ['multiple_calorimeters', 'neutron_detectors', 'gamma_spectrometers', 'mass_spectrometers'],
    measurements: ['excess_heat', 'nuclear_byproducts', 'helium_detection', 'tritium_analysis'],
    materials: ['palladium_cathodes', 'nickel_cathodes', 'various_electrolytes'],
    conditions: {
      institutions: '12_laboratories',
      protocols: 'standardized',
      duration: 'multi_month',
      controls: 'rigorous_blanks'
    }
  },
  {
    id: 'chen-2025',
    titleKey: 'exp10DetailTitle',
    authors: 'L. Chen, X. Zhang, M. Wang, Y. Liu',
    year: 2025,
    journalKey: 'exp10Journal',
    paperUrl: 'https://www.nature.com/articles/s41586-025-09042-7',
    confidence: 'high',
    category: 'electrochemical',
    objectiveKey: 'exp10Objective',
    methodsKey: 'exp10Methods',
    resultsKey: 'exp10Results',
    replicationStatusKey: 'exp10Replication',
    significanceKey: 'exp10Significance',
    limitationsKey: 'exp10Limitations',
    apparatus: ['beam_target_setup', 'electrochemical_loading', 'neutron_counters'],
    measurements: ['neutron_yield', 'enhancement_factor', 'loading_correlation'],
    materials: ['palladium_targets', 'deuterium_beam', 'electrolytic_solution'],
    conditions: {
      beam_energy: 'low_keV',
      loading_ratio: 'high_D_Pd',
      enhancement: '15_percent',
      reproducibility: 'consistent'
    }
  },
  {
    id: 'bang-corels-2026',
    titleKey: 'exp11DetailTitle',
    authors: 'W. Bang et al. (CoReLS, Korea)',
    year: 2026,
    journalKey: 'exp11Journal',
    paperUrl: 'https://www.nature.com/articles/s41598-026-35722-z',
    confidence: 'high',
    category: 'plasma',
    objectiveKey: 'exp11Objective',
    methodsKey: 'exp11Methods',
    resultsKey: 'exp11Results',
    replicationStatusKey: 'exp11Replication',
    significanceKey: 'exp11Significance',
    limitationsKey: 'exp11Limitations',
    apparatus: ['ti_sapphire_laser', 'cd4_cluster_jet', 'cd2_target', 'neutron_tof_detectors', 'mcp_ion_detector'],
    measurements: ['neutron_yield', 'ion_temperature', 'yield_enhancement_ratio'],
    materials: ['deuterated_methane_cd4', 'deuterated_polyethylene_cd2', 'aluminum_foil_substrate'],
    conditions: {
      laser_intensity: '1.2 × 10^19 W/cm²',
      pulse_duration: '25 fs',
      ion_temperature: '60-100 keV',
      enhancement: '2x-3.5x (55% coverage), up to 5.6x (full 4π)'
    }
  }
]