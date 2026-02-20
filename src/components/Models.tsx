const Models = () => {
  return (
    <section id="models">
      <div className="divider"></div>
      <h2>Models and Critiques</h2>
      <p>Three fundamental constraints challenge LENR claims:</p>
      <ul className="text-gray">
        <li>
          <strong>Coulomb barrier</strong> - Nuclear reactions require overcoming 
          electrostatic repulsion
        </li>
        <li>
          <strong>Missing commensurate products</strong> - Nuclear energy should produce 
          detectable nuclear byproducts
        </li>
        <li>
          <strong>Inconsistent signals</strong> - Results vary dramatically between experiments
        </li>
      </ul>
      
      <h3>Theory Families</h3>
      <ul className="no-bullets">
        <li style={{ margin: '0.8rem 0' }}>
          • <strong>Lattice screening</strong> <span className="confidence medium">Medium</span>
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            (for small effects)
          </span>
        </li>
        <li style={{ margin: '0.8rem 0' }}>
          • <strong>Condensed-matter nuclear science</strong> <span className="confidence low">Low</span>
        </li>
        <li style={{ margin: '0.8rem 0' }}>
          • <strong>Neutron-mediated</strong> <span className="confidence low">Low</span>
        </li>
        <li style={{ margin: '0.8rem 0' }}>
          • <strong>Muon-catalyzed fusion analogy</strong> <span className="confidence high">High</span>
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            (known)
          </span> / <span className="confidence low">Low</span>
          <span className="text-gray" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>
            (relevance)
          </span>
        </li>
      </ul>
    </section>
  )
}

export default Models