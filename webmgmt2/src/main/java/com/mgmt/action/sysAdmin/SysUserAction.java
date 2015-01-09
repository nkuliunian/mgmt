package com.mgmt.action.sysAdmin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mgmt.base.BaseAction;

public class SysUserAction extends BaseAction {
	private static Logger logger = LoggerFactory.getLogger(SysUserAction.class);
	
	public String login() {
		logger.info("accessed action!!!!!");
		return SUCCESS;
	}
}
