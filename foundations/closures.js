// Retencion del estado y ambito de acceso (scope) despues de la ejecucion

a=1;

var x =  function(){
	a++;
	console.log(a);
}

x();
x();
x();

// <element onclick="x()">