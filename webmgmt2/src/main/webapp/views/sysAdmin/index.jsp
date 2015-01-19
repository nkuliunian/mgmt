<%@ page contentType="text/html; charset=UTF-8" language="java" import="java.sql.*" errorPage="" %>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=9, IE=8, chrome=1">
<title>管理中心 - 首页</title>
<meta name="keywords" content="###">
<meta name="description" content="###">
<%@ include file="/views/inc/inc.jsp"%>
</head>

<body>
<%@ include file="/views/inc/header.jsp"%>
<div id="wrapper">
	<div class="wpr-inner">
		<div class="bread"><a href="${basePath}/sysadmin/user/index.do">管理中心</a><span>&gt;</span>首页</div>
		<%-- 菜单树 --%>
		<c:import url="/sysadmin/menu/listVisible.do"></c:import>
		<div id="main">
			<div class="box-h credit-h">
				<p>欢迎，${userObj.email }</p>
				<p>姓名：${userObj.realName }</p>
			</div>
		</div>
	</div>
</div>
<%@ include file="/views/inc/footer.jsp"%>
</body>
</html>