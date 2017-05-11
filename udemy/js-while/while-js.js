console.log("count from 1 to 10");
var count=1;
while (count < 10 ) {
    console.log(count);
    count++;
};
// print all even number between 10 to 40 
console.log("Print all even number between 10 to 40 ");
count=10;
while (count <= 40 ) {
    if (count % 2 === 0) {
    console.log(count);
} 
count++;
};
// print all add number between 300 and 333
console.log("Print all add number between 300 to 333");
count= 300;
while (count <= 333) {
    if (count % 2 !== 0 ) {
    console.log(count);
}
count++;
};
//  Print all number divisible by 5 and 3 between 5 to 50 
console.log("print all number divisible by 5 and 3 between 5 to 50");
count=5;
while (count<=50) {
    if (count % 5 === 0 && count % 3 === 0 ) {
    console.log(count);
}
count++;
}
 