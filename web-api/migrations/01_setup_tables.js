module.exports.up = (knex) => knex.schema.raw(`
CREATE TABLE restaurants (restaurant_id SERIAL PRIMARY KEY, 
restaurant_name VARCHAR (50), address VARCHAR (100), phone_number VARCHAR (10),
city VARCHAR (20), state VARCHAR (20), zip INTEGER);

CREATE TABLE reviews (review_id SERIAL PRIMARY KEY,
rating INTEGER, review_text VARCHAR (300));

CREATE TABLE users (user_id SERIAL PRIMARY KEY , user_name VARCHAR (20),
display_name VARCHAR (50), email_address VARCHAR (50), birthday DATE);

CREATE TABLE tags (tag_id SERIAL PRIMARY KEY, name VARCHAR (10));

ALTER TABLE reviews
ADD user_id INTEGER;

CREATE TABLE reviews_tags (review_id INTEGER, tag_id INTEGER);

ALTER TABLE reviews 
ADD restaurant_id INTEGER;`);

module.exports.down = (knex) => {};