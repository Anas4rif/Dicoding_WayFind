// const admin = require('firebase-admin');
// const serviceAccount = require('../../path/to/your/serviceAccountKey.json');

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

// module.exports = db;

const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',  // Change if your MySQL server is not running on localhost
    user: 'your-username',  // Your MySQL username
    password: 'your-password',  // Your MySQL password
    database: 'rekomendasi_stasiun'  // Your MySQL database name
});

module.exports = db;
