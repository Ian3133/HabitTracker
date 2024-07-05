const express = require("express");
const mysql = require("mysql2/promise");
const dbConfig = require('./dbConfig'); // Adjust the path to your dbConfig
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

const array = [];

const fetchAndAssignTasks = async () => {
    const connection = await mysql.createConnection(dbConfig);
    try {
        const [rows] = await connection.query("SELECT * FROM TaskList");
        array.push(...rows); // Spread the rows into the array
        console.log("Tasks assigned to array:", array); // Optional: to verify tasks are assigned
    } catch (err) {
        console.error("Error retrieving tasks:", err);
    } finally {
        await connection.end();
    }
};

app.listen(port, async () => {
    await fetchAndAssignTasks(); // Fetch and assign tasks when the server starts
    console.log("Final tasks array:", array); // Print the array after tasks are assigned
    console.log(`Server running at http://localhost:${port}/`);
});