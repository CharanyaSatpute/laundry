const sql = require('mssql');

// Configuration for your SQL Server
const dbConfig = {
  user: 'your_username', // Replace with your SQL Server username
  password: 'your_password', // Replace with your SQL Server password
  server: 'localhost', // Replace with your SQL Server hostname or IP address
  database: 'laundry', // Replace with your database name
  options: {
    encrypt: true, // Use this if you're connecting to Azure
    trustServerCertificate: true, // Use this if you're working locally
  },
};

// Create a pool to manage connections
const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then((pool) => {
    console.log('Connected to SQL Server.');
    return pool;
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    throw err;
  });

module.exports = {
  sql,
  poolPromise,
};
