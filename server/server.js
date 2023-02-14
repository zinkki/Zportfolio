
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mysql = require('mysql');

dotenv.config();

const PORT = process.env.PORT;

const db = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
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

