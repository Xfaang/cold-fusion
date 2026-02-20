import './EvidenceTable.css'

interface Experiment {
  title: string
  measurements: string
  outcome: string
  confidence: 'high' | 'medium' | 'low' | 'very-low'
}

const EvidenceTable = () => {
  const experiments: Experiment[] = [
    {
      title: 'Fleischmann & Pons 1989',
      measurements: 'Calorimetry + nuclear signals',
      outcome: 'Excess enthalpy reported',
      confidence: 'medium'
    },
    {
      title: 'Lewis et al. 1989',
      measurements: 'Calorimetry + neutrons + gammas + tritium + He',
      outcome: 'No evidence',
      confidence: 'high'
    },
    {
      title: 'Miskelly et al. 1989',
      measurements: 'Calorimetry critique',
      outcome: 'Artifacts can confound claims',
      confidence: 'high'
    },
    {
      title: 'Albagli et al. 1990',
      measurements: 'Constant-T calorimetry; neutron/γ; He; tritium',
      outcome: 'No excess power or fusion products',
      confidence: 'high'
    },
    {
      title: 'McKubre/SRI 1992+',
      measurements: 'Calorimetry + loading correlations',
      outcome: 'Excess power correlated with D/Pd',
      confidence: 'medium'
    },
    {
      title: 'Mosier-Boss et al. 2009',
      measurements: 'CR-39 track detectors',
      outcome: 'Triple tracks observed',
      confidence: 'low'
    },
    {
      title: 'Berlinguette et al. 2019',
      measurements: 'Multi-institution rigorous tests',
      outcome: 'No evidence of cold fusion',
      confidence: 'high'
    },
    {
      title: 'Chen et al. 2025',
      measurements: 'Neutron yield with Pd + electrochemical loading',
      outcome: '~15% neutron-rate enhancement',
      confidence: 'high'
    }
  ]

  return (
    <section id="evidence">
      <div className="divider"></div>
      <h2>Evidence Inventory</h2>
      <p>Categories of claimed observations and their confidence levels:</p>
      
      <ul className="no-bullets evidence-categories">
        <li>
          • Heat/excess heat <span className="confidence medium">Medium</span>
        </li>
        <li>
          • Neutrons/gammas <span className="confidence medium">Medium</span> 
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            (for small signals)
          </span>
        </li>
        <li>
          • Tritium <span className="confidence medium">Medium</span> 
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            (reported)
          </span> / <span className="confidence low">Low</span>
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            (nuclear origin)
          </span>
        </li>
        <li>
          • Helium-4 <span className="confidence low">Low-Medium</span>
        </li>
        <li>
          • CR-39 tracks <span className="confidence low">Low-Medium</span>
        </li>
        <li>
          • Isotopic shifts <span className="confidence low">Low</span>
        </li>
      </ul>

      <h3 id="key-experiments">Key Experiments</h3>
      <div className="experiments-grid">
        {experiments.map((experiment, index) => (
          <div key={index} className="experiment-card">
            <div className="experiment-header">
              <div className="experiment-title">{experiment.title}</div>
              <div className={`confidence ${experiment.confidence}`}>
                {experiment.confidence === 'very-low' ? 'Very Low' : 
                 experiment.confidence.charAt(0).toUpperCase() + experiment.confidence.slice(1)}
              </div>
            </div>
            <div className="experiment-measurements">{experiment.measurements}</div>
            <div className="experiment-outcome">{experiment.outcome}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EvidenceTable