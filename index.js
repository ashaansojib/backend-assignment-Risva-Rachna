const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9988;
// middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("The Assigment server is running")
});
// this is for your requirements D.
class Fruit {
    constructor(id, name, color) {
      this.id = id;
      this.name = name;
      this.color = color;
    }
  }
  
  // Sample fruits data
  const fruits = [
    new Fruit(1, 'Apple', 'Red'),
    new Fruit(2, 'Banana', 'Yellow'),
    new Fruit(3, 'Orange', 'Orange'),
    new Fruit(4, 'Grapes', 'Green'),
  ];
// An API that allows user login via username, password
app.post('/register', (req, res)=>{
    const {username, password} = req.body;
    console.log(req.body)
    // check username format
    if(!/^[a-zA-Z0-9]+$/.test(username)){
        return res.status(400).send("Invalid Username Format! Username must Ulphanumeric")
    }
    // check the username 6 to 12 letter
    if(username.length < 6 || username.length > 12){
        return res.status(400).send("Username must be 6 to 12 characters")
    }
    // password at least 6 letter
    if (password.length < 6) {
        return res.status(400).send("Must be at least 6 characters")
      }
    res.send("User Login Successfully")
});
// You can run this code and access the API at http://localhost:****/fruits to get the sorted list of fruits based on color.
app.get('/fruits', (req, res) => {
    // Sort the fruits based on color
    const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
    res.send(sortedFruits);
  });
app.listen(port, ()=>{
    console.log("the server port is running on", port)
});

/**
 * Firstly i am very sorry for my short time. Last 2 days i am very busy in my intenal problem that why i can provide you to front-end code. But i provide the full code that is working on the frontend part. I you have any other front end job opportunity then get in touch.
*/