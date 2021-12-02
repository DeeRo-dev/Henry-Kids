
async function  filterByCategory(array, catId){

    let results = await array.filter(function(e){
       
        for(let i = 0; i < e.categories.length; i++){
           
            if (e.categories[i].id === parseInt(catId)) {
               
                return e
            }
        }
       
    })
   
    return results
}

module.exports = {
    filterByCategory
}


