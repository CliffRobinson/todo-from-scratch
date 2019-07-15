
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('current').del()
    .then(function () {
      // Inserts seed entries
      return knex('current').insert([

        {id:2, user_id:1, description:"Meditate",               frequency:1, has_notes:false, notes:null,     completed:false,   has_children:false, has_parent: false, parent:null, has_deadline:false,   deadline:null},
        {id:3, user_id:1, description:"Go to Westpac",          frequency:0, has_notes:false, notes:null,     completed:true,   has_children:false, has_parent: false, parent:null, has_deadline:true,    deadline:1562205600},
        {id:4, user_id:1, description:"Personal trainer appt",  frequency:0, has_notes:false, notes:null,     completed:true,   has_children:false, has_parent: false, parent:null, has_deadline:true,    deadline:1562540400},
        {id:6, user_id:1, description:"Workout",                frequency:7, has_notes:false,  notes:null,   completed:true,  has_children:true, has_parent: false, parent:null, has_deadline:false,   deadline:null},
        {id:7, user_id:1, description:"Workout",                frequency:7, has_notes:false,  notes:null,   completed:false,  has_children:true, has_parent: false, parent:null, has_deadline:false,   deadline:null},
        {id:8, user_id:1, description:"Workout",                frequency:7, has_notes:false,  notes:null,   completed:false,  has_children:true, has_parent: false, parent:null, has_deadline:false,   deadline:null},
        {id:9, user_id:1, description:"Squats x10", frequency: 1, has_notes:true, notes:"10kg", completed: false,has_children:false, has_parent: true, parent:1, has_deadline:false, deadline:null},
        {id:10, user_id:1, description:"Squats x10", frequency: 1, has_notes:true, notes:"10kg", completed: false,has_children:false, has_parent: true, parent:1, has_deadline:false, deadline:null},
        {id:11, user_id:1, description:"Squats x10", frequency: 1, has_notes:true, notes:"10kg", completed: false,has_children:false, has_parent: true, parent:1, has_deadline:false, deadline:null},
      ]);
    });
};
