import { useLanguage } from '../LanguageContext'
import './EvidenceTable.css'

interface Experiment {
  titleKey: string
  measurementsKey: string
  outcomeKey: string
  confidence: 'high' | 'medium' | 'low' | 'very-low'
  paperUrl?: string
}

const EvidenceTable = () => {
  const { t } = useLanguage()

  const experiments: Experiment[] = [
    {
      titleKey: 'exp1Title',
      measurementsKey: 'exp1Measurements',
      outcomeKey: 'exp1Outcome',
      confidence: 'medium',
      paperUrl: 'https://www.sciencedirect.com/science/article/abs/pii/0022072889800063'
    },
    {
      titleKey: 'exp2Title',
      measurementsKey: 'exp2Measurements',
      outcomeKey: 'exp2Outcome',
      confidence: 'high',
      paperUrl: 'https://www.nature.com/articles/340525a0'
    },
    {
      titleKey: 'exp3Title',
      measurementsKey: 'exp3Measurements',
      outcomeKey: 'exp3Outcome',
      confidence: 'high',
      paperUrl: 'https://www.science.org/doi/10.1126/science.246.4931.793'
    },
    {
      titleKey: 'exp4Title',
      measurementsKey: 'exp4Measurements',
      outcomeKey: 'exp4Outcome',
      confidence: 'high',
      paperUrl: 'https://link.springer.com/article/10.1007/BF01051661'
    },
    {
      titleKey: 'exp5Title',
      measurementsKey: 'exp5Measurements',
      outcomeKey: 'exp5Outcome',
      confidence: 'medium',
      paperUrl: 'https://doi.org/10.1007/BF02425494'
    },
    {
      titleKey: 'exp6Title',
      measurementsKey: 'exp6Measurements',
      outcomeKey: 'exp6Outcome',
      confidence: 'low',
      paperUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0013468609002217'
    },
    {
      titleKey: 'exp7Title',
      measurementsKey: 'exp7Measurements',
      outcomeKey: 'exp7Outcome',
      confidence: 'high',
      paperUrl: 'https://www.nature.com/articles/s41586-019-1256-6'
    },
    {
      titleKey: 'exp8Title',
      measurementsKey: 'exp8Measurements',
      outcomeKey: 'exp8Outcome',
      confidence: 'high',
      paperUrl: 'https://www.nature.com/articles/s41586-025-09042-7'
    },
    {
      titleKey: 'exp9Title',
      measurementsKey: 'exp9Measurements',
      outcomeKey: 'exp9Outcome',
      confidence: 'high',
      paperUrl: 'https://www.nature.com/articles/s41598-026-35722-z'
    }
  ]

  const getConfidenceLabel = (confidence: string) => {
    switch (confidence) {
      case 'high': return t('confidenceHigh')
      case 'medium': return t('confidenceMedium')
      case 'low': return t('confidenceLow')
      case 'very-low': return t('confidenceVeryLow')
      default: return confidence
    }
  }

  return (
    <section id="evidence">
      <div className="divider"></div>
      <h2>{t('evidenceTitle')}</h2>
      <p>{t('evidenceIntro')}</p>
      
      <div className="evidence-dual-confidence">
        <table className="evidence-confidence-table">
          <thead>
            <tr>
              <th>{t('evidenceCategoryHeader')}</th>
              <th>{t('evidenceMeasurementHeader')}</th>
              <th>{t('evidenceInterpretationHeader')}</th>
              <th>{t('evidenceNoteHeader')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('evidenceHeat')}</td>
              <td><span className="confidence medium">{t('confidenceMedium')}</span></td>
              <td><span className="confidence low">{t('confidenceLow')}</span></td>
              <td className="text-gray">{t('evidenceHeatNote')}</td>
            </tr>
            <tr>
              <td>{t('evidenceNeutrons')}</td>
              <td><span className="confidence low">{t('confidenceLow')}</span></td>
              <td><span className="confidence low">{t('confidenceLow')}</span></td>
              <td className="text-gray">{t('evidenceNeutronsInterpNote')}</td>
            </tr>
            <tr>
              <td>{t('evidenceHelium')}</td>
              <td><span className="confidence low">{t('confidenceLow')}</span></td>
              <td><span className="confidence very-low">{t('confidenceVeryLow')}</span></td>
              <td className="text-gray">{t('evidenceHeliumNote')}</td>
            </tr>
            <tr>
              <td>{t('evidenceTritium')}</td>
              <td><span className="confidence low">{t('confidenceLow')}</span></td>
              <td><span className="confidence low">{t('confidenceLow')}</span></td>
              <td className="text-gray">{t('evidenceTritiumNote')}</td>
            </tr>
            <tr>
              <td>{t('evidenceTracks')}</td>
              <td><span className="confidence low">{t('confidenceLow')}</span></td>
              <td><span className="confidence very-low">{t('confidenceVeryLow')}</span></td>
              <td className="text-gray">{t('evidenceTracksNote')}</td>
            </tr>
            <tr>
              <td>{t('evidenceIsotopic')}</td>
              <td><span className="confidence very-low">{t('confidenceVeryLow')}</span></td>
              <td><span className="confidence very-low">{t('confidenceVeryLow')}</span></td>
              <td className="text-gray">{t('evidenceIsotopicNote')}</td>
            </tr>
            <tr>
              <td>{t('evidenceBeamTarget')}</td>
              <td><span className="confidence high">{t('confidenceHigh')}</span></td>
              <td><span className="confidence high">{t('confidenceHigh')}</span></td>
              <td className="text-gray">{t('evidenceBeamTargetNote')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="key-experiments">{t('evidenceKeyExperiments')}</h3>
      <div className="experiments-grid">
        {experiments.map((experiment, index) => (
          <div key={index} className="experiment-card">
            <div className="experiment-header">
              <div className="experiment-title">
                {experiment.paperUrl ? (
                  <a href={experiment.paperUrl} target="_blank" rel="noopener noreferrer">
                    {t(experiment.titleKey)} 🔗
                  </a>
                ) : (
                  t(experiment.titleKey)
                )}
              </div>
              <div className={`confidence ${experiment.confidence}`}>
                {getConfidenceLabel(experiment.confidence)}
              </div>
            </div>
            <div className="experiment-measurements">{t(experiment.measurementsKey)}</div>
            <div className="experiment-outcome">{t(experiment.outcomeKey)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EvidenceTable