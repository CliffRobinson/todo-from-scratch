
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('current', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('description')
    table.integer('frequency')
    table.boolean('has-notes')
    table.string('notes')
    table.integer('repetitions')
    table.boolean('has-deadline')
    table.timestamp('deadline')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('current')
};
