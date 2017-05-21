// Strings, Number , Booleans , Objects and Function
// Type of Objects: Object ,Date and Array
//null and undefined
console.log('ismael-'+ typeof "ismael") // String 
console.log('3.14 - '+typeof 3.14);//Number
console.log('Nan- '+typeof NaN);//null  and undefined
console.log('false- '+typeof false);//Boolean
console.log('Array - '+typeof ['uno',2,3]);//Array
console.log('Object - '+typeof {name:'ismael',age:27});//Object
console.log('Date- '+typeof new Date('12/31/2017'));//Object
console.log('function- '+typeof function (){});
console.log('nombre - '+typeof nombre);
// typeof is a Operator return or respond width the regular mathematical operators but also return a string for the result
// constructor
console.log('ismael '+ "ismael".constructor);
console.log('3.14'+3.14.constructor);
console.log("Array"+[1,2,3,4,5].constructor);
// check if it is a Array
    function isArray(myArray){
        return myArray.constructor.toString().indexOf("Array") > -1;
    }
    console.log(isArray(3.14));
    console.log(isArray([1,2,3,4,5]));
    //toString() , String()
console.log("------ Number to String  ---------");
var x = 10;
console.log(String(x));
console.log(x.toString());
console.log(String(123) ,(123).toString());
console.log(String(120+3) , (120+3).toString());
// Booleans to Strings
console.log("------ Booleans to String  ---------");
console.log(String(false));
console.log(String(true));
console.log(true.toString());
console.log(false.toString());
// Booleans to Strings
console.log("------ Date  to String  ---------");
console.log(String(new Date ("1/1/2017")));
console.log((new Date ("1/1/2017")).toString());
// String to Numbers
console.log("------ String  to Numbers ---------");
console.log(Number('3.14'));
console.log(Number(" "));
console.log(Number(""));
console.log(typeof Number("10 20"));
//unity '
var y = 10;
var x = + y;
console.log(x);
y= "ismael";
x = +y;
console.log(x);
// Booleans to Number
console.log("------ Booleans to Number  ---------");
console.log(Number(false));
console.log(Number(true));
// Date to Numbers
console.log("------ Dates to Number  ---------");
console.log(Number(new Date("1/1/2017")));
// automatic type Conversions
console.log("------ Automatic type Conversions  ---------");
console.log(5 + null);
console.log("5"+ null);
console.log("5"+ 2);
console.log("5" - 2);
console.log("5"*"5");
// tpe conversion exercise
console.log("------  tpe conversion exercise  ---------");
var c = console.log;
c(Number(false));
c(String(false));
c(Number(true));
c(String(true));
c(String(0));
c(Boolean(0));
c(Boolean(1));
c(Boolean("0"));
c(Boolean("000"));