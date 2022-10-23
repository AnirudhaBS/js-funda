// //Switch
// // var a=10 , b=55 , c='-';
// // switch(c){
// //     case'+':console.log(a+b); alert(' You are using a+b');
// //     break;
// //     case'-':console.log(a-b); alert('You are using a-b');
// //     break;
// //     case'*':console.log(a*b); alert('You are using a*b');
// //     break;
// //     case'/':console.log(a/b); alert('You are using a/b');
// //     break;
// //     default:console.log(NaN); alert('a or b is NaN');
// // }


//Array
//push,unshift,pop,shift
// var arr=["HTML","CSS","JS","ReactJS"];
// console.log(arr);
// arr.push("NodeJS");//push---Adds a element to the last.
// console.log(arr);
// arr.unshift("FullStack");//unshift---Adds a element in the 0th Index.
// console.log(arr);
// arr.pop();//pop---Removes the last element.
// console.log(arr);
// arr.shift(); //shift---Removes the first element.
// console.log(arr);


// //slice and Splice
// console.log(""); //for empty line in console
// var a=["Anirudha","1234567890","anirudhabs@gmail.com","mysore","Bangalore"];
// console.log(a);

// //splice
// a.splice(2,0,"E-Id","Adhaar"); //Splice--- it Add or removes element.
// console.log(a);
// a.splice(0,2)
// console.log(a);
// a.splice(2,3)
// console.log(a);
// //slice
// var a=["Anirudha","1234567890","anirudhabs@gmail.com","mysore","Bangalore"];
// console.log(a);
// var b=a.slice(1,3);//Slice---returns selected elements in an array, as a new array. selects from a given start, up to a (not inclusive) given end.
// console.log(b);

// //Object and nesting on objects
// var employee={
//     Name:"Anirudha B S",
//     Gender:"Male",
//     ID:123456,
//     Dept:"I T",

// }
// console.log(employee);
// console.log(employee.ID);
// console.log(employee.Name);

// studentOne.Homecity="Mysore";//adding new property
// console.log(studentOne.Homecity);
// //array of object
// var team=[
//     {
//         Name:"Anirudha B S",
//         Gender:"Male",
//         ID:123456,
//         Dept:"I T",
//     },
//     {
//         Name:"vinay",
//         Gender:"Male",
//         ID:456123,
//         Dept:"I T",
//     },
//     {
//         Name:"Rahul",
//         Gender:"Male",
//         ID:561234,
//         Dept:"I T",
//     },
//     {
//         Name:"Sahana",
//         Gender:"Female",
//         ID:234561,
//         Dept:"I T",
//     }
// ];
// // console.log(team[1]);
// // console.log(team[3]);

// for(var i=0;i<team.length;i++){
//     console.log(team[i].ID + "  " + team[i].Name);//To print ppls name in the team.
// }


//09-10-2022
//let & Const---These two are the block scope.
// let x = 10; //let cannot be Redeclared.

// const PI = 3.141592653589793;//Const cannot be Redeclared, Reassigned.
// console.log(PI);
// //Const in Array
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// cars[0] = "Toyota";// You can change an element
// cars.push("Audi");// You can add an element
// console.log(cars);

// //Array Functions
// function add(a,b) {
//     return a+b
// }// Function Expression
// console.log(add(10,80));

// const sum =(a,b) => {return a + b}; //Arrow function.
// console.log(sum(500,6001));

// //Array Helpers
// //ForEach
// var arr=['one','two','three','four','five']
// arr.forEach(function (pri) {
//     console.log(pri);
// })

// const arr1 = [3, 5, 6, 1];
// let sum1 = 0;
//   arr1.forEach((item) => {sum1 += item;// adding the numbers in an array using arrow function.
//   });
// console.log(sum1)

// //map
// const num=[1,2,3,4,5,6,7,8,9]
// num.map((num)=> console.log(num*2))

// //Filter
// const arr2 = [3, 5, 6, 1];
// const req = arr2.filter((item) => {
//     return item > 4
//   });
// console.log(req);
// console.log(arr2);

// //reduce
// const arrr = [3, 5, 6, 1];
// const req2 = arrr.reduce((acc, curr) => {
//     acc *= curr;
//     return acc;
//   });
// console.log(req2);

// //find
// const array = [10, 20, 30, 40];
// const found = array.find((elem) => {
//   return elem > 20
// });
// console.log(found);

// //String literals
// var first='happy';
// var second='weekend';
// const message=`${first}  ${second}`
// console.log(message);





  
// program to create a simple calculator using the if...else...if in JavaScript.  
// take the operator from the user through prompt box in JavaScript.  
// const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// // accept the number from the user through prompt box  
// const number1 = parseFloat(prompt ('Enter the first number: '));  
// const number2 = parseFloat(prompt ('Enter the second number: '));  
  
// let result; // declaration of the variable.  
  
// // use if, elseif and else keyword to define the calculator condition in JavaScript.  
// if (operator == '+') { // use + (addition) operator to add two numbers  
//     result = number1 + number2;  
// }  
// else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
//     result = number1 - number2;  
// }  
// else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
//     result = number1 * number2;  
// }  
// else {  
//     result = number1 / number2; // use / (division) operator to divide two numbers  
// }  
  
// // display the result of the Calculator  
// window.alert(" Result is" + result);  




//API 

//DOM

// const textarr= document.getElementById("head")
// console.log(textarr);

// function dyn(){
//     const name = document.querySelector("H1")
//     name.innerText="Welcome to JS DOM";
// }

function increment() {
    const initialValue= document.querySelector("h1");
    const updatedValue= Number(initialValue.innerText)+ 1;
    initialValue.innerText=updatedValue;
    
    if(updatedValue%5==0){
        initialValue.style.color="red";
    }
    else{
        initialValue.style.color="";
    }
}

function decrement() {
    // console.log("dec clicked");
    const initialValue= document.querySelector("h1");
    const updatedValue= Number(initialValue.innerText) - 1;
    initialValue.innerText=updatedValue;
    if(updatedValue%5==0){
        initialValue.style.color="red";
    }
    else{
        initialValue.style.color="";
    }

}