const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

// Connect to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'food_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Endpoint to update price
app.post('/update-price', (req, res) => {
    const { item, price } = req.body;

    if (!item || !price) {
        return res.status(400).send('Invalid request data');
    }

    const query = 'UPDATE FoodItems SET price = ? WHERE name = ?';
    db.query(query, [price, item], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        res.send('Price updated successfully');
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
