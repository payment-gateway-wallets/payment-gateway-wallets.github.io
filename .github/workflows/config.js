const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'payment-gateway-wallets',
    password: 'payment-gateway-wallets',
    database: 'payment-gateway-wallets'
});

module.exports = connection;
