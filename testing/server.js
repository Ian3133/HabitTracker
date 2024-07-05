const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");
const app = express();
const port = 3001;

// Database connection configuration
const dbConfig = {
    host: "sql5.freesqldatabase.com",
    user: "sql5717567",
    password: "y8SKYruQCq",
    database: "sql5717567",
    port: 3306,
};

app.get('/tasks', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query("SELECT Task FROM TaskList");
        //[rows] = rows[0]
        await connection.end();

        res.json(rows); // Send the rows as JSON
    } catch (err) {
        console.error("Error retrieving tasks:", err);
        res.status(500).json({ error: 'Error retrieving tasks' });
    }
});

app.get('/', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query("SELECT Task FROM TaskList");
        await connection.end();

        res.sendFile(path.join(__dirname, 'tasks.html')); // Render tasks.html with data
    } catch (err) {
        console.error("Error retrieving tasks:", err);
        res.status(500).send('Error retrieving tasks');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
