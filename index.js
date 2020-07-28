const express = require('express');
const app = express();
const server = require('http').createServer(app);
const {request} = require('./commons/utils');
const Router = require('./Routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', Router);

app.post('/login', async (req, res) => {
  const data = await request('login', 'POST', req.body, false, false);
  return res.json(
    data
  )
});

server.listen(3000);

