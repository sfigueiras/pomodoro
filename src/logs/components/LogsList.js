import React from 'react'
import PropTypes from 'prop-types'

function LogsList (props) {
  const { logs } = props

  return (
    <div>
        <ul>
          { 
            logs.map((log, index) => {
              return (
                <li key={index}>
                  <p>{ log.time }</p>
                  <p>{ log.timerType }</p>
                  <p>{ log.description }</p>
                </li>
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

