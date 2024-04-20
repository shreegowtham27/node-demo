'use strict';

const express = require('express');

// Constants
const PORT = 8500;
const HOST = '0.0.0.0';


// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get('/search', (req, res) => {
	  const query = req.query.q;
	  res.send(`<p>Search results for: ${query}</p>`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
