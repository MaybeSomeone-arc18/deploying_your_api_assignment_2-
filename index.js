require('dotenv').config();
const express = require('express');
const { resolve } = require('path');

const app = express();
const port = process.env.PORT || 3010; // Use the PORT from .env or default to 3010

app.use(express.static('static'));

// Example route to check IS_ADMIN
app.get('/admin', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true';
  if (isAdmin) {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Access denied! Admins only." });
  }
});

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
