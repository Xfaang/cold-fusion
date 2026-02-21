import { useLanguage } from '../LanguageContext'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="glow">{t('heroTitle')}</h1>
        <p className="subtitle">
          {t('heroSubtitle')}
        </p>
      </div>
    </section>
  )
}

export default Hero