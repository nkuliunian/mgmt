package com.mgmt.dao.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="SysUser")
@Table(name="sys_user")
public class SysUser {
	/**
	 * 成员id
	 */
	private Integer id;
	
	/**
	 * 成员昵称
	 */
	private String nickName;
	
	/**
	 * 密码
	 */
	private String password;
	
	/**
	 * 真实姓名
	 */
	private String realName;
	
	/**
	 * 成员邮箱
	 */
	private String email;
	
	/**
	 * 成员手机号
	 */
	private String mobile;
	
	/**
	 * 成员角色
	 */
	private String roleId;
	
	/**
	 * 创建时间
	 */
	private Date cteateTime;
	
	/**
	 * 更新时间
	 */
	private Date updateTime;
	
	/**
	 * 状态
	 */
	private Short status;

	/**
	 * 成员id
	 */
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public Integer getId() {
		return id;
	}

	/**
	 * 成员id
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * 成员昵称
	 */
	public String getNickName() {
		return nickName;
	}

	/**
	 * 成员昵称
	 */
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	/**
	 * 密码
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * 密码
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * 真实姓名
	 */
	public String getRealName() {
		return realName;
	}

	/**
	 * 真实姓名
	 */
	public void setRealName(String realName) {
		this.realName = realName;
	}

	/**
	 * 成员邮箱
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * 成员邮箱
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * 成员手机号
	 */
	public String getMobile() {
		return mobile;
	}

	/**
	 * 成员手机号
	 */
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	/**
	 * 成员角色
	 */
	public String getRoleId() {
		return roleId;
	}

	/**
	 * 成员角色
	 */
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	/**
	 * 创建时间
	 */
	public Date getCteateTime() {
		return cteateTime;
	}

	/**
	 * 创建时间
	 */
	public void setCteateTime(Date cteateTime) {
		this.cteateTime = cteateTime;
	}

	/**
	 * 更新时间
	 */
	public Date getUpdateTime() {
		return updateTime;
	}

	/**
	 * 更新时间
	 */
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	/**
	 * 状态
	 */
	public Short getStatus() {
		return status;
	}

	/**
	 * 状态
	 */
	public void setStatus(Short status) {
		this.status = status;
	}
}
