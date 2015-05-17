var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.end('hello worldx\n')
}).listen(process.env.PORT, process.env.IP)