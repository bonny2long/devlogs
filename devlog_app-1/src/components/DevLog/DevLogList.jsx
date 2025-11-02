import React from 'react';
import DevLogEntry from './DevLogEntry';

const DevLogList = ({ entries }) => (
  <>
    {entries.map((entry) => (
      <DevLogEntry key={entry.entryNumber} entry={entry} />
    ))}
  </>
);

export default DevLogList;