var btn = document.getElementById('button');
btn.addEventListener('click',moveOn);
function moveOn(){
	var small = document.querySelector('.animate');
	var pos = 0 ;
	var myInterval = setInterval(frame , 2);
	function frame (){
		if(pos == 250){
			clearInterval(myInterval);
		}
		pos++;
		small.style.top = pos + "px";
		small.style.left= pos + "px";
	}
}
