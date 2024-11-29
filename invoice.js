const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'payment-gateway-wallets',
    password: 'payment-gateway-wallets',
    database: 'payment-gateway-wallets'
});

db.connect();

app.use(express.json());

app.post('/create-invoice', (req, res) => {
    const { amount } = req.body;
    const invoiceLink = `https://your-crypto-payment-url.com/pay?amount=${amount}`;

    // Store invoice in the database
    db.query('INSERT INTO invoices (amount, link) VALUES (?, ?)', [amount, invoiceLink], (err, result) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.status(200).send({ invoiceLink });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
