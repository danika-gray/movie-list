DROP database if exists movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movieTitles (
  movieID INT NOT NULL AUTO_INCREMENT,
  movieName VARCHAR(100),
  PRIMARY KEY (movieID)
);