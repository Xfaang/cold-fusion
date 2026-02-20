import { useState, useEffect } from 'react'
import './Sidebar.css'

const Sidebar = () => {
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
        <h3>Contents</h3>
        <ul>
          <li>
            <a 
              href="#introduction"
              className={activeSection === 'introduction' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#introduction')}
            >
              Introduction
            </a>
          </li>
          <li>
            <a 
              href="#timeline"
              className={activeSection === 'timeline' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#timeline')}
            >
              Historical Timeline
            </a>
          </li>
          <li>
            <a 
              href="#reproducibility"
              className={activeSection === 'reproducibility' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#reproducibility')}
            >
              Reproducibility
            </a>
          </li>
          <li>
            <a 
              href="#evidence"
              className={activeSection === 'evidence' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#evidence')}
            >
              Evidence Inventory
            </a>
            <ul>
              <li>
                <a 
                  href="#key-experiments"
                  className={activeSection === 'key-experiments' ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, '#key-experiments')}
                >
                  Key Experiments
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
              Models and Critiques
            </a>
          </li>
          <li>
            <a 
              href="#expectations"
              className={activeSection === 'expectations' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#expectations')}
            >
              What to Expect
            </a>
          </li>
          <li>
            <a 
              href="#experiments"
              className={activeSection === 'experiments' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#experiments')}
            >
              Decisive Experiments
            </a>
            <ul>
              <li>
                <a 
                  href="#flowchart"
                  className={activeSection === 'flowchart' ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, '#flowchart')}
                >
                  Experimental Flowchart
                </a>
              </li>
              <li>
                <a 
                  href="#schematics"
                  className={activeSection === 'schematics' ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, '#schematics')}
                >
                  Reactor Schematics
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
              References
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar