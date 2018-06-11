//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var pos = 0; 
    var pos1=0;
   //our box element
   var box = document.getElementById('box');
   var t = setInterval(move, 10);
 
   function move() {
       if(pos >= 150) {
           clearInterval(t);
            //pos1 +=1;
            //box.style.animation=pos1+'px';
       }
       else {
           pos += 1;
           box.style.right = pos+'px';
       }
   }
};