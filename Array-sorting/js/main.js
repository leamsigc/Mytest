// Declare the main variable 
var fruits = ['Banana','Apple','Orange','Mango'];
//console log for our var 
console.log(fruits.sort());
// to reverse the var 
console.log(fruits.reverse());
// sort  from numbers 
var point = [40, 100 ,20,50 , 200 , 300];
// we pas  a function to print the number from lower to higher
point.sort(function(a,b){return a-b});// compare function 40 and 100 then return 40 -100 equal -60
console.log(point);
// and to return the number from the array the highest to the lower
point.sort(function(a,b){return b - a});
console.log(point);
// randomize the array
point.sort(function (a,b){
    return 0.5 - Math.random();
});
console.log(point);


// sort from arrays whit objects on it
var cars = [
    {name:"Volvo" , year:2015},
    {name:"BMW" , year:2010},
    {name:"TOYOTA" , year:2014},
    {name:"FORD" , year:2017},
];
// SORTING BASE ON NUMERIC OBJECTS PARAMETRERS
console.log(cars);
cars.sort(function(a,b){
return a.year - b.year;
});
console.log(cars);


// sorting base on string of the objects
cars.sort(function (a,b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y ){return -1}
    return 0 ;
});

//=======sort() method to sort the array
var frutas = ['Mangos', 'Calabaza','Platanos'];
frutas.sort();
document.getElementById('demo1').innerHTML= frutas;
