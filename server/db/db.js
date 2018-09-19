const {MongoClient} = require('mongodb');

var URI = "mongodb://localhost:27017";
var dbName = 'test';

//This will return MongoClient Promise
var dbConn = MongoClient.connect(URI,{useNewUrlParser: true}).then((client)=>{
    console.log("Conection Succeed");
    return client = client.db(dbName);
}).catch((err)=>{
    console.log("Error Found ",err);
});

var insertOneUser = function(client,user,pw){
    const collection = client.collection("users");

    collection.insertOne({
        username: user,     
        password: pw
    }).then((res)=>{
        console.log("Added One Document");
        console.log("Details : ",res);
    },(err)=>{
        console.log("Addition Failed");
        console.log("Details : ",err);
    })
}

module.exports = {
    dbConn,
    insertOneUser
}