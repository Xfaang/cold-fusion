import './DecisiveExperiments.css'

const DecisiveExperiments = () => {
  return (
    <section id="experiments">
      <div className="divider"></div>
      <h2>Decisive Experiments</h2>
      <p>
        A systematic approach to resolving the LENR question requires rigorous 
        experimental protocols and multi-stage validation.
      </p>

      <h3 id="flowchart">Experimental Flowchart</h3>
      <div className="flowchart">
        <div className="flow-stage">
          <div className="stage-number">01</div>
          <div className="stage-title">Audit-grade calorimetry</div>
          <div className="stage-question">Excess &gt; 10x chemical?</div>
          <div className="stage-paths">
            <div className="stage-path no">No → Conclude no evidence</div>
            <div className="stage-path yes">Yes → Stage 2</div>
          </div>
        </div>
        
        <div className="flow-stage">
          <div className="stage-number">02</div>
          <div className="stage-title">Simultaneous nuclear ash closure</div>
          <div className="stage-question">Commensurate nuclear products detected?</div>
          <div className="stage-paths">
            <div className="stage-path no">No → Tighten controls, repeat</div>
            <div className="stage-path yes">Yes → Stage 3</div>
          </div>
        </div>
        
        <div className="flow-stage">
          <div className="stage-number">03</div>
          <div className="stage-title">Multi-lab replication</div>
          <div className="stage-question">Independent replication ≥2 labs?</div>
          <div className="stage-paths">
            <div className="stage-path no">No → Effect not controllable</div>
            <div className="stage-path yes">Yes → Engineering path</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DecisiveExperiments