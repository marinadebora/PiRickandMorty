const { Character, Episode }= require('../db');

async function getAllDB(){
let allCharacterDB= await Character.findAll({
    includes:{
        model:Episode,
        attributes:['name'],
        through:{
            attributes:[]
        } 
    }
})
return allCharacterDB
}



module.exports=getAllDB;