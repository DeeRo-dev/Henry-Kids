
async function  searchTitle(array, title){
    
    let results = await array.filter(function(e){
        
        if (e.title.toLowerCase().includes(title.toLowerCase())) {
            return e
        }
    
    })
   
    return results
}

  
module.exports = { 
    searchTitle
};
