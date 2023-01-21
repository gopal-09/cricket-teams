const { render } = require('ejs');
const express=require('express');
const club = require('../models/Team');
const router=express.Router()
//const Team=require('../models/Team');

// router.get('/',(req,res)=>{
//     res.send('express router')
// })
router.get('/',(req,res,next)=>
{
    club.find((err,docs)=>{
        res.render('home',{clubs:docs});
    }).catch(err=>{
        console.log("something wrong")
    })
    
})
router.post('/add',(req,res)=>{
    // 
    const{name,players,coach}=req.body;
    console.log(name,players,coach);
    const uclClub=new club({
        name,
        players,
        coach
    })
    uclClub.save((err)=>{
        if(err){
          console.log("wrong save");  
        }
        else
        console.log("data saved")
        res.redirect('/');
    })
})
router.get('/edit/:id',(req,res, next)=>{
   console.log(req.params.id); 
   club.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,docs)=>{
    if(err)
    {
         console.log("cant retreive")
         next(err);
    }else{
        console.log(docs)
        res.render('edit',{club:docs});
    }
   });
   //res.render('edit') 
});
router.post('/edit/:id',(req,res, next)=>{
    club.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
        if(err){61
            console.log("wrong to update data");
            next(err)
        }else{
            console.log("updated")
            res.redirect('/');

        }
    })
})
router.get('/delete/:id',(req,res)=>{
 club.findByIdAndDelete({_id:req.params.id},(err,docs)=>{
    if(err){
        console.log("wrong to delete");
        next(err)
    }else{
        console.log("deleted")
        res.redirect('/');
    }
 })
})
module.exports=router