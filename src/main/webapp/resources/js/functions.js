$(document)
		.ready(
				function() {

					list();

					$('#btnNew').click(function() {
						initModal();

					});

					function list() {
						$('#datatb').DataTable({
							"sAjaxSource" : "/listar",
							"destroy" : true,
							"sAjaxDataProp" : "",
							"order" : [ [ 0, "asc" ] ],
							"aoColumns" : [ {
								"mData" : "id"
							}, {
								"mData" : "name"
							}, {
								"mData" : "email"
							}, {
								"mData" : "age"
							}, {
								"mData" : "phone"
							} ]
						})
					}

					function initModal() {
						$('#modalNew').modal({
							backdrop : true,
							backdrop : 'static'
						}).on('hidden.bs.modal', function(e) {
							reset();
						});
						reset();
					}

					function reset() {
						$('#frmNew')
								.find(
										'input:text, input:password, input:file, select, textarea, input[type=email]')
								.val('');
						$('#frmNew').find('input:radio, input:checkbox')
								.removeAttr('checked').removeAttr('selected');
						$(".v-error").removeClass("has-error").removeClass(
								"has-success");

					}

				});

$(document)
		.ready(
				function() {
					// Util.initForm;
					init();

					function addObject(object) {
						console.log("DATA OBJ: " + object);

					}

					function init() {
						$('#frmNew')
								.validate(
										{
											rules : {
												name : {
													required : true,
													minlength : 3
												},
												age : {
													required : true,
													digits : true
												},
												email : {
													required : true,
													email : true
												},
												phone : {
													required : true
												}
											},

											messages : {
												name : {
													required : "Por favor ingrese el nombre completo",
													minlength : "El nombre debe estar compuesto a menos de 3 caracteres"
												},

												age : {
													required : "Por favor ingrese la edad",
													digits : "La edad debe ser un valor numerico (0-9)"
												},
												email : "Por favor ingrese un correo valido",
												phone : {
													required : "Por favor ingrese el telefono"
												}
											},

											errorPlacement : function(error,
													element) {
												// Add the `help-block` class to
												// the error element
												error.addClass("help-block");

												if (element.prop("type") === "checkbox") {
													error.insertAfter(element
															.parent("label"));
												} else {
													error.insertAfter(element);
												}
											},

											highlight : function(element,
													errorClass, validClass) {
												$(element).parents(".v-error")
														.addClass("has-error")
														.removeClass(
																"has-success");
											},
											unhighlight : function(element,
													errorClass, validClass) {
												$(element)
														.parents(".v-error")
														.addClass("has-success")
														.removeClass(
																"has-error");
											}
										})
					}

					$('#btnSave').click(function() {
						if ($("#frmNew").valid()) {
							console.log("paso validacion")

							formData = {
								name : $("#name").val(),
								age : $("#age").val(),
								email : $("#email").val(),
								phone : $("#phone").val()
							}

							addObject(formData);

							console.log("formData before post: " + formData);

							// TODO: Agregar lógica para guardar un registro
							// >>>>>

							$('#modalNew').modal('toggle');
							// Util.resetForm;

							$.ajax({
								type : "POST",
								contentType : "application/json",
								url : "/save",
								data : JSON.stringify(formData),
								dataType : 'json',

							})
							console.log(formData)
							location.reload();

						}
					}

					);

				});
$(document).ready(function() {

	$('#btnSearch').click(function() {
		buscar();

	});

	function buscar() {
		var name = $("#inputSName").val();
		var email = $("#inputSEmail").val();
		console.log("name: " + name);
		$('#datatb').DataTable({
			"sAjaxSource" : "/buscar/" + name + "/" + email,
			"destroy" : true,
			"sAjaxDataProp" : "",
			"order" : [ [ 0, "asc" ] ],
			"aoColumns" : [ {
				"mData" : "id"
			}, {
				"mData" : "name"
			}, {
				"mData" : "email"
			}, {
				"mData" : "age"
			}, {
				"mData" : "phone"
			} ]
		})
	}
	

});
