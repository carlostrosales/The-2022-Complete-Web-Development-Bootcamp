const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewURLParser: true });

// // Connection URL
// const url = "mongodb://localhost:27017";

// // Database Name
// const dbName = "fruitsDB";

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Use connect method to connect to the Server
// client.connect(function (err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   findDocuments(db, function() {
//     client.close();
//   });
  
// });














const fruitSchema = new mongoose.Schema ( {
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

fruit.save();

const personSchema = new mongoose.Schema ( {
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ( {
  name: "John",
  age: 37
});

person.save();

const kiwi = new Fruit ( {
  name: "Kiwi",
  score: 10,
  review: "The best fruit"
});

const orange = new Fruit ( {
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});

const banana = new Fruit ( {
  name: "Banana",
  score: 3,
  review: "Weird texture"
});

Fruit.insertMany([kiwi, orange, banana], function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Succesfully saved all the fruits to the fruitsDB")
  }
});

// const insertDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection("fruits");
//   // Insert some documents
//   collection.insertMany([
//     { name: "Apple", score: 8, review: "Great fruit" }, 
//   { name: "Orange", score: 6, review: "Kinda Sour" }, 
//   { name: "Banana", score: 9, review: "Great Stuff" }], 
//   function (err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.insertedCount);
//     assert.equal(3, Object.keys(result.insertedIds).length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}