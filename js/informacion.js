function textoInformacion(){
    $("#txtTitulo").html("¿Que es la Celiaquia?");
    $("#cajaPestanias").children().addClass("oculto");
    $("#cajaCeliaquia").removeClass("oculto");
    $("#txtLista").html("Celiaquía");
    if (! $("#liCeliaquia").hasClass("active")){
    	$("#liCeliaquia").addClass("active");
    	if ($("#liDiagnostico").hasClass("active")){
    		$("#liDiagnostico").removeClass("active");
    	} else if ($("#liSintomatologia").hasClass("active")){
    		$("#liSintomatologia").removeClass("active");
    	} else if ($("#liConsejUtil").hasClass("active")){
			$("#liConsejUtil").removeClass("active");
		} else if ($("#liRecCocina").hasClass("active")){
			$("#liRecCocina").removeClass("active");
		};
    };
};
function textoDiagnostico(){
    $("#txtTitulo").html("Diagnostico");
    $("#cajaPestanias").children().addClass("oculto");
    $("#cajaDiagnostico").removeClass("oculto");
    if (! $("#liDiagnostico").hasClass("active")){
    	$("#liDiagnostico").addClass("active");
    	if ($("#liCeliaquia").hasClass("active")){
    		$("#liCeliaquia").removeClass("active");
    	} else if ($("#liSintomatologia").hasClass("active")){
    		$("#liSintomatologia").removeClass("active");
    	} else if ($("#liConsejUtil").hasClass("active")){
			$("#liConsejUtil").removeClass("active");
		} else if ($("#liRecCocina").hasClass("active")){
			$("#liRecCocina").removeClass("active");
		};
    };
};
function textoSintomatologia(){
    $("#txtTitulo").html("Sintomatologia");
    $("#cajaPestanias").children().addClass("oculto");
    $("#cajaSintomatologia").removeClass("oculto");
    if (! $("#liSintomatologia").hasClass("active")){
    	$("#liSintomatologia").addClass("active");
    	if ($("#liDiagnostico").hasClass("active")){
    		$("#liDiagnostico").removeClass("active");
    	} else if ($("#liCeliaquia").hasClass("active")){
    		$("#liCeliaquia").removeClass("active");
    	} else if ($("#liConsejUtil").hasClass("active")){
			$("#liConsejUtil").removeClass("active");
		} else if ($("#liRecCocina").hasClass("active")){
			$("#liRecCocina").removeClass("active");
		};
    };
};
function textoRecCocina(){
    $("#txtTitulo").html("Recomendaciones a la hora de cocinar");
    $("#cajaPestanias").children().addClass("oculto");
    $("#cajaRecomendaciones").removeClass("oculto");
	if (! $("#liRecCocina").hasClass("active")){
    	$("#liRecCocina").addClass("active");
    	if ($("#liDiagnostico").hasClass("active")){
    		$("#liDiagnostico").removeClass("active");
    	} else if ($("#liCeliaquia").hasClass("active")){
    		$("#liCeliaquia").removeClass("active");
    	} else if ($("#liConsejUtil").hasClass("active")){
			$("#liConsejUtil").removeClass("active");
		} else if ($("#liSintomatologia").hasClass("active")){
			$("#liSintomatologia").removeClass("active");
		};
    };
};
function textoConsejUtil(){
    $("#txtTitulo").html("Consejos Útiles a la hora de iniciar una dieta Sin TACC");
    $("#cajaPestanias").children().addClass("oculto");
    $("#cajaConsejos").removeClass("oculto");
	if (! $("#liConsejUtil").hasClass("active")){
    	$("#liConsejUtil").addClass("active");
    	if ($("#liDiagnostico").hasClass("active")){
    		$("#liDiagnostico").removeClass("active");
    	} else if ($("#liCeliaquia").hasClass("active")){
    		$("#liCeliaquia").removeClass("active");
    	} else if ($("#liSintomatologia").hasClass("active")){
			$("#liSintomatologia").removeClass("active");
		} else if ($("#liRecCocina").hasClass("active")){
			$("#liRecCocina").removeClass("active");
		};
    };
};