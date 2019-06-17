import React from 'react'

function FocusedTimeToday (props) {
  const { time } = props

  return (
    <p><b>{time}</b> focused minutes done today, keep on!</p>
  )
}

export default FocusedTimeToday
