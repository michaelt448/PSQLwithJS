exports.up = function(knex, Promise) {
    return Promise.all ([knex.schema.createTable('milestone', function(table) {
        table.increments().unique('id'),
        table.string('description'),
        table.date('date_achieved')
      })
  ]);
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all ([knex.schema.dropTable('milestone')]);
  };