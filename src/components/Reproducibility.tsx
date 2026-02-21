import { useLanguage } from '../LanguageContext'

const Reproducibility = () => {
  const { t } = useLanguage()

  return (
    <section id="reproducibility">
      <div className="divider"></div>
      <h2>{t('reproducibilityTitle')}</h2>
      <p>
        {t('reproducibilityIntro')}
      </p>
      <ul className="text-gray">
        <li>{t('reproducibilityList1')}</li>
        <li>{t('reproducibilityList2')}</li>
        <li>{t('reproducibilityList3')}</li>
        <li>{t('reproducibilityList4')}</li>
        <li>{t('reproducibilityList5')}</li>
        <li>{t('reproducibilityList6')}</li>
      </ul>
      <p>
        {t('reproducibilityConclusion')}
      </p>
    </section>
  )
}

export default Reproducibility