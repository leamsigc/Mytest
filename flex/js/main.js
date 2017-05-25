var menu = document.getElementById('menu');//we get the toggle or button to make the event happen 
menu.addEventListener('click' ,function(){
   var nav = document.getElementById('menu_ul');
   nav.classList.toggle('open');
  return false ;
});