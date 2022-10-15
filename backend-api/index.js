const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8080;
const routes = require('./routes/route');


app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(morgan('combined'));

app.use('/api/',routes);
app.get('/', (req, res) => {
  res.json({"message": 'Fabrik 3D Model Supplier API'});
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})