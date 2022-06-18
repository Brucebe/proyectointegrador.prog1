fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/artist/27')
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
    })

    .catch(function(error){
        console.log(error);
    })
    