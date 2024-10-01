// express web server
const express = require('express');
const app = express();


const mongodb = require('./data/database')
app.use('/', require('./routes'));








port = process.env.PORT || 3000;
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

