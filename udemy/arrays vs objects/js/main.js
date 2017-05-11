//   A Array is like a list and you can access to their properties whit the index number ;
// Example
 var numbers = [1,2, 3,4,5,6,7 ];
  console.log(numbers[0]); // Accessing to the first value of the Array
 console.log(numbers) // accessing to the complete value of the Array
 
 
 
 
//  ######## objects syntax########
 var user = {
   name:"Ismael",
   age:27,
   from:"San Juan Quiahije",
   live:"Daytona Beach"
 }
 // accessing to the properties of the object,the object not have a specific order like the array;
 console.log(user["name"]) ;
 // accessing to the complete value of the object 
 console.log(user["age"]);
//  nested Objects in a Array#########
var post=[
// declare a objects 
{
  tittle:"We love cats",
  auttor:"Ismael Garcia",
  comments:["How many cat do you have", "I have two cats"]
},
// Declaring the second objects
{
  tittle:"I hate dogs",
  auttor:"some guy",
  comments:["i love cat too", " but i cant stand dogs"]
}
];
console.log(post[0]["comments"][1]); 
console.log(post[1]["tittle"]);
console.log(post[1]["comments"][0]);