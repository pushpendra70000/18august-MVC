const express = require('express');

const app = express();
const env = require('dotenv');
const { adminRoute } = require('./routes/roles/adminRoute');
env.config();


app.use(adminRoute);


let port = process.env.PORT;
app.listen(port,()=>{
    console.log('listening on port',port)
});