const mysql = require('mysql2');

const pool  =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'ple8Nu@m'

});

module.exports = pool.promise();