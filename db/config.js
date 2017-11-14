const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1205',
  database: 'website'
})

connection.connect(err => {
  if (err) {
    console.error(err, 'There was an ERROR in MySQL!')
  } else {
    console.log('MySQL connected!')
  }
});

module.exports = connection;