const Sequelize = require('sequelize');

const { sequelize } = require('../db/sequelize');

const Poll = sequelize.define('poll', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  question: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  yesVotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    field: 'yes_votes'
  },
  noVotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    field: 'no_votes'
  }
}, {
  tableName: 'polls',
  underscored: true,
  classMethods: {
    associate: function(models) {

    }
  }
 }
);

module.exports = {
  Poll
};
