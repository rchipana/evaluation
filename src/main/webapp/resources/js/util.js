console.log("sd");

var _datatable;
var _validator;
var Util = {
		initTable: function (url) {
			_datatable = $('#datatb').DataTable({
				"searching": false,
				"language" : {
					"lengthMenu" : "Muestra _MENU_ registros por pagina",
					"zeroRecords" : "No se encontraron registros",
					"info" : "Mostrando pagina  _PAGE_ de _PAGES_",
					"infoEmpty" : "Ningun registro disponible",
					"infoFiltered" : "(filtrado de _MAX_ registros en total)",
					"paginate" : {
						"previous" : "Anterior",
						"next" : "Siguiente",
					}
				},
				"ajax" : url,
				"type":"GET",
				"columns" : [ {"data" : "id"},
					{"data" : "name"},
					//{"data" : "year"},
					{"data" : "age"},
					{"data" : "email"},
					{"data" : "phone"}
					]
			});
			$('#datatb_filter').remove();
			$('#datatb_length').remove();
			$('[data-toggle="tooltip"]').tooltip();
		},
		updateTable: function(url) {
			_datatable.ajax.url(url).load();
		},
		addRecord: function(object) {
			console.log("DATA OBJ: " +  object);
			_datatable.rows.add([object]).draw();
		},
		initModal: function () {
			$('#modalNew').modal({
				backdrop : true,
				backdrop : 'static'
			}).on('hidden.bs.modal', function (e) {
				Util.resetForm();
			});
			Util.resetForm();
		},
		initForm: function () {
			_validator = $('#frmNew').validate( {
				rules: {
					name: {
						required: true,
						minlength: 3
					},
					age: {
						required: true,
						digits: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true
					}
				},
				messages: {
					name: {
						required: "Por favor ingrese el nombre completo",
						minlength: "El nombre debe estar compuesto a menos de 3 caracteres"
					},
					age: {
						required: "Por favor ingrese la edad",
						digits: "La edad debe ser un valor numerico (0-9)"
					},
					email: "Por favor ingrese un correo valido",
					phone: {
						required: "Por favor ingrese el telefono"
					}
				},
				errorPlacement: function ( error, element ) {
					// Add the `help-block` class to the error element
					error.addClass( "help-block" );

					if ( element.prop( "type" ) === "checkbox" ) {
						error.insertAfter( element.parent( "label" ) );
					} else {
						error.insertAfter( element );
					}
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".v-error" ).addClass( "has-error" ).removeClass( "has-success" );
				},
				unhighlight: function (element, errorClass, validClass) {
					$( element ).parents( ".v-error" ).addClass( "has-success" ).removeClass( "has-error" );
				}
			} );
		},
		resetForm: function() {
			$('#frmNew').find('input:text, input:password, input:file, select, textarea, input[type=email]').val('');
			$('#frmNew').find('input:radio, input:checkbox').removeAttr('checked')
					.removeAttr('selected');
			$(".v-error").removeClass("has-error").removeClass("has-success");
			_validator.resetForm();
		},
		getFormJson: function (id) {
			return JSON.stringify($('#'+id).serializeObject());
		}
		
}

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};