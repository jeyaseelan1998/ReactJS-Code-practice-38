import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  const renderTerminologies = () => (
    <ul className="course-terminologies-list">
      {tagsList.map(terminology => (
        <li className="terminology-item" key={terminology.id}>
          <p>{terminology.name}</p>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="course-timeline-card-container">
      <div className="course-title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="course-duration-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      {renderTerminologies()}
    </div>
  )
}

export default CourseTimelineCard
