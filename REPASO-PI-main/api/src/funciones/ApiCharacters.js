const axios =require ('axios');

async function getAllApi(){
    let character=[];
     for (let i = 1; i < 6; i++) {
        let pag = (await axios(`https://rickandmortyapi.com/api/character`)).data.results.map(e=>({
            id:e.id,
            image:e.image,
            name:e.name,
            origin:e.origin.name,
            species:e.species,
            episode :e.episode.map(e=>({name:e}))
        }))
        character.push(pag)
        
     }
     return (character.flat())
}

module.exports=getAllApi;