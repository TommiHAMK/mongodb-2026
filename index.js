const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// console.log(process.env.SECRETINFO);

const app = express();

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

// saveProduct(product);

/*
Product.find()
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
});
*/


app.get('/products', async (req,res) => {
    try {
        const result = await Product.find();
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
});

app.get('/products/:id', async (req,res) => {
    const id = req.params.id; 
    const product =  await Product.findById(id);
    res.json(product);

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
