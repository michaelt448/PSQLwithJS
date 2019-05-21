exports.up = function(knex, Promise) {
    return Promise.all ([knex.schema.createTable('milestone_w_foreign_key', function(table) {
        table.increments().unique('id'),
        table.string('description'),
        table.date('date_achieved'),
        table.integer('famouse_person_id'),
        table.foreign('famouse_person_id').references('famouse_people.id')
      })
  ]);
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all ([knex.schema.dropTable('milestone_w_foreign_key')]);
  };
