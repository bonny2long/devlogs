import React, { useState, useEffect } from "react";
import DevLogList from "./DevLogList";
import ToggleButton from "./ToggleButton";
import { devLogData } from "../../data/devLogData";

const MainContent = () => {
  const [showAll, setShowAll] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const sortedEntries = [...devLogData].sort(
      (a, b) => b.entryNumber - a.entryNumber
    );
    setEntries(sortedEntries);
  }, []);

  const entriesToShow = showAll ? entries : entries.slice(0, 1);

  const toggleEntries = () => {
    setShowAll(!showAll);
  };

  return (
    <main className="main-content">
      <h2 className="main-title">My DevLog</h2>
      <DevLogList entries={entriesToShow} />
      <ToggleButton showAll={showAll} onClick={toggleEntries} />
    </main>
  );
};

export default MainContent;
