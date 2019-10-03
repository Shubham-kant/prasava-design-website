const express=require('express');
const port=8000;
const app=express();

//importing layout module 
const expressLayouts=require('express-ejs-layouts');
//importing sass middleware and using it
const sassMiddleware=require('node-sass-middleware');
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'

}));

app.use(express.static('assets'));
//extract style and script from subpages into layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//use it as layout middleware
app.use(expressLayouts);

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