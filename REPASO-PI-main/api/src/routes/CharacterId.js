const { Router } = require('express');
const router = Router();
const {Character, Episode}= require('../db.js');
const axios = require('axios')

router.get('/:id',async (req,res,next)=>{
 const {id}=req.params;
 try {
    if(id.includes('-')){
        let personaje= await Character.findOne({
            where:{
                id:id
            },
            includes: Episode
        })
        res.send(personaje)
    }else{
        
        let characterId=await axios(`https://rickandmortyapi.com/api/character/${id}`)  
        let obj={
            id:characterId.data.id,
          image:characterId.data.image,
          name:characterId.data.name,
          origin:characterId.data.origin,
          species:characterId.data.species,
          episode :characterId.data.episode
        } 
        return res.send(obj)
        }
      return 'no se encontro el personaje'

    
 } catch (error) {
    next(error)
 }
})

module.exports=router;