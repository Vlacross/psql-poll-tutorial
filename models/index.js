const { Poll } = require('./poll');

const db = {
  Poll
};


Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;

