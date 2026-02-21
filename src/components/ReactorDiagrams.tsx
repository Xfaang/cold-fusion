import { useLanguage } from '../LanguageContext'
import './ReactorDiagrams.css'

const ReactorDiagrams = () => {
  const { t } = useLanguage()

  return (
    <section id="schematics">
      <h3>{t('reactorTitle')}</h3>
      <div className="grid-2">
        <div className="schematic">
          <h4>{t('reactorPdD')}</h4>
          <div className="pd-cell">
            <div className="thermal-jacket"></div>
            <div className="cell-container">
              <div className="electrode anode"></div>
              <div className="electrode cathode"></div>
            </div>
            <div className="gas-tube"></div>
            <div className="label anode">Pd Cathode</div>
            <div className="label cathode">Pt Anode</div>
            <div className="label jacket">Thermal Jacket</div>
            <div className="label gas">Gas Handling</div>
          </div>
        </div>
        
        <div className="schematic">
          <h4>{t('reactorNiH')}</h4>
          <div className="ni-reactor">
            <div className="reactor-tube"></div>
            <div className="heater-coil"></div>
            <div className="thermocouple tc1"></div>
            <div className="thermocouple tc2"></div>
            <div className="pressure-gauge"></div>
            <div className="label tc1-label">TC1</div>
            <div className="label tc2-label">TC2</div>
            <div className="label pressure-label">Pressure</div>
            <div className="label heater-label">Heating Element</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReactorDiagrams