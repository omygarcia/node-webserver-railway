require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/',function(req,res){
    //res.send('Home');
    res.render('home',{
        nombre:'Omar Garcia',
        titulo:'Curso de Node'
    });
});


app.get('/hola-mundo',function(req,res){
    res.send('Hola Mundo');
});

app.get('/generic',function(req,res){
    //res.sendFile(__dirname+'/public/generic.html');
    res.render('generic',{
        nombre:'Omar Garcia',
        titulo:'Curso de Node'
    });
});

app.get('/elements',(req,res)=>{
    //res.sendFile(__dirname+'/public/elements.html');
    res.render('elements',{
        nombre:'Omar Garcia',
        titulo:'Curso de Node'
    });
});

app.get('*',(req, res)=>{
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(port,()=>{
    console.log(`Example app listening al http://localhost:${port}`)
});