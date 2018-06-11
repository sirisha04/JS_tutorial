

var imgArr=["1.png",
"2.png",
"3.png"];
console.log(imgArr.length);
var num=0;
function previous()
{   
    var src=document.getElementById('img');
    num--;
    if(num<0)
        {
            num=imgArr.length-1;
        }
src.src=imgArr[num];
}
function next(){
    var src=document.getElementById('img');
    num++;
    if(num>=imgArr.length)
        {
            num=0;
        }
        src.src=imgArr[num];
}
