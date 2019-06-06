import React from 'react'
import PropTypes from 'prop-types'
import LogItem from './LogItem'

function LogsList (props) {
  const { logs, onLogUpdated, handleClear } = props

  return (
    <div>
      <button onClick={handleClear}>Clear all</button>
        <ul>
          { 
            logs.map(log => {
              return (
                <LogItem
                  id={log.id}
                  key={log.id}
                  time={log.prettyTime}
                  timerType={log.prettyTimerType}
                  description={log.description}
                  onUpdate={onLogUpdated} />
              )
            })
          }
        </ul>
    </div>
  )
}

LogsList.propTypes = {
  logs: PropTypes.array.isRequired
}

export default LogsList

