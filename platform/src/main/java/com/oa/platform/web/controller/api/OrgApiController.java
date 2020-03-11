package com.oa.platform.web.controller.api;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * 党委组织
 * @author 俞灶森
 *
 */

import com.oa.platform.biz.OrgBiz;
import com.oa.platform.common.ResultVo;
import com.oa.platform.common.StatusCode;
import com.oa.platform.entity.Organization;
import com.oa.platform.entity.User;
import com.oa.platform.web.controller.BaseController;
@RestController
@RequestMapping("/api/org")
public class OrgApiController extends BaseController{
	
	@Autowired
	private OrgBiz orgBiz;
	/**
	 * 党委组织列表
	 * @return
	 */
	@GetMapping("getOrgList")
	public ResultVo getOrgList() {
		User user = getUserOfSecurity();
		List<Organization> result = orgBiz.getOrgList(user.getUserId());
		return getSuccessResultVo(result);
	}
	/**
	 * 党组织操作
	 * @param organization 组织信息
	 * @return
	 */
	@PostMapping("orgOpreate")
	public ResultVo orgOpreate(Organization organization) {
		User user = getUserOfSecurity();
		ResultVo resultVo = null;
		organization.setCreateBy(user.getUserName());
		organization.setUpdateBy(user.getUserName());

		if(organization.getOrgId() == null || "".equals(organization.getOrgId())) {
			orgBiz.orgAdd(organization);
			resultVo = getSuccessResultVo(null);
		}else {
			orgBiz.orgEdit(organization);
			resultVo = getSuccessResultVo(null);
		}
		
		
		return resultVo;
	}
}