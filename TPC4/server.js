var http = require('http')
var fs = require('fs')

var arqserver = http.createServer(function (req, res) {
    var partes = req.url.split('/')
    var pagina = partes[partes.length - 1]
    switch(pagina){
        case 'favicon.ico':
                fs.readFile('files/favicon.ico', function (err, data) {
                    res.writeHead(200, { 'Content-Type': "image/x-icon" })
                    res.write(data)
                    res.end()
                })
                break
        case 'arq2html.xsl':
                
                fs.readFile('arq2html.xsl',function(err,data){
                    res.writeHead(200,{'Content-Type':'text/xml'})
                    res.write(data)
                    res.end()
                })
                break
        default:
                fs.readFile('files/arq' + pagina +'.xml',function(err,data){
                    if (err !== null) {
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                        res.write("<h1 style='text-align: center'>FICHEIRO INEXISTENTE: " + pagina + "</h1>")  
                        res.end()
                        return
                    }
                    res.writeHead(200,{'Content-Type':'text/xml'})
                    res.write(data)
                    res.end()
                })     
            break
    }
}).listen(7777)

console.log('Servidor à escuta na porta 7777...')
