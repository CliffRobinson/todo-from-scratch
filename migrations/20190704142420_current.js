
exports.up = function(knex) {
  return knex.schema.createTable('current', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('description')
    table.integer('frequency')
    table.boolean('has_notes')
    table.string('notes') //nullable?
    table.integer('repetitions')
    table.boolean('has_deadline')
    table.timestamp('deadline') //nullable?
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('current')
};
