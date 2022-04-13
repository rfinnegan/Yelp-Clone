module.exports.up = (knex) => knex.schema.raw('ALTER TABLE reviews ALTER COLUMN user_id DROP NOT NULL;');
module.exports.down = () => {};