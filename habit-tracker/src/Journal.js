// src/Journal.js
import React, { useState } from 'react';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      setEntries([...entries, newEntry]);
      setNewEntry('');
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      <textarea
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="will to SQL after"
      ></textarea>
      <button onClick={handleAddEntry}>Add Entry</button>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
