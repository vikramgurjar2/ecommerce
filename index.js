require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

// Routers
const productRouter = require('./routes/product');
const userRouter = require('./routes/users');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
server.use(cors());
server.use(express.json());
server.use(morgan('combined'));

// API Routes
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

// Serve React App
server.use(express.static(path.resolve(__dirname, 'dist'))); // Serve static files from "dist" directory
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html')); // Fallback to React app for other routes
});

console.log('server started');

// Start Server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



////MVC-Model View Controller
//model is data and view is html and controller is logic that controls the model and view
// 
//////


///CRUD---create read update delete

// productRouter
// .get('/products',productController.getProducts)
// .get('/products/:id',productController.getProduct)
// .delete('/products/:id',productController.deleteProduct)
// .put('/products/:id',productController.replaceProduct)
// .patch('/products/:id',productController.updateProduct)









// server.get('/products/:id',(req,res)=>{
//     const id= +req.params.id;
//     console.log(`id is ${id}`);
//     const product=  products.find(product=>product.id===id);
//     res.json(product);
//  })
// //API -Endpoint
// //below code is to check if the reqest is working fine or not
// ///CRUD ---create read update delete
// //Create POST using post api we can create a new object and add it to the array also 


// server.post('/products',(req,res)=>{
//     console.log(req.body);
//     products.push(req.body);
//     res.json({type:'POST'});
// });


// //PUT--update using put api we can update,edit,change,modify the existing object
// //the difference between put and patch api is that put api will update the entire object while patch apit will update the particular field of the object
// server.put('/products/:id',(req,res)=>{
//     const id= +req.params.id;
//     const productIndex=products.findIndex(p=>p.id===id);
//     products.splice(productIndex,1,{...req.body,id:id});

//     //product.title=req.body.title;
//     res.json({type:'PUT'});
// });  

// ////patch--->only update the particular field of the object like title,price etc. it 
// //splice is used to remove the element from the array and push is used to add the element to the array
// //syntax of splice is splice(index,how many element u want to remove,element to add)
// //spread operator is used to add the element to the array 

// server.patch('/products/:id',(req,res)=>{
//     const id= +req.params.id;
//     const productIndex = products.findIndex(p=>p.id===id);
//     const product= products[productIndex];
//    products.splice(productIndex,1,{...product,...req.body});
//     res.json({type:'PATCH'});
// })
// server.delete('/products/:id',(req,res)=>{
//     const id= +req.params.id;
//     const productIndex = products.findIndex(p=>p.id===id);
//     const product= products[productIndex];
//    products.splice(productIndex,1);
//     res.json({type:'DELETE'});
// })

// // server.use(express.urlencoded);
// server.use((req,res,next)=>{
//     console.log('Middleware running');
//     next();
// })
// ///static hosting

 

// //Read GET by id
// server.get('/products/:id',(req,res)=>{
//    const id= +req.params.id;
//    console.log(`id is ${id}`);
//    const product=  products.find(product=>product.id===id);
//    res.json(product);
// })

// ///create api POST /products


// const Auth= ((req,res,next)=>{
//    // console.log(req.body)
//     if(req.query.password==='1234'){
//         next()
//     }
//     else{
//         res.sendStatus(401);
//     }
// })






////end
///Middleware  they are work as sequence of filter
//in most of the cases middleware are already made


// server.get('/',(req,res)=>{
//     //res.send('hello');
//     //res.sendFile('/Users/Vikram Gurjur/Desktop/js/expresss/index.html');
//     //res.json(products);
// })


////api baseurl or api baseurl


