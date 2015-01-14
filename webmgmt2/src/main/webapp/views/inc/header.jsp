<%@ page contentType="text/html; charset=UTF-8" language="java" import="java.sql.*" errorPage="" %>

<div id="header">
	<%-- 判断用户是否登录，以显示不同的头信息 --%>
	<c:choose>
		<c:when test="${empty userObj}">
			<div class="inner" style="width:1000px">
				<div class="logo">
					<h2><a href="${basePath}/sysadmin/user/index.do"><img alt="管理中心" src="${basePath}/resources/img/common/logo.png" width="263" height="51"></a></h2>
				</div>
			</div>
			<%--
			<div class="num clearfix">
				<div class="num-l">
					<p class="total"><fmt:formatNumber value="${result.dict.statistic.totalCount }" pattern="#,#00"/></p>
					<span class="num-title">已成功匹配借款项目数</span> 
				</div>
				<div class="num-r">
					<p class="total"><fmt:formatNumber value="${result.dict.statistic.totalAmount }" pattern="#,#00"/></p>
					<span class="num-title">已成功融资金额</span> 
				</div>
			</div>
			--%>
       	</c:when>
       	<c:otherwise>
			<div class="inner">
				<div class="logo">
					<h2><a href="${basePath}/sysadmin/user/index.do"><img alt="管理中心" src="${basePath}/resources/img/common/logo.png" width="263" height="51"></a></h2>
				</div>
				<div class="userCenter"> <span class="loan-name">${userObj.realName }<i class="icon"></i></span> </div>
				<div class="r5 center-inner none"> <i class="icon center-up"></i>
					<ul>
						<li><a href="${basePath}/sysadmin/user/updateMyPwd.do" class="change-pwd">修改密码</a> </li>
						<li><a href="${basePath}/sysadmin/user/logout.do" class="exit">退出</a></li>
					</ul>
				</div>
			</div>
       	</c:otherwise>
	</c:choose>
	<%-- /判断用户是否登录，以显示不同的头信息 --%>
</div>
