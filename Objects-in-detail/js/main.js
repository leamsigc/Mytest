// Object literal 
var person = {
    name:'ismael',
    lastName:'Garcia',
    age:'27',
    eyeColor:'black'
};
var personSmart = new Object();
personSmart.firstName = 'Roberto';
personSmart.lastName = 'Cruz';
// new keyword
// Constructor
function people (first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
}
var mom = new people('Regina','Canseco',67,'skyblue');
console.log(mom);