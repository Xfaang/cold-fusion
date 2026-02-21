import { useLanguage } from '../LanguageContext'

const Models = () => {
  const { t } = useLanguage()

  return (
    <section id="models">
      <div className="divider"></div>
      <h2>{t('modelsTitle')}</h2>
      <p>{t('modelsIntro')}</p>
      <ul className="text-gray">
        <li>
          <strong>{t('modelsCoulombBarrier')}</strong> {t('modelsCoulombDesc')}
        </li>
        <li>
          <strong>{t('modelsCommensurate')}</strong> {t('modelsCommensurateDesc')}
        </li>
        <li>
          <strong>{t('modelsInconsistent')}</strong> {t('modelsInconsistentDesc')}
        </li>
      </ul>
      
      <h3>{t('modelsTheoryFamilies')}</h3>
      <ul className="no-bullets">
        <li style={{ margin: '0.8rem 0' }}>
          • <strong>{t('modelsLatticeScreening')}</strong> <span className="confidence medium">{t('confidenceMedium')}</span>
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            {t('modelsLatticeNote')}
          </span>
        </li>
        <li style={{ margin: '0.8rem 0' }}>
          • <strong>{t('modelsCondensed')}</strong> <span className="confidence low">{t('confidenceLow')}</span>
        </li>
        <li style={{ margin: '0.8rem 0' }}>
          • <strong>{t('modelsNeutron')}</strong> <span className="confidence low">{t('confidenceLow')}</span>
        </li>
        <li style={{ margin: '0.8rem 0' }}>
          • <strong>{t('modelsMuon')}</strong> <span className="confidence high">{t('confidenceHigh')}</span>
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            {t('modelsMuonKnown')}
          </span> / <span className="confidence low">{t('confidenceLow')}</span>
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            {t('modelsMuonRelevance')}
          </span>
        </li>
      </ul>
    </section>
  )
}

export default Models