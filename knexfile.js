const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'ticket_user',
      password: process.env.DB_PASSWORD || 'ticket_pass',
      database: process.env.DB_NAME || 'ticket_db',
    },
    migrations: {
      directory: './migrations',
    },
  },
};
