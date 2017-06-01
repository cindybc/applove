/*
 * Archivo principal de funcionalidad de JS
 */

  function modal(){
	var imagenes = Array.from(document.getElementsByClassName("col-4"));
	var modal = document.getElementById("imagenesModal");

	imagenes.forEach(function(ele){
		ele.addEventListener("click", function(){
			     modal.innerHTML ="";
			var divcito = document.createElement("div");
			    divcito.classList.add("modalcito");
			    divcito.innerHTML = ele.innerHTML;

			    modal.appendChild(divcito);
			    modal.classList.remove("claseModal");

			var cerrar= document.createElement("div");
			    cerrar.classList.add("cerrar"); 


			var icono = document.createElement("i");
			    icono.setAttribute("class","fa fa-times");
			    icono.setAttribute("aria-hidden","true"); 

                
                cerrar.appendChild(icono);
			    modal.appendChild(cerrar);

			    cerrar.addEventListener("click", function(){
			    	modal.classList.add("claseModal");

			    });        
		});
	});
};

modal();