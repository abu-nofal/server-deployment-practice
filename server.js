'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

const start=(kk)=> {
    app.listen(kk, ()=> console.log(`Running on Port ${kk}`))
}

app.get('/', (req, res)=> {
    res.send('hello m3lem')
});

app.post('/bad', (req,res)=> {
    let number = 12;
    number.map(x=> console.log(x));
    res.send('this Bad Route ');
})

app.get('/data', (req, res)=> {
    res.json({
       id: 1, 
       name: "ahmad",
       email: "anofal719@gmail.com"
    });
});


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
     app,
     start
}
