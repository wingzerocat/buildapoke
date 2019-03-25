DROP DATABASE IF EXISTS pokemon;

CREATE DATABASE pokemon;

USE pokemon;

DROP TABLE IF EXISTS moves;
DROP TABLE IF EXISTS moveset;
DROP TABLE IF EXISTS move_desc;
DROP TABLE IF EXISTS spreads;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS item_desc;

CREATE TABLE moves(
  id int NOT NULL,
  name varchar(50),
  type_id int,
  power int,
  pp int,
  accuracy int,
  damage_class_id int,
  effect_id int,
  effect_chance int,
  PRIMARY KEY (id)
);
CREATE INDEX idx_id on moves(id);
CREATE INDEX idx_effect on moves(effect_id);

CREATE TABLE moveset(
  id int NOT NULL,
  pokemon_id int,
  move_id int,
  PRIMARY KEY (id)
);
CREATE INDEX idx_num on moveset(pokemon_id);

CREATE TABLE move_desc(
  id int NOT NULL,
  short_effect TEXT,
  PRIMARY KEY (id)
);

CREATE INDEX idx_num on move_desc(id);

CREATE TABLE spreads(
  id int NOT NULL AUTO_INCREMENT,
  pokemon varchar(50),
  ability varchar(50),
  ev_hp int,
  ev_atk int,
  ev_def int,
  ev_spa int,
  ev_spd int,
  ev_spe int,
  move_1 varchar(50),
  move_2 varchar(50),
  move_3 varchar(50),
  move_4 varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE items(
  id int NOT NULL,
  item varchar(50),
  PRIMARY KEY(id)
);
CREATE TABLE item_desc(
  id int NOT NULL,
  short_effect text,
  PRIMARY KEY(id)
);

LOAD DATA LOCAL INFILE 'server/pokemon_moves.csv' INTO TABLE moveset FIELDS TERMINATED BY ',' IGNORE 1 LINES; 
LOAD DATA LOCAL INFILE 'server/moves.csv' INTO TABLE moves FIELDS TERMINATED BY ',' IGNORE 1 LINES; 
LOAD DATA LOCAL INFILE 'server/move_effect_prose.csv' INTO TABLE move_desc FIELDS TERMINATED BY ',' IGNORE 1 LINES; 
LOAD DATA LOCAL INFILE 'server/items.csv' INTO TABLE items FIELDS TERMINATED BY ',' IGNORE 1 LINES; 
LOAD DATA LOCAL INFILE 'server/item_prose.csv' INTO TABLE item_desc FIELDS TERMINATED BY ',' IGNORE 1 LINES; 
