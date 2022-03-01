const express = require('express');
const path = require('path');

const app = express();

// Directorio publico
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(3000);
