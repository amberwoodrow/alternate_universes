var pg = require('pg');
// createdb alternate_universes
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/alternate_universes';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE universes(id SERIAL PRIMARY KEY, name VARCHAR(25) not null unique, description VARCHAR(250) not null)');
query.on('end', function() { client.end(); });

// Here we create a new instance of Client to interact with the database and then establish communication with it
// via the connect() method. We then set run a SQL query via the query() method.
// curl --data "name=testUniverse&description=whereAllGoodPeopleComeToTest" http://127.0.0.1:3000/alternate_universes