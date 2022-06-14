const url = 'https://api.allorigins.win/raw?url=Ac%C3%A1VaLaURLDelEndpointDeDeezer'

const api_key = '299e618bece8bb75f2513f88b3f3f809'


fetch (url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error)
    })
