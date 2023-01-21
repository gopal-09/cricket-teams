const express=require('express')
const homeroute=require('./routes/home')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const app=express()
// app.get('/',(req,res)=>{
//     res.send("hello")
// })
mongoose.connect('mongodb://127.0.0.1:27017/crud');
const db=mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log("connected to database"));


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/',homeroute)
app.listen(3000,(req,res)=>console.log('server hit'))



