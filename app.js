const express = require('express');
const app = express();

const {products} = require('./json/data');

app.get('/', (req, res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
});

app.get('/api/products',(req, res) =>{
    const newProducts = products.map((product) =>{
        const {id, name, image} = product;
        return { id, name, image}
    })
    res.send(newProducts);
});

app.get('/api/products/:productID',(req, res) =>{
    const {productID} = req.params;
    console.log(productID);
    const singleProduct = products.find((product) => product.id === Number(productID))
  
    res.send(singleProduct);
})

app.listen(5000, ()=>{
    console.log('Fuckit, Server is listening on port: 5000 .....');
})