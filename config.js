require('dotenv').config();

const env = process.env.NODE_ENV || 'development'

const DATABASE_URL = (
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  "poll_test"
);

const TEST_DATABASE_URL = (
  process.env.TEST_DATABASE_URL ||
  global.TEST_DATABASE_URL ||
  "poll_test_test"
);

const DATABASE_USER = process.env.DATABASE_USER;

const DATABASE_PWD = process.env.DB_USER_PWD;

module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env === 'test' ? TEST_DATABASE_URL : DATABASE_URL,
  DATABASE_USER: DATABASE_USER,
  DATABASE_PWD: DATABASE_PWD,
  SEQUELIZE_OPTIONS: { 
    logging: env === 'test' ? false : console.log,
    host: 'localhost',
    dialect: 'postgres'
  }
}



