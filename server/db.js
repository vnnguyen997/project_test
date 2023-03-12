const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "PostGres456!",
    database: "newDB"
});

module.exports = pool;