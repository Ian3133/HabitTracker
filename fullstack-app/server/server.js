const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

 const dataPath = path.join(__dirname, '../data.txt');

// Endpoint to receive new journal entries
app.post('/addEntry', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Entry text must be provided' });
  }

  // Read existing entries from data.txt
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data file:', err);
      return res.status(500).json({ error: 'Error saving entry' });
    }

    let entries = [];
    try {
      entries = JSON.parse(data); // Parse existing entries as JSON array
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return res.status(500).json({ error: 'Error saving entry' });
    }

    // Add new entry to entries array
    entries.push({ text, completed: false });

    // Convert entries back to JSON string with proper formatting
    const entriesString = JSON.stringify(entries, null, 2);

    // Write updated entries back to data.txt
    fs.writeFile(dataPath, entriesString, (writeErr) => {
      if (writeErr) {
        console.error('Error writing to data file:', writeErr);
        return res.status(500).json({ error: 'Error saving entry' });
      }
      console.log('Entry saved successfully');
      res.status(200).json({ message: 'Entry saved successfully' });
    });
  });
});

// Endpoint to retrieve entries
app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, '../data.txt');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
    } else {
      res.send(data);
    }
  });
});

// app.get('/entries', (req, res) => {
//   fs.readFile(dataPath, 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).send('Error reading data file');
//     }
//     let entries = [];
//     try {
//       entries = JSON.parse(data); // Parse entries as JSON array
//     } catch (parseError) {
//       console.error('Error parsing JSON:', parseError);
//       return res.status(500).json({ error: 'Error retrieving entries' });
//     }
//     res.json(entries);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

