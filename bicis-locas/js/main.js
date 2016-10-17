function validateForm(){
	var nombre = document.getElementById("name").value;
	var expreg = new RegExp("^[A-Z][A-Za-z]*$");
	 if(expreg.test(nombre)){
	    alert("Nombre Correcto");
	    return false;
	  	}else{
	    	alert("Nombre Incorrecto");
	    	return false;
	}


	var apellido = document.getElementById("lastname").value;
	var expreg = new RegExp("^[A-Z][A-Za-z]*$");
	 if(expreg.test(apellido)){
	    alert("Apellido Correcto");
	      return false;
		}else{
	    	alert("Apellido Incorrecto");
	      	return false;
	}
}