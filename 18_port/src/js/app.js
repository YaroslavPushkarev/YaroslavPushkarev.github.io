let popup = document.getElementById('overlay');
let open = document.getElementById('burger1');
let close = document.getElementById('close');

open.onclick = function(){
 	popup.style.visibility = 'visible'; 
 	popup.style.opacity = 1;
 }

close.onclick = function(){
	popup.style.visibility = 'hidden'; 
	popup.style.opacity = 0;
 }

