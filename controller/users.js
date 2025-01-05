
const fs=require('fs');
const data = require('../data.json');
const users=data.users;

 exports.getProducts = (req,res)=>{
    res.json(users);
}

 exports.deleteProduct = (req,res)=>{
    const id= +req.params.id;
    const productIndex = users.findIndex(p=>p.id===id);
    const product= users[productIndex];
   users.splice(productIndex,1);
    res.json({type:'DELETE'});
}

 exports.getProduct = (req,res)=>{
    const id= +req.params.id;
    console.log(`id is ${id}`);
    const product=  users.find(product=>product.id===id);
    res.json(product);
 }

 exports.replaceProduct = (req,res)=>{
    const id= +req.params.id;
    const productIndex=users.findIndex(p=>p.id===id);
    users.splice(productIndex,1,{...req.body,id:id});

    //product.title=req.body.title;
    res.json({type:'PUT'});
}

 exports.updateProduct = (req,res)=>{
    const id= +req.params.id;
    const productIndex = users.findIndex(p=>p.id===id);
    const product= users[productIndex];
   users.splice(productIndex,1,{...product,...req.body});
    res.json({type:'PATCH'});
}
