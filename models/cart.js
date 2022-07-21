const fs = require('fs');
const path =  require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );


module.exports = class Cart{

    static addProduct(id,productPrice){
        //fetch previous cart

        fs.readFile(p,(err,fileContent)=>{
            let cart  = {products:[],totalPrice:0}
            if (!err){
                cart  =  JSON.parse(fileContent)


            }
            //analyze previous cart, find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id===id);
            const existingProduct = cart.products[existingProductIndex]
            let upadtedProduct;
             
        // add new product/increase quantity
            if(existingProduct){
                upadtedProduct = {...existingProduct};
                upadtedProduct.qty = upadtedProduct.qty+1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = upadtedProduct;
            }else{
                upadtedProduct= {id:id,qty:1};
                cart.products = [...cart.products,upadtedProduct];


            }
            cart.totalPrice  = cart.totalPrice + +productPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err)
            })
            
        })
       


    }

}