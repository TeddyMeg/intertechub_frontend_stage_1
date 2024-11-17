const express = require('express');

// path package is used to join and create a url
const path = require('path');
const app = express();

const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Middleware to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
// Root route serves HTML Page displayed to the user under public folder and index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  