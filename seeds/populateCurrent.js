
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('current').del()
    .then(function () {
      // Inserts seed entries
      return knex('current').insert([
        {id:1, user_id:1, description:"Set of 10 squats",       frequency:7, has_notes:true,  notes:"10kg",   repetitions:15, repetitions_completed:0,   has_deadline:false,   deadline:null},
        {id:2, user_id:1, description:"Meditate",               frequency:1, has_notes:false, notes:null,     repetitions:1,  repetitions_completed:0,    has_deadline:false,   deadline:null},
        {id:3, user_id:1, description:"Go to Westpac",          frequency:0, has_notes:false, notes:null,     repetitions:1,  repetitions_completed:0,    has_deadline:true,    deadline:1562205600},
        {id:4, user_id:1, description:"Personal trainer appt",  frequency:0, has_notes:false, notes:null,     repetitions:1,  repetitions_completed:0,    has_deadline:true,    deadline:1562540400}
      ]);
    });
};
