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
          <div className="reactor-svg-container">
            <svg viewBox="0 0 400 300" className="reactor-diagram">
              {/* Thermal Jacket (Outer Dashed) */}
              <rect 
                x="40" y="60" width="200" height="150" 
                fill="none" 
                stroke="#ffaa00" 
                strokeWidth="2" 
                strokeDasharray="5,5" 
                rx="8"
                className="thermal-jacket-outline"
              />
              
              {/* Main Vessel Container */}
              <rect 
                x="60" y="80" width="160" height="110" 
                fill="rgba(6, 9, 26, 0.8)" 
                stroke="#00e5ff" 
                strokeWidth="2" 
                rx="4"
              />
              
              {/* Electrolyte Liquid Level with Wave Animation */}
              <rect x="62" y="120" width="156" height="68" fill="rgba(0, 229, 255, 0.15)">
                <animate attributeName="height" values="68;70;68" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="y" values="120;118;120" dur="3s" repeatCount="indefinite"/>
              </rect>
              
              {/* Wave surface animation */}
              <path 
                d="M 62 120 Q 90 115 118 120 T 174 120 Q 202 115 218 120" 
                fill="none" 
                stroke="#00e5ff" 
                strokeWidth="1" 
                opacity="0.6"
              >
                <animate attributeName="d" 
                  values="M 62 120 Q 90 115 118 120 T 174 120 Q 202 115 218 120;M 62 120 Q 90 125 118 120 T 174 120 Q 202 125 218 120;M 62 120 Q 90 115 118 120 T 174 120 Q 202 115 218 120" 
                  dur="2.5s" 
                  repeatCount="indefinite"/>
              </path>
              
              {/* Pd Cathode (Left, darker) */}
              <rect 
                x="85" y="130" width="8" height="50" 
                fill="#0066ff" 
                stroke="#004499" 
                strokeWidth="1"
              />
              
              {/* Pt Anode (Right, lighter) */}
              <rect 
                x="187" y="130" width="8" height="50" 
                fill="#66ccff" 
                stroke="#0099cc" 
                strokeWidth="1"
              />
              
              {/* D2 Bubbles from Cathode - Animated */}
              <g className="d2-bubbles">
                <circle cx="89" cy="160" r="2" fill="#00e5ff" opacity="0.7">
                  <animate attributeName="cy" values="160;100;160" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="89" cy="170" r="1.5" fill="#00e5ff" opacity="0.6">
                  <animate attributeName="cy" values="170;110;170" dur="3.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="89" cy="150" r="2.5" fill="#00e5ff" opacity="0.8">
                  <animate attributeName="cy" values="150;90;150" dur="4.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4.5s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* O2 Bubbles from Anode - Animated */}
              <g className="o2-bubbles">
                <circle cx="191" cy="165" r="2" fill="#66ccff" opacity="0.7">
                  <animate attributeName="cy" values="165;105;165" dur="3.8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="191" cy="145" r="1.8" fill="#66ccff" opacity="0.6">
                  <animate attributeName="cy" values="145;85;145" dur="4.2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="4.2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="191" cy="175" r="2.2" fill="#66ccff" opacity="0.8">
                  <animate attributeName="cy" values="175;115;175" dur="3.6s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3.6s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Sealed Head/Lid */}
              <rect 
                x="60" y="75" width="160" height="8" 
                fill="#334455" 
                stroke="#00e5ff" 
                strokeWidth="1" 
                rx="2"
              />
              
              {/* Gas Handling Tube */}
              <rect 
                x="138" y="50" width="4" height="30" 
                fill="#666677" 
                stroke="#00e5ff" 
                strokeWidth="1"
              />
              
              {/* Recombiner (Pt catalyst box) */}
              <rect 
                x="280" y="35" width="30" height="20" 
                fill="rgba(6, 9, 26, 0.8)" 
                stroke="#00e5ff" 
                strokeWidth="2" 
                rx="2"
              />
              
              {/* Gas tube connecting to recombiner */}
              <path 
                d="M 142 50 L 142 45 L 280 45" 
                fill="none" 
                stroke="#666677" 
                strokeWidth="3"
              />
              
              {/* Pressure Sensor on Top */}
              <circle 
                cx="200" cy="45" r="8" 
                fill="rgba(6, 9, 26, 0.8)" 
                stroke="#00e5ff" 
                strokeWidth="2"
              />
              <circle cx="200" cy="45" r="4" fill="#00e5ff" opacity="0.3"/>
              
              {/* Power Supply Connections */}
              <g>
                {/* Negative terminal to cathode */}
                <line x1="85" y1="210" x2="89" y2="180" stroke="#ff4444" strokeWidth="3"/>
                <circle cx="85" cy="215" r="4" fill="#ff4444"/>
                <text x="78" y="235" fontSize="10" fill="#ff4444" fontWeight="bold">-</text>
                
                {/* Positive terminal to anode */}
                <line x1="195" y1="210" x2="191" y2="180" stroke="#44ff44" strokeWidth="3"/>
                <circle cx="195" cy="215" r="4" fill="#44ff44"/>
                <text x="188" y="235" fontSize="10" fill="#44ff44" fontWeight="bold">+</text>
              </g>
              
              {/* Polish Labels */}
              <text x="140" y="275" fontSize="11" fill="#00e5ff" textAnchor="middle" fontWeight="bold">Elektrolit D₂O + LiOD</text>
              <text x="89" y="105" fontSize="10" fill="#0066ff" textAnchor="middle">Katoda Pd</text>
              <text x="191" y="105" fontSize="10" fill="#66ccff" textAnchor="middle">Anoda Pt</text>
              <text x="50" y="25" fontSize="10" fill="#ffaa00">Płaszcz termiczny</text>
              <text x="295" y="30" fontSize="10" fill="#00e5ff" textAnchor="middle">Rekombinator</text>
              <text x="200" y="30" fontSize="10" fill="#00e5ff" textAnchor="middle">Czujnik ciśnienia</text>
              <text x="89" y="95" fontSize="8" fill="#00e5ff">Bąbelki D₂</text>
              <text x="191" y="95" fontSize="8" fill="#66ccff">Bąbelki O₂</text>
              <text x="140" y="255" fontSize="10" fill="#77ff77">Zasilanie</text>
            </svg>
          </div>
        </div>
        
        <div className="schematic">
          <h4>{t('reactorNiH')}</h4>
          <div className="reactor-svg-container">
            <svg viewBox="0 0 400 240" className="reactor-diagram">
              {/* Insulation Layer (Outer) with hatching pattern */}
              <defs>
                <pattern id="hatchPattern" patternUnits="userSpaceOnUse" width="4" height="4">
                  <path d="M 0,4 l 4,-4 M -1,1 l 2,-2 M 3,5 l 2,-2" stroke="#666677" strokeWidth="0.5"/>
                </pattern>
              </defs>
              
              <rect 
                x="50" y="90" width="280" height="80" 
                fill="url(#hatchPattern)" 
                stroke="#666677" 
                strokeWidth="2" 
                rx="40"
              />
              
              {/* Main Reactor Tube (Inner) */}
              <rect 
                x="70" y="110" width="240" height="40" 
                fill="rgba(6, 9, 26, 0.8)" 
                stroke="#00e5ff" 
                strokeWidth="2" 
                rx="20"
              />
              
              {/* Ni mesh/powder inside (dotted fill) */}
              <g>
                {Array.from({length: 120}, (_, i) => (
                  <circle 
                    key={i}
                    cx={80 + (i % 20) * 11} 
                    cy={118 + Math.floor(i / 20) * 4} 
                    r="1" 
                    fill="#00e5ff" 
                    opacity="0.4"
                  />
                ))}
              </g>
              
              {/* Heating Element Coils */}
              <g className="heating-coils">
                {Array.from({length: 20}, (_, i) => (
                  <circle 
                    key={i}
                    cx={75 + i * 12} 
                    cy="130" 
                    r="15" 
                    fill="none" 
                    stroke="#ffaa00" 
                    strokeWidth="2" 
                    opacity="0.8"
                    className="heating-element"
                  />
                ))}
              </g>
              
              {/* Heating Element Glow Animation */}
              <style>
                {`
                  .heating-element {
                    animation: heatingGlow 2s ease-in-out infinite alternate;
                  }
                  @keyframes heatingGlow {
                    from { opacity: 0.6; }
                    to { opacity: 1.0; }
                  }
                `}
              </style>
              
              {/* Thermocouple TC1 */}
              <g>
                <line x1="120" y1="70" x2="120" y2="110" stroke="#cccccc" strokeWidth="2"/>
                <circle cx="120" cy="70" r="3" fill="#cccccc"/>
                <circle cx="120" cy="110" r="2" fill="#ffaa00"/>
              </g>
              
              {/* Thermocouple TC2 */}
              <g>
                <line x1="260" y1="70" x2="260" y2="110" stroke="#cccccc" strokeWidth="2"/>
                <circle cx="260" cy="70" r="3" fill="#cccccc"/>
                <circle cx="260" cy="110" r="2" fill="#ffaa00"/>
              </g>
              
              {/* Pressure Transducer */}
              <g>
                <rect x="320" y="115" width="20" height="20" fill="rgba(6, 9, 26, 0.8)" stroke="#00e5ff" strokeWidth="2" rx="2"/>
                <circle cx="330" cy="125" r="6" fill="none" stroke="#00e5ff" strokeWidth="1"/>
                <line x1="327" y1="125" x2="333" y2="125" stroke="#00e5ff" strokeWidth="1"/>
                <line x1="330" y1="122" x2="330" y2="128" stroke="#00e5ff" strokeWidth="1"/>
              </g>
              
              {/* Gas Inlet (H2/D2) with valve */}
              <g>
                <rect x="35" y="125" width="20" height="8" fill="#666677" stroke="#00e5ff" strokeWidth="1"/>
                <circle cx="25" cy="129" r="8" fill="none" stroke="#00e5ff" strokeWidth="2"/>
                <line x1="20" y1="129" x2="30" y2="129" stroke="#00e5ff" strokeWidth="2"/>
                <line x1="25" y1="124" x2="25" y2="134" stroke="#00e5ff" strokeWidth="2"/>
              </g>
              
              {/* Gas Outlet with valve */}
              <g>
                <rect x="325" y="125" width="20" height="8" fill="#666677" stroke="#00e5ff" strokeWidth="1"/>
                <circle cx="355" cy="129" r="8" fill="none" stroke="#00e5ff" strokeWidth="2"/>
                <line x1="350" y1="129" x2="360" y2="129" stroke="#00e5ff" strokeWidth="2"/>
                <line x1="355" y1="124" x2="355" y2="134" stroke="#00e5ff" strokeWidth="2"/>
              </g>
              
              {/* Power Supply to Heating Element */}
              <g>
                <line x1="190" y1="180" x2="190" y2="160" stroke="#ffaa00" strokeWidth="3"/>
                <circle cx="185" cy="185" r="4" fill="#ff4444"/>
                <circle cx="195" cy="185" r="4" fill="#44ff44"/>
                <text x="178" y="200" fontSize="10" fill="#ff4444" fontWeight="bold">-</text>
                <text x="188" y="200" fontSize="10" fill="#44ff44" fontWeight="bold">+</text>
              </g>
              
              {/* Polish Labels */}
              <text x="190" y="25" fontSize="11" fill="#666677" textAnchor="middle" fontWeight="bold">Izolacja</text>
              <text x="190" y="220" fontSize="10" fill="#ffaa00" textAnchor="middle">Element grzewczy</text>
              <text x="190" y="155" fontSize="10" fill="#00e5ff" textAnchor="middle">Proszek Ni</text>
              <text x="120" y="60" fontSize="10" fill="#cccccc" textAnchor="middle">Termopara TC1</text>
              <text x="260" y="60" fontSize="10" fill="#cccccc" textAnchor="middle">Termopara TC2</text>
              <text x="330" y="105" fontSize="10" fill="#00e5ff" textAnchor="middle">Czujnik</text>
              <text x="330" y="95" fontSize="10" fill="#00e5ff" textAnchor="middle">ciśnienia</text>
              <text x="25" y="150" fontSize="10" fill="#00e5ff" textAnchor="middle">Wlot</text>
              <text x="25" y="162" fontSize="10" fill="#00e5ff" textAnchor="middle">H₂/D₂</text>
              <text x="355" y="150" fontSize="10" fill="#00e5ff" textAnchor="middle">Wylot</text>
              <text x="355" y="162" fontSize="10" fill="#00e5ff" textAnchor="middle">gazu</text>
              <text x="190" y="210" fontSize="10" fill="#77ff77" textAnchor="middle">Zasilanie</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReactorDiagrams