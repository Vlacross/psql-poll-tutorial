const { PORT } = require('./config');
const app = require('./app');
const { sequelize } = require('./db/sequelize');

let server;

function runServer(port) {
  return new Promise((resolve, reject) => {
    try {
      server = app.listen(port, () => {
        console.log(`App is listening on port ${port}`)
        resolve();
      });
    }
    catch(err) {
      console.log(`Error starting Server ${err}`)
      reject(err);
    }
  });
};

function closeServer() {

  return new Promise((resolve, reject) => {
    sequelize.close();
    console.log('closing server');
    app.close(err => {
      if (err) {
        return reject(err)
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer(PORT)
  .catch(err => {
    console.log(`Can't Start Server: ${err}`);
    throw err;
  })
};

module.exports = { runServer, closeServer };


