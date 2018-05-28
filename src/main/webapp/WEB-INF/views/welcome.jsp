<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page session="true"%>
<html>
<head>
<meta http-equiv="X-UA-Compatible" 	content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Equifax - Evaluaci&oacute;n</title>
<!-- Bootstrap core CSS -->
<link href="<c:url value="/resources/css/bootstrap.min.css" />" rel="stylesheet">
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<link href="<c:url value="/resources/css/ie10-viewport-bug-workaround.css" />" rel="stylesheet">
<!-- DataTables -->
<link href="<c:url value="/resources/css/dataTables.bootstrap.min.css" />" rel="stylesheet">
<!-- Custom CSS -->
<link href="<c:url value="/resources/css/custom.css" />" rel="stylesheet">
<script src="<c:url value="/resources/js/jquery.min.js"/>"></script> 

<style type="text/css">

body {
	padding-top: 0px;
	padding-bottom: 0px;
}

.margin {
	margin-bottom: 45px;
}

.bg-1 {
	/*background-color: #1abc9c; /* Green */
	color: #777;
}

.container-fluid {
	padding-top: 50px;
	padding-bottom: 70px;
}
</style>
</head>
<body>
	<div class="container-fluid bg-1 text-center">
		
		
		<form class="form-inline" method="post"
			action="<c:url value='/evaluacion' />">
			<div class="input-group input-group-lg">
				<input type="text" class="form-control" id="inputUser"
					name="inputUser" placeholder="Ingresa tu nombre">
			</div>
			<button type="submit" class="btn btn-primary btn-lg" id="btnStart"
				name="btnStart">
				Empezar <span class="glyphicon glyphicon-play"></span>
			</button>
		</form>
		<span> <!-- TODO: Mostrar Fecha AQUÍ--> ${fecha}
		</span>
	</div>
	<div class="container">
		<c:import url="include/footer.jsp" />
	</div>
	<!-- Jquery & Bootstrap-->
	<script src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>

	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="<c:url value="/resources/js/ie10-viewport-bug-workaround.js"/>"></script>
	
</body>
</html>