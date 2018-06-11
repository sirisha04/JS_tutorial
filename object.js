
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

//setInterval(myAlert,3000); //setInterval


//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var pos = 0; 
    var pos1 = 0;
    var pos2 = 0;
   //our box element
   var box = document.getElementById('box');
   var t = setInterval(move, 10);
 
   function move() {
       if(pos >= 150) {          
           pos1 +=1;
           box.style.top=pos1+'px';   
           if(pos1>=150)
            {
                clearInterval(t);
            }                     
       }
       else {
           pos += 1;
           box.style.left = pos+'px';
       }
   }
};
