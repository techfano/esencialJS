// scope = Acceso de Variable

//parent scope
//var a = 1;

function foo(){
	//child Scope
	var b = 2;
	var a = 2;
	a = 3;
	console.log(a);
	//console.log(window.a);
}

foo();

console.log(a);

//console.log(b);

