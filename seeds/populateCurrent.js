
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('current').del()
    .then(function () {
      // Inserts seed entries
      return knex('current').insert([
        {id: 1, user_id: 1, description:"Set of 10 squats", frequency:7, has_notes:true},
      ]);
    });
};
