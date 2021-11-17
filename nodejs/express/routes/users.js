const express=require('express');
const router=express.Router()

router.get("/",(req,res)=>{
    res.render('index1')
    
    })
    router.get("/new",(req,res)=>{
       res.render('add')
    
        
        })
    router.post('/',(req,res)=>{
        //console.log( req.body.first)
        res.send("heloo msg"+req.body.first)
    })
        router.get("/:id",(req,res)=>{
            
          res.send('this is user '+req.params.id )
        })
       

        module.exports=router