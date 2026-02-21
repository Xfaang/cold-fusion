import { useLanguage } from '../LanguageContext'

const Expectations = () => {
  const { t } = useLanguage()

  return (
    <section id="expectations">
      <div className="divider"></div>
      <h2>{t('expectationsTitle')}</h2>
      <p>
        <strong>{t('expectationsDOE')}</strong> {t('expectationsDOEText')}
      </p>
      
      <h3>{t('expectationsBaseline')}</h3>
      <p>
        {t('expectationsBaselineText')}
      </p>
      
      <h3>{t('expectationsBreakthrough')}</h3>
      <p>{t('expectationsBreakthroughIntro')}</p>
      <ul className="text-gray">
        <li>
          <strong>{t('expectations3to5')}</strong> {t('expectations3to5Text')}
        </li>
        <li>
          <strong>{t('expectations5to10')}</strong> {t('expectations5to10Text')}
        </li>
        <li>
          <strong>{t('expectations10to20')}</strong> {t('expectations10to20Text')}
        </li>
      </ul>
    </section>
  )
}

export default Expectations