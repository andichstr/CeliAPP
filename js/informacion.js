function textoInformacion(){
    $("#txtTitulo").html("¿Que es la Celiaquia?");
    $("#txtDesc").html("<p>La celiaquía es la intolerancia permanente al gluten, conjunto de proteínas presentes en el trigo, avena, cebada y centeno (TACC) y productos derivados de estos cuatro cereales. Pueden padecerla tanto niños como adultos. Actualmente, la incidencia es mayor en mujeres, que en varones.</p><p>Las proteínas se clasifican en dos grupos, prolaminas y gluteninas. Las prolaminas reciben distintos nombres según el cereal de origen: </p><p>Trigo = gliadina</p><p>Avena = avenina</p><p>Cebada = hordeína</p><p>Centeno = secalina</p><p>El gluten de los cereales mencionados es la forma más conocida de presentación de las prolaminas tóxicas para los celíacos. La gliadina constituye el mayor problema, es la más utilizada en la industria alimenticia. La avena pareciera no producir daño pero, en su proceso de industrialización, puede encontrarse contaminada granos de trigo, cebada o centeno. La Celiaquía se presenta en personas que tienen predisposición genética a padecerla. Se sabe que aparece con más frecuencia entre miembros de la misma familia. Se estima que en Argentina 1 de cada 100 habitantes puede ser celíaco. Esta intolerancia produce una lesión característica de la mucosa intestinal provocando una atrofia de las vellosidades del intestino delgado, lo que altera o disminuye la absorción de los nutrientes de los alimentos (proteínas, grasas, hidratos de carbono, sales minerales y vitaminas). Es este fenómeno el que produce el clásico cuadro de mala absorción. La característica principal que define a esta atrofia vellositaria es que, la mucosa intestinal se normaliza cuando se inicia la dieta sin TACC. También se presenta asociada a enfermedades autoinmunes y genéticas y se puede descubrir en pacientes asintomáticos. Se dice que la celiaquía es una condición autoinmune, es decir que el sistema de defensa de los celíacos reconocería como extraño o no perteneciente al organismo, al gluten, y produciría anticuerpos o defensas contra el mismo. Estos anticuerpos provocarían la lesión del intestino con destrucción o atrofia de su mucosa (capa interior del intestino), produciéndose una alteración en la absorción de los alimentos.</p>");
    $("#txtLista").html("Celiaquía");
    if (! $("#liCeliaquia").hasClass("active")){
    	$("#liCeliaquia").addClass("active");
    	if ($("#liDiagnostico").hasClass("active")){
    		$("#liDiagnostico").removeClass("active");
    	} else if ($("#liSintomatologia").hasClass("active")){
    		$("#liSintomatologia").removeClass("active");
    	};
    };
};

function textoDiagnostico(){
    $("#txtTitulo").html("Diagnostico");
    $("#txtDesc").html("<p>El diagnóstico se realiza mediante:</p><p>Autoanticuerpos con tTG (transglutaminasa tisular)</p><p>EmA (endomisio)</p><p>Anticuerpos o antígenos dietarios o sus interfaces como AGA2 (gliadina deaminada)</p><p>Biopsia intestinal.</p><p>El único tratamiento es una dieta estricta y de por vida Sin TACC (sin trigo, avena, cebada y centeno). Jamás se debe comenzar la dieta sin previa biopsia que la justifique. El celíaco no es un enfermo, sino una persona con una condición determinada, la celiaquía no es una enfermedad, es casi un modo de ser. Con una dieta correcta, segura y permanente, el celíaco, puede alcanzar los niveles nutricionales que había perdido y lograr con ello su total desarrollo físico y neurológico. Es aconsejable que la dieta del celíaco incluya además, alimentos naturales como: leche, carnes, pescados, huevos, frutas, verduras, hortalizas, legumbres y cereales sin gluten (arroz y maíz). Se debe tener precaución con los productos industrializados, ya que pueden contener gluten en su composición. Es necesario consultar los listados de Alimentos y Medicamentos aptos. La ingestión de pequeñas cantidades de gluten, de manera continuada, puede causar trastornos importantes a nivel intestinal, incluso sin presentar síntomas. </p>");
    $("#txtLista").html("Diagnostico y tratamiento");
    if (! $("#liDiagnostico").hasClass("active")){
    	$("#liDiagnostico").addClass("active");
    	if ($("#liCeliaquia").hasClass("active")){
    		$("#liCeliaquia").removeClass("active");
    	} else if ($("#liSintomatologia").hasClass("active")){
    		$("#liSintomatologia").removeClass("active");
    	};
    };
};

function textoSintomatologia(){
    $("#txtTitulo").html("Sintomatologia");
    $("#txtDesc").html("<p>Se manifiesta a través de diferentes síntomas y signos, según la edad:</p><p>En niños: suele presentarse diarrea crónica (síndrome de mala absorción), vómitos reiterados, marcada distensión abdominal, falta de masa muscular, pérdida de peso, retraso del crecimiento, escasa estatura, cabello y piel secos, descalcificación, inapetencia, mal carácter o irritabilidad, alteraciones en el esmalte dental, dislexia, autismo, hiperactividad etc.</p><p>En adolescentes: dolor abdominal, falta de ánimo, rechazo a la actividad deportiva, retraso en el ciclo menstrual y frecuentemente baja talla comparativa con los hermanos o llamativamente menor en función de lo esperado por la altura de sus padres, retraso puberal, estreñimiento, queilitis angular, aftas recurrentes, anemia ferropénica, cefaleas, etc.</p><p>En adultos: osteoporosis, fracturas, artritis, diarreas, estreñimiento, desnutrición, abortos espontáneos, hijos recién nacidos con bajo peso, impotencia, infertilidad, pérdida de peso, anemia ferropénica, caída del cabello, colon irritable, menopausia precoz, astenia, depresión, epilepsia, neuropatías periféricas, cáncer digestivo, etc.</p><p>Existen enfermedades asociadas o autoinmunes, que suelen preceder al diagnóstico de la celiaquía o manifestarse simultáneamente como: Dermatitis herpetiforme, Síndrome de Down, Déficit selectivo de IgA. Dentro de las enfermedades autoinmunes se encuentran: Diabetes tipo I, Tiroiditis autoinmunes, Síndrome de Sjögren, Artritis reumatoidea, Psoriasis, Vitiligo, Alopecia areata, Lupus eritematoso sistémico, Enfermedad de Addison, etc. </p>");
    $("#txtLista").html("Sintomatologia");
    if (! $("#liSintomatologia").hasClass("active")){
    	$("#liSintomatologia").addClass("active");
    	if ($("#liDiagnostico").hasClass("active")){
    		$("#liDiagnostico").removeClass("active");
    	} else if ($("#liCeliaquia").hasClass("active")){
    		$("#liCeliaquia").removeClass("active");
    	};
    };
};

