const mysql = require('mysql2/promise');

const db = {connection: null};

(async () => {
  // create the connection to database
  db.connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cnpm_db',
    password: "quocthang1802"
  });
  console.log('Database connected!');
})();


module.exports = db;


// // get the client
// // const { query } = require('express');
// const mysql = require('mysql2/promise');

// const db = { connection: null };

// async function connect_database() {
//     // create the connection to database
//     db.connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'quocthang1802',
//         database: 'cnpm_db'
//     });
//     console.log('Database connected!');
// };

// (async () => {
//     await connect_database();
//     const result = await db.connection.execute('SELECT * FROM room');
//     console.log(result[0]);
// })();

// module.exports = db;