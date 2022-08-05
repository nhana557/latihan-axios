const axios = require('axios');
var http = require('http');

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log('Status Code: ', res.status);
        const users = res.data
        users[0].name = "Taryana"
        users[0].email = "yamisukehiro2510@gmail.com"

        http.createServer(function(req, res){
            res.writeHead(200, {'Content-Type': 'text/html'});
            for(user of users){
                res.write(`<li>name: ${user.name}<br> Email: ${user.email} </li><br>`)
            }
            res.end();
        }).listen(8000)


    })
    .catch(err => {
        console.log('Error: ', err.message);
    })

    console.log('Server running on http://localhost:8000'); 