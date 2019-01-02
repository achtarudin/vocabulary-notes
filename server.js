const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {  
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}, ${app.get('env')}`,
  );
});

if (app.get('env') === 'development') {
  console.log(app.get('env'));
} else {
  console.log(app.get('env'));
}

if (app.get('env') === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`, app.get('env')));