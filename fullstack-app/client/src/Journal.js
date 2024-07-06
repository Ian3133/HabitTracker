import React, { useState } from 'react';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      const entryObject = { text: newEntry, completed: false }; // Create entry object
      saveEntryToServer(entryObject); // Send new entry object to server
      setEntries([...entries, entryObject]);
      setNewEntry('');
    }
  };

  const saveEntryToServer = async (entry) => {
    try {
      const response = await fetch('http://localhost:3001/addEntry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  };

  return (
    <div>
      <h3>New Entry</h3>
      <textarea
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="Task to add"
      ></textarea>
      <button onClick={handleAddEntry}>Add Task</button>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
