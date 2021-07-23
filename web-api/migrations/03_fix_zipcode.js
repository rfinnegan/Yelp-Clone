module.exports.up = (knex) => knex.schema.raw(`ALTER TABLE restaurants ALTER COLUMN zip TYPE VARCHAR (10)`);
module.exports.down = () => {};