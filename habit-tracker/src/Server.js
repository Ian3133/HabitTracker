const mysql = require("mysql2/promise")

const insertIntoDB = async () => {
    const connection = await mysql.createConnection({
        host: "sql5.freesqldatabase.com", 
        user: "sql5717567", 
        password: "y8SKYruQCq", 
        database: "sql5717567",
        port: 3306,
    });

try {
    await connection.query(
        "INSERT INTO TaskList (Task, Scratch) VALUES ('test 1', 1)"
    );


console.log("inserted");
}catch(e) {
    console.log(e);
}
};


insertIntoDB();