document.getElementById('sample').innerHTML="Hello Putos hahahahha";
//id
//clas name
//name
//css selector
//HTML objects collections

function myFunction(){
    var x = document.forms["form1"];
    var text = "";
    for (var i = 0; i < x.length;i++){
        text += x.elements[i].value +"<br>";
    }
    document.getElementById('formContent').innerHTML= text;
}
