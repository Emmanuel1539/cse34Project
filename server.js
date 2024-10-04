// express web server
const express = require('express');
const bodyParser = require('body-parser')
const mongodb = require('./data/database')
const app = express();

port = process.env.PORT || 3001;



// adding body parser
app.use(bodyParser.json())

// adding swagger autogen
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-with, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else{
        app.listen(port, () => {
            console.log(`Web server listening at ${port}`);
        }) 
    }
})

