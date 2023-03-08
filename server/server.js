
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());
dotenv.config();


const PORT = process.env.PORT;

const db = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
	res.send('Hello react~');
})

app.get('/api/list', (req,res) => {
	const sqlQuery = 'SELECT * FROM pofoDB.board';
	db.query(sqlQuery, (err, result) => {
		res.send(result);
		console.log(result);
		if(err) console.log(err);
	});
})

app.listen(PORT, (req, res) => {
  console.log(`running on port ${PORT}`);
})

