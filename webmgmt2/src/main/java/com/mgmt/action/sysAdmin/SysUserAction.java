package com.mgmt.action.sysAdmin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mgmt.base.BaseAction;
import com.mgmt.dao.model.SysUser;
import com.mgmt.service.IUserService;

public class SysUserAction extends BaseAction {
	/**
	 * 
	 */
	private static final long serialVersionUID = -5824742932655661552L;
	private static Logger logger = LoggerFactory.getLogger(SysUserAction.class);
	
	/**
	 * 登录
	 *
	 * @return
	 * @author nian.liu
	 * @date 2015-1-19下午10:39:50
	 */
	public String login() {
		String nickName = request.getAttribute("nickName").toString();
		String password = request.getAttribute("password").toString();
		IUserService userService = (IUserService) factory.getBean("userService");
		
		SysUser user = userService.getUserByNickName(nickName);
		if (user != null && password.equals(user.getPassword())) {
			request.getSession().setAttribute("userVo", user);
			logger.info(nickName + "登录成功！");
			writeJsonToClient("登录成功");
		} else {
			writeJsonToClient("用户名或密码有误");
		}
		return null;
	}
	
	/**
	 * 主页
	 *
	 * @return
	 * @author nian.liu
	 * @date 2015-1-19下午11:19:12
	 */
	public String index() {
		
		
		return SUCCESS;
	}
}
