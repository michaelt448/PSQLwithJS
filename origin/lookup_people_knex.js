const settings = require("./settings"); 
const  knex = require('knex')({
    client: 'pg',
    connection: settings
});
const [firstName,lastName,birthDate] = process.argv.slice(2);

knex('famouse_people').insert({
    first_name : firstName,
    last_name : lastName,
    birthdate :  birthDate
}).then((res) => {
    console.log(res.rows);  
    knex.destroy();  
});
