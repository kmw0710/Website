const express = require('express');
const parser = require('body-parser');
const path = require('path')
const db = require('./db/config');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
