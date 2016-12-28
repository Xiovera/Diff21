function evaluar()
{	
	var numeroEntero = document.getElementById("numeroEntero").value;
	var resta = 21-parseFloat(numeroEntero);
	var doble = (parseFloat (numeroEntero)-21)*2;
	var salida = document.getElementById("salida");

	if(numeroEntero > 21){
		salida.innerHTML = doble;
	}
	else{
		salida.innerHTML = resta;
	}
}
