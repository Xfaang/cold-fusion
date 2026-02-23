import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { LanguageProvider } from './LanguageContext'
import LanguageToggle from './components/LanguageToggle'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import StatusSummary from './components/StatusSummary'
import Timeline from './components/Timeline'
import Reproducibility from './components/Reproducibility'
import EvidenceTable from './components/EvidenceTable'
import DetailedExperiments from './components/DetailedExperiments'
import Models from './components/Models'
import Expectations from './components/Expectations'
import DecisiveExperiments from './components/DecisiveExperiments'
import ReactorDiagrams from './components/ReactorDiagrams'
import CTA from './components/CTA'
import References from './components/References'
import Footer from './components/Footer'
import FullResearch from './components/FullResearch'

const MainPage = () => (
  <div className="app">
    <LanguageToggle />
    <Sidebar />
    <main className="main-content">
      <Hero />
      <Introduction />
      <StatusSummary />
      <Timeline />
      <Reproducibility />
      <EvidenceTable />
      <DetailedExperiments />
      <Models />
      <Expectations />
      <DecisiveExperiments />
      <ReactorDiagrams />
      <CTA />
      <References />
      <Footer />
    </main>
  </div>
)

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/full-research" element={<FullResearch />} />
          <Route path="/caly-raport" element={<FullResearch />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App