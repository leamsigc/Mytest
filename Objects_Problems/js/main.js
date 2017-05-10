var movies = [
    {
        tittle:"El Lobo the walkstreet",
        watched:true,
        rating:"4.5 stars"
    },
     {
        tittle:"Deadpool",
        watched:true,
        rating:"5 stars"
    },
     {
        tittle:"Harry Potter",
        watched:true,
        rating:"4.5 stars"
    },
     {
        tittle:"El maestro",
        watched:false,
        rating:"3.5 stars"
    }
];

//Declare te functions
function makeString(n) {
    var result = "You have ";
    if(n["watched"] === true){
        result += "watched";
    }
    else{
        result += "Not seen ";
    }
    result+= n["tittle"]+" "+"- "+n["rating"];
    return result;
}


//for Each loof for it 
movies.forEach(function(movie){
    console.log(makeString(movie));
});