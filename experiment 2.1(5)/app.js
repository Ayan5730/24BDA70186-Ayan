const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use('/students', studentRoutes);

app.get('/', (req,res)=>{
    res.redirect('/students');
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});