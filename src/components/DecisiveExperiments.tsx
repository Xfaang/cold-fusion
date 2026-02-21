import { useLanguage } from '../LanguageContext'
import './DecisiveExperiments.css'

const DecisiveExperiments = () => {
  const { t } = useLanguage()

  return (
    <section id="experiments">
      <div className="divider"></div>
      <h2>{t('experimentsTitle')}</h2>
      <p>
        {t('experimentsIntro')}
      </p>

      <h3 id="flowchart">{t('experimentsFlowchart')}</h3>
      <div className="flowchart">
        <div className="flow-stage">
          <div className="stage-number">01</div>
          <div className="stage-title">{t('experimentsStage1')}</div>
          <div className="stage-question">{t('experimentsStage1Q')}</div>
          <div className="stage-paths">
            <div className="stage-path no">{t('experimentsStage1No')}</div>
            <div className="stage-path yes">{t('experimentsStage1Yes')}</div>
          </div>
        </div>
        
        <div className="flow-stage">
          <div className="stage-number">02</div>
          <div className="stage-title">{t('experimentsStage2')}</div>
          <div className="stage-question">{t('experimentsStage2Q')}</div>
          <div className="stage-paths">
            <div className="stage-path no">{t('experimentsStage2No')}</div>
            <div className="stage-path yes">{t('experimentsStage2Yes')}</div>
          </div>
        </div>
        
        <div className="flow-stage">
          <div className="stage-number">03</div>
          <div className="stage-title">{t('experimentsStage3')}</div>
          <div className="stage-question">{t('experimentsStage3Q')}</div>
          <div className="stage-paths">
            <div className="stage-path no">{t('experimentsStage3No')}</div>
            <div className="stage-path yes">{t('experimentsStage3Yes')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DecisiveExperiments