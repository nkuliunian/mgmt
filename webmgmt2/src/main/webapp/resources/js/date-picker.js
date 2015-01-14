/*!
 * Date Picker
 * Version: 1.0.0
 * Modify: By Wang Ping
 * Date: 07-03-2013 15:42:48 (GMT Time)
 */
$(function(){
	$('#qStartTime').kingFlatCalendar({
		showDefault: 0,
		onSelect: function() {
			
		}
	});
	$('#qEndTime').kingFlatCalendar({
		showDefault: 0,//显示默认日期
		onSelect: function() {
			
		}
	});
});
(function($) {
	Util.loadCSS(Util.config.CSSfile+"date-picker.css", "datePickerStyle");
	var jCalendar = $('<div id="jCalendar" style="position:absolute; left:0; top:0; z-index:-1; display:none"></div>');
	$('body').append(jCalendar);
	$.fn.kingFlatCalendar = function(options) {
        var defaults = {
			disableClass: 'state-disabled',//禁用状态
			otherClass: 'other-month', //其它月
			defaultClass: 'state-default', //日期默认状态
			hoverClass: 'state-hover',//鼠标划过状态
			activeClass: 'state-active',//当前日期高亮状态
			numberOfMonths: 1,//显示日历数
			minDate: true, //今天以前日期是否可以选择
			showInputDate: true, //input显示日期 true 显示  false 不显示
			showDefault: null, //默认日期：昨天：-1; 今天：0; 明天：1
			showOtherMonth: true,//是否显示其它月
			disablePrevText: false, //上月是否可以查阅 false可查询 true不可查询
			onSelect: null, //扩展响应
			dayNames: ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d'],//星期
			monthNames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],//月份
			yearName: '\u5E74',//年
			monthName: '\u6708', //月
			prevText: '\u4e0a\u6708',//上月
			nextText: '\u4e0b\u6708',//下月
			dateText: 'YYYY-MM-DD'//默认提示信息
        };
        var opts = $.extend(defaults,options);
        return this.each(function() {
            new $.dateCalendar(this,opts);
        });
    };
	$.dateCalendar = function(input,opts) {
		var input = $(input);
		input.attr('autocomplete', 'off');
		input.attr('readonly', 'readonly');
		var onFocus = false;
		var onChangeVal = false;//检查input是否有值 true:有、false:无
		var newdate = new Date();
		var setToday = {
			y: newdate.getFullYear(),
			m: newdate.getMonth()+1,
			d: newdate.getDate(),
			w: newdate.getDay()
		};
		
		//设置默认显示日期
		if(opts.showDefault == null){
			if(opts.showInputDate){
				input.val(opts.dateText).css('color','#999');
			}
		} else {
			var defdate = new Date();
			defdate.setDate(defdate.getDate() + opts.showDefault);
			var _yy = defdate.getFullYear();
			var _mm = defdate.getMonth() + 1;
			var _dd = defdate.getDate();
			var _ymd =  _yy + "/" + _mm + "/" + _dd;
			input.val(new Date(_ymd).format('yyyy-MM-dd')).css('color','#333');
		};
		
		//设置对象触发各种事件
		input.focus(function(e) {
			Util.stopBubble(e)
			generateHTML(setToday.m,setToday.y);
		}).click(function(e) {
			Util.stopBubble(e)
			generateHTML(setToday.m,setToday.y);
		}).blur(function() {
			if(onFocus == false){
				jCalendar.hide()
			}
		});
		jCalendar.mouseover(function() {
			onFocus = true;
		}).mouseout(function() {
			onFocus = false;
		});
		//最大、最小显示日历数
		function isGroupLength(gLen){
			if(gLen > 0 && gLen <= 4){
				gLen = gLen;
			} else if(gLen <= 0){
				gLen = 1;
			} else if(gLen > 4){
				gLen = 4;
			};
			return gLen;
		};
		//创建日历demo
		function generateHTML(m,y){
			var setMonths,setYears;
			if(checkInputVal(input.val())){
				setMonths = m - 1;
				setYears = y;
			} else {
				if(onChangeVal){
					onChangeVal = false;
					setMonths = m - 1;
					setYears = y;
				} else {
					var formatYMD = new Date($.trim(input.val()).replace(/-/g,"/"));
					setMonths = formatYMD.getMonth();
					setYears =  formatYMD.getFullYear();
				};
			};
			var gClass = '',headerMonthYear;//,gWidth;
			var html = '';
			html += '<b class="ar_up"></b><b class="ar_up_in"></b>';
			for(var dows = 0; dows < isGroupLength(opts.numberOfMonths); dows++){
				var btnPrev = '<a href="#" class="button prev '+
				(opts.disablePrevText && ((setYears+'-'+(setMonths+1)) == (setToday.y+'-'+setToday.m)) ? opts.disableClass : '')+'">'+opts.prevText+'</a>';
				var btnNext = '<a href="#" class="button next">'+opts.nextText+'</a>';
				var namesY = '<span class="year">'+setYears+opts.yearName+'</span>';
				var namesM = '<span class="month">'+
				(opts.monthNames[setMonths] < 10 ? '0'+opts.monthNames[setMonths] : opts.monthNames[setMonths])+opts.monthName+'</span>';
				if(isGroupLength(opts.numberOfMonths) > 1){
					//gWidth = 'style="width:'+jCalendar.width()/isGroupLength(opts.numberOfMonths)+'px"';
					switch (dows) {
						case 0: gClass = ' c-group-first';
							headerMonthYear = btnPrev + namesY + namesM;
							break;
						case isGroupLength(opts.numberOfMonths)-1: gClass = ' c-group-last';
							headerMonthYear = namesY + namesM + btnNext;
							break;
						default: gClass = ' c-group-middle';
							headerMonthYear = namesY + namesM;
							break;
					}
				} else if(isGroupLength(opts.numberOfMonths) == 1){
					//gWidth = 'style="width:'+jCalendar.width()+'px"';
					gClass = ' kf-group-default';
					headerMonthYear = btnPrev + namesY + namesM + btnNext;
				};
				html += '<div id="jCalendar_'+dows+'" class="ui-calendar '+gClass+'" style="width:273px">';
				html += '<div class="head">'+headerMonthYear+'</div>';
				html += '<ul class="week-entry">';
				for (var cols = 0; cols < 7; cols++) {
					html += '<li>' + opts.dayNames[cols] + '</li>';
				};
				html += '</ul>';
				var getMonthDay = Util.yMonthCheck(setMonths, setYears);
				var getFullDate = new Date(setYears, setMonths, 1);
				var getFirstDay = getFullDate.getDay();
				getFirstDay = (getFirstDay == 0 && getFullDate) ? 7 : getFirstDay;
				var count = 0;
				html += '<ul class="days-entry">';
				for (var rows = 0; rows < (getFirstDay+getMonthDay<=35?35:42); rows++) {
					if (rows < getFirstDay) {
						if(getFirstDay < 7){
							html += '<li class="'+opts.otherClass+'">'+(opts.showOtherMonth ? getMonthDay-getFirstDay+rows+1:'')+'</li>';
						};
					} else if (rows >= getFirstDay + getMonthDay) {
						++count;
						html += '<li class="'+opts.otherClass+'">'+(opts.showOtherMonth ? count : '')+'</li>';
					} else {
						var curM = setMonths+1;
						var curD = rows-getFirstDay+1;
						var getCurDate = setYears+'-'+(curM<10?'0'+curM:curM)+'-'+(curD<10?'0'+curD:curD);
						var getTodayYMD = setToday.y+'-'+(setToday.m<10?'0'+setToday.m:setToday.m)+'-'+(setToday.d<10?'0'+setToday.d:setToday.d);
						var stateClass = opts.defaultClass;
						!opts.minDate && getCurDate < getTodayYMD ? stateClass = opts.disableClass : '';
						checkInputVal(input.val()) && getCurDate == getTodayYMD ?
						stateClass = opts.activeClass : getCurDate == $.trim(input.val()) ?
						stateClass = opts.activeClass : '';
						html += '<li class="'+stateClass+'">'+curD+'</li>';
					}
				};
				html += '</ul>';
				html += '</div>';
			};
			jCalendar.html(html);
			resetPosition();
			upDateInst(setMonths,setYears);
		};
		function upDateInst(setMonths,setYears){
			var itemList = jCalendar.find('.days-entry li');
			var prev = jCalendar.find('.prev');
			var next = jCalendar.find('.next');
			var head = jCalendar.find('.head');
			var prevYear,prevMonth,nextYear,nextMonth;
			if (setMonths == 0) {
				prevYear = setYears - 1;
				prevMonth = opts.monthNames[11];
			} else {
				prevYear = setYears;
				prevMonth = opts.monthNames[setMonths - 1];
			};
			if (setMonths == 11) {
				nextYear = setYears + 1;
				nextMonth = opts.monthNames[0];
			} else {
				nextYear = setYears;
				nextMonth = opts.monthNames[setMonths + 1];
			};
			prev.click(function(){
				onChangeVal = true;
				if(opts.disablePrevText && ((setYears+'-'+(setMonths+1)) == (setToday.y+'-'+setToday.m))){
					return false;
				};
				if(isGroupLength(opts.numberOfMonths) > 1){
					if (setMonths == 0) {
						prevYear = setYears - 1;
						prevMonth = opts.monthNames[11] - isGroupLength(opts.numberOfMonths);
					} else {
						prevYear = setYears;
						prevMonth = opts.monthNames[setMonths - 1] - isGroupLength(opts.numberOfMonths);
					};
					generateHTML(prevMonth,prevYear);
				} else {
					generateHTML(prevMonth,prevYear);
				}
				return false;
			});
			next.click(function(){
				onChangeVal = true;
				if(isGroupLength(opts.numberOfMonths) > 1){
					generateHTML(((nextMonth - 1) + isGroupLength(opts.numberOfMonths)),nextYear);
				} else {
					generateHTML(nextMonth,nextYear);
				};
				return false;
			});
			itemList.click(function(){
				var self = $(this);
				if(!(self.hasClass(opts.otherClass) || self.hasClass(opts.disableClass))){
					var text = parseInt(self.text());
					var _day = text < 10 ? '0'+ text : text;
					var _month = (setMonths+1) < 10 ? '0'+ (setMonths+1) : (setMonths+1);
					itemList.removeClass(opts.activeClass);
                	self.addClass(opts.activeClass);
					input.val(setYears+'-'+_month+'-'+_day).css('color','#333');
					jCalendar.hide();
					opts.onSelect ? opts.onSelect.apply(input[0]) : '';
            	};
				return false;
			}).hover(function(){
				if(!($(this).hasClass(opts.otherClass) || $(this).hasClass(opts.disableClass))){
					$(this).addClass(opts.hoverClass);
				}
			},function(){
				$(this).removeClass(opts.hoverClass)
			});
		};
		//内容装置器显示目标位置
		function resetPosition(){
			var zIndex = 9999;
			var x = 10,y = 10;
			var aTop = input.offset().top;
			var aLeft = input.offset().left;
			var aHeight = input.outerHeight();
			var aWidth = input.outerWidth();
			var tmpWidth =  jCalendar.width();
			var tmpHeight = jCalendar.height();
			var tipY = $(window).height() - (aTop + tmpHeight);
			var tipX = $(window).width() - (aLeft + tmpWidth);
			var tmpTop = aTop;
			var tmpLeft = aLeft + aWidth;
			var up = jCalendar.find('.ar_up');
			var upInner = jCalendar.find('.ar_up_in');
			var tmpWidArr = aWidth/2 - 20;
			up.css({left:tmpWidArr});
			upInner.css({left:tmpWidArr});
			if(tmpWidth < 273){
				tmpWidth = 273
			} else {
				tmpWidth = tmpWidth * isGroupLength(opts.numberOfMonths)
			};
			if (tipX < x) {
				tmpLeft = tmpLeft - tmpWidth
				up.css({left:'auto',right:tmpWidArr});
				upInner.css({left:'auto',right:tmpWidArr});
			} else {
				if(tmpLeft < tmpWidth){
					tmpLeft = tmpLeft - aWidth/2 - tmpWidArr
					up.css({left:tmpWidArr});
					upInner.css({left:tmpWidArr});
				} else {
					tmpLeft = tmpLeft - tmpWidth/2;
				}
			};
			if (tipY < y) {
				tmpTop = tmpTop - tmpHeight - 12;
				up.addClass('ar_down');
				upInner.addClass('ar_down_in');
			} else {
				tmpTop = tmpTop + aHeight + 12;
			};
			jCalendar.css({position:'absolute',top:tmpTop,left:tmpLeft,width:tmpWidth,zIndex:zIndex,display:'block'});
			jCalendar.click(function(e){ Util.stopBubble(e)});
			$(window).click(function(){jCalendar.hide()});
		};
		function checkInputVal(target){
			return $.trim(target) == null || $.trim(target) == '' || $.trim(target) == opts.dateText;
		};
	}
})(jQuery);