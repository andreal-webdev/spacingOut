// const mongodb = require('mongodb');
// const ObjectId = mongodb.ObjectId;

// var collections = {
//     breeds: null,
//     facts: null

// };

// var client = null;
// var database = null;

// async function setup() {
//     // ENTER YOUR MONGODB CONNECTION LINK IN THE LINE BELOW
//     client = await new mongodb.MongoClient('mongodb+srv://cats:cats1234@catsdb.jujjhfi.mongodb.net/?retryWrites=true&w=majority').connect();

//     // Setup your database here as we did in the Week 9 Class Code
//     database = await client.db('catsDB');

//     let listedCollections = await database.listCollections({}, { nameOnly: true }).toArray();     
    
//     // To extract the names out of the collection by using the map function that will let us go through every collection.
//     let names = listedCollections.map((collection) => {     
//         return collection.name;
//     });

//     Object.keys(collections).forEach(async (collection) => {
//         if(names.includes(collection)) {
//             collections[collection] = await database.collection(collection);
//         } else {
//             collections[collection] = await database.createCollection(collection);
//         }
//     });

// }

// // Remember to export the necessary variables
// module.exports = { setup, collections, client, database, ObjectId };