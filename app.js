const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.write("Welcome to home page!")
    res.end()
})

server.listen(5000)