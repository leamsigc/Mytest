// version 1 

/* alert("WE ARE CONNECTED");
var answer= prompt("Are we there yet?");
while (answer !== "yes") {
  answer=prompt("Are we there yet?");
}
alert("YAY WE MADE IT");  */
// VERSION 2 
var answer= prompt("Are we there yet ? ");
while (answer.indexOf("yes") === -1) {
    answer = prompt("are we there yet ? ")
}
alert("yay we made it !!");

// Star of for loop 
var str= "Hello world";
for (var i = 0 ; i < str.length; i++) {
    console.log(str[i]);
}
// for look  practice 
console.log("PRINT NUMBER BETWEEN -10 to 19");
for (var i = -10 ; i <= 19 ; i++) {
    console.log(i);
};
// print all the even number between 10 to 40 

console.log("print all even number between 10 to 40  ");
for (var i= 10 ; i <= 40  ; i++) {
    if (i % 2 === 0 ) {
    console.log(i);
}
};
//  Print all odd number between 300 to 333
console.log("Print all odd number between 300 to 333");
for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0 ) {
    console.log(i);
}
};
//  Print all number divisible by 5 and 3 between 5 to 50 
console.log(" Print all number divisible by 5 and 3 between 5 to 50 ");
for (var i= 5 ; i <=  50 ; i++) {
    if (i % 5 === 0 && i % 3 === 0  ) {
    console.log(i);
}
};



