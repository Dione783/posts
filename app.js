const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require("path");
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/database');

const db = mongoose.connection;

db.once('open',data=>{
    
})

const Schema = new mongoose.Schema({
    title:{type:String,required:true},
    description:String,
})

const model = mongoose.model('ModelTest',Schema);

app.use(express.static(path.join(__dirname,'views')));

app.listen(PORT,()=>{
    console.log("server Criado porta:"+PORT);
})