package com.mgmt.dao.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="Role")
@Table(name="role")
public class Role {
	
	/**
	 * 角色id
	 */
	private Integer roleId;
	
	/**
	 * 角色名称
	 */
	private String roleName;
	
	/**
	 * 备注
	 */
	private String remark;

	/**
	 * 角色id
	 */
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public Integer getRoleId() {
		return roleId;
	}

	/**
	 * 角色id
	 */
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	/**
	 * 角色名称
	 */
	public String getRoleName() {
		return roleName;
	}

	/**
	 * 角色名称
	 */
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	/**
	 * 备注
	 */
	public String getRemark() {
		return remark;
	}

	/**
	 * 备注
	 */
	public void setRemark(String remark) {
		this.remark = remark;
	}
}
