import './Timeline.css'

interface TimelineEvent {
  year: string
  content: string
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    { year: '1989', content: 'Fleischmann & Pons Pd-D electrolysis claim' },
    { year: '1989', content: 'Jones et al. small neutron signal (Nature)' },
    { year: '1989', content: 'Lewis et al. null results (Nature)' },
    { year: '1989', content: 'DOE ERAB report - evidence not persuasive' },
    { year: '1990', content: 'Fleischmann & Pons expand calorimetry claims' },
    { year: '1990', content: 'Albagli et al. multi-modal null search' },
    { year: '1992', content: 'McKubre/SRI excess power correlations with D/Pd loading' },
    { year: '2004', content: 'DOE LENR review - evidence inconclusive' },
    { year: '2019', content: 'Nature multi-institution re-evaluation - no evidence' },
    { year: '2019', content: 'Mizuno reports Pd-on-Ni excess heat' },
    { year: '2025', content: 'Nature: electrochemical D-loading boosts beam-target fusion neutron yield (~15%)' },
    { year: '2026', content: 'NRC publishes fusion regulation strategy' }
  ]

  return (
    <section id="timeline">
      <div className="divider"></div>
      <h2>Historical Timeline</h2>
      <p>
        From Fleischmann & Pons 1989 through DOE reviews (1989, 2004), SRI/McKubre work, 
        2019 Nature re-evaluation, 2025 Nature bridge result, to 2026 NRC fusion regulation.
      </p>
      
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">{event.content}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline