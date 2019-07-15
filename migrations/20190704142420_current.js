
exports.up = function(knex) {
  return knex.schema.createTable('current', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('description')
    table.integer('frequency')
    table.boolean('has_notes')
    table.string('notes') //nullable?
    table.boolean('completed')
    table.boolean('has_deadline')
    table.timestamp('deadline') //nullable?
    table.boolean('has_children')
    table.boolean('has_parent')
    table.integer('parent')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('current')
};
