//Object.prototype
//new Date() - date.prototype;
  
  function Person (first,last,age,eyeColor)
  {
    this.firstName = first;
		this.lastName =last;
		this.age = age;
		this.eyeColor = eyeColor;
  }
	var myFather = new Person('Rafael','Garcia',4,'coffee');
	console.log('===== '+myFather+' =========');
	var myMother = new Person('Regina','Garcia',85,'black');
	console.log('===== '+ myMother +' =========');
	//add attribute to our object
	myFather.nationality = 'mexico';
	console.log('===== '+myFather.nationality +' =========');
	//add a method to our object
	myFather.name = function()
		{
			return this.firstName + ' ' + this.lastName;
		};
	console.log('===== '+myFather.name()+' =========');
	//add and assing a  property to a prototype
	//you have to add manually because you can add any other way 
	// or you can add like this
	Person.prototype.nationality = 'Mexico';
//======== Pass by Value  vs Pass By Reference 
function changeValue(item)
	{
		console.log('Value of item '+item.value);
		item.value = 2;
		console.log('Value of item '+ item.value);
	}
	// var x = 1;
	// console.log(x);
	// changeValue(x);
	// console.log(x);
	var x = {value:1};
	changeValue(x);
	console.log(x.value);