import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { LanguageProvider } from './LanguageContext'
import LanguageToggle from './components/LanguageToggle'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Timeline from './components/Timeline'
import Reproducibility from './components/Reproducibility'
import EvidenceTable from './components/EvidenceTable'
import Models from './components/Models'
import Expectations from './components/Expectations'
import DecisiveExperiments from './components/DecisiveExperiments'
import ReactorDiagrams from './components/ReactorDiagrams'
import CTA from './components/CTA'
import References from './components/References'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <LanguageToggle />
          <Sidebar />
          <main className="main-content">
            <Hero />
            <Introduction />
            <Timeline />
            <Reproducibility />
            <EvidenceTable />
            <Models />
            <Expectations />
            <DecisiveExperiments />
            <ReactorDiagrams />
            <CTA />
            <References />
            <Footer />
          </main>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App