const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://ortikjon:Y44DzVT4Zb0DxFhG@cluster0.2e8r5.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(connectionString,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client) => {
   if(err) console.log("Error on connection MongoDB");
    else {
   console.log('MongoDB connection succeed');
   module.exports = client;

const app = require("./app");
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`the server is running successfully on port: ${PORT}, http://lpmocalhost:${PORT}`
  );
})
}
});