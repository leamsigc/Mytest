console.log("we are connected ");
// ************** print reverse ************
var arr = [1, 2, 3, 4, 5, 6];
// function print reverse 
    function  printReverse(arr) {
        for (var i = arr.length -1; i >= 0 ; i--) {
            console.log(arr[i]);
        }
    };
// call the function 
printReverse(arr);


// *&&&&&   print equivalent &&&&&&&&&
var x = [10,10,10,10];
console.log(x);
// function equals
    function Equal(x) {
        var first= x[0];
        for (var i = 1; i < x.length; i++) {
            if(x[i] !== first){
                return false;
            }
        }
        return true;
    };
// call function 
    Equal(x);
//************ sum all var in the array     ********** */
var num = [10,10,10,20];
// declare the function sum 
    function sum ( num){
        var total = 0;
        num.forEach(function(element) {
            total+=element;
        }, this);
        return total;
    };
    sum(num);

//************ max array    ********** *
var max = [1,2,113,4,5,62,10];
// function Max Arr
    function maxArr(max){
        var maxNum = max[0];
        for(var i = 1; i <= max.length -1; i++){
            if(max[i] > maxNum){
                    maxNum = max[i];
            }
        }
        return maxNum;
    };

// call function maxArr
maxArr(max);