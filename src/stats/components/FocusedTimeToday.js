import React from 'react'

function FocusedTimeToday (props) {
  const { time, prettyTime } = props

  return (
    <p><b>{prettyTime}</b> focused minutes done today, keep on!</p>
  )
}

export default FocusedTimeToday
