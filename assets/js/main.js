var imprimir = document.getElementById("imprimir");
var formulario = document.getElementById("formulario");

imprimir.onclick = function (){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var direccion = document.getElementById("direccion").value;

	if(nombre!="" && apellido!="" && dni!="" && direccion!=""){
		if(dni.length==8){
			formulario.innerHTML = "<ul>"+
									"<li> Nombre: "+nombre+"</li>"+
						 			"<li> Apellido: "+apellido+"</li>"+
						 			"<li> DNI: "+dni+"</li>"+
						 			"<li> Direccion: "+direccion+"</li>"+
						 		"</ul>";
		
		}else{
			alert("campo DNI debe contener solo 8 digitos ")
		}

		
	}

}