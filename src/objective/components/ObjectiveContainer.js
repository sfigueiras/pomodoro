import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateObjective } from '../actions'

class ObjectiveContainer extends Component {
  render () {
    const { objective, handleChange } = this.props
    return (
      <div>
        <label> Objective for today:</label>
        <input type="number" value={objective} onChange={handleChange} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  objective: state.objective.value
})

const mapDispatchToProps = dispatch => ({
  handleChange: (objective) => dispatch(updateObjective(objective))
})

export default connect (mapStateToProps, mapDispatchToProps) (ObjectiveContainer)
