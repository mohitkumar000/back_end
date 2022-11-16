const express = require('express');
const app = express();
app.use(express.json());
let user = [
    {
    id:1,
    name: 'John',
    age: 211

    },
    {
        id:2,
        name: 'rohan', 
        age: 21
    
    },
     {
        id:3,
        name: 'rohit',
        age: 211
        
    },
];

app.get('/user', (req, res) => {
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log(req.body.Name);
    //then i can put this in db 
    user = req.body;
    res.json({
        message: "Data received successfully",
        user: req.body
    });
});

app.patch('/user', (req, res) => {
    console.log(req.body);
    let dataToBeUpdated = req.body;
    for (key in dataToBeUpdated) {
        user[key] = dataToBeUpdated[key];
    }
    res.json({
        message: "data updated succesfully"
    })
});

app.delete('/user', (req, res) => {
    user = {};
    res.json({
        msg: "user has been deleted"
    });
})

//Parametrs example 
app.get('/user/:id', (req, res) => {
    console.log(req.paramas.id);
    res.send("user id is",req.paramas)
})





app.listen(4000);