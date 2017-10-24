var inquirer = require("inquirer");
var Mysql = require("mysql");
require("console.table");

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
});

// Reading from the database
function readStock(){
    connection.query("SELECT * FROM products", function(err,res){
        console.table("\n", res);
        start();
    })
}


var stock_quantity = 10;
start();

function start () {
inquirer.prompt([
    {
        type: "list",
        name: "department_name",
        message: "Welcome to The Apple Store on Node",
        choices: ["Shop Macs", "Shop iPhones", "Shop iPads", "Buy Beats Headphones", "Shop Accessories", "View Our Entire Product Line up"]
    }
]).then(function(answer){
    if (answer.department_name === "Shop Macs") {
        shopMacs();
    } else if (answer.department_name === "Shop iPhones") {
        shopPhones(); 
    } else if (answer.department_name === "Shop iPads") {
        shopiPad();
    } else if (answer.department_name === "Buy Beats Headphones"){
        shopBeats();
    } else if (answer.department_name === "Shop Accessories"){
        shopAccessories();
    } else {
        readStock();
    }
})
}

function shopPhones(){
    inquirer.prompt([
        {
            type: "list",
            name: "product_name",
            message: "Please Choose a Phone",
            choices: ["iPhone X", "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iphone 7"]
        },{
            type: "input",
            name: "qty",
            message: "Please Enter the Quantity"
        }
    ]).then(function(answer){
        if (answer.product_name === "iPhone X"){
                var id = 1;
        } else if (answer.product_name === "iPhone 8 Plus"){
                var id = 2;
        } else if (answer.product_name === "iPhone 8"){
                var id = 12;
        } else if (answer.product_name === "iPhone 7 Plus"){
                var id = 13;
        } else if (answer.product_name === "iPhone 7"){
                var id = 14;
        }
        

       if (answer.qty > 10){
           console.log("We're Out of Stock, Try a lower quantity and i can try to look again");
           shopPhones();
           
       } else { 
        calcOrder();
        start();

        function calcOrder(){
            var orderNumber = Math.floor((Math.random() * 99999999));
            var price = connection.query( "SELECT price FROM products WHERE item_id ="+ id, function(err, res){  
                var item_price = (answer.qty * res[0].price)
                var tax = (0.075 * item_price)
                var orderTotal = (item_price + tax)  
                    
                    console.log("\nYour Order Total is $"+ orderTotal +"\n");
                    console.log("Please Wait While we process your order\n");

                    var counter = 0;
                    
                    setInterval(function (){
                        if (counter <= 90) {
                        counter+= 10;
                        console.log(counter + "%");   
                        } 
                    }, 200)
                    clearInterval(counter);   
                    setTimeout(function(){
                            console.log("\nYour Order has been placed successfully \nThank You for Shopping at The Bamazon Apple Store\nYour Order Number is WB"+ orderNumber + "\n\nOrder Details:\nitem: "+ answer.product_name + "\nQuantity: " + answer.qty + "\nAmount Billed: $" + orderTotal)
                    }, 2200)               
            })
            
        }
        
       }
    })
}



function logOrder(){
    
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [{   

            stock_quantity: (stock_quantity - answer.qty)

        }, {

            product_name: answer.product_name

        },
            function(err, res) {
                console.log(res.affectedRows + " Order Placed");
        }]
    )
}





function shopMacs() { inquirer.prompt([
    {
        type: "list",
        name: "product_name",
        message: "Please Choose a Product",
        choices: ["Mac Pro", "iMac 27 inch", "Macbook Pro 15", "Macbook Pro 13", "Macbook Air 13"]
    },{
        type: "input",
        name: "qty",
        message: "Please Enter the Quantity"
    }
]).then(function(answer){
   
   
        if (answer.product_name === "Mac Pro"){
                var id = 3;
        } else if (answer.product_name === "iMac 27 inch"){
                var id = 4;
        } else if (answer.product_name === "Macbook Pro 15"){
                var id = 5;
        } else if (answer.product_name === "Macbook Pro 13"){
                var id = 6;
        } else if (answer.product_name === "Macbook Air 13"){
                var id = 7;
        }
        

       if (answer.qty > 10){
           console.log("We're Out of Stock, Try a lower quantity and i can try to look again");
           shopMacs();
           
       } else { 
        calcOrder();
        
       

        function calcOrder(){
            var orderNumber = Math.floor((Math.random() * 99999999));
            var price = connection.query( "SELECT price FROM products WHERE item_id ="+ id, function(err, res){  
                var item_price = (answer.qty * res[0].price)
                var tax = (0.075 * item_price)
                var orderTotal = (item_price + tax)  
                    
                    console.log("\nYour Order Total is $"+ orderTotal +"\n");
                    console.log("Please Wait While we process your order\n");

                    var counter = 0;
                    
                    setInterval(function (){
                        if (counter <= 90) {
                        counter+= 10;
                        console.log(counter + "%");   
                        } 
                    }, 200)
                    clearInterval(counter);   
                    setTimeout(function(){
                            console.log("\nYour Order has been placed successfully \nThank You for Shopping at The Bamazon Apple Store\nYour Order Number is WB"+ orderNumber + "\n\nOrder Details:\nitem: "+ answer.product_name + "\nQuantity: " + answer.qty + "\nAmount Billed: $" + orderTotal)
                    }, 2200)               
            })
            
        }
        start();
    }




})
}

function shopiPad(){
    inquirer.prompt([
        {
            type: "list",
            name: "product_name",
            message: "Please Choose an iPad",
            choices: ["iPad Pro 12.9", "iPhone Air", "iPad 6"]
        },{
            type: "input",
            name: "qty",
            message: "Please Enter the Quantity"
        }
    ]).then(function(answer){
       
        console.log(answer.product_name, answer.qty);
    })
}

function shopAccessories(){
    inquirer.prompt([
        {
            type: "list",
            name: "product_name",
            message: "Please Choose an Accessory",
            choices: ["Air Pods", "iPhone Charger", "Macbook Pro Charger"]
        },{
            type: "input",
            name: "qty",
            message: "Please Enter the Quantity"
        }
    ]).then(function(answer){
       
        console.log(answer.product_name, answer.qty);
    })
}

function shopBeats(){
    inquirer.prompt([
        {
            type: "list",
            name: "product_name",
            message: "Please Choose a Beats Headphone",
            choices: ["Air Pods", "Beats Pill", "Power Beats 3"]
        },{
            type: "input",
            name: "qty",
            message: "Please Enter the Quantity"
        }
    ]).then(function(answer){
       
        console.log(answer.product_name, answer.qty);
    })
}
// Function that Updates the inventory using product ID and stock quantity






