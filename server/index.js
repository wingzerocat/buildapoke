var express = require('express');
var bodyParser = require('body-parser');
var pokes = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/pokes', function (req, res) {
  console.log('hello');
  pokes.selectAll(function(err, data) {
    if(err) {
      console.log('done');
      res.sendStatus(500);
    } else {
      console.log('done no error');
      res.json(data);
    }
  });
});

app.get('/poke/:id', function(req, res) {
  var id = req.params.id;
  pokes.selectOne(id, function(err, data) {
    if(err) {
      console.log('done');
      res.sendStatus(500);
    } else {
      console.log('done no error');
      res.json(data);
    }
  });
});

app.get('/moves/:id', function(req, res) {
  var id = req.params.id;
  pokes.getMoveSet(id, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
});

app.get('/items', function(req, res) {
  pokes.getItems(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
});

app.post('/set', function(req, res) {
  pokes.writeSet(req.body, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.end();
    }
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

