//obtener el botn y el Div por el Id
var imprimir = document.getElementById("imprimir");
var formulario = document.getElementById("formulario");
//cuando haga click al boton
imprimir.onclick = function (){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var direccion = document.getElementById("direccion").value;
//validar que los campos esten llenos para recien imprimir
	if(nombre!="" && apellido!="" && dni!="" && direccion!=""){
		if(dni.length==8){//validar DNI
			formulario.innerHTML = "<ul>"+
									"<li><strong>Nombre: </strong>"+nombre+"</li>"+
						 			"<li><strong>Apellido: </strong>"+apellido+"</li>"+
						 			"<li><strong>DNI: </strong>"+dni+"</li>"+
						 			"<li><strong>Direccion: </strong>"+direccion+"</li>"+
						 		"</ul>";

		}else{
					alert("campo DNI debe contener solo 8 digitos ")
				}
	}

}