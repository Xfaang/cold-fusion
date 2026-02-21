import { useLanguage } from '../LanguageContext'
import './CTA.css'

const CTA = () => {
  const { language } = useLanguage()
  const isPL = language === 'pl'

  return (
    <section className="cta-section" id="kontakt">
      <div className="cta-glow"></div>
      <h2>{isPL ? 'Zainteresowany Współpracą?' : 'Interested in Collaboration?'}</h2>
      <p className="cta-text">
        {isPL
          ? 'Xfaang specjalizuje się w komercjalizacji przełomowych technologii. Jeśli Twoja firma jest gotowa na projekt badawczy w energetyce — porozmawiajmy.'
          : 'Xfaang specializes in commercializing breakthrough technologies. If your company is ready for an energy research project — let\'s talk.'}
      </p>
      <a href="https://xavier.xfaang.com/cold-fusion" className="cta-button">
        {isPL ? 'Dowiedz się więcej →' : 'Learn More →'}
      </a>
      <div className="cta-contact">
        <a href="mailto:pz@xfaang.com">pz@xfaang.com</a>
        <span className="cta-divider">|</span>
        <a href="tel:+48600939076">+48 600 939 076</a>
      </div>
    </section>
  )
}

export default CTA
