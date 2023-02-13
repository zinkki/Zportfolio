const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.port || 8080;

app.use(express.json());
var cors = require('cors');
app.use(cors());

const db = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'1234',
	database:'zinkki',
});

app.get('/api/list', (req,res) => {
	const sqlQuery = 'SELECT * FROM board';
	db.query(sqlQuery, (err, result) => {
		res.send(result);
		console.log(result);
	});
})

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
})

