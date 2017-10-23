CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products (
		item_id INT(10) AUTO_INCREMENT NOT NULL,
        product_name VARCHAR(100) NOT NULL,
        department_name VARCHAR(100) NOT NULL,
        price INT(10) NOT NULL,
        stock_quantity INT(10) NOT NULL,
        primary key (item_id)
);

INSERT INTO products ()
VALUES 
(1, "iphone X", "iPhone", 1000, 10),
(2, "iphone 8 plus", "iPhone", 850, 10),
(3, "Mac Pro", "Mac", 3000, 10),
(4, "iMac 27 inch", "Mac", 2500, 10),
(5, "Macbook Pro 15", "Mac", 2700, 10),
(6, "Macbook Pro 13", "Mac", 1500, 10),
(7, "Macbook Air 13", "Mac", 1200, 10),
(8, "iPad Pro 12.9 inch", "iPad", 900, 10),
(9, "iPad Air 9.7 inch", "iPad", 600, 10),
(10, "Beats Headphones", "Beats", 300, 10),
(11, "Air Pods", "Accessories", 150, 10),
(12, "iphone 8", "iPhone", 800, 10),
(13, "iphone 7 plus", "iPhone", 750, 10),
(14, "iphone 7", "iPhone", 700, 10),
(15, "iPad 6th Gen", "iPad", 700, 10),
(16, "iphone Charger", "Accessories", 50, 10),
(17, "Macbook Pro Charger", "Accessories", 100, 10),
(18, "Beats Pill", "Beats", 350, 10),
(19, "Power Beats 3", "Beats", 300, 10),
(20, "Apple Watch Series 3", "Watch", 380, 10);

UPDATE products
SET department_name = "Mac"
WHERE item_id = 7