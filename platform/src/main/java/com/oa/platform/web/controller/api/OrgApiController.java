package com.oa.platform.web.controller.api;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
/**
 * 党委组织
 * @author 俞灶森
 *
 */

import com.oa.platform.biz.OrgBiz;
import com.oa.platform.common.ResultVo;
import com.oa.platform.common.StatusCode;
import com.oa.platform.entity.OrgDeptDetail;
import com.oa.platform.entity.OrgLeaderDetail;
import com.oa.platform.entity.OrgRewardDetail;
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
	 * 获取上级党组织列表
	 * @return
	 */
	@GetMapping("getUpperOrgList")
	public ResultVo getUpperOrgList() {
		List<Organization> result = orgBiz.getUpperOrgList();
		return getSuccessResultVo(result);
	}
	/**
	 * 获取组织详情
	 * @param orgId
	 * @return
	 */
	@GetMapping("getOrgDetailById")
	public ResultVo getOrgDetailById(String orgId) {
		List<Organization> result = orgBiz.getOrgDetailById(orgId);
		if(result == null || result.size() == 0) {
			return getSuccessResultVo(null);
		}
		return getSuccessResultVo(result.get(0));
	}
	/**
	 * 党组织操作
	 * @param organization 组织信息
	 * @return
	 */
	@PostMapping("orgOpreate")
	public ResultVo orgOpreate(Organization organization,
			@RequestParam(value = "deptDetails")List<OrgDeptDetail> deptDetails,
			@RequestParam(value = "rewardDetails")List<OrgRewardDetail> rewardDetails,
			@RequestParam(value = "leaderDetails")List<OrgLeaderDetail> leaderDetails) {
		User user = getUserOfSecurity();
		ResultVo resultVo = null;
		organization.setCreateBy(user.getUserName());
		organization.setUpdateBy(user.getUserName());
		if(organization.getOrgId() == null || "".equals(organization.getOrgId())) {
			orgBiz.orgAdd(organization,deptDetails,rewardDetails,leaderDetails);
			resultVo = getSuccessResultVo(null);
		}else {
			orgBiz.orgEdit(organization,deptDetails,rewardDetails,leaderDetails);
			resultVo = getSuccessResultVo(null);
		}
		return resultVo;
	}
	/**
	 * 删除指定组织
	 * @param orgId
	 * @return
	 */
	@PostMapping("delOrg")
	public ResultVo delOrg(String orgId) {
		orgBiz.orgDel(orgId);
		return getSuccessResultVo(null);
	}
	/**
	 * 获取所属党组织情况信息
	 * @return
	 */
	@GetMapping("getDeptList")
	public ResultVo getDeptList() {
		User user = getUserOfSecurity();
		List<Organization> result = orgBiz.getDeptList(user.getUserId());
		return getSuccessResultVo(result);
	}
	/**
	 * 根据组织id获取班子成员
	 * @param org_id
	 * @return
	 */
	@GetMapping("getOrgLeaderList")
	public ResultVo getOrgLeaderList(String orgId) {
		List<OrgLeaderDetail> result = orgBiz.getOrgLeaderList(orgId);
		return getSuccessResultVo(result);
	}
	/**
	 * 班子成员数据提交
	 * @param orgLeaderDetails
	 * @param orgId
	 * @return
	 */
	@PostMapping("orgLeaderDetailSubmit")
	public ResultVo orgLeaderDetailSubmit(List<OrgLeaderDetail> orgLeaderDetails,String orgId) {
		User user = getUserOfSecurity();
		orgBiz.orgLeaderDetailSubmit(orgLeaderDetails,user.getUserName(),orgId);
		return getSuccessResultVo(null);
	}
}
