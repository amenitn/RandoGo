var counter =0;
setInterval(function(){
 document.getElementById('radio' + counter).checked=true;
 counter++;
if(counter > 4)
{ 
counter =0;}

},5000);