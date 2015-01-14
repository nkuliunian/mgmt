// JavaScript Document
$(function(){
	leftNav();
	centerControl();
	checkState();
	manageTable()
	tabs('#tubeTabs','#tubePanel','click');
})
function leftNav(){
	//$('.left-nav .level1 ul').hide();
	$('.left-nav .nav-ul .level1-title, .level1 .icon').toggle(function(){
			if($(this).siblings('ul').siblings('i').hasClass('icon-jian'))
			{
				$(this).siblings('ul').hide().siblings('i').removeClass('icon-jian').addClass('icon-jia');	
			}
			else
			{
				$(this).siblings('ul').show().siblings('i').removeClass('icon-jia').addClass('icon-jian');
			}
		},function(){
			if($(this).siblings('ul').siblings('i').hasClass('icon-jia'))
			{
				$(this).siblings('ul').show().siblings('i').removeClass('icon-jia').addClass('icon-jian');
			}
			else
			{
				$(this).siblings('ul').hide().siblings('i').removeClass('icon-jian').addClass('icon-jia');	
			}
		});
	$('.left-nav .level1 li').click(function(){
			$('.left-nav .level1 li').removeClass('checked-li');
			$(this).addClass('checked-li');
		});
	$('.left-nav .level1 li').hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');	
		});
}
function centerControl(){
	$('.userCenter, .center-inner').hover(function(){
			$('.center-inner').show();		
		},function(){
			$('.center-inner').hide();
		});
}

function checkState(){
	$('.yCheck').hover(function(){
			$(this).children('.ico').addClass('hover');
		},function(){
			$(this).children('.ico').removeClass('hover');	
		});
	$('.yCheck').toggle(function(){
			$(this).children('.ico').removeClass('hover').addClass('checked');
		},function(){
				$(this).children('.ico').removeClass('checked');
		});
	}

//隔行换色
function manageTable(){
	if($('#manageTable tr').length > 3){
		$('#manageTable tr:even').addClass('double');
	};
}

//选显卡
function tabs(tabTit,tabCon,evt){
	$(tabCon).each(function(){ 
	  $(this).children().eq(0).show();
	  });
	$(tabTit).each(function(){
	  $(this).children().eq(0).addClass('active');
	  });
     $(tabTit).children()[evt](function(){
        $(this).addClass('active')
		       .siblings().removeClass('active');
         var index = $(tabTit).children().index(this);
         $(tabCon).children()
		          .eq(index).show()
				  .siblings().hide();
    });
}

//弹出浮框方法
//milliSecond 表示过多少毫秒自动关闭浮框，小于0表示不自动关闭
//fun 表示过多少毫秒后要执行的操作
function openFloatWin(content, milliSecond, fun){
	var $floatWin = $("#loanMng_successFloatWin");
	if($floatWin.length == 0){
		var _popupHtml = 
			'<div id="loanMng_successFloatWin" class="r5 tips-box none">' +
				'<span id="loanMng_successFloatWin_content">' + content +'</span>' +
			'</div>';
		
		$(document.body).append(_popupHtml);
		$floatWin = $("#loanMng_successFloatWin");
	}else{
		$("#loanMng_successFloatWin_content").html(content);
	}
	$floatWin.removeClass("none");
	if(milliSecond > 0){setTimeout(function(){closeFloatWin();fun&&fun();}, milliSecond);}
}
//关闭浮框方法
function closeFloatWin(){
	var $floatWin = $("#loanMng_successFloatWin");
	if($floatWin.length == 0){
		return false;
	}
	$floatWin.addClass("none");
}

//弹出提示窗体方法
function openTipWin(title, content, fun){
	var $tipWin = $("#loanMng_successTipWin");
	if($tipWin.length == 0){
		var _popupHtml = 
			'<div id="loanMng_successTipWin" class="r5 dialog-modify dialog-tips none">' +
			'	<div class="dialog-head">' +
			'		<h2 id="loanMng_successTipWin_title">' + title + '</h2>' +
			'		<a href="javascript:;" class="r3 closeModal none"><i class="icon"></i></a>' +
			'    </div>' +
			'    <div class="dialog-content-tips" id="loanMng_successTipWin_content">' + content + '</div>' +
			'	<div class="dialog-foot">' +
			'		<a href="javascript:;" class="r3 btn dialog-ipt dialog-know">确定&nbsp;&nbsp;</a>' +
			'	</div>' +
			'</div>';
		
		$(document.body).append(_popupHtml);
		$tipWin = $("#loanMng_successTipWin");
		//绑定按钮事件
		$tipWin.find("a.dialog-know").unbind("click").on("click", function(){
			closeTipWin(fun);
		});
	}else{
		$("#loanMng_successTipWin_title").html(title);
		$("#loanMng_successTipWin_content").html(content);
		//绑定按钮事件
		$tipWin.find("a.dialog-know").unbind("click").on("click", function(){
			closeTipWin(fun);
		});
	}
	//$tipWin.removeClass("none");
	if(typeof($('#overlayModal')[0]) == 'undefined'){
		Util.jDialog.Modal('loanMng_successTipWin','loanMng_successTipWin_content');
	}else{
		var si = setInterval(function(){
			if(typeof($('#overlayModal')[0]) == 'undefined'){
				Util.jDialog.Modal('loanMng_successTipWin','loanMng_successTipWin_content');
				clearInterval(si);//停
			}
		}, 200);

		
		
	}
}
//关闭提示窗体方法
function closeTipWin(fun){
	var $tipWin = $("#loanMng_successTipWin");
	if($tipWin.length == 0){
		return false;
	}
	//$tipWin.addClass("none");
	$tipWin.find(".closeModal").click();
	fun&&fun();
}
//显示正在加载数据提示方法，防止重复提交
function showLoading(){
	var $over = $("#loanMng_loadingOver"), $layout = $("#loanMng_loadingLayout");
	if($over.length == 0){
		var _popupHtml =
			'<div id="loanMng_loadingOver" style="display: none;position: absolute;top: 0;left: 0;width: 100%;height: 100%;background-color: #f5f5f5;opacity:0.5;z-index: 1000;"></div>'+
	    	'<div id="loanMng_loadingLayout" style="display: none;position: absolute;top: 40%;left: 40%;width: 20%;height: 20%;z-index: 1001;text-align:center;">'+
			'	<img src="' + environment.basePath + '/resources/img/loading.gif" alt="" />'+
			'</div>';
		
		$(document.body).append(_popupHtml);
		$over = $("#loanMng_loadingOver");
		$layout = $("#loanMng_loadingLayout");
	}
	$over.show();
	$layout.show();
}
//隐藏正在加载数据提示方法
function hideLoading(){
	var $over = $("#loanMng_loadingOver"), $layout = $("#loanMng_loadingLayout");
	if($over.length == 0){
		return false;
	}
	$over.hide();
	$layout.hide();
}

/**
 * 封装jquery的ajax操作。 进行通用错误处理
 * @author liupoyang
 * @since 2014-03-24
 */
function $ajax(ajaxOption) {
	var _successFn = ajaxOption.success;
	ajaxOption.success = function(ddata) {
		try {
			if (_$ajaxResultExecute(ddata)) {
				if (_successFn) {
					_successFn(ddata);
				}
			}
		} catch(e) {
			console.error(e);
		}
	};
	ajaxOption.data.asyn = true;
	var _ajax = $.extend(true, {}, _$ajaxDefaultOption, ajaxOption);
	$.ajax(_ajax);
}

/**
 * 处理ajax返回的数据，对错误进行操作
 * @author liupoyang
 * @since 2014-03-24
 * @return 没有错误返回true， 有错误返回false
 */
function _$ajaxResultExecute(data){if(data == null){alert("返回来的数据为空");return false;}if(data.code == -500||data.code == -501||data.code == -502){alert(data.msg);return false;}return true;}

/**
 * 默认的ajax参数
 */
var _$ajaxDefaultOption = {
	cache:false,
	error: function(xhr, errSta, errThr) {
		alert('服务器或网络异常，请稍后执行此操作！');
	},
	complete:function(){
		hideLoading();
	},
	beforeSend: function() {
		showLoading();
	}
};

//弹出确认窗体方法 liupoyang 2014-03-26
function openConfirmWin(title, content, fun){
	var $tipWin = $("#loanMng_successConfirmWin");
	if($tipWin.length == 0){
		var _popupHtml = 
			'<div id="loanMng_successConfirmWin" class="r5 dialog-modify dialog-tips none">' +
			'	<div class="dialog-head">' +
			'		<h2 id="loanMng_successConfirmWin_title">' + title + '</h2>' +
			'		<a href="javascript:;" class="r3 closeModal"><i class="icon"></i></a>' +
			'    </div>' +
			'    <div class="dialog-content-tips" id="loanMng_successConfirmWin_content">' + content + '</div>' +
			'	<div class="dialog-foot">' +
			'		<a href="javascript:;" class="r3 btn dialog-ipt dialog-cancel closeModal" style="margin-left:50px;">取消<i class="icon"></i></a>' +
			'		<a href="javascript:;" class="r3 btn dialog-ipt dialog-confirm">确认<i class="icon"></i></a>' +
			'	</div>' +
			'</div>';
		
		$(document.body).append(_popupHtml);
		$tipWin = $("#loanMng_successConfirmWin");
		//绑定按钮事件
		$tipWin.find("a.dialog-confirm").unbind("click").on("click", function(){
			closeConfirmWin(fun);
		});
	}else{
		$("#loanMng_successConfirmWin_title").html(title);
		$("#loanMng_successConfirmWin_content").html(content);
		//绑定按钮事件
		$tipWin.find("a.dialog-confirm").unbind("click").on("click", function(){
			closeConfirmWin(fun);
		});
	}
	//$tipWin.removeClass("none");
	Util.jDialog.Modal('loanMng_successConfirmWin','loanMng_successConfirmWin_content');
}
//关闭确认窗体方法
function closeConfirmWin(fun){
	var $tipWin = $("#loanMng_successConfirmWin");
	if($tipWin.length == 0){
		return false;
	}
	//$tipWin.addClass("none");
	$tipWin.find(".closeModal").click();
	fun&&fun();
}

/** 
 * 格式化时间样式<br />注意：这是js Date对象的扩展方法，如果是日期已转json串，需要进一步如下处理
 * new Date(Date.parse(dateJsonStr)).strFormat('Y-m-d')  liupoyang 2014-09-16
 * 
 * format a Date object, a simple simulation of PHP's date function
 *  link: http://jacwright.com/projects/javascript/date_format
 * @param {String} fmt 'Y-m-d H:i:s'
 * 
 * @todo complete this function
 */
Date.prototype.strFormat = function(fmt){
    fmt = fmt || 'Y-m-d H:i:s';
    var map = {
		Y: function() { return this.getFullYear(); },
		m: function() { return (this.getMonth() < 9 ? '0': '') + (this.getMonth() + 1); },
		d: function() { return (this.getDate() < 10 ? '0': '') + this.getDate(); },
		H: function() { return (this.getHours() < 10 ? '0': '') + this.getHours(); },
		i: function() { return (this.getMinutes() < 10 ? '0': '') + this.getMinutes(); },
		s: function() { return (this.getSeconds() < 10 ? '0': '') + this.getSeconds(); }
	};
	var rt = '';
	for(var i=0;i<fmt.length;i++){
		var cur = fmt.charAt(i);
		rt += map[cur] ? map[cur].apply(this): cur;
	}
	return rt;
};