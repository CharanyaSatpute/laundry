const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');  // Make sure this points to the correct file

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle the sign-up form submission
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Insert user data into the database
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving user data.');
    } else {
      res.send('User registered successfully!');
    }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
