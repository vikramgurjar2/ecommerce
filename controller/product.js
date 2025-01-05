const fs = require('fs');
const model = require('../Model/product');
const Products = model.product;

exports.createProduct = async (req, res) => {
    try {
      const product = new Products(req.body); // Assuming `Products` is your Mongoose model

      const savedProduct = await product.save();
      res.status(201).json({
        message: "Product created successfully",
        data: savedProduct,
      });
    } catch (error) {
      // Handle errors and send a proper response
      res.status(500).json({
        message: "An error occurred while creating the product",
        error: error.message,
      });
    }
  };


exports.getProducts = async (req, res) => {
   try {
       const products = await Products.find(); // Use lean() for plain JS objects
       res.json(products);
       console.log(products);
   } catch (error) {
       console.error(error);
       res.status(500).json({ message: "Internal Server Error" });
   }
};



exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = Products.findIndex(p => p.id === id);
    const product = Products[productIndex];
    Products.splice(productIndex, 1);
    res.json({ type: 'DELETE', product });
};

exports.getProduct = (req, res) => {
    const id = +req.params.id;
    console.log(`id is ${id}`);
    const product = Products.find(product => product.id === id);
    res.json(product);
};

exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = Products.findIndex(p => p.id === id);
    Products.splice(productIndex, 1, { ...req.body, id: id });

    res.json({ type: 'PUT' });
};

exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = Products.findIndex(p => p.id === id);
    const product = Products[productIndex];
    Products.splice(productIndex, 1, { ...product, ...req.body });
    res.json({ type: 'PATCH' });
};
