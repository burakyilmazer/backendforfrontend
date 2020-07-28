const express = require('express');
const app = express();
const path = require('path');
const basename = path.basename(__filename);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('fs')
    .readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.slice(-3) === '.js'
      );
    }).forEach((file) => {
      app.use(`/${file.split('.')[0]}`, require(__dirname + path.sep + file));
  });

module.exports = app;