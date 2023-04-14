import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateObjective } from '../actions';
import Objective from './Objective';
import { getPomodoros } from '../../logs/selectors';

class ObjectiveContainer extends Component {
  const;
  render() {
    const { handleChange, objective, pomodoros } = this.props;

    console.log(pomodoros);

    return (
      <Objective
        pomodoros={pomodoros.length}
        objective={objective}
        handleChange={handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  objective: state.objective.value,
  pomodoros: getPomodoros(state),
});

const mapDispatchToProps = dispatch => ({
  handleChange: event =>
    dispatch(updateObjective(parseInt(event.target.value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(ObjectiveContainer);
