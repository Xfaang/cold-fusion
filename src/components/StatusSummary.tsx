import { useLanguage } from '../LanguageContext'
import './StatusSummary.css'

const StatusSummary = () => {
  const { t } = useLanguage()

  return (
    <section id="status-summary" className="status-summary">
      <h2>{t('statusSummaryTitle')}</h2>
      <div className="status-grid">
        <div className="status-card established">
          <h3>✅ {t('statusEstablishedTitle')}</h3>
          <ul>
            <li>{t('statusEstablished1')}</li>
            <li>{t('statusEstablished2')}</li>
            <li>{t('statusEstablished3')}</li>
            <li>{t('statusEstablished4')}</li>
          </ul>
        </div>
        <div className="status-card contested">
          <h3>⚠️ {t('statusContestedTitle')}</h3>
          <ul>
            <li>{t('statusContested1')}</li>
            <li>{t('statusContested2')}</li>
            <li>{t('statusContested3')}</li>
            <li>{t('statusContested4')}</li>
          </ul>
        </div>
        <div className="status-card decisive">
          <h3>🔬 {t('statusDecisiveTitle')}</h3>
          <ul>
            <li>{t('statusDecisive1')}</li>
            <li>{t('statusDecisive2')}</li>
            <li>{t('statusDecisive3')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StatusSummary