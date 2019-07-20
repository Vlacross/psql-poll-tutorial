const Sequelize = require('sequelize');

const { DATABASE_URL, SEQUELIZE_OPTIONS, DATABASE_USER, DATABASE_PWD } = require('../config');
console.log('sqlz DBURL', DATABASE_URL)

const sequelize = new Sequelize(DATABASE_URL, DATABASE_USER, DATABASE_PWD, SEQUELIZE_OPTIONS);

sequelize.authenticate()
  .then(() => {
    console.log('connecting to database just fine.')
  })
  .catch((err) => {
    console.error(`Unable to connect to postgres @ ${DATABASE_URL} as${DATABASE_USER} `)
    console.log(err)
  })

module.exports = {
  sequelize
};

