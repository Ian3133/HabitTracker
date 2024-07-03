const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

// Database connection configuration
const dbConfig = {
    host: "sql5.freesqldatabase.com",
    user: "sql5717567",
    password: "y8SKYruQCq",
    database: "sql5717567",
    port: 3306,
};

// Function to fetch tasks and print them
const fetchAndPrintTasks = async () => {
    const connection = await mysql.createConnection(dbConfig);
    try {
        const [rows] = await connection.query("SELECT * FROM TaskList");
        console.log("Tasks:", rows);
    } catch (err) {
        console.error("Error retrieving tasks:", err);
    } finally {
        await connection.end();
    }
};

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    fetchAndPrintTasks(); // Fetch and print tasks when the server starts
});
