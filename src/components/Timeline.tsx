import { useLanguage } from '../LanguageContext'
import './Timeline.css'

interface TimelineEvent {
  year: string
  contentKey: string
}

const Timeline = () => {
  const { t } = useLanguage()

  const events: TimelineEvent[] = [
    { year: '1989', contentKey: 'timeline1989_1' },
    { year: '1989', contentKey: 'timeline1989_2' },
    { year: '1989', contentKey: 'timeline1989_3' },
    { year: '1989', contentKey: 'timeline1989_4' },
    { year: '1990', contentKey: 'timeline1990_1' },
    { year: '1990', contentKey: 'timeline1990_2' },
    { year: '1992', contentKey: 'timeline1992' },
    { year: '2004', contentKey: 'timeline2004' },
    { year: '2019', contentKey: 'timeline2019_1' },
    { year: '2019', contentKey: 'timeline2019_2' },
    { year: '2025', contentKey: 'timeline2025' },
    { year: '2026', contentKey: 'timeline2026' }
  ]

  return (
    <section id="timeline">
      <div className="divider"></div>
      <h2>{t('timelineTitle')}</h2>
      <p>
        {t('timelineIntro')}
      </p>
      
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">{t(event.contentKey)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline