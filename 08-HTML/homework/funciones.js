


function vistaDefault(){
	document.getElementById("inicio").style.display = "block";
	document.getElementById("descripcion").style.display = "none";
	document.getElementById("educacion").style.display = "none";
	document.getElementById("experiencia").style.display = "none";
	document.getElementById("hobbies").style.display = "none";

}

function muestra_contenido(elemento)
{
	console.log(elemento);
	switch (elemento) {
    case "1":
    	document.getElementById("inicio").style.display = "none";
		document.getElementById("descripcion").style.display = "block";
		document.getElementById("educacion").style.display = "none";
		document.getElementById("experiencia").style.display = "none";
		document.getElementById("hobbies").style.display = "none";
        break;
    case "2":
    	document.getElementById("inicio").style.display = "none";
		document.getElementById("descripcion").style.display = "none";
		document.getElementById("educacion").style.display = "block";
		document.getElementById("experiencia").style.display = "none";
		document.getElementById("hobbies").style.display = "none";
        break;
    case "3":
    	document.getElementById("inicio").style.display = "none";
        document.getElementById("descripcion").style.display = "none";
		document.getElementById("educacion").style.display = "none";
		document.getElementById("experiencia").style.display = "block";
		document.getElementById("hobbies").style.display = "none";
        break;
    case "4":
    	document.getElementById("inicio").style.display = "none";
        document.getElementById("descripcion").style.display = "none";
		document.getElementById("educacion").style.display = "none";
		document.getElementById("experiencia").style.display = "none";
		document.getElementById("hobbies").style.display = "block";
        break;
    default:
        console.log('nada');
}
	
/*	document.getElementById("descripcion").style.display = "block";
	document.getElementById("educacion").style.display = "none";
	document.getElementById("experiencia").style.display = "none";
	document.getElementById("hobbies").style.display = "none";*/
}
