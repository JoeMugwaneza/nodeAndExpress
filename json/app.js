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
    if(!singleProduct){
        res.status(404).send("<h1>Product does not exit</h1>")
    }
  
    res.send(singleProduct);
});

app.get('/api/v1/query', (req, res)=>{
//    console.log(req.query); 
   const {search, limit} = req.query;

   let sortedProducts = [...products];

   if(search){
    sortedProducts = sortedProducts.filter((product) =>{
        return product.name.startsWith(search)
    })
}

if(limit){
    return sortedProducts = sortedProducts.slice(0, Number(limit))
}
if(sortedProducts < 1){
    // res.status(200).send('Products searched were not found')
   return res.status(200).json({success: true, data: []})
}
res.status(200).json(sortedProducts)
   res.send("Hello World!");
})

app.listen(5000, ()=>{
    console.log('Fuckit, Server is listening on port: 5000 .....')
})