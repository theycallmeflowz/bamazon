
var inquirer = require("inquirer");
var Mysql = require("mysql");
require("console.table");
require("cli-table");

var connection = Mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "",
    database: "bamazondb"
});

// Setting up connection to the database
connection.connect(function (err){
    if (err) throw err;
    start();
});



// Reading from the database
function readStock(){
    connection.query("SELECT * FROM products", function(err,res){
        // for (var i = 0; i < res.length; i++) {
        //     console.log("\n" + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        // }
        // console.log("----------------------------------------------------------------");
        console.table("\n", res);
    })
        start();

}


function start () {
    inquirer.prompt([
        {
            type: "list",
            name: "mgrview",
            message: "Welcome to The Node Apple Store Inventory Manager (N.A.S.I.M)",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ]).then(function(answer){
            if (answer.mgrview === "View Products for Sale"){
                readStock();
            } else if (answer.mgrview === "View Low Inventory"){
                viewLowStock();
            } else if (answer.mgrview === "Add to Inventory"){
                updateInventory();
            } else {
                addProduct();
            }
    })
}


function addProduct(){
    inquirer.prompt([
      {
        name: "product_name",
        type: "input",
        message: "Please Enter the Product name"
      },{
        name: "department_name",
        type: "input",
        message: "Please Enter the Department name"
      },{
          name: "price",
          type: "input",
          message: "Please Enter the Price of The Product"
      },{
        name: "stock_quantity",
        type: "input",
        message: "Please Enter the Stock Quantity"
    }

]).then(function(answer){
    connection.query(
        "INSERT INTO products SET ?",
        {
          product_name: answer.product_name,
          department_name: answer.department_name,
          price: answer.price,
          stock_quantity: answer.stock_quantity
        },
        function(err) {
          if (err) throw err;
          console.log("New Product Added successfully!");
          // re-prompt the user to beginning
          start();
        
        }
      )
})
}



// var products = connection.query("SELECT product_name FROM products", function (err,res){
//     if (err) throw err;
//     console.log(products);
//     
// });

function updateInventory(){
    inquirer.prompt([
      {
        name: "product_name",
        type: "list",
        message: "What is the product you would like to update?",
        choices: ["Macbook Pro 15", "Macbook Pro 13", "Macbook Air 13", "Mac Pro", "iMac 27 inch", "iPhone X",
                "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", 
                "iPad Pro 12.9 inch", "iPad Air 9.7 inch", "iPad 6th Gen", "Beats Pill", "Power Beats 3", 
                "Beats Headphones", "Apple Watch Series 3", "iPhone Charger", 
                "Macbook Pro Charger", "Air Pods" ]
      }]).then(function(answer){
            var query = connection.query(
                "UPDATE products SET stock_quantity",
                [{
                    stock_quantity: 15

                }],function(err,res){
                    console.log("\nStocks Quantity has been updated to 15 for all items!\n");
                }
            )
      })
      
}


function viewLowStock (){
    connection.query("SELECT * FROM products WHERE stock_quantity < ?", 
    { stock_quantity: 10 },function(err, res) { 
        console.log ("No Stock is low at the moment");
        start();
     }
     
    )}
