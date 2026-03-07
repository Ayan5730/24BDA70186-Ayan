const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* Add Product */

app.post("/product", async(req,res)=>{

const product = new Product(req.body);

await product.save();

res.json(product);

});

/* Get Products */

app.get("/products", async(req,res)=>{

const products = await Product.find();

res.json(products);

});

/* Aggregation Avg Rating */

app.get("/rating", async(req,res)=>{

const result = await Product.aggregate([
{$unwind:"$reviews"},
{
$group:{
_id:"$name",
avgRating:{$avg:"$reviews.rating"}
}
}
]);

res.json(result);

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});