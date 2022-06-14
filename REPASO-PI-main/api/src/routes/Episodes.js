const { Router } = require('express');
const router = Router();
const { Episode }= require('../db.js')
const axios =require ('axios')

router.get('/',async(req,res,next)=>{
try {
    let page1= await axios('https://rickandmortyapi.com/api/episode');
    let page2= await axios('https://rickandmortyapi.com/api/episode?page=2');
    let page3= await axios('https://rickandmortyapi.com/api/episode?page=3');
    page1=page1.data.results;
    page2=page2.data.results;
    page3=page3.data.results;

    let episodes= [...page1,...page2,...page3]
   episodes.forEach(e=> {Episode.findOrCreate({
    where:{
        name:e.url,
        id:e.id

    }
    })})
    const allEpisodes= await Episode.findAll();
    res.send(allEpisodes)
} catch (error) {
    next(error)
}
}
)


module.exports=router;