CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
    id INT not NULL auto_increment,
    burger_name VARCHAR(255) not null,
    devoured boolean DEFAULT false,
    PRIMARY key (id)
);