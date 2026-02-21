import { useLanguage } from '../LanguageContext'

const Introduction = () => {
  const { t } = useLanguage()

  return (
    <section id="introduction">
      <div className="divider"></div>
      <h2>{t('introduction')}</h2>
      <p>
        {t('introContent1')}
      </p>
      <p>
        {t('introContent2')}
      </p>
    </section>
  )
}

export default Introduction