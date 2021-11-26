let express = require("express");
let path = require("path");
let fs = require("fs");
let MongoClient = require("mongodb").MongoClient;
let ObjectID = require("mongodb").ObjectID;
var cors = require('cors')


let bodyParser = require("body-parser");
let app = express();

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

let mongoUrlDocker = "mongodb://admin:password@mongodb";

let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

let databaseName = "gateways-db";

app.get("/", function (req, res) {
  let response = [];
  MongoClient.connect(
    mongoUrlLocal,
    mongoClientOptions,
    function (err, client) {
      if (err) throw err;
      let db = client.db(databaseName);
      db.collection("gateways")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(result);
          client.close();
        });
    }
  );
});

app.delete("/delete-gateway", function (req, res) {
  let gatewayId = req.query.id;
  MongoClient.connect(
    mongoUrlLocal,
    mongoClientOptions,
    function (err, client) {
      if (err) throw err;

      let db = client.db(databaseName);
      let myquery = { _id: ObjectID(gatewayId.toString())};
      db.collection("gateways").deleteOne(myquery, function (err, x) {
        if (err) throw err;
        res.send(true)
        client.close();
      });
    }
  );
});

app.post("/create-gateway", function (req, res) {
  let gateway = req.body;

  MongoClient.connect(
    mongoUrlLocal,
    mongoClientOptions,
    function (err, client) {
      if (err) throw err;

      let db = client.db(databaseName);

      db.collection("gateways").insertOne(
        gateway,
        { upsert: true },
        function (err, x) {
          if (err) throw err;
          res.send(x.ops[0]);
          client.close();
        }
      );
    }
  );
});

app.listen(3001, function () {
  console.log("app listening on port 3001!");
});
