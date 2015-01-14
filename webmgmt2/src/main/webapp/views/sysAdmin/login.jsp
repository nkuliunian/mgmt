<%@ page contentType="text/html; charset=UTF-8" language="java" import="java.sql.*" errorPage="" %>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=9, IE=8, chrome=1">
<title>管理中心|登录</title>
<meta name="keywords" content="###">
<meta name="description" content="###">
<%@ include file="/views/inc/inc.jsp"%>
<script type="text/javascript">

/**
 * 页面加载后执行
 */
$(function(){
	//隐藏提示信息
	$("#errorMsg").hide();
	//密码绑定键盘按下后事件
	$("#password").bind("keypress", function(event){
		login(event);
	});
	//输入时隐藏提示信息
	$("#nickName, #password").on("focus", function(){
		$("#errorMsg").hide();
	});
});

/**
 * 键盘按下后事件响应处理
 * @param event
 */
function login(event) {
	if (event.keyCode == 13) {
		ajaxLogin();
	}
}

/**
 * 登录请求方法
 */
function ajaxLogin() {
	var nickName = $('#nickName').val();
	var password = $('#password').val();
	//检验用户名
	if (nickName == null || nickName == '') {
    	$("#errorMsg").html('用户名不能为空');
    	$("#errorMsg").show();
    	return false;
	}
	//检验密码
	if (password == null || password == '') {
    	$("#errorMsg").html('密码不能为空');
    	$("#errorMsg").show();
    	return false;
	}
	
	//异步请求
	$ajax({
		type: 'POST',
		url: environment.basePath + "/sysadmin/user/doLogin.do",
		data: {"nickName": nickName, "password": password},
		success: function(data) {
			//错误等信息提示
			if(data.code < 0){
				$("#errorMsg").html(data.msg);
    			$("#errorMsg").show();
				return false;
			}
			//登录成功，跳转主页
			window.location.href = environment.basePath + "/sysadmin/user/index.do";
		}
	});//End...$ajax
}

</script>
</head>

<body>
<%@ include file="/views/inc/header.jsp"%>
<div id="wrap">
	<div class="r3 login">
    	<div class="inner fr">
        <h2 style="color:#fff">登录</h2>
        	<ul>            	
                <li><input type="text" id="nickName" class="r3 ipt" placeholder="用户名" /> </li>
                <li><input type="password" id="password" class="r3 ipt" placeholder="密码" /> </li>
                <li><a id="button" href="javascript:;" class="r3 btn login-btn" onclick="return ajaxLogin();">登录</a><span id="errorMsg" class="error">密码不正确</span></li>
            </ul> 
        </div>
    </div>
    <div class="introduce"><img src="${basePath}/resources/img/intro-bg.png" width="913" height="132"></div>
</div>
<%@ include file="/views/inc/footer.jsp"%>
</body>
</html>

