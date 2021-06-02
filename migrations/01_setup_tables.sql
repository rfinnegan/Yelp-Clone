CREATE DATABASE yelp_clone;
USE yelp_clone;
CREATE TABLE restaurants (restaurant_id INT PRIMARY KEY, 
restaurant_name VARCHAR (50), address VARCHAR (100), phone_number VARCHAR (10),
city VARCHAR (20), state VARCHAR (20), zip INT);

CREATE TABLE reviews (review_id INT PRIMARY KEY,
rating INT, review_text VARCHAR (300));

CREATE TABLE users (user_id INT PRIMARY KEY, user_name VARCHAR (20),
display_name VARCHAR (50), email_address VARCHAR (50), birthday DATE);

CREATE TABLE tags (tag_id INT PRIMARY KEY, name VARCHAR (10));

ALTER TABLE reviews
ADD user_id INT;

ALTER TABLE reviews
ADD tag_id INT;

CREATE TABLE reviews_tags (review_id INT, tag_id INT);


ALTER TABLE reviews 
ADD restaurant_id INT; 

ALTER TABLE reviews
MODIFY COLUMN review_id INT AUTO_INCREMENT;

ALTER TABLE tags
MODIFY COLUMN tag_id INT AUTO_INCREMENT;

ALTER TABLE users
MODIFY COLUMN user_id INT AUTO_INCREMENT;

ALTER TABLE restaurants
MODIFY COLUMN restaurant_id INT AUTO_INCREMENT;

ALTER TABLE reviews
DROP COLUMN tag_id;
