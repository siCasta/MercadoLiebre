const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  pathHTML = path.join(__dirname, '/views/home.html');
  res.sendFile(path.join(pathHTML));
});

app.get('/register', (req, res) => {
  pathHTML = path.join(__dirname, '/views/register.html');
  res.sendFile(path.join(pathHTML));
});

app.get('/login', (req, res) => {
  pathHTML = path.join(__dirname, '/views/login.html');
  res.sendFile(path.join(pathHTML));
});

app.post('/login', (req, res) => {
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});