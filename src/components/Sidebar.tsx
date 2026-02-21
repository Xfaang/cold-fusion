import { useState, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'
import './Sidebar.css'

const Sidebar = () => {
  const { t } = useLanguage()
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
        style={{ display: window.innerWidth <= 1200 ? 'block' : 'none' }}
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
            href="https://xavier.xfaang.com/cold-fusion" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#00e5ff', textDecoration: 'none', fontSize: '0.85rem', display: 'block', padding: '0.3rem 0' }}
          >
            {t('partnership')} →
          </a>
        </div>
      </nav>
    </>
  )
}

export default Sidebar