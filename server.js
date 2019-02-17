const express = require('express');
const hbs=require('hbs')
const port=process.env.PORT || 3004;
var app=express();

app.set('view engine','hbs')
app.use(express.static(__dirname+"/public"))

app.use((req,res,next)=>{
var now=new Date().toString();

  console.log(`${now}:`)
  next();
})

app.get('/',(req,res)=>{
res.send({name:"kiril",age:10});
});
app.get('/about',(req,res)=>{
  res.render('about.hbs');
})
app.listen(port);
