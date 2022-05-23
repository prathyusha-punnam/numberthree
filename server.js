const express = require("express");

const server = express();

const middleware1 = (request, response, next) =>{
    console.log("Hello this is middleware1");
    next()  
}


const middleware2= (request, response, next) => {
    console.log("Hello this is middleware2");
}

server.use(middleware1);

server.get("/",(request,response) =>{
    
    response.send({name:"prathyusha"})
    
})

server.get("/user",middleware2,(request,response) =>{
    response.send("how are you")
})

server.get("/run",(request,response) =>{
    response.send("<h1>Hello World</h1>")
})

server.listen(3001,() =>{
    console.log("server is running at port 3001");
})

