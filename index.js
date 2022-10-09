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
var arr=["HTML","CSS","JS","ReactJS"];
console.log(arr);
arr.push("NodeJS");//push---Adds a element to the last.
console.log(arr);
arr.unshift("FullStack");//unshift---Adds a element in the 0th Index.
console.log(arr);
arr.pop();//pop---Removes the last element.
console.log(arr);
arr.shift(); //shift---Removes the first element.
console.log(arr);


//slice and Splice
console.log(""); //for empty line in console
var a=["Anirudha","1234567890","anirudhabs@gmail.com","mysore","Bangalore"];
console.log(a);

//splice
a.splice(2,0,"E-Id","Adhaar"); //Splice--- it Add or removes element.
console.log(a);
a.splice(0,2)
console.log(a);
a.splice(2,3)
console.log(a);
//slice
var a=["Anirudha","1234567890","anirudhabs@gmail.com","mysore","Bangalore"];
console.log(a);
var b=a.slice(1,3);//Slice---returns selected elements in an array, as a new array. selects from a given start, up to a (not inclusive) given end.
console.log(b);

//Object and nesting on objects
var employee={
    Name="Anirudha B S" ;
    Gender= "Male"
    ID=123456;
    Dept="I T" ;

}
console.log(employee);
console.log(employee.ID);
console.log(employee.Name);

studentOne.Homecity="Mysore";//adding new property
console.log(studentOne.Homecity);
//array of object
var team=[
    {
        Name:"Anirudha B S",
        Gender:"Male",
        ID:123456,
        Dept:"I T",
    },
    {
        Name:"vinay",
        Gender:"Male",
        ID:456123,
        Dept:"I T",
    },
    {
        Name:"Rahul",
        Gender:"Male",
        ID:561234,
        Dept:"I T",
    },
    {
        Name:"Sahana",
        Gender:"Female",
        ID:234561,
        Dept:"I T",
    }
];
// console.log(team[1]);
// console.log(team[3]);

for(var i=0;i<team.length;i++){
    console.log(team[i].ID + "  " + team[i].Name);//To print ppls name in the team.
}

