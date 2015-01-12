DROP TABLE IF EXISTS `sys_user`;

DROP TABLE IF EXISTS `role`;

DROP TABLE IF EXISTS `menu`;

/*==============================================================*/
/* Table: 管理后台成员用户信息表                                             */
/*==============================================================*/
CREATE TABLE `sys_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '成员id',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `nickName` varchar(32) DEFAULT NULL COMMENT '成员昵称，要求唯一',
  `realName` varchar(32) DEFAULT NULL COMMENT '真实姓名',
  `email` varchar(64) DEFAULT NULL COMMENT '成员邮箱',
  `mobile` varchar(11) DEFAULT NULL COMMENT '成员手机号',
  `roleId` int(11) DEFAULT NULL COMMENT '成员角色',
  `cteateTime` datetime DEFAULT NULL COMMENT '创建时间',
  `updateTime` datetime DEFAULT NULL COMMENT '更新时间',
  `status` smallint(6) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`),
  UNIQUE KEY `fk_nickName` (`nickName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='管理后台成员用户信息表';

/*==============================================================*/
/* Table: 角色信息表                                             */
/*==============================================================*/
CREATE TABLE `role` (
  `roleId` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `roleName` varchar(32) DEFAULT NULL COMMENT '角色名称',
  `remark` varchar(1000) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色信息表';

/*==============================================================*/
/* Table: 菜单管理表                                             */
/*==============================================================*/
CREATE TABLE `menu` (
  `menuId` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '菜单id',
  `url` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT 'URL',
  `parentId` int(11) DEFAULT NULL COMMENT '父id',
  `manuName` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '菜单名称',
  `showOrder` int(11) DEFAULT NULL COMMENT '显示顺序',
  `isVisible` tinyint(4) NOT NULL DEFAULT '0' COMMENT '菜单是否出现<br />0：不出现 为内部url 1：出现 默认0',
  PRIMARY KEY (`menuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='菜单管理表';