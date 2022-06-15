const { Router } = require("express");
const characterPost= require('./Character')
const getEpisodes=require('./Episodes')
const characterId=require('./CharacterId')
const router = Router();

// Configurar los routers
router.use('/character',characterId)
router.use('/characters',characterPost) 
router.use('/episodes',getEpisodes)
module.exports = router;
