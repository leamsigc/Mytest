//   Find the longs word in the array




var str="we are the biggest something like ismaelgarciacanseco in the world";
function longWord(str) 
{
var newStr=  str.split(" ");
var max=0;
var longest;

for (var i = 1; i <= newStr.length -1; i++) 
  {
    if ( newStr[i].length > max)
     {
         var max= newStr[i].length;
         longest= newStr[i];
     }
  }
  alert(longest);
}

