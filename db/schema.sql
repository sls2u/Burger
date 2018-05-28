CREATE DATABASE burgers_db;

USE burgers_db;


-- Table Creation
CREATE TABLE burgers(
id INTEGER NOT NULL AUTO_INCREMENT,
Burger_Name VARCHAR(20),
Devoured BOOLEAN DEFAULT FALSE,
primary key (id)
);
