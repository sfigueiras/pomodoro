import React from 'react'
import PropTypes from 'prop-types'
import LogItem from './LogItem'

function LogsList (props) {
  const { logs, onLogUpdated } = props

  return (
    <div>
        <ul>
          { 
            logs.map(log => {
              return (
                <LogItem
                  id={log.id}
                  key={log.id}
                  time={log.time}
                  timerType={log.timerType}
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

