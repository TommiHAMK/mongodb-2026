const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// console.log(process.env.SECRETINFO);

const uri = process.env.URI;

//promise 
mongoose.connect(uri)
.then((result) => console.log("Connected to dB"))
.catch((err) => console.log(err))

// importing the schema
const Product = require('./models/Product');

const product = new Product({
    name: "Bike",
    price: 500
});

// Remember to set the default database to the connection string

//product.save();


const saveProduct = async (product) => {
    try 
    {
        const result = await product.save();
        console.log(result);
    }
    catch (err)
    {
        console.log(err);
    }
}

saveProduct(product);

Product.find()
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
});