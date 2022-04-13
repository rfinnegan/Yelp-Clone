require('dotenv').config({ path: '../.env' });
console.log(process.env.DB_CLIENT);
const config = {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      port: process.env.DB_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations',
      loadExtensions: ['.js', '.mjs', '.cjs'],
    },
    seeds: {
      directory: '../seeds',
      loadExtensions: ['.js', '.mjs', '.cjs'],
    },
    logQueries: (process.env.DB_LOG_QUERIES !== 'false'),
  };
  
  module.exports = config;
  