// Create web server with express
// Create a new route to handle POST requests to the /comments endpoint
// Respond to the POST request with a JSON object, e.g. { "status": "success" }
// Start the server on port 4001
// The server should respond to a POST request at /comments with a status code of 200
// The server should respond to a GET request at /comments with a status code of 404
// The server should respond to any other type of request with a status code of 404
// Use the provided comments.js file

const express = require('express');
const app = express();
const port = 4001;

app.post('/comments', (req, res) => {
  res.status(200).json({ status: 'success' });
});

app.get('/comments', (req, res) => {
  res.status(404);
});

app.all('*', (req, res) => {
  res.status(404);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
