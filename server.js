//const http = require("http");
//const app = require("./app");
//const { MongoClient } = require("mongodb"); 

//const connectionString = "mongodb+srv://<db_username>:<db_reja>@cluster0.2e8r5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

//async function startServer() {
    //try {
       // await client.connect();
        //console.log("MongoDB connection succeeded");
       // console.log(client);

        
        //const server = http.createServer(app);
        //const PORT = 3000;
        //server.listen(PORT, () => {
         //   console.log(`Server is running on http://localhost:${PORT}`);
       // });

    //} catch (err) {
      //  console.error("Error connecting to MongoDB:", err);
   // }
//}

//startServer(); 


const http = require("http");
const app = require("./app");

let db;
const connectionString = "mongodb+srv://<db_username>:<db_>@cluster0.2e8r5.mongodb.net/reja=true&w=majority&appName=Cluster0";

MongoDB.connect(connectionString,
    {
    useNewUrlParser: true,
    useUnifieldTopology: true,
}, (err, client) => {
   if(err) console.log("ERROR on connection MongoDB");
    else {
   console.log("MongoDB connection succeed");
   module.exports = client;

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`the server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
}
}
);