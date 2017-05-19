var p = document.getElementById('demo');
p.innerHTML = "New text!";

p.style.color = "red";
p.style.backgroundColor = "yellow";
p.style.textAlign = "center";
p.style.fontSize = '40px';
//p.style.visibility = 'hidden';


/*DOM Events star here*/
var h2 = document.getElementById('h2');
//Change the text width a function on click
function changeText(elem) {
    elem.innerHTML = 'Ouchhh!';
}

/* Button */
var b = document.getElementById('button');
b.onclick = changeButtonText;

function changeButtonText() {
    b.innerHTML = "I was clicked";
}
/*ON LOAD AND ONULOAD*/
var body = document.getElementsByTagName('body');
body.onload = checkCookies();

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled) {
        text = "Cookies are enabled";
    } else {
        text = "Cookies are  not enabled"
    }
    document.getElementById('cookies').innerHTML = text;

}
