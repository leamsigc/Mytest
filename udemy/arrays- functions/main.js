 var numero = [ "uno", "dos", "tres","cuatro"];

 function atras(){
    for (var i = numero.length -1 ; i >= 0 ; i--) {
    console.log(numero[i]);
};
} 
atras(numero); 
// chekc if all are equal 
var mas = [2, 5, 40, 20 ];
// funtion compare 
  
  function comparar() {
      for (var i = 0 ; i <= mas.length -1 ; i++) {
        var numero = mas[0];
      if (numero === mas[i] ){
     return true ;
                          }
      return false;
       }
  };
  // cal function
  comparar(mas);
// sum all varieble 
function sumArray() {
    var sum = 0;
      for (var i = 0 ; i <= mas.length -1 ; i++) {
      sum += mas[i];
  }
  return sum ;
  }
  sumArray(mas); 
  
//   el mayor de los arrays 
function maxArray() {
  var max = 0 ;
    for (var i=0; i <= mas.length -1; i++) {
    if (max <= mas[i]) {
    var max = mas[i];
}
}
console.log(max);
}
