const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    pathHTML = path.join(__dirname, '/views/home.html');
  res.sendFile(path.join(pathHTML));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});