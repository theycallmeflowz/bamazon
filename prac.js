var arr = [4,9,10,94];
var newArr = []

for (var i = 0; i < arr.length; i++ ){
    (newArr.push((arr[i]*8)+9));    
}

console.log(newArr);

let array = [4,9,10,94];
let newArray = [];

array.forEach((number)=>{
  newArray.push(number*8+3);
});

console.log(newArray);

function add(a,b){
    return a + b;
}

add(1,2); //3

function crazy(funcOne, funcTwo){
    //funcOne is add
    //funcTwo is add
    return funcOne(1,3) + funcTwo(4,5);
}

console.log(crazy(add, add)); //13

function multy(x,y){
    return x * y;
}

multy(9,7);

function blink(funcOne,funcTwo){
    return funcOne(76,54) + funcTwo(90,36);
}

console.log(blink(multy,multy));

	// //constructor function
	// //b/c of the capital letter
	// function Person(name, age, job){
	// 	this.name = name;
    //     this.age = age;
    //     this.job = job;
	// }

	// var m = new Person("Michael Desantis", 25, "Software Developer");
	// var p = new Person("Pavan Katepalli", 17, "Web Architect");

	// Person.prototype.greeting = function(){
	// 	console.log("Hello, my name is " + this.name + ". Im " + this.age + " years old and Im a " + this.job);
	// }

    // m.greeting();
    // p.greeting();

	//the __proto__ property of the object created using the constructor function points to the prototype object, which contains the constructor function that was used to create the object.
    
    function showName (firstName, lastName) {
        var nameIntro = "Your name is ";
		
        // this inner function has access to the outer function's variables, including the parameter​
        
        function makeFullName(){
            return nameIntro + firstName + " " + lastName; 
        }      
	​
	​    return makeFullName();
	}
	​
	showName("Michael", "Jackson"); // Your name is Michael Jackson 

