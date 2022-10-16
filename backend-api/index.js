const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8080;
const routes = require('./routes/route');
const db = require('./knex/knex');


// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(morgan('combined'));

app.use('/api/',routes);
app.get('/', (req, res) => {
  res.json({"message": 'Fabrik 3D Model Supplier API'});
})

const testdb = async () => {
    try 
    {
      const testKnexConnection = await db.raw("SELECT 1+1");
    }
    catch(err) 
    {
      console.log("Database Connection Error");
      console.log(err);
    }
  }


app.listen(port, () => {
    testdb();
    console.log(`Server listening on port ${port}`)
})