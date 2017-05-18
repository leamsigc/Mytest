console.log('--------Break ----------');
var text = "";
for(var i = 0 ;i < 10 ; i++)
{
    if (i == 3)
    {
        break;
    }
    text = text + i + ",";
}
console.log(text);


text = "";
console.log('------Continue--------');
for (var i =0; i < 10 ; i++)
{
    if(i == 3 )
    {
        continue;
    }
    text = text + i + ",";
}
console.log(text);
// labels name= {}
console.log('-----Labels --------');
var cars = ['BMW','MERC','FORD','HONDA'];
    list:{
        text += cars[0];
        text += cars[1];
        text += cars[2];
        break list;
        text += cars[3];
        text += cars[4];     
        text += cars[5];    
    }
    console.log(text);

// SOLO LEAR IMG slider 
var images = [
    "https://source.unsplash.com/qdyBKWSzpSI/800x800",
    "https://source.unsplash.com/YfCVCPMNd38/800x800",
    "https://source.unsplash.com/anxRjLPEeyE/800x800",
    "https://source.unsplash.com/4c-z6amqTOU/800x800"
];
var num = 0 ;
//Make the function next
function next(){
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length){
        num = 0 ;
    }
    slider.src=images[num];
}
//For the prev function 
 function prev(){
     var slider = document.getElementById('slider');
     num--;
     if (num <= 0){
         num = images.length -1;
     }
     slider.src = images[num];
 }