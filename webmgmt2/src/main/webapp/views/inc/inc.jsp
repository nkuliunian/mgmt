<%@ page contentType="text/html; charset=UTF-8" language="java" import="java.sql.*" errorPage="" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="basePath" value="${pageContext.request.contextPath }"></c:set>
<c:set var="dateexp" value="yyyy-MM-dd"></c:set>
<c:set var="dateslashexp" value="yyyy/MM/dd"></c:set>
<c:set var="timeexp" value="yyyy-MM-dd HH:mm:ss"></c:set>
<c:set var="timehmsexp" value="HH:mm:ss"></c:set>
<c:set var="moneyexp" value="#,##0.00#"></c:set>
<c:set var="moneyexpInt" value="#,##0"></c:set>
<link href="${basePath}/resources/css/global-min.css" type="text/css" rel="stylesheet">
<script type="text/javascript">
var environment = {
	basePath : '${basePath}'
};
</script>
<link href="${basePath}/resources/css/loanMng.css" type="text/css" rel="stylesheet">
<script src="${basePath}/resources/js/jquery-1.8.3.min.js" type="text/javascript"></script>
<script src="${basePath}/resources/js/global-1.1.0.min.js" type="text/javascript"></script>
<script src="${basePath}/resources/js/loanMng.js" type="text/javascript"></script>
<!-- <script src="${basePath}/resources/js/pagination.js" type="text/javascript"></script> -->
<link rel="shortcut icon" href="${basePath}/resources/img/common/favicon.ico" type="image/vnd.microsoft.icon">
<link rel="icon" href="${basePath}/resources/img/common/favicon.ico" type="image/vnd.microsoft.icon">
<script type="text/javascript">
$(function(){
	var result = {
		code : '${result.code}',
		msg : '${result.msg}',
		data : '${result.data}'
	};

	if(result.code == -1){
		var msg = result.msg;
		openTipWin("异常",msg);
	}
});
</script>