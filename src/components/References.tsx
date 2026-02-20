import './References.css'

interface Reference {
  number: string
  text: string
  link: string
}

const References = () => {
  const references: Reference[] = [
    {
      number: '[1]',
      text: 'Fleischmann & Pons - Electrochemically induced nuclear fusion of deuterium',
      link: 'https://lenr-canr.org/acrobat/Fleischmanelectroche.pdf'
    },
    {
      number: '[2]',
      text: 'Lewis et al. (Nature) - Searches for low-temperature nuclear fusion of deuterium',
      link: 'https://www.nature.com/articles/340525a0'
    },
    {
      number: '[4]',
      text: 'Berlinguette et al. 2019 (Nature) - Revisiting the cold case of cold fusion',
      link: 'https://www.nature.com/articles/s41586-019-1256-6'
    },
    {
      number: '[5]',
      text: 'Chen et al. 2025 (Nature) - Enhanced D-D fusion neutron yield via electrochemical loading',
      link: 'https://www.nature.com/articles/s41586-025-09042-7'
    },
    {
      number: '[6]',
      text: 'DOE ERAB Report - Report of the Energy Research Advisory Board to the U.S. DOE',
      link: 'https://lenr-canr.org/acrobat/ERABreportofth.pdf'
    },
    {
      number: '[9]',
      text: 'DOE 2004 Review - Review of Low Energy Nuclear Reactions',
      link: 'https://www.lenr-canr.org/acrobat/DOEreportofth.pdf'
    }
  ]

  return (
    <section id="references" className="references">
      <h2>References</h2>
      {references.map((ref, index) => (
        <div key={index} className="reference">
          <span className="ref-number">{ref.number}</span>
          <span className="ref-text">{ref.text}</span>
          <a 
            href={ref.link} 
            className="ref-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {ref.link.replace('https://', '').replace('www.', '')}
          </a>
        </div>
      ))}
    </section>
  )
}

export default References