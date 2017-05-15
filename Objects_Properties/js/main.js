var person = {
    firstName: "Joel",
    age: 30,
    lastName: 'Doe',
    eyeColor: "blue"
};
// add change and delete
// how we can access to the object
//--objectName.property // person.firstName
//--objectName['property']//person['firstName]
//--objectName[expression]// var x = "age"; person[x]
var x = "age";
console.log(person.firstName);
console.log(person['lastName']);
console.log(person[x]);
//for  loop 
var text= " ";
for (y in person) {
    text += person[y];
    text += " ";
}
console.log(text);
// How to add new property to our objects
person.nationality = 'Mexico';
console.log(person.nationality);
person.fullName= function ()
    {
return this.firstName+" "+this.lastName;
    };
    console.log(person.fullName());

// how to delete one property  delete delete all of the property selected
delete person.age;
console.log(person);
//========OBJECTS METHODS=====
var x = 'Alejandro ,Alejandro';
console.log(x.toUpperCase());
console.log(x.toLowerCase());

