
async function  filterByDifficulty(array, difficulty){
    
    let results = await array.filter(function(e){
        
        if (e.difficulty.toLowerCase() === difficulty.toLowerCase()) {
            return e
        }
    
    })
   
    return results
}

  
module.exports = { 
    filterByDifficulty
};
