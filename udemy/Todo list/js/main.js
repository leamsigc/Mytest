//  we declare the array
var todo = ["feed the dog", "Feed the cats"];
var promt = prompt("what you want to do ?  "); 
while (promt !== "Quit") {
    if (promt === "List") {
        List();
   }
else if (promt === "New") {
        newTodo();
}
else if (promt === "Delete") {
        deleteTodo();
}
var promt = prompt("what would you do ");

} //end while loop

console.log("yeah yo quit the app");

// declare the functions List
function List() {
     console.log("*************");
    todo.forEach(function (todos , i ) {
    console.log(i + ":" + todos);
});
    console.log("*************")

};
// declare new todo function 
function newTodo() {
        var newtodo  = prompt(" add some new todo ");
    todo.push(newtodo);
//     add new todo 
   console.log("New todo add it;");

}
// Delete todo function 
function deleteTodo() {
    var index = prompt("what is the index of the todo you want to delete "); 
    todo.splice(index,1);
    console.log("Todo delete it;");

}