const args = process.argv[2];
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famouse_people WHERE first_name = $1",[args], (err, result) => {
      console.log('Searching...');
    if (err) {
      return console.error("error running query", err);
    }
    listPeople(result.rows);
    client.end();
  });
});

function listPeople(people){
    console.log(`Found ${people.length} person(s) by the name of ${args}`)
    for(index in people) {
        let person = people[index];
        console.log(`- ${Number(index) + 1} : ${person.first_name} ${person.last_name}, born ${person.birthdate}`);
    }
}