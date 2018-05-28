var listaUsuarios;

$(document).ready(function() {
	 
	initPagina();  
    
});

function initPagina(){
	
	var url = "listar";
    $("#tablaContenido").empty();
	$.getJSON( url, function( response ) {
	
		listaUsuarios = response;
		pintarTabla( response );
		
	});
	
}

function pintarTabla( data ){
	
	var cuerpoTabla = "";
	$.each( data, function( i, objeto ) {
		cuerpoTabla += "<tr>";
		cuerpoTabla += "<td>";
		cuerpoTabla += "<a href='javascript:fnEditar(" + objeto.id + ")'><span class='glyphicon glyphicon-pencil'></span> Editar </a>";
		cuerpoTabla += "<a href='javascript:fnEliminar(" + objeto.id + ")'><span class='glyphicon glyphicon-trash'></span> Eliminar</a>";
		cuerpoTabla += "</td>";
		cuerpoTabla += "<td>" + objeto.id + "</td>";
		cuerpoTabla += "<td>" + objeto.name + "</td>";
		cuerpoTabla += "<td>" + objeto.email + "</td>";
		cuerpoTabla += "<td>" + objeto.age + "</td>";
		cuerpoTabla += "<td>" + objeto.phone + "</td>";
		cuerpoTabla += "</tr>";
	});

	$("#tablaContenido").html(cuerpoTabla);
	$('#datatb').DataTable();
	
}


$("#btnSearch").click(buscarTabla);

function buscarTabla() {
	
	var data = $("#frmSearch").serialize();
	console.log("Data: " + data);
	var url = "buscar";
    $("#tablaContenido").empty();
    
	$.get( url, data, function( response ) {
	
		listaUsuarios = response;
		pintarTabla( response );
		
	});
}


$("#btnNew").click(function(){
	$("#tituloForm").html("NUEVO REGISTRO");
	$("#accion").val("NUEVO");
	$("#codigo").val("0");
	$("#codigox").val("0");
	$("#name").val("");
	$("#age").val("");
	$("#email").val("");
	$("#phone").val("");
	$("#modalRegistro").modal();
	
});


$("#btnSave").click(function(){
	
	var formData = {
			accion : $("#accion").val(),
			id : $("#codigo").val(),
			name : $("#name").val(),
			age : $("#age").val(),
			email : $("#email").val(),
			phone : $("#phone").val()
		}
	
	$.post("save", formData, function( response ){
		
		$("#modalRegistro").modal('toggle');
		buscarTabla();
		
	});
	
});


function fnEditar( id ){
	
	var registro;
	$.each( listaUsuarios, function( i, objeto ) {
		if( objeto.id == id){
			registro = objeto;
			return false;
		}
	});
	
	$("#tituloForm").html("EDITAR REGISTRO");
	$("#accion").val("EDITAR");
	$("#codigo").val(registro.id);
	$("#codigox").val(registro.id);
	$("#name").val(registro.name);
	$("#age").val(registro.age);
	$("#email").val(registro.email);
	$("#phone").val(registro.phone);
	$("#modalRegistro").modal();
	
}

function fnEliminar( id ){
	
	var mensaje = "Esta seguro de eliminar el registro " + id ;
    var rpta = confirm(mensaje);
    if( !rpta ){
    	return;
    }
    var formData = {
			accion : "ELIMINAR",
			id : id,
			name : "",
			age : 0,
			email : "",
			phone : ""
		}
    
	$.post("save", formData, function( response ){
		
		buscarTabla();
		
	});
}



