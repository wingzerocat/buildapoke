var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'pokemon'
});

var getItems = function(callback) {
  connection.query(`SELECT items.item, item_desc.short_effect FROM items inner join item_desc 
  where item_desc.id = items.id ORDER BY items.item`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAll = function(callback) {
  connection.query('SELECT * FROM dex ORDER BY dex.name', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectOne = function(num, callback) {
  connection.query(`SELECT * FROM dex where id = ${num}`, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


var getMoveSet = function(id, callback) {
  connection.query(
    `SELECT move_desc.short_effect, moves.name, moves.power, moves.pp, moves.accuracy
    FROM moves INNER JOIN moveset on moves.id = moveset.move_id
    INNER JOIN move_desc on moves.effect_id = move_desc.id
    WHERE moveset.pokemon_id=${id}
    ORDER BY moves.name
    `
  , function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

var writeSet = function(body, callback) {
  var params = [body.name, body.ability, body.ev_hp, body.ev_atk, body.ev_def, body.ev_spa, body.ev_spd, body.ev_spe,
    body.move_1, body.move_2, body.move_3, body.move_4]
  var query = `INSERT INTO spreads (pokemon, ability, ev_hp, ev_atk, ev_def, ev_spa, ev_spd, ev_spe, move_1, move_2, move_3, move_4)
  VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`
  connection.query(query, params, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.selectOne = selectOne;
module.exports.getMoveSet = getMoveSet;
module.exports.writeSet = writeSet;
module.exports.getItems = getItems;
