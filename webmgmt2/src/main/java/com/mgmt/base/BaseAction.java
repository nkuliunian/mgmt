package com.mgmt.base;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.BeanFactory;

import com.mgmt.dao.model.SysUser;
import com.opensymphony.xwork2.ActionSupport;

public class BaseAction extends ActionSupport implements ServletRequestAware,ServletResponseAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8630050642476432253L;
	
	private static HttpServletRequest request;
	private static HttpServletResponse response;
	
	private static Logger logger = LoggerFactory.getLogger(BaseAction.class);
	protected static String clientTip;
	protected SysUser user;
	protected String path;
	protected String basePath;
	protected BeanFactory factory;

	@Override
	public void setServletResponse(HttpServletResponse response) {
		this.response = response;
	}

	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
		if (clientTip.isEmpty()) {
			clientTip = getIpAddress(request);
		}
		user = setLoginUser(request);
		path = request.getContextPath();
		basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
		factory = BeanHelper.getBeanFactory(request);
	}
	
	/**
	 * 获取真实的IP
	 *
	 * @param request
	 * @return
	 * @author nian.liu
	 * @date 2015-1-15上午12:02:59
	 */
	public static String getIpAddress(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		
		return ip;
	}
	
	public static SysUser setLoginUser(HttpServletRequest request) {
		Object user = request.getSession().getAttribute("userVo");
		return user == null ? null : (SysUser)user;
	}

	public void writeJsonToClient(String msg) {
		response.setContentType("text/json");
		try {
			response.getWriter().write(msg);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			logger.error("网络异常", e);
		}
	}
}
