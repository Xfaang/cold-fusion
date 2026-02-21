import { useLanguage } from '../LanguageContext'
import './Footer.css'

const Footer = () => {
  const { language } = useLanguage()
  const isPL = language === 'pl'

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-author">
          {isPL ? 'Stworzone przez ' : 'Built by '}
          <a href="https://xfaang.com" target="_blank" rel="noopener noreferrer">Xfaang</a>
        </p>
        <p className="footer-cookies">
          {isPL
            ? 'Ta strona nie używa ciasteczek ani nie śledzi użytkowników.'
            : 'This site does not use cookies or track users.'}
        </p>
        <p className="footer-copy">© 2026 Xfaang</p>
      </div>
    </footer>
  )
}

export default Footer
