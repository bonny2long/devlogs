import React from "react";
import DateBadge from "./DateBadge";
import EntryHeader from "./EntryHeader";
import EntryAuthor from "./EntryAuthor";
import EntryTopic from "./EntryTopic";
import EntryDescription from "./EntryDescription";

const DevLogEntry = ({ entry }) => (
  <div className="dev-log">
    <DateBadge date={entry.date} />
    <EntryHeader entryNumber={entry.entryNumber} week={entry.week} />
    <EntryAuthor name="Bonny Makaniankhondo" />
    <EntryTopic topic={entry.topic} />
    <EntryDescription description={entry.description} />
  </div>
);

export default DevLogEntry;
