const { Router } = require("express");
const characterPost= require('./Character')
const getEpisodes=require('./Episodes')
const router = Router();

// Configurar los routers
 router.use('/characters',characterPost) 
 router.use('/episodes',getEpisodes)
module.exports = router;
