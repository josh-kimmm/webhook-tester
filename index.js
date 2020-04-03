const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, resp) => {
  console.log('incoming webhook');
  console.log({ body: req.body, headers: req.headers }, '\n', '\n');

  console.log("THIS IS FOR JOSH TO LOOK AT MANG." + req.body);
  resp.status(200).end();
});

app.listen(3000, () => console.log('listening'));

