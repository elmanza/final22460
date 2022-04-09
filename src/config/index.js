require("dotenv").config();

let config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    authJwtService: process.env.JWT_SECRET,
    expireTimeToken: process.env.JWT_EXPERIES_IN,
    algorithmToken: process.env.JWT_ALGORITHM,
    saltCrypt: process.env.SALT_ROUNDS,
}

let db = {
    dbUsername: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbDialect: process.env.DB_DIALECT
}

module.exports = { config, db };