// http module for setting up web module
const http = require('http')

const server = http.createServer((req, res) => {
    //req = request, res = respond
    if (req.url == '/') {
        res.end('Welcome to our home page')
    } else if (req.url == '/about') {
        res.end('this is our history')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">back home</a>
    `)
    }
})

server.listen(5000)
    //arbitrary port number localhost:5000
    //run file and not exit