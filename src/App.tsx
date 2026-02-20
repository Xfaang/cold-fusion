import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
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
import References from './components/References'

function App() {
  return (
    <Router>
      <div className="app">
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
          <References />
        </main>
      </div>
    </Router>
  )
}

export default App