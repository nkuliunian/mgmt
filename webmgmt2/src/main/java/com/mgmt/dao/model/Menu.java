package com.mgmt.dao.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="Menu")
@Table(name="menu")
public class Menu {

	/**
	 * 菜单id
	 */
	private Integer menuId;
	
	/**
	 * 父id
	 */
	private Integer parentId;
	
	/**
	 * 菜单名称
	 */
	private String manuName;
	
	/**
	 * 显示顺序
	 */
	private Integer showOrder;
	
	/**
	 * URL
	 */
	private String url;
	
	/**
	 * 菜单是否出现<br />0：不出现 为内部url 1：出现 默认0
	 */
	private Boolean isVisible;

	/**
	 * 菜单id
	 */
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public Integer getMenuId() {
		return menuId;
	}

	/**
	 * 菜单id
	 */
	public void setMenuId(Integer menuId) {
		this.menuId = menuId;
	}

	/**
	 * 父id
	 */
	public Integer getParentId() {
		return parentId;
	}

	/**
	 * 父id
	 */
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	/**
	 * 菜单名称
	 */
	public String getManuName() {
		return manuName;
	}

	/**
	 * 菜单名称
	 */
	public void setManuName(String manuName) {
		this.manuName = manuName;
	}

	/**
	 * 显示顺序
	 */
	public Integer getShowOrder() {
		return showOrder;
	}

	/**
	 * 显示顺序
	 */
	public void setShowOrder(Integer showOrder) {
		this.showOrder = showOrder;
	}

	/**
	 * URL
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * URL
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * 菜单是否出现<br />0：不出现 为内部url 1：出现 默认0
	 */
	public Boolean getIsVisible() {
		return isVisible;
	}

	/**
	 * 菜单是否出现<br />0：不出现 为内部url 1：出现 默认0
	 */
	public void setIsVisible(Boolean isVisible) {
		this.isVisible = isVisible;
	}
}
