var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["white", "red", "blue","green"];

number.forEach(function (color) {
    if (color % 3 === 0 ) {
    console.log(color);
}
});

// This is the best way to do it 
number.forEach(function (numbers) {
    if (numbers % 3 === 0 ) {
    console.log(numbers)
}
});