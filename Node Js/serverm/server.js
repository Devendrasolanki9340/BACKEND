const express = require('express');


 const app = express();      //server instance create kr rhe hai    

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.listen(3000);    //server ka start karne ke liye port number dena hota hai, yaha 3000 diya hai.