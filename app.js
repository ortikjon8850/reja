console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) =>{
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

// MongoDBni chaqirish
const db = reuire("./server").db();

// 1: Kirish codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2: Session codes

// 3: Views codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes
app.post("/create-item", (req, res) =>{
    console.log(req.body);
    res.json({test: "success"});
});

app.get('/author', (req, res) =>{
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    res.render("reja");
});

module.exports = app;

//app.get("/", function (req, res) {
   // res.end("Hello World");
//});

//app.post("/create-item", function (req, res){
   // console.log(req.body);
//
// });

//const server = http.createServer(app);
//let PORT = 3000;
//server.listen(PORT, function () {
    //console.log(`the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  //);
//});

