const { Router } = require('express');
const router = Router();
const {Character, Episode}= require('../db.js');
const getAllApi = require('../funciones/ApiCharacters.js');
const getAllDB = require('../funciones/DBCharacters.js');





router.get('/', async(req,res,next)=>{
try {
    let DBInfo= await getAllDB();
    let apiInfo= await getAllApi();
    await Promise.all([DBInfo,apiInfo])
    .then((response=>{
       const[DBInfo,apiInfo]=response;
    }));

    
    
 
    res.send([...DBInfo,...apiInfo]);
   

    
} catch (error) {
    next(error)
}
})











router.post('/', async(req,res)=>{
    const {
    
    name,
    species,
    origin,
    image,
    created }=req.body;
 
  try {
    
    let newCharacter= await Character.create({
        name,
        species,
        origin,
        image,
        created

    });
     let selecEpisodes= await Episode.findAll({
      where:{
        name:name
      }
    });

   
    newCharacter.addEpisode(selecEpisodes);
    res.send('Personaje creado con exito')
   
  } catch (error) {
      console.log(error)
    
  }


})
module.exports=router;
/* id
name
species
origin
image
created */