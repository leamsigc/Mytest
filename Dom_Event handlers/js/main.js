/*DOM Event listener */
// addEventListener();
    // element.addEventListener(event,function,useCapture) 
    var elem = document.getElementById('me');
    /*elem.addEventListener('click',function (){
        alert('Hello World');
    });*/ // Width anonymous function 
     elem.addEventListener('click',callMe);
     elem.addEventListener('click',callMe2);
        function callMe(){
            alert('Hello World');
        }
        function callMe2(){
            console.log('Hello World');
        }
        elem.addEventListener('mouseover',callMe3);
        function callMe3(){
            console.log('Get off me !!!!');
        }
// removeEventListener();
window.addEventListener('resize',callResize);
function callResize (){
    document.getElementById('windowTest').innerHTML = Math.random();
}