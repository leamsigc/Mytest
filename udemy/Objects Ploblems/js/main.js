var movies =
[
  {
    tittle: "Spiderman",
    star : 4.5,
    watched : true
  },
  {
    tittle: "DeadPool ",
    star : 5 ,
    watched :true
  },
  {
    tittle: "The Best",
    star:3.5,
    watched:false
  },
  {
    tittle:"Frozen",
    star: "4 stars",
    watched:true
  }  
];
// loop to it and print 

/* movies.forEach( function (movie){
  var result = "You have ";
  if (movie["watched"]===true) {
    console.log(result +"watched "+' "'+movie["tittle"]+'" '+" "+movie["star"]);
}
else {
    console.log(result +" not seen "+' "'+movie["tittle"]+'" '+" "+movie["star"]);
    }
}); */
movies.forEach(function(movie){
  console.log(builtString(movie));
});

// builstring function 
 
function builtString(n){
  var result ="You have ";
  if (n["watched"] === true) {
    result += "watched";
}
else {
    result+= "not see ";
}
result+='" '+ n["tittle"]+' " '+" - "+n["star"];

return result;
}