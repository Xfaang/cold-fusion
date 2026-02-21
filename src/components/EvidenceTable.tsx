import { useLanguage } from '../LanguageContext'
import './EvidenceTable.css'

interface Experiment {
  titleKey: string
  measurementsKey: string
  outcomeKey: string
  confidence: 'high' | 'medium' | 'low' | 'very-low'
}

const EvidenceTable = () => {
  const { t } = useLanguage()

  const experiments: Experiment[] = [
    {
      titleKey: 'exp1Title',
      measurementsKey: 'exp1Measurements',
      outcomeKey: 'exp1Outcome',
      confidence: 'medium'
    },
    {
      titleKey: 'exp2Title',
      measurementsKey: 'exp2Measurements',
      outcomeKey: 'exp2Outcome',
      confidence: 'high'
    },
    {
      titleKey: 'exp3Title',
      measurementsKey: 'exp3Measurements',
      outcomeKey: 'exp3Outcome',
      confidence: 'high'
    },
    {
      titleKey: 'exp4Title',
      measurementsKey: 'exp4Measurements',
      outcomeKey: 'exp4Outcome',
      confidence: 'high'
    },
    {
      titleKey: 'exp5Title',
      measurementsKey: 'exp5Measurements',
      outcomeKey: 'exp5Outcome',
      confidence: 'medium'
    },
    {
      titleKey: 'exp6Title',
      measurementsKey: 'exp6Measurements',
      outcomeKey: 'exp6Outcome',
      confidence: 'low'
    },
    {
      titleKey: 'exp7Title',
      measurementsKey: 'exp7Measurements',
      outcomeKey: 'exp7Outcome',
      confidence: 'high'
    },
    {
      titleKey: 'exp8Title',
      measurementsKey: 'exp8Measurements',
      outcomeKey: 'exp8Outcome',
      confidence: 'high'
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
      
      <ul className="no-bullets evidence-categories">
        <li>
          • {t('evidenceHeat')} <span className="confidence medium">{t('confidenceMedium')}</span>
        </li>
        <li>
          • {t('evidenceNeutrons')} <span className="confidence medium">{t('confidenceMedium')}</span> 
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            {t('evidenceNeutronsNote')}
          </span>
        </li>
        <li>
          • {t('evidenceTritium')} <span className="confidence medium">{t('confidenceMedium')}</span> 
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            {t('evidenceTritiumReported')}
          </span> / <span className="confidence low">{t('confidenceLow')}</span>
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            {t('evidenceTritiumNuclear')}
          </span>
        </li>
        <li>
          • {t('evidenceHelium')} <span className="confidence low">{t('confidenceLow')}-{t('confidenceMedium')}</span>
        </li>
        <li>
          • {t('evidenceTracks')} <span className="confidence low">{t('confidenceLow')}-{t('confidenceMedium')}</span>
        </li>
        <li>
          • {t('evidenceIsotopic')} <span className="confidence low">{t('confidenceLow')}</span>
        </li>
      </ul>

      <h3 id="key-experiments">{t('evidenceKeyExperiments')}</h3>
      <div className="experiments-grid">
        {experiments.map((experiment, index) => (
          <div key={index} className="experiment-card">
            <div className="experiment-header">
              <div className="experiment-title">{t(experiment.titleKey)}</div>
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