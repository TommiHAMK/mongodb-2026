const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.SECRETINFO);

const uri = process.env.URI;


//promise
mongoose.connect(uri)
.then((result) => console.log("Connected to dB"))
.catch((err) => console.log(err))


