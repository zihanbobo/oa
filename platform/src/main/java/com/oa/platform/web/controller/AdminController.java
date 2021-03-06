package com.oa.platform.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 系统管理平台
 * @author Feng
 * @date 2018/08/26
 */
@Controller
@RequestMapping("/admin")
public class AdminController {

    /**
     * 管理平台主界面
     * @return
     */
    @RequestMapping(value = "main", method = {RequestMethod.GET, RequestMethod.POST})
    public String main() {
        return "admin/main";
    }


}
