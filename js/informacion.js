function textoInformacion(){
    $("#txtTitulo").html("¿Que es la Celiaquia?");
    $("#txtDesc").html("<p>La <b>celiaquía</b> es la intolerancia permanente al <b>gluten, </b> conjunto de proteínas presentes en el trigo, avena, cebada y centeno (TACC) y productos derivados de estos cuatro cereales. Pueden padecerla tanto niños como adultos. Actualmente, la incidencia es mayor en mujeres, que en varones.</p><br><p>Las proteínas se clasifican en dos grupos, prolaminas y gluteninas. Las prolaminas reciben distintos nombres según el cereal de origen: </p><ul><li>Trigo = gliadina</li><li>Avena = avenina</li><li>Cebada = hordeína</li><li>Centeno = secalina</li></ul><p>El gluten de los cereales mencionados es la forma más conocida de presentación de las prolaminas tóxicas para los celíacos. La gliadina constituye el mayor problema, es la más utilizada en la industria alimenticia.<br><b> La avena</b> pareciera no producir daño pero, en su proceso de industrialización, puede encontrarse contaminada granos de trigo, cebada o centeno.<br> La Celiaquía se presenta en personas que tienen predisposición genética a padecerla. Se sabe que aparece con más frecuencia entre miembros de la misma familia. <br>Se estima que en Argentina <b>1 de cada 100 habitantes puede ser celíaco.</b><br> Esta intolerancia produce una lesión característica de la mucosa intestinal provocando una atrofia de las vellosidades del intestino delgado, lo que altera o disminuye la absorción de los nutrientes de los alimentos (proteínas, grasas, hidratos de carbono, sales minerales y vitaminas). Es este fenómeno el que produce el clásico cuadro de mala absorción. <br>La característica principal que define a esta atrofia vellositaria es que, la mucosa intestinal se normaliza cuando se inicia la dieta sin TACC.<br> También se presenta asociada a enfermedades autoinmunes y genéticas y se puede descubrir en pacientes asintomáticos.<br> Se dice que la celiaquía es una <bn>condición autoinmune</b>, es decir que el sistema de defensa de los celíacos reconocería como extraño o no perteneciente al organismo, al gluten, y produciría anticuerpos o defensas contra el mismo. Estos anticuerpos provocarían la lesión del intestino con destrucción o atrofia de su mucosa (capa interior del intestino), produciéndose una alteración en la absorción de los alimentos.</p><br><p>Fuente: <a href=(´http://www.celiaco.org.ar´)>Asociación Celíaca Argentina</a></p>");
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
    $("#txtDesc").html("<p>El diagnóstico se realiza mediante:</p><ul><li>Autoanticuerpos con tTG (transglutaminasa tisular)</li><li>EmA (endomisio)</li><li><p>Anticuerpos o antígenos dietarios o sus interfaces como AGA2 (gliadina deaminada)</li><li>Biopsia intestinal.</li></ul><p>El único tratamiento es una dieta estricta y de por vida <b>Sin TACC </b> (sin trigo, avena, cebada y centeno).<br> Jamás se debe comenzar la dieta sin previa biopsia que la justifique.<br> El celíaco no es un enfermo, sino una persona con una condición determinada, <b> la celiaquía no es una enfermedad, es casi un modo de ser</b>. Con una dieta correcta, segura y permanente, el celíaco, puede alcanzar los niveles nutricionales que había perdido y lograr con ello su total desarrollo físico y neurológico.<br> Es aconsejable que la dieta del celíaco incluya además, alimentos naturales como: leche, carnes, pescados, huevos, frutas, verduras, hortalizas, legumbres y cereales sin gluten (arroz y maíz).<br> Se debe tener precaución con los productos industrializados, ya que pueden contener gluten en su composición. Es necesario consultar los <b>listados de Alimentos y Medicamentos aptos. </b> <br> La ingestión de pequeñas cantidades de gluten, de manera continuada, puede causar trastornos importantes a nivel intestinal, incluso sin presentar síntomas. </p><br><p>Fuente: <a href=´http://www.celiaco.org.ar´>Asociación Celíaca Argentina</a></p>");
    $("#txtLista").html("Diagnostico y tratamiento");
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
    $("#txtDesc").html("<p>Se manifiesta a través de diferentes síntomas y signos, según la edad:</p><p><b>En niños:</b> suele presentarse diarrea crónica (síndrome de mala absorción), vómitos reiterados, marcada distensión abdominal, falta de masa muscular, pérdida de peso, retraso del crecimiento, escasa estatura, cabello y piel secos, descalcificación, inapetencia, mal carácter o irritabilidad, alteraciones en el esmalte dental, dislexia, autismo, hiperactividad etc.</p><p><b>En adolescentes:</b> dolor abdominal, falta de ánimo, rechazo a la actividad deportiva, retraso en el ciclo menstrual y frecuentemente baja talla comparativa con los hermanos o llamativamente menor en función de lo esperado por la altura de sus padres, retraso puberal, estreñimiento, queilitis angular, aftas recurrentes, anemia ferropénica, cefaleas, etc.</p><p><b>En adultos:</b> osteoporosis, fracturas, artritis, diarreas, estreñimiento, desnutrición, abortos espontáneos, hijos recién nacidos con bajo peso, impotencia, infertilidad, pérdida de peso, anemia ferropénica, caída del cabello, colon irritable, menopausia precoz, astenia, depresión, epilepsia, neuropatías periféricas, cáncer digestivo, etc.</p><p>Existen enfermedades asociadas o autoinmunes, que suelen preceder al diagnóstico de la celiaquía o manifestarse simultáneamente como: <b>Dermatitis herpetiforme, Síndrome de Down, Déficit selectivo de IgA.</b> Dentro de las enfermedades autoinmunes se encuentran: <b>Diabetes tipo I, Tiroiditis autoinmunes, Síndrome de Sjögren, Artritis reumatoidea, Psoriasis, Vitiligo, Alopecia areata, Lupus eritematoso sistémico, Enfermedad de Addison, etc. </b></p><br><p>Fuente: <a href=´http://www.celiaco.org.ar´>Asociación Celíaca Argentina</a></p>");
    $("#txtLista").html("Sintomatologia");
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
    $("#txtDesc").html("<ul><li> <b>Antes de comenzar a cocinar</b>, es aconsejable leer toda la receta y preparar los ingredientes necesarios en las cantidades indicadas, para lo cual es muy útil contar con una balanza de cocina. </li><li><b> Si utiliza alimentos frescos</b> (manteca, leche, huevos, etc.) sáquelos anticipadamente de la heladera de manera que se encuentren a temperatura ambiente, a menos de que la receta que desee realizar requiera que los ingredientes estén fríos. </li><li><b> Los alimentos libres de gluten</b> al ponerse en contacto con aquellos que lo contienen, se pueden contaminar, por eso es necesario recordar que en la cocina de su hogar, deberá separar los productos o harinas que contengan trigo y almacenarlos separadamente. </li><li> <b>El gluten presente en las harinas</b>, favorece la elasticidad y consistencia de las la masas, así que cuando cocine con harinas aptas para celíacos, debe usar batidoras eléctricas  para asegurar una buena mezcla que eleve la masa. </li><li> <b>Todos los ingredientes líquidos deben ser añadidos a la preparación a una temperatura tibia</b>, para asegurar una mejor unión y consistencia de la masa. </li><li><b> Para preparar masas sin TACC </b>hace falta más agua que en las recetas tradicionales, por lo que es aconsejable seguir atentamente las instrucciones. </li><li><b> Los ingredientes que se pueden utilizar para darle cuerpo a las preparaciones son: </b> la gelatina sin sabor, el bicarbonato de sodio, la goma xántica, etc. </li><li> <b>Cuando se hornea con harinas libres de gluten</b>, suelen dorarse prematuramente, cuando todavía no se ha cocido por dentro. Para evitar esto, cubra la preparación con papel de aluminio hasta que se cocine el centro de la masa. </li><li><b> Siempre pase por el tamiz todos los polvos</b> (harina, levadura, etc.) antes de amasar.<li><b>Precaliente antes el horno a la temperatura requerida</b> y no lo abra durante los primeros 15 ó 20 minutos de cocción. </li><li><b> Para comprobar si una preparación está lista</b>, introduzca en el centro un palillo, que deberá salir seco.<li><b>No toque las comidas o utensilios sin lavar</b> (platos, cucharas de madera, coladores, cacerolas, etc.) que hayan estado en contactos con alimentos prohibidos. </li><li> <b>No coloque la comida directamente en superficies contaminadas</b> como mesadas, fuentes o  parrilla. Siempre limpie bien el lugar de trabajo y los utensilios antes de comenzar la tarea. </li><li> <b>No utilice aceite para freír</b> ya usado para cocinar alimentos enharinados o empanados. </li><li> <b>Cubra con papel de aluminio o de horno</b> las placas y superficies que puedan estar contaminadas. </li><li> <b>No utilice el agua de cocción ya usada para la pasta con gluten. </b></li><li> <b>También es importante que los utensilios de cocina usados</b> en la preparación de las especialidades sin gluten no entren en contacto con ingredientes con gluten para evitar la contaminación. </li></ul><br><p>Fuente: <a href=´http://www.celiaco.org.ar´>Asociación Celíaca Argentina</a></p>");
    $("#txtLista").html("Recomendaciones a la hora de cocinar");
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
    $("#txtDesc").html("<ul><li><b>No debe iniciarse una dieta sin gluten, </b> sin haber realizado previamente una biopsia intestinal que demuestre la intolerancia al mismo, por alteración de la mucosa. </li><li><b>La dieta debe seguirse estrictamente durante toda la vida. </b> La ingesta de pequeñas cantidades de gluten puede producir lesión de las vellosidades intestinales, aunque no siempre estas lesiones tienen por qué ir acompañadas de síntomas clínicos</li><li><b>Se debe eliminar de la dieta</b> cualquier producto que lleve como ingrediente trigo, avena, cebada, centeno, y/o productos derivados de los mismos: almidón, harina, panificados, etc. </li><li><b>Se pueden consumir todos los productos naturales</b> como carnes, verduras, frutas, legumbres, huevos, hortalizas, etc. </li><li>En cuanto a la <b>CERVEZA y el WHISKY</b> consumir solo las marcas inscriptas como Libres de Gluten. </li><li><b>Como norma general, deben eliminarse de la dieta</b> todos los productos a granel (sueltos) como harinas, cereales, especias, polvos para preparar gelatinas, etc. ya que pueden contaminarse con otros productos que contengan gluten o en el caso de las harinas de maíz y de arroz, puede suceder que la molienda se haya realizado en molinos donde también muelen otros cereales como trigo o avena. </li><li><b>Los productos elaborados artesanalmente que no estén etiquetados, </b> donde no se pueda comprobar si están inscriptos como Libres de Gluten, se aconseja no consumirlos. </li><li><b>Disponga de un espacio para almacenar exclusivamente los alimentos especiales sin TACC</b></li><li><b>Evitar freír alimentos sin TACC </b>en aceites donde previamente se hayan freído productos con gluten. </li><li><b>Utilice siempre utensilios de cocina limpios. </b> No use la misma cuchara para elaborar un plato que contiene gluten y otro que no lo tiene. </li><li><b>Tener en cuenta la manipulación de alimentos, en bares y restaurantes. </b> Consulte la forma de elaboración, marca de especias e ingredientes de cada plato, antes de su consumo, (ejemplo: tortillas de papas, papas fritas cocidas en freidoras que se utilizan también para freír milanesas, empanadas, rebozados con gluten, etc.). Las hamburguesas, salsas, y demás, pueden contener harina de trigo para unir o espesar la preparación. </li><li><b>Las pastas libres de gluten deben cocinarse por separado de las que contienen gluten. </b></li><li><b>No utilice cubitos de caldo, sustitúyalos por caldos naturales o caldos sin TACC. </b> </li><li><b>Se debe tener precaución con los alimentos importados. </b> En otros países, en especial Europa, los límites aceptados en los análisis de detección de gluten exceden los 20 mg/kg. </li><li><b>Ante la duda de si un producto puede contener TACC, NO lo consuma.</b> </li><li><b>Consultar el listado de Medicamentos,</b> antes de una prescripción médica, ya que algunos fármacos en sus excipientes pueden contener gluten. </li></ul><br><p>Fuente: <a href=´http://www.celiaco.org.ar´>Asociación Celíaca Argentina</a></p>");
    $("#txtLista").html("Consejos Útiles a la hora de iniciar una dieta Sin TACC ");
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