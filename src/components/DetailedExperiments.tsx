import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import { topTenExperiments } from '../data/experiments'
import './DetailedExperiments.css'

const DetailedExperiments = () => {
  const { t } = useLanguage()
  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(null)
  
  const getConfidenceLabel = (confidence: string) => {
    switch (confidence) {
      case 'high': return t('confidenceHigh')
      case 'medium': return t('confidenceMedium')
      case 'low': return t('confidenceLow')
      case 'very-low': return t('confidenceVeryLow')
      default: return confidence
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'electrochemical': return 'Electrochemical'
      case 'gas-loading': return 'Gas Loading'
      case 'plasma': return 'Plasma'
      case 'theoretical': return 'Theoretical'
      default: return category
    }
  }

  return (
    <section id="detailed-experiments">
      <div className="divider"></div>
      <h2>Detailed Experiments Documentation</h2>
      <p>Comprehensive analysis of the top 10 most significant cold fusion/LENR experiments with methods, results, and replication status.</p>
      
      <div className="experiments-overview">
        <div className="experiments-grid-detailed">
          {topTenExperiments.map((experiment) => (
            <div 
              key={experiment.id} 
              className={`experiment-card-detailed ${selectedExperiment === experiment.id ? 'expanded' : ''}`}
              onClick={() => setSelectedExperiment(selectedExperiment === experiment.id ? null : experiment.id)}
            >
              <div className="experiment-header-detailed">
                <div className="experiment-title-detailed">
                  {experiment.paperUrl ? (
                    <a href={experiment.paperUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      {t(experiment.titleKey)} 🔗
                    </a>
                  ) : (
                    t(experiment.titleKey)
                  )}
                </div>
                <div className="experiment-badges">
                  <span className={`confidence ${experiment.confidence}`}>
                    {getConfidenceLabel(experiment.confidence)}
                  </span>
                  <span className="category">{getCategoryLabel(experiment.category)}</span>
                </div>
              </div>
              
              <div className="experiment-meta">
                <div className="authors">{experiment.authors}</div>
                <div className="journal-year">
                  <span className="journal">{t(experiment.journalKey)}</span>
                  <span className="year">({experiment.year})</span>
                </div>
              </div>
              
              {selectedExperiment === experiment.id && (
                <div className="experiment-details">
                  <div className="detail-section">
                    <h4>Objective</h4>
                    <p>{t(experiment.objectiveKey)}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Methods</h4>
                    <p>{t(experiment.methodsKey)}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Results</h4>
                    <p>{t(experiment.resultsKey)}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Replication Status</h4>
                    <p>{t(experiment.replicationStatusKey)}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Significance</h4>
                    <p>{t(experiment.significanceKey)}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Limitations</h4>
                    <p>{t(experiment.limitationsKey)}</p>
                  </div>
                  
                  <div className="technical-details">
                    <div className="tech-detail">
                      <h5>Apparatus</h5>
                      <ul>
                        {experiment.apparatus.map((item, index) => (
                          <li key={index}>{item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="tech-detail">
                      <h5>Key Measurements</h5>
                      <ul>
                        {experiment.measurements.map((item, index) => (
                          <li key={index}>{item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="tech-detail">
                      <h5>Materials</h5>
                      <ul>
                        {experiment.materials.map((item, index) => (
                          <li key={index}>{item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="tech-detail conditions">
                      <h5>Experimental Conditions</h5>
                      <ul>
                        {Object.entries(experiment.conditions).map(([key, value], index) => (
                          <li key={index}>
                            <strong>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</strong> {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="click-indicator">
                {selectedExperiment === experiment.id ? '▼ Click to collapse' : '▶ Click for details'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DetailedExperiments