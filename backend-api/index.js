const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8080;
const routes = require('./routes/route');
const db = require('./knex/knex');


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