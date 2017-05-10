var fruits =  ['Banana','Oranges','Apple','Mango'];
//Accessing to the dta from the Array from the console
console.log(fruits);
//Accessing the data and transforms to string
console.log(fruits.toString());
//The join options is to change the separators 
console.log(fruits.join(' ||'));

// Push and pop
fruits.push('Kiwi');
fruits.push('Leamsigc');
console.log(fruits);
// pop
fruits.pop();
console.log(fruits);
// add a Element to the star of the Array 
fruits.unshift("someting new");
console.log(fruits);
// Remove Elements from and Array 
fruits.shift();
console.log(fruits);
//Change a Element 
fruits[0]="something";
console.log(fruits);
//Add Element to the end of the Array 
fruits[fruits.length]="Banana";
console.log(fruits);
//Delete a Element from a Array 
delete fruits[0];
console.log(fruits);
//Splice Methods  the second parameter is to remove elements from the array and the first one is the point to star 
fruits.splice(2,0,'Lemon','Kiwi');
console.log(fruits);
//remove the first element from the array
fruits.splice(0,1);
console.log(fruits);
// Join  and Array
var arr1=["Tom","John"];
var arr2 = ['Smith','Jessi'];
var arr3 = ['Bob ', 'Rocky']
var myArray = arr1.concat(arr2,arr3);
console.log(myArray);
// slice cut the array and make a new one from it
var newFruits = fruits.slice(1);
console.log(newFruits);
// slice two elements from a Array 
var newFruits2 = fruits.slice(1,3);
console.log(newFruits2);
//==========USE POP TO REMOVE THE LAST ITEM FROM THE ARRAY======
var frut = ['Banana','Oranges','Apple','Mangos'];
    frut.pop();
document.getElementById('demo').innerHTML='" '+frut+" After removing the last element of the array"+' "';
//==========USE PUSH TO ADD A NEW ITEM FROM THE ARRAY number 2======
frut.push("kiwi");
document.getElementById('demo1').innerHTML=frut;
//==========Use the splice() method to remove "Orange" and "Apple" from fruits======
frut.splice(1,2);
document.getElementById('demo2').innerHTML=frut+'  Oranges And Apple are remove from the array';
//==========Use the concat() method to concatenate girls and boys.s======
var girls = ['Emily','Sandra','Joana'];
var boys = ['Robert','Luis','Miguel'];
var children = girls.concat(boys);
document.getElementById('demo3').innerHTML= children;