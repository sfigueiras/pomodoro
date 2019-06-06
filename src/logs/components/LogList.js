import React from 'react'

function LogsList (props) {
  const { logs } = props.logs 

  return (
    <div>
        <ul>
          { 
            logs.map(log => {
              return (
                <li>{ log }</li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default LogsList

