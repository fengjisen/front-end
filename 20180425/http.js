'use strict'
var http = require('http')
var server = http.createServer()
server.on('request', function (request,response) {
    // console.log("server is running+request.path"+ request.url)
    // response.write("Hello Fenng@###")
    var url = request.url;
    var products = [
        {
            name: '苹果 X',
            price: 8888
        },
        {
            name: '菠萝 X',
            price: 5000
        },
        {
            name: '小辣椒 X',
            price: 1999
        }];
    if(url==='/'){
        response.end(JSON.stringify(products));
        return;
    }else{
        response.end("Error Page!!!")
    }

})
server.listen(3000,function () {
    console.log("the server is already open,you can http://localhost:3000  ")
})