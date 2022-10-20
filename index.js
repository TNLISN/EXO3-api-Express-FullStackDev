// We can use express as shown as below
const express = require('express')
const app = express()
var cars = require("./vehicles");
const port = 3000

app.get('/', (req, res) => {
  res.send('<li>/vehicles - See all vehicles</li><li>/vehicles/{Origin} - Filter all vehicles by Origin</li>')
})
app.get('/vehicles', (req, res) => {
    res.json({cars})
})
app.get('/vehicles/([a-zA-Z]+)', (req, res) => {   
    const origin = req.url.split("/")[2];
    const car = cars.filter((car) => car.Origin === origin);
    res.json(car)
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})