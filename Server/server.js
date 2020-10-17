const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const port = 3000;
app.use(cors());
app.use('/',express.static('public'));


var budget;
fs.readFile("my_budget.json", "utf8", function (err, data) {
  if (err) throw err;
  budget = JSON.parse(data);
});
// const budget = require('/my_budget.json');



app.get('/hello',(req,res) => {
    res.send('Hello World!');
});

app.get('/budget',(req,res) => {
    res.json(budget);
});

app.listen(port,() => {
    console.log('Example app listening at http://localhost:3000');
});