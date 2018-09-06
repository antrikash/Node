var Person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John ', 'Doe' );
var jane = new Person("Jane", "Doe");

john.greet();   
jane.greet();


console.log(john.__proto__ === jane.__proto__);

(function(){
    var a = 6676;
    console.log(a);
}());