import React from "react";

const EntryHeader = ({ entryNumber, week }) => (
  <h3>
    Entry #{entryNumber} - {week}
  </h3>
);

export default EntryHeader;
