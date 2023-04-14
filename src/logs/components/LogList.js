import React from 'react';
import LogItem from './LogItem';
import styles from './LogList.module.css';
import mapOnObject from '../../utils/mapOnObject';

function LogsList(props) {
  const { groupedLogs, onLogUpdated, handleClear } = props;

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <h4 className={styles.title}>Logs</h4>
        <button onClick={handleClear}>Clear all</button>
      </div>
      <ul className={styles.list}>
        {mapOnObject(groupedLogs, (date, logs) => {
          return (
            <div key={date}>
              <h5>{date}</h5>
              {logs.map(log => {
                return (
                  <LogItem
                    id={log.id}
                    key={log.id}
                    hour={log.hour}
                    time={log.prettyTime}
                    timerType={log.prettyTimerType}
                    showDescription={log.showDescription}
                    completedAt={log.completedAt}
                    description={log.description}
                    onUpdate={onLogUpdated}
                  />
                );
              })}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default LogsList;
