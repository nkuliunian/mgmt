package com.mgmt.base;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.web.context.support.WebApplicationContextUtils;

/**
 * spring业务对象获取帮助类
 *
 * @author nian.liu
 * @date 2015-1-15上午12:24:10
 */
public class BeanHelper {
	private static BeanFactory beanFactory;
	public static BeanFactory getBeanFactory(HttpServletRequest request) {
		if (beanFactory == null) {
			ServletContext servletContext = request.getSession().getServletContext();
			beanFactory = WebApplicationContextUtils.getWebApplicationContext(servletContext);
		}
		return beanFactory;
	}
}
