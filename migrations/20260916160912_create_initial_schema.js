exports.up = function(knex) {
  return knex.schema
    .createTable('events', (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.date('date').notNullable();
      table.string('place', 255).notNullable();
      table.integer('total_tickets').notNullable();
      table.integer('available_tickets').notNullable();
    })
    .createTable('reservations', (table) => {
      table.increments('id').primary();
      table.integer('event_id').unsigned().notNullable()
        .references('id').inTable('events').onDelete('CASCADE');
      table.string('user_name', 255).notNullable();
      table.integer('quantity').notNullable();
      table.timestamp('reservation_date').defaultTo(knex.fn.now());
    })
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.string('email', 255).unique().notNullable();
      table.string('password', 255).notNullable();
      table.enum('role', ['user', 'admin']).defaultTo('user');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('reservations')
    .dropTableIfExists('events')
    .dropTableIfExists('users');
};
