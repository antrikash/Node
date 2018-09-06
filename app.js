var Person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(Person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(Person);
jane.firstname = 'Jane';
jane.lastname = 'Dow';

var name = `Hello ${john}`;
console.log(name);
console.log(john);
console.log(jane);