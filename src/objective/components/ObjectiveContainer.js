import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateObjective } from '../actions'
import Objective from './Objective'

class ObjectiveContainer extends Component {
  render () {
    const { objective, handleChange } = this.props
    return (
      <Objective
        objective={objective}
        handleChange={handleChange}
        />
    )
  }
}

const mapStateToProps = state => ({
  objective: state.objective.value
})

const mapDispatchToProps = dispatch => ({
  handleChange: (event) => dispatch(updateObjective(parseInt(event.target.value)))
})

export default connect (mapStateToProps, mapDispatchToProps) (ObjectiveContainer)
