import { useState, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'
import './Sidebar.css'

const Sidebar = () => {
  const { t, language } = useLanguage()
  const [activeSection, setActiveSection] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100) {
          current = section.getAttribute('id') || ''
        }
      })
      
      setActiveSection(current)
    }

    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', updateActiveSection)
    window.addEventListener('resize', handleResize)
    
    updateActiveSection()
    
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    if (window.innerWidth <= 1200) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        className="toc-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      <nav className={`toc ${isOpen ? 'open' : ''}`}>
        <h3>{t('contents')}</h3>
        <ul>
          <li>
            <a 
              href="#introduction"
              className={activeSection === 'introduction' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#introduction')}
            >
              {t('introduction')}
            </a>
          </li>
          <li>
            <a 
              href="#timeline"
              className={activeSection === 'timeline' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#timeline')}
            >
              {t('timeline')}
            </a>
          </li>
          <li>
            <a 
              href="#reproducibility"
              className={activeSection === 'reproducibility' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#reproducibility')}
            >
              {t('reproducibility')}
            </a>
          </li>
          <li>
            <a 
              href="#evidence"
              className={activeSection === 'evidence' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#evidence')}
            >
              {t('evidenceInventory')}
            </a>
            <ul>
              <li>
                <a 
                  href="#key-experiments"
                  className={activeSection === 'key-experiments' ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, '#key-experiments')}
                >
                  {t('keyExperiments')}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a 
              href="#detailed-experiments"
              className={activeSection === 'detailed-experiments' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#detailed-experiments')}
            >
              Detailed Experiments
            </a>
          </li>
          <li>
            <a 
              href="#models"
              className={activeSection === 'models' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#models')}
            >
              {t('modelsAndCritiques')}
            </a>
          </li>
          <li>
            <a 
              href="#expectations"
              className={activeSection === 'expectations' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#expectations')}
            >
              {t('whatToExpect')}
            </a>
          </li>
          <li>
            <a 
              href="#experiments"
              className={activeSection === 'experiments' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#experiments')}
            >
              {t('decisiveExperiments')}
            </a>
            <ul>
              <li>
                <a 
                  href="#flowchart"
                  className={activeSection === 'flowchart' ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, '#flowchart')}
                >
                  {t('experimentalFlowchart')}
                </a>
              </li>
              <li>
                <a 
                  href="#schematics"
                  className={activeSection === 'schematics' ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, '#schematics')}
                >
                  {t('reactorSchematics')}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a 
              href="#references"
              className={activeSection === 'references' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#references')}
            >
              {t('references')}
            </a>
          </li>
        </ul>
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,229,255,0.1)' }}>
          <a 
            href={language === 'pl' ? '/caly-raport' : '/full-research'}
            style={{ color: '#f0f4ff', textDecoration: 'none', fontSize: '0.85rem', display: 'block', padding: '0.3rem 0' }}
          >
            {language === 'pl' ? 'Pełny Raport Badawczy' : 'Full Research Report'} →
          </a>
          <a 
            href="https://xavier.xfaang.com/cold-fusion" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#00e5ff', textDecoration: 'none', fontSize: '0.85rem', display: 'block', padding: '0.3rem 0' }}
          >
            {t('partnership')} →
          </a>
          <a 
            href="https://github.com/Xfaang/cold-fusion" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#f0f4ff', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0' }}
          >
            <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
          <div style={{ padding: '0.5rem 0' }}>
            <iframe src="https://github.com/sponsors/Xfaang/button" title="Sponsor Xfaang" height="32" width="114" style={{ border: 0, borderRadius: '6px' }}></iframe>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar