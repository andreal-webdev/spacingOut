// Required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./database/database.js');
const axios = require('axios');
const apiKey = 'tG34GN9vTAe6GlJJxqSlRSt1tgHXbaRrP4FS4sdK';
const app = express();
const port = process.env.Port || 8000; 

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', async (req, res) => { 
    let ejs = require('ejs');
    let index = await ejs.renderFile(path.join(__dirname, 'views/index.ejs'));
    res.send(index);    
});


app.get('/pic', async (req, res) => {
    try {
       
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
      
  
        res.render('main/pic.ejs', { picData: data });
    } catch (error) {
        console.error('Error fetching APOD:', error);
        res.status(500).send('Internal Server Error');
    }
   
});

app.get('/mars', async (req, res) => {
    try {
      
      const roverName = 'curiosity'; 
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${apiKey}`;
      const response = await axios.get(apiUrl);
      
      if (response.status === 200) {

        const photos = response.data.photos;
        res.render('main/mars.ejs', { photos });

      } else {

        console.error(`Error fetching Mars rover photos: ${response.status} - ${response.statusText}`);
        res.status(response.status).send(`Error: ${response.statusText}`);
      }

    } catch (error) {
      console.error('Error fetching Mars rover photos:', error.message);
      res.status(500).send('Internal Server Error');
    }
});


app.get('/solsys', (req, res) => {
  const numberOfModels = 9
 
  res.render('main/solsys.ejs', {
    modelTitles: ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],

    info: ["The Sun is the center of our solar system, a giant ball of hot, glowing gas that provides light and energy for all the planets. \
    It is composed mostly of hydrogen and helium and generates energy through a process called nuclear fusion. The Sun's gravitational pull keeps all the planets in orbit.",//
    
    "Mercury is the closest planet to the Sun and experiences extreme temperature variations. Despite its proximity to the Sun, it has a very thin atmosphere and is heavily cratered,\
    resembling Earth's Moon. A day on Mercury is longer than its year.",

    "Venus is often called Earth's 'sister planet' due to its similar size and mass. It has a thick atmosphere, \
    mostly composed of carbon dioxide, causing a runaway greenhouse effect. Venus rotates on its axis very slowly, and a day on Venus is longer than its year.", 

    "Earth is the only known planet to support life, with a diverse range of ecosystems and climates. It has a protective atmosphere and a magnetic field that shields it from harmful solar radiation. \
    Earth's rotation gives rise to day and night, and its axial tilt causes seasons.",

    "Mars is known as the 'Red Planet' due to its rusty, iron-rich soil. \
    It has the tallest volcano and the deepest canyon in the solar system. NASA's rovers have been exploring its surface for signs of past life.",

    "Jupiter is the largest planet, with a strong magnetic field and an iconic Great Red Spot—a giant storm. It has over 75 known moons,\
    including the four Galilean moons: Io, Europa, Ganymede, and Callisto.",

    "Saturn is famous for its stunning ring system, composed of ice and rock particles. \
    It has the second-largest moon in the solar system, Titan, with an atmosphere and lakes of liquid methane.",

    "Uranus rotates on its side, likely due to a collision early in its history. It has a pale blue-green color due to the presence of methane in its atmosphere.",

    "Neptune is the farthest known planet from the Sun and has strong winds and a dynamic atmosphere. It has a dark storm system called the Great Dark Spot, similar to Jupiter's Great Red Spot."],  // Replace with your additional information
    modelPaths: Array.from({ length: numberOfModels }, (_, i) => `assets/model-${i + 1}.glb`)
  });
});



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});




// app.listen(PORT, async () => {
    // await database.setup();
    // console.log(`Server started on port ${PORT}`);
// });



// process.on('SIGTERM', () => {
//     app.close(() => {
//         database.client.close();
//     });
// });
