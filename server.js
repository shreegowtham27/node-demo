'use strict';

const express = require('express');

// Constants
const PORT = 8500;
const HOST = '0.0.0.0';



// app.post('/message', (req, res) => {
//   const message = req.body.message; 
//   res.send(`<p>Message received: ${message}</p>`); 
// });


// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile("templates/index.html", { root: __dirname });
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
