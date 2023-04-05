import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogsList from './LogList';
import { updateLog, clearAll } from '../actions';
import { getGroupedByDateLogs } from '../selectors';

class LogsContainer extends Component {
  onLogUpdated(event) {
    const { name, value } = event.target;

    this.props.dispatch(
      updateLog({
        // TODO: use another less hacky way
        id: event.target.dataset.id,
        [name]: value,
      }),
    );
  }

  handleClear() {
    this.props.dispatch(clearAll());
  }

  render() {
    const { groupedLogs } = this.props;
    return (
      <LogsList
        groupedLogs={groupedLogs}
        onLogUpdated={this.onLogUpdated.bind(this)}
        handleClear={this.handleClear.bind(this)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    groupedLogs: getGroupedByDateLogs(state),
  };
};

export default connect(mapStateToProps)(LogsContainer);
