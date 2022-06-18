window.addEventListener("load", function () {

    let queryString = location.search;
    console.log(queryString);
    
    fetch(`https://api.deezer.com/search${queryString}`)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);


    })

    .catch(function(error){
        console.log(error);
    })

})

