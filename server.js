// ----- CODE MODIFICATION NOT REQUIRED UNTIL LINE 40 OF THIS FILE -----

// // Required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./database/database.js');

const PORT = 8000;

const app = express();
// app.use(bodyParser());
// app.set('view engine', 'ejs');

// // Function to get a random ID from the breeds collection
// function breedRandomizer(breeds) {
//     let breedsIDs = [];
//     for (const i in breeds) {
//         breedsIDs.push(breeds[i]._id.toString());
//     }
//     // Generate a random index within the bounds of the breedsIDs array's length
//     const randomIndex = Math.floor(Math.random() * breedsIDs.length);
//     // console.log(breedsIDs[randomIndex]);
//     return(breedsIDs[randomIndex]);
// }

// // Function to get a random ID from the facts collection
// function factRandomizer(facts) {
//     let factsIDs = [];
//     for (const i in facts) {
//         factsIDs.push(facts[i]._id.toString());
//     }
//     // Generate a random index within the bounds of the factsIDs array's length
//     const randomIndex = Math.floor(Math.random() * factsIDs.length);
//     // console.log(factsIDs[randomIndex]);
//     return(factsIDs[randomIndex]);
// }

// // Route for the homepage
// app.get('/', async (req, res) => {
//     // ----- Random Breed -----
    
//     // Find all the breeds from the database and assign it to the breeds variable.
//     let breeds = await database.collections.breeds.find({}).toArray();

//     // Call the breedRandomizer function to get a random breed ID.
//     let randomBreed = breedRandomizer(breeds);

//     // Use the random breed ID to get a random breed object from MongoDB
//     let breedId = new database.ObjectId(randomBreed);
//     let breed = await database.collections.breeds.findOne(breedId);

//     // Console log the random object you have fetched before rendering it on the home page
//     console.log(breed);

//     // ----- Random Fact -----
//     // Find all the facts from the database and assign it to the facts variable.
//     let facts = await database.collections.facts.find({}).toArray();

//     // Call the factRandomizer function to get a random fact ID.
//     let randomFact = factRandomizer(facts);

//     // Use the random breed ID to get a random breed object from MongoDB

//     let factId = new database.ObjectId(randomFact);
//     let fact = await database.collections.facts.findOne(factId);

//     // Console log the random object you have fetched before rendering it on the home page
//     console.log(fact);

//     // Render the homepage and pass the random breed object
//     res.render('index.ejs', {breed:breed, fact:fact});
   
// });

// // Route to display all the breeds
// app.get('/breeds', async (req, res) => {    
//    // Find all the breeds from the database
//     let breeds = await database.collections.breeds.find({}).toArray();
//      // Render the breeds file in the cats folder under views and pass the breeds found to the template
//     res.render('cats/breeds.ejs', {breeds:breeds});
// });

// // Route to display all the facts
// app.get('/facts', async (req, res) => {
//     // Find all the facts from the database
//     let facts = await database.collections.facts.find({}).toArray();    
    
//     // Render the facts file in the cats folder under views and pass the facts found to the template    
//     res.render('cats/facts.ejs', {facts:facts});

// });

// // Route to display breed by ID
// app.get('/breed/:breedId', async (req, res) => {
//     // Get the breedId parameter from the URL
//     let id = req.params.breedId;  
//     // Convert the ID from the URL into the proper ObjectId format expected by MongoDB
//     let objectId = new database.ObjectId(id);
//     // Find the breed object from MongoDB using the provided ID
//     let breed = await database.collections.breeds.findOne(objectId);
//     // Render the breed file in the cats folder under views and pass the breed found using the provided to the template
//     res.render('cats/breed.ejs', {breed: breed});
// });

// // Route to display fact by ID
// app.get('/fact/:factId', async (req, res) => {
//     // Get the factId parameter from the URL
//     let id = req.params.factId;
//     // Convert the ID from the URL into the proper ObjectId format expected by MongoDB
//     let objectId = new database.ObjectId(id);
//     // Find the fact object from MongoDB using the provided ID
//     let fact = await database.collections.facts.findOne(objectId);
//     // Render the fact file in the cats folder under views and pass the fact found using the provided to the template
//     res.render('cats/fact.ejs', {fact: fact});

// });

app.listen(PORT, async () => {
   
    console.log(`Server started on port ${PORT}`);
});

// app.use(express.static(path.join(__dirname, 'public')));

// process.on('SIGTERM', () => {
//     app.close(() => {
//         database.client.close();
//     });
// });

