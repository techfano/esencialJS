//**************#1**************

function add(first, second){
	console.log(first+second);
}

add(2,3);
add(4,5);

//**************#2**************

/*function add(first, second,callback){
	console.log(first+second);
	callback();
}

add(2,3, function(){
	console.log('done');
});
 add(4,5, function(){
	console.log('done Again');
});
*/

//**************#3**************
/*
function add(first, second,callback){
	console.log(first+second);
	callback();
}

function logDone(){
	console.log('done');
}

add(2,3,logDone);
add(4,5);

//Ejemplo JQUery
$('#myDiv').click(logDone);
*/