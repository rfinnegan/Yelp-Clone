module.exports.up = (knex) => knex.schema.raw(`
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);`);

module.exports.down = (knex) => {};
