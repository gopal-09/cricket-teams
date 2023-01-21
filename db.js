const{MongoClient}=require('mongodb')
module.exports={
    connectToDb:()=>{
        MongoClient.connect('mongodb://localhost:27017/bookstore')
    },
    getDb:()=>{}
}
require("dotenv").config();
const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');

const app=express();

//database connection
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true});
const db=mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log("connected to database"));
//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(5000,()=>{
    console.log("server hitt")
})