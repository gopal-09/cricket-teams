const mongoose=require('mongoose')
const schema=mongoose.Schema;

let ClubSchema=new mongoose.Schema({
    name : {type: String,
        required:true},
        players:{
            type:String,
            required:true},
          coach:{
            type:String,
            required:true
          }
    
    
});
module.exports=mongoose.model('clubs',ClubSchema);