// // Switch(expreccion){
//     case n:
//         codeBlock;
//         break;
//     case n:
//         codeBlock;
//         break;
// }
var day ;
switch (new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;   
}
document.getElementById('day').innerHTML= day;
// Add a default for the switch statement
var defaultday ;
switch (new Date().getDay()){
    case 0:
        defaultday = "sunday";
        break;
    case 2:
        defaultday = "Saturday";
        break; 
    default: 
        defaultday ='Looking forward for the weekend.!!'
}
document.getElementById('default').innerHTML= defaultday;
// Check Car function 
function checkCar(){
    var text;
    var favCar=document.getElementById('input').value;
    console.log(favCar);
    switch(favCar)
    {
        case "BMW":
            text = "German car";
            break;
        case 'NISSAN':
            text = 'Japanese car';
            break;
        case 'TOYOTA':
            text = 'One more Japanese car';
            break;
        case 'FORD':
            text = 'Made in the  USA';
            break;
        default :
            text = 'Unknown Car';
    }
    document.getElementById('car').innerHTML=text;
}