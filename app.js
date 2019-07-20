const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const sequelize = require('./db/sequelize');

const { Poll } = require('./models/index');


const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());


app.get('/tester', (req, res) => {
  console.log('tester_triggered')
  sequelize
  .authenticate()
  .then(() => {
    console.log('connecting to database just fine.')
  })
  .catch(() => {
    console.error('Unable to connect to postgres!!')
  })
  res.json('rester_riggered')
});

app.get('/polls/:id', (req, res) => {
  Poll.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(poll => res.json(poll))
});

app.post('/polls', (req, res) => {
  const requiredFields = [ 'name', 'question' ];
  requiredFields.forEach((field) => {
    if(!(field in req.body)) {
      const message = `Missing ${field} in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  })
  const pollData = { 
    name: req.body.name, 
    question: req.body.question
  }

  const optionalFields = [ 'yesVote', 'noVote' ];
  optionalFields.forEach(field => {
    if (field in req.body && req.body[field] !== undefined) {
      pollData[field] = req.body[field];
    }
  });

  return Poll
  .create(pollData)
  .then(poll => res.status(201).json(poll))
  .catch(err => res.status(500).send({ message: err.message }));

});

app.put('/polls/:id', (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id.toString() )) {
    const message = `Request path id ${req.params.id} and request body id ${req.body.id} must match!`;
    console.error(message);
    res.status(400).json*({ message: message });
  }

    const toUpdate = {};
    const updateableFields = [ 'name', 'question', 'yesVotes', 'noVotes' ];

    updateableFields.forEach(field => {
      if (field in req.body) {
        toUpdate[field] = req.body[field];
      }
    });

    return Poll
    .update(toUpdate, {
      where: {
        id: req.body.id
      }
    })
    .then(() => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Intoinal Soiver Oirrer' }));
});

app.delete('/polls/:id', (req, res) => {
  return Poll.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(poll => res.status(204).end())
  .catch(err => res.status(500).json({ message: 'Intoinal Soiver Oirrer' }));
});

app.use('*', (req, res) => res.status(404).json({ message: 'Not Found!' }));


module.exports = app;
