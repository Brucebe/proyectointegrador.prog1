fetch ('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
    })

    .catch(function(erros){
        console.log(error);
    })