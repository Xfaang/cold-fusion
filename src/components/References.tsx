import { useLanguage } from '../LanguageContext'
import { Link } from 'react-router-dom'
import './References.css'

interface Reference {
  numbers: string
  text: string
  link: string
}

interface ReferenceCategory {
  titleKey: string
  references: Reference[]
}

const References = () => {
  const { t } = useLanguage()
  
  const referenceCategories: ReferenceCategory[] = [
    {
      titleKey: 'foundationalPapers',
      references: [
        {
          numbers: '[1][15][30][48][67]',
          text: 'Fleischmann & Pons - Electrochemically induced nuclear fusion of deuterium',
          link: 'https://lenr-canr.org/acrobat/Fleischmanelectroche.pdf'
        },
        {
          numbers: '[22][24][83]',
          text: 'Jones et al. (1989) - Observation of cold nuclear fusion in condensed matter',
          link: 'https://www.nature.com/articles/338737a0'
        },
        {
          numbers: '[26]',
          text: 'Lewis et al. (1989) - Searches for low-temperature nuclear fusion',
          link: 'https://authors.library.caltech.edu/records/nc5b2-d7936'
        },
        {
          numbers: '[29]',
          text: 'Fleischmann & Pons (1990) - Calorimetry of the Pd-D-D2O system',
          link: 'https://www.sciencedirect.com/science/article/pii/002207289080009U'
        },
        {
          numbers: '[32]',
          text: 'Pons & Fleischmann - Heat after Death',
          link: 'https://lenr-canr.org/acrobat/PonsSheatafterd.pdf'
        }
      ]
    },
    {
      titleKey: 'doeReviews',
      references: [
        {
          numbers: '[4][9][11][12][14][16][17][20][37][47][51][65][68][71][72][74][76]',
          text: 'DOE ERAB (1989) - Cold Fusion Research Report',
          link: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Cold_Fusion_Research_-_ERAB_-_1989.pdf'
        },
        {
          numbers: '[2][10][18][21][28][33][50][62][81][82][86]',
          text: 'DOE 2004 Review of Low Energy Nuclear Reactions',
          link: 'https://www.lenr-canr.org/acrobat/DOEreportofth.pdf'
        }
      ]
    },
    {
      titleKey: 'excessHeatStudies',
      references: [
        {
          numbers: '[5][13][31][38][64][66][78]',
          text: 'McKubre - Excess Power in Electrochemical Studies',
          link: 'https://lenr-canr.org/acrobat/McKubreMCHexcesspowe.pdf'
        },
        {
          numbers: '[35][58][59]',
          text: 'Berlinguette et al. (2019) - Revisiting the cold case of cold fusion',
          link: 'https://research.google/pubs/revisiting-the-cold-case-of-cold-fusion/'
        },
        {
          numbers: '[36][60]',
          text: 'Mizuno & Rothwell (2019) - Excess Heat from Palladium Deposited on Nickel',
          link: 'https://jcmns.scholasticahq.com/article/72489.pdf'
        },
        {
          numbers: '[41]',
          text: 'Miles - Anomalous effects in deuterated systems',
          link: 'https://lenr-canr.org/acrobat/MilesManomalousea.pdf'
        },
        {
          numbers: '[44]',
          text: 'Focardi et al. (1998) - Large excess heat production in Ni-H systems',
          link: 'https://newenergytimes.com/v2/library/1998/1998FocardiS-LargeExcessHeatProductionNiH.pdf'
        }
      ]
    },
    {
      titleKey: 'nuclearProducts',
      references: [
        {
          numbers: '[7][8][63][73]',
          text: 'Chen et al. (2025) - Electrochemical loading enhances deuterium fusion rates',
          link: 'https://www.nature.com/articles/s41586-025-09042-7'
        },
        {
          numbers: '[39][77]',
          text: 'Packham et al. - Production of tritium from D2O electrolysis',
          link: 'https://www.lenr-canr.org/acrobat/PackhamNJCproduction.pdf'
        },
        {
          numbers: '[40][75]',
          text: 'Gozzi et al. - X-ray, heat excess and 4He in the D/Pd system',
          link: 'https://www.lenr-canr.org/acrobat/GozziDxrayheatex.pdf'
        },
        {
          numbers: '[42]',
          text: 'Mosier-Boss et al. (2009) - Triple tracks in CR-39',
          link: 'https://pubmed.ncbi.nlm.nih.gov/18828003/'
        },
        {
          numbers: '[43][80]',
          text: 'Iwamura et al. - Observation of nuclear transmutation reactions',
          link: 'https://lenr-canr.org/acrobat/IwamuraYobservatiob.pdf'
        },
        {
          numbers: '[79]',
          text: 'Interpreting CR-39 Detectors Used in Pd/D Co-deposition',
          link: 'https://jcmns.org/article/72567-interpreting-cr-39-detectors-used-in-pd-d-co-deposition-nuclear-generated-tracks-or-artifacts.pdf'
        },
        {
          numbers: '[85]',
          text: 'MHI Technology Review - Transmutation reactions',
          link: 'https://www.mhi.com/technology/review/sites/g/files/jwhtju2326/files/media/pdf/e524106.pdf'
        }
      ]
    },
    {
      titleKey: 'theoreticalModels',
      references: [
        {
          numbers: '[3][34]',
          text: 'Storms (2010) - Status of cold fusion',
          link: 'https://www.researchgate.net/publication/46256682_Status_of_cold_fusion_2010'
        },
        {
          numbers: '[6][23][25][27][45][46][84]',
          text: 'Storms (2007) - The Science of Low Energy Nuclear Reaction',
          link: 'https://pubmed.ncbi.nlm.nih.gov/17748706/'
        },
        {
          numbers: '[49]',
          text: 'Widom & Larsen (2008) - Ultra low momentum neutron catalyzed nuclear reactions',
          link: 'https://ar5iv.org/pdf/0805.4538'
        },
        {
          numbers: '[52]',
          text: 'Hagelstein et al. (2014) - Current status of the theory and modeling effort',
          link: 'https://dspace.mit.edu/bitstream/handle/1721.1/103344/11012_2014_9988_ReferencePDF.pdf'
        },
        {
          numbers: '[53]',
          text: 'Takahashi - Physics of Cold Fusion by TSC Theory',
          link: 'https://jcmns.org/api/v1/articles/72286-physics-of-cold-fusion-by-tsc-theory.pdf'
        },
        {
          numbers: '[54]',
          text: 'Fleischmann - Possible theories of cold fusion',
          link: 'https://www.lenr-canr.org/acrobat/Fleischmanpossibleth.pdf'
        },
        {
          numbers: '[55]',
          text: 'Krivit (2024) - Recent developments in LENR research',
          link: 'https://arxiv.org/pdf/2406.11550'
        },
        {
          numbers: '[56]',
          text: 'Kalman & Keszthelyi (2009) - Nuclear processes in solids',
          link: 'https://link.springer.com/article/10.1007/s00016-009-0006-9'
        },
        {
          numbers: '[57][61]',
          text: 'Nature News (2019) - Revisiting cold fusion',
          link: 'https://www.nature.com/articles/d41586-019-01675-9'
        }
      ]
    },
    {
      titleKey: 'regulatoryDocuments',
      references: [
        {
          numbers: '[19][69]',
          text: 'NRC (2026) - Vision and Strategy: Regulating Fusion Machines',
          link: 'https://www.nrc.gov/docs/ML2534/ML25344A070.pdf'
        },
        {
          numbers: '[70]',
          text: 'IAEA - Towards a global regulatory approach for fusion safety',
          link: 'https://www.iaea.org/resources/member-states-side-events/towards-a-global-regulatory-approach-for-fusion-safety-and-security'
        }
      ]
    }
  ]

  const categoryTitles = {
    foundationalPapers: { en: 'Foundational Papers', pl: 'Prace Podstawowe' },
    doeReviews: { en: 'DOE Reviews', pl: 'Przeglądy DOE' },
    excessHeatStudies: { en: 'Excess Heat Studies', pl: 'Badania Nadmiaru Ciepła' },
    nuclearProducts: { en: 'Nuclear Products', pl: 'Produkty Jądrowe' },
    theoreticalModels: { en: 'Theoretical Models', pl: 'Modele Teoretyczne' },
    regulatoryDocuments: { en: 'Regulatory Documents', pl: 'Dokumenty Regulacyjne' }
  }

  const { language } = useLanguage()

  return (
    <section id="references" className="references">
      <h2>{t('referencesTitle')}</h2>
      {referenceCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="reference-category">
          <h3 className="reference-category-title">
            {categoryTitles[category.titleKey as keyof typeof categoryTitles][language]}
          </h3>
          {category.references.map((ref, index) => (
            <div key={index} className="reference">
              <span className="ref-number">{ref.numbers}</span>
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
        </div>
      ))}
      
      <div className="full-research-link-container">
        <Link to="/full-research" className="full-research-link">
          {t('fullResearchLink')}
        </Link>
      </div>
    </section>
  )
}

export default References