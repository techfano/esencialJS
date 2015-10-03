var a = 0;
console.log('Done');

$(document).ready(function(){

	$('button').on('click',function(){
		console.log('click');
	});

});

/*

//In Html

<element onclick="myScript">

function myScript(){
	console.log('click');
}

//In JavaScript

var a = document.getElementsByTagName("p");
var b = document.getElementById("main");
var c = x.getElementsByTagName("p");
var d = document.getElementsByClassName("intro");
var e = document.querySelectorAll("p.intro");

var f = document.getElementById("main");

f.onclick=function(){
	console.log('click');
};

f.addEventListener("click", function(){
	console.log('click');
});

*/