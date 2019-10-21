var http = require('http')
var url = require('url')
var pug = require('pug')
var fs = require('fs')
var jsonfile = require('jsonfile')
var porta = 7777
var {parse} = require('querystring')

var myBD = "lista_tarefas.json"

var myServer = http.createServer((req,res)=>{
    var purl = url.parse(req.url, true)
    var query = purl.query

    console.log(req.method + ' ' + purl.pathname)

    if(req.method == 'GET'){
        if((purl.pathname == '/')||(purl.pathname == '/index')){
            jsonfile.readFile(myBD, (erro,tarefas)=>{
                res.writeHead(200, {
                    'Content-Type': 'text/html; charset=utf-8'
                })
        
                if(erro){
                    // caso não consiga carregar a base de dados
                    console.log("Ficheiro json não existe... Vai ser criado")
                    jsonFile.writeFile(myBD, [])
                }
        
                res.write(pug.renderFile('index.pug',{lista: tarefas}))
        
                res.end()
            })
        }
        else if(purl.pathname == '/w3.css'){
            res.writeHead(200, {'Content-Type': 'text/css'})
            fs.readFile('stylesheets/w3.css', (erro, dados)=>{
                if(!erro){
                    res.write(dados)
                }
                else
                    res.write("<p>Erro: " + erro + "</p>")
                res.end()
            })
        }
        else if(purl.pathname == '/favicon.ico'){
            fs.readFile('files/favicon.ico', function (err, data) {
                res.writeHead(200, { 'Content-Type': "image/x-icon" })
                res.write(data)
                res.end()
            })
        }
        else{
            //get nao suportado
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            })
            console.log("ERRO: " + req.method + " não suportado...")
            res.write(pug.renderFile('erro.pug', 
                {e: "ERRO: " + req.method + " não suportado..."}))
            res.end()
        }

    }
    else if(req.method == 'POST'){
        if(purl.pathname == '/tarefa'){
            recuperaInfo(req, resultado => {
                jsonfile.readFile(myBD, (erro, tarefas)=>{
                    if(!erro){
                        tarefas.push(resultado)
                        jsonfile.writeFile(myBD, tarefas, erro => {
                            if(erro)
                                console.log(erro)
                            else
                                console.log('Tarefa adicionada....')
                                jsonfile.readFile(myBD, (erro,tarefas)=>{
                                    res.writeHead(200, {
                                        'Content-Type': 'text/html; charset=utf-8'
                                    })
                            
                                    if(erro){
                                        // caso não consiga carregar a base de dados
                                        console.log("Ficheiro json não existe... Vai ser criado")
                                        jsonFile.writeFile(myBD, [])
                                    }
                            
                                    res.write(pug.renderFile('index.pug',{lista: tarefas}))
                            
                                    res.end()
                                })     
                        })
                    }
                })
            })            
        }
        else{
            //put nao suportado
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            })
            console.log("ERRO: " + req.method + " não suportado...")
            res.write(pug.renderFile('erro.pug', 
                {e: "ERRO: " + req.method + " não suportado..."}))
            res.end()
        }
    }
    else{
        //qualquwe outro pedido
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        console.log("ERRO: " + req.method + " não suportado...")
        res.write(pug.renderFile('erro.pug', 
            {e: "ERRO: " + req.method + " não suportado..."}))
        res.end()
    }
})

myServer.listen(porta, ()=>{
    console.log("Servidor à escuta na porta " + porta + "...")
})

function recuperaInfo(request, callback){
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded'){
        let body = ''
        request.on('data', bloco => {
            body += bloco.toString()
        })
        request.on('end', ()=>{
            callback(parse(body))
        })
    }
}