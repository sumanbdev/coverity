// SQL Injection vulnerable example (Node.js / Express)
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

app.get('/user', (req, res) => {
  const username = req.query.username;
  
  db.get("SELECT * FROM users WHERE username = '" + username + "'", (err, row) => {
    if (err) {
      res.status(500).send("DB Error");
    } else {
      res.json(row);
    }
  });
});

app.listen(3000);
