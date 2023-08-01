import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const titleList = timelineItemsList.map(item => ({title: item.title}))

  const renderChrono = () => (
    <Chrono
      mode="VERTICAL_ALTERNATING"
      items={titleList}
      theme={{
        primary: '#2b237c',
        secondary: '#fff',
        cardBgColor: '#fff',
        cardForeColor: 'yellow',
        titleColor: '#0967d2',
      }}
    >
      {timelineItemsList.map(eachItem =>
        eachItem.categoryId === 'COURSE' ? (
          <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
        ) : (
          <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
        ),
      )}
    </Chrono>
  )
  return (
    <div className="app-container">
      <h1 className="main-heading">
        MY JOURNEY OF <span>CCBP 4.0</span>
      </h1>
      {renderChrono()}
    </div>
  )
}

export default TimelineView
