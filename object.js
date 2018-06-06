
//person object - propertites declared as name value pairs
var person={
    name:"john",height:183
}

//accessing an object's property in 2 way's
var x = person.height; 
var y = person['height'];
document.write(x);
document.write(y);

//Object Constructor
function Person(name,height,age){
    this.name=name;
    this.height=height;
    this.age=age;
    this.changeAge=changeAge;//declaring method inside an object
}

//change age by using oject's method
function changeAge(age1){
    return age1;
}


//creating person object with new keyword
var jack = new Person("jack",136,23);
var JackHeight=jack.height;
document.write(JackHeight);

//accesing object's method
var agemodified = jack.changeAge(29);
document.write(agemodified);// returns changed age

function myAlert(){
    alert("alert for every 3 seconds");
}

setInterval(myAlert,3000); //setInterval
