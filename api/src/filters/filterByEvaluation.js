
async function  filterByDifficulty(array, evaluation){

    let results = await array.filter(function(e){
        
        if (e.difficulty === evaluation) {
            return e
        }
    
    })
   
    return results
}

  
module.exports = { 
    filterByDifficulty
};
