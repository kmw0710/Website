const express = require('express');
const parser = require('body-parser');
const path = require('path')
const db = require('./db/config');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log(`Server running, listening on ${app.get('port')}...`);	
});
