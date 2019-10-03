const express=require('express');
const port=8000;
const app=express();

//use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error is ${err}`);

    }
    console.log(`port is ruuning on port number:: ${port}`);
})