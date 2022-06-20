window.addEventListener("load", function () {

    let queryString = location.search;
    console.log(queryString);
    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search${queryString}`)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        for(i=0; i<25; i++){
    document.querySelector('h4').innerText = 'RESULTADO: ' + data.data.artist[i].name
        }
        
    })

    .catch(function(error){
        console.log(error);
    })

})

