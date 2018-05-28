<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page session="true"%>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="text/html; charset=ISO-8859-1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<!-- Bootstrap core CSS -->
	<link href="<c:url value="/resources/css/bootstrap.min.css" />" rel="stylesheet">
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<link href="<c:url value="/resources/css/ie10-viewport-bug-workaround.css" />" rel="stylesheet">
	<!-- DataTables -->
	<link href="<c:url value="/resources/css/dataTables.bootstrap.min.css" />" rel="stylesheet">
	<!-- Custom CSS -->
	<link href="<c:url value="/resources/css/custom.css" />" rel="stylesheet">
	<script src="<c:url value="/resources/js/jquery.min.js"/>"></script>
</head>
<body>

	<div class="container">
		<div class="header clearfix">
			<nav>
				<ul class="nav nav-pills pull-right">
					<li role="presentation"><a
						href="<c:url value="/"/>">Usuario:&nbsp; <!-- TODO: Mostrar nombre del usuario en sesión AQUÍ-->
							${user}
					</a></li>
				</ul>
			</nav>

		</div>

		<div class="searchForm">
			<form id="frmSearch" class="form-inline" accept-charset=utf-8>

				<div class="input-group input-group-sm">
					<span class="input-group-addon"><i
						class="glyphicon glyphicon-user"></i></span> <input type="text"
						class="form-control" id="inputName" aria-describedby=""
						placeholder="Buscar por nombre" name="name">
				</div>

				<div class="input-group input-group-sm">
					<span class="input-group-addon" id="basic-addon1">@</span> <input
						type="email" class="form-control" id="inputEmail" name="email"
						placeholder="Buscar por email" aria-describedby="">
				</div>
				<button type="button" id="btnSearch" name="btnSearch"
					class="btn btn-primary btn-sm" data-toggle="tooltip"
					data-placement="right" title="Búsqueda por nombre, email o ambos">
					<span class="glyphicon glyphicon-search"></span> Buscar
				</button>
				<button type="button" id="btnNew" name="btnNew"
					class="btn btn-primary btn-sm btn-success pull-right">
					<span class="glyphicon glyphicon-plus"></span> Nuevo
				</button>
			</form>
		</div>
		
		
		<div class="dataTable">
			<table id="datatb" class="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Acción</th>
						<th>id</th>
						<th>name</th>
						<th>email</th>
						<th>age</th>
						<th>phone</th>
					</tr>
				</thead>
				<tbody id="tablaContenido">
				</tbody>
				<tfoot>
					<tr>
						<th>Acción</th>
						<th>id</th>
						<th>name</th>
						<th>email</th>
						<th>age</th>
						<th>phone</th>
					</tr>
				</tfoot>
			</table>
		</div>
		
		<c:import url="include/footer.jsp" />
		
	</div>
	
	<!-- Modal -->
  	<c:import url="include/modal.jsp" />
	
	
	<!-- Jquery & Bootstrap-->
	<script src="<c:url value="/resources/js/jquery.validate.min.js"/>"></script>
	<script src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
	
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="<c:url value="/resources/js/ie10-viewport-bug-workaround.js"/>"></script>	
	
	<!-- DataTables -->
	<script src="<c:url value="/resources/js/jquery.dataTables.min.js" />"></script>	
	<script src="<c:url value="/resources/js/dataTables.bootstrap.min.js" />"></script>		

	<!-- Custom -->
	<script src="<c:url value="/resources/js/evaluation.js" />"></script>
			
			
</body>
</html>