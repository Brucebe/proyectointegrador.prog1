const url = 'https://api.allorigins.win/raw?url=http://api.deezer.com/chart'
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
