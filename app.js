console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// MongoDBni chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");
// 1: Kirish codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2: Session codes

// 3: Views codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
   // res.json({test: "success"});
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
        
        // if(err) {
         //   console.log(err);
          //  res.end("somethin went wrong");
       // } else {
          //  res.end("successfully added");
       // }
     });
    });

    app.post("/delete-item", (req, res) => {
      const id = req.body.id;
      db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) }, 
        function(err, data) {
        res.json({state: "success"});
      }
    );
     // console.log(id);
     // res.end("done");
    });

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data});
        }
    });
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

