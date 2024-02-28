const express = require("express");
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose") 
const port = process.env.PORT || 4000;

const app = express();
console.log(__dirname) ;
app.set("views", path.join(__dirname, "/../templates/views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/../templates/views/partials"));
app.use(express.static(path.join(__dirname, "/../public")));
const Reverse = require("./models/reverse");


// db connection 

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Ignite_n:Reverse7.0@cluster0.ti7hdil.mongodb.net" ; 

async function connection(){
  await mongoose.connect(uri);
  console.log("connected sucessfully ") ;
}

try{
  connection() ;
} catch (error) { 
  console.log(error)
}
// Coding events  
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.get("/", (req, res) => {
    res.render("index.hbs");
});




//  Gaming Events 










// Get method to render the registration form
app.get('/reverse', (req, res) => {
  res.render('reverse'); // Render the HTML form
});
app.post('/reverse', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new Reverse(registrationData); 
  console.log(req.body)

  try {
    // Save the new registration data to the database
    const savedRegistration = await newRegistration.save();
    console.log("Registration saved:", savedRegistration);
    res.send('Registration successful'); // Send response indicating successful registration
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: Registration failed'); // Send error response if registration fails
  }  
});




app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
