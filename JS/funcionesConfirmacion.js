var $nombre, $apellido, $provincia, $sector, $ciudad, $calle, $carrera;

var $materia1, $materia2, $materia3, $materia4, $materia5;
var asignatura1, asignatura2, asignatura3, asignatura4, asignatura5;

var horario1, horario2, horario3, horario4, horario5;

var $OPT_Nombre, $OPT_Apellido, $OPT_Provincia, $OPT_Ciudad, $OPT_Sector, $OPT_Calle, $OPT_Carrera;

var materiaLun, materiaMar, materiaMie, materiaJue, materiaVie;
var materia_1, materia_2, materia_3, materia_4, materia_5;

function loadLocalStorage () {

	$materia1 = document.getElementById ( "Asignatura_1" );
	$materia2 = document.getElementById ( "Asignatura_2" );
	$materia3 = document.getElementById ( "Asignatura_3" );
	$materia4 = document.getElementById ( "Asignatura_4" );
	$materia5 = document.getElementById ( "Asignatura_5" );

	$materia1.innerHTML = localStorage.getItem ( "asignatura#1" ) + ":";
	$materia2.innerHTML = localStorage.getItem ( "asignatura#2" ) + ":";
	$materia3.innerHTML = localStorage.getItem ( "asignatura#3" ) + ":";
	$materia4.innerHTML = localStorage.getItem ( "asignatura#4" ) + ":";
	$materia5.innerHTML = localStorage.getItem ( "asignatura#5" ) + ":";

}
function saveNgetLocalStorage () {

	$nombre = document.getElementById ( "INP_Nombre" );
	$apellido = document.getElementById ( "INP_Apellido" );
	$provincia = document.getElementById ( "INP_Provincia" );
	$sector = document.getElementById ( "INP_Sector" );
	$ciudad = document.getElementById ( "INP_Ciudad" );
	$calle = document.getElementById ( "INP_Calle" );

	localStorage.setItem ( "nombre", $nombre.value );
	localStorage.setItem ( "apellido", $apellido.value );
	localStorage.setItem ( "provincia", $provincia.value );
	localStorage.setItem ( "sector", $sector.value );
	localStorage.setItem ( "ciudad", $ciudad.value );
	localStorage.setItem ( "calle", $calle.value );

	console.log ( localStorage.getItem ( "nombre" ) );
	console.log ( localStorage.getItem ( "apellido" ) );
	console.log ( localStorage.getItem ( "provincia" ) );
	console.log ( localStorage.getItem ( "ciudad" ) );
	console.log ( localStorage.getItem ( "sector" ) );
	console.log ( localStorage.getItem ( "calle" ) );

	verificacionCarrera ();

}
function verificacionCarrera () {
	
	console.log ( "Primer paso dado" );
 	var X;
	X = document.RBTN_Carrera.OPT_Carrera;

	for ( var i = 0; i < X.length; i++ ) {
		if ( X [ i ].checked ) {
			$carrera = X [ i ].value;
			break;
		}
	}

	console.log( $carrera + " Ojalá se vea esto." );
	localStorage.setItem ( "carrera", $carrera );
	
	materias ();
	
}
function verificacionHorario () {

// Primera Materia

	console.log ( "Segundo.1 paso dado" );

	var X = document.OPT_Materia1.RBTN_Materia1;

	for ( var i = 0; i < X.length; i++ ) {
		if ( X [ i ].checked ) {
			horario1 = X [ i ].value;
			break;
		}
	}

	console.log( horario1 + " Ojalá se vea esto." );
	localStorage.setItem ( "horario1", horario1 );

// Segunda Materia

	console.log ( "Segundo.2 paso dado" );

	var X = document.OPT_Materia2.RBTN_Materia2;

	for ( var i = 0; i < X.length; i++ ) {
		if ( X [ i ].checked ) {
			horario2 = X [ i ].value;
			break;
		}
	}

	console.log( horario2 + " Ojalá se vea esto." );
	localStorage.setItem ( "horario2", horario2 );
	
// Tercera Materia

	console.log ( "Segundo.3 paso dado" );

	var X = document.OPT_Materia3.RBTN_Materia3;

	for ( var i = 0; i < X.length; i++ ) {
		if ( X [ i ].checked ) {
			horario3 = X [ i ].value;
			break;
		}
	}

	console.log( horario3 + " Ojalá se vea esto." );
	localStorage.setItem ( "horario3", horario3 );
	
// Cuarta Materia

	console.log ( "Segundo.4 paso dado" );

	var X = document.OPT_Materia4.RBTN_Materia4;

	for ( var i = 0; i < X.length; i++ ) {
		if ( X [ i ].checked ) {
			horario4 = X [ i ].value;
			break;
		}
	}

	console.log( horario4 + " Ojalá se vea esto." );
	localStorage.setItem ( "horario4", horario4 );
	
// Quinta Materia

	console.log ( "Segundo.5 paso dado" );

	var X = document.OPT_Materia5.RBTN_Materia5;

	for ( var i = 0; i < X.length; i++ ) {
		if ( X [ i ].checked ) {
			horario5 = X [ i ].value;
			break;
		}
	}

	console.log( horario5 + " Ojalá se vea esto." );
	localStorage.setItem ( "horario5", horario5 );
	
}
function materias () {

	if ( $carrera === "Desarrollo de Software" ) {

		console.log ( "Así que elegiste el camino de la muerte... Pobre iluso, en definitiva no sabes lo que te depara el destino por esta senda." );
		
		asignatura1 = "Programación I";
		asignatura2 = "Base de Datos Avanzada";
		asignatura3 = "Cáculo I";
		asignatura4 = "Ética III";
		asignatura5 = "Análisis y Diseño de Sistemas";

		localStorage.setItem ( "asignatura#1", asignatura1 );
		localStorage.setItem ( "asignatura#2", asignatura2 );
		localStorage.setItem ( "asignatura#3", asignatura3 );
		localStorage.setItem ( "asignatura#4", asignatura4 );
		localStorage.setItem ( "asignatura#5", asignatura5 );

	} else if ( $carrera === "Mecatrónica" ) {

		console.log ( "Aquí se hacen bien las cosas, esto no es para niños. Aquí se separa a la paja del trigo, y el trigo común del trigo selecto." );
		
		asignatura1 = "Circuitos Electricos I";
		asignatura2 = "Física Mecánica";
		asignatura3 = "Cáculo Integral";
		asignatura4 = "Ética III";
		asignatura5 = "Probabilidad y Estadística";

		localStorage.setItem ( "asignatura#1", asignatura1 );
		localStorage.setItem ( "asignatura#2", asignatura2 );
		localStorage.setItem ( "asignatura#3", asignatura3 );
		localStorage.setItem ( "asignatura#4", asignatura4 );
		localStorage.setItem ( "asignatura#5", asignatura5 );

	} else {

		console.log ( "Aquí no sé siquiera que pueda pasar, así que... Diviertete, creo." );
		
		asignatura1 = "Ética 2";
		asignatura2 = "Intro. a la Eleaboración de Algoritmos";
		asignatura3 = "Gráficos Vectoriales";
		asignatura4 = "Fotografía";
		asignatura5 = "Marketing";

		localStorage.setItem ( "asignatura#1", asignatura1 );
		localStorage.setItem ( "asignatura#2", asignatura2 );
		localStorage.setItem ( "asignatura#3", asignatura3 );
		localStorage.setItem ( "asignatura#4", asignatura4 );
		localStorage.setItem ( "asignatura#5", asignatura5 );

	}

}
function loadAllLocalStorage () {

	$OPT_Nombre = document.getElementById ( "OTP_Nombre" );
	$OPT_Apellido = document.getElementById ( "OTP_Apellido" );
	$OPT_Provincia = document.getElementById ( "OTP_Provincia" );
	$OPT_Ciudad = document.getElementById ( "OTP_Ciudad" );
	$OPT_Sector = document.getElementById ( "OTP_Sector" );
	$OPT_Calle = document.getElementById ( "OTP_Calle" );
	$OPT_Carrera = document.getElementById ( "OTP_Carrera" );

	$OPT_Nombre.innerHTML = localStorage.getItem ( "nombre" ) + ".";
	$OPT_Apellido.innerHTML = localStorage.getItem ( "apellido" ) + ".";
	$OPT_Provincia.innerHTML = localStorage.getItem ( "provincia" ) + ".";
	$OPT_Ciudad.innerHTML = localStorage.getItem ( "ciudad" ) + ".";
	$OPT_Sector.innerHTML = localStorage.getItem ( "sector" ) + ".";
	$OPT_Calle.innerHTML = localStorage.getItem ( "calle" ) + ".";
	$OPT_Carrera.innerHTML = localStorage.getItem ( "carrera" ) + ".";

	materia_1 = document.getElementById ( "materia#1" );
	materia_2 = document.getElementById ( "materia#2" );
	materia_3 = document.getElementById ( "materia#3" );
	materia_4 = document.getElementById ( "materia#4" );
	materia_5 = document.getElementById ( "materia#5" );

	materia_1.innerHTML = localStorage.getItem ( "asignatura#1" );
	materia_2.innerHTML = localStorage.getItem ( "asignatura#2" );
	materia_3.innerHTML = localStorage.getItem ( "asignatura#3" );
	materia_4.innerHTML = localStorage.getItem ( "asignatura#4" );
	materia_5.innerHTML = localStorage.getItem ( "asignatura#5" );

	materiaLun = document.getElementById ( "materia#1Lun" );
	materiaMar = document.getElementById ( "materia#2Mar" );
	materiaMie = document.getElementById ( "materia#3Mie" );
	materiaJue = document.getElementById ( "materia#4Jue" );
	materiaVie = document.getElementById ( "materia#5Vie" );

	materiaLun.innerHTML = localStorage.getItem ( "horario1" );
	materiaMar.innerHTML = localStorage.getItem ( "horario2" );
	materiaMie.innerHTML = localStorage.getItem ( "horario3" );
	materiaJue.innerHTML = localStorage.getItem ( "horario4" );
	materiaVie.innerHTML = localStorage.getItem ( "horario5" );

}