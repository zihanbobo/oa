/**
 * 管理系统平台
 */
const formStructConfig = {
    formSysUser: {
        id: '',
        name: '',
        nickname: '',
        oldPassword: '',
        password: '',
        passwordOrgi: '',
        typeId: '',
        isHeadhunting: '0',
        memberId: '',
        status: 1,
    },
    formUser: {
        id: '',
        name: '',
        nickname: '',
        oldPassword: '',
        password: '',
        passwordOrgi: '',
        typeId: '',
        isHeadhunting: '0',
        memberId: '',
        status: 1,
    },
    formUserType: {
        id: '',
        name: '',
        desc: '',
    },
    formUserDetail: {
        id: '',
        userId: '',
        desc: '',
        nation: '',
        province: '',
        city: '',
        address: '',
        telephone: '',
        fax: '',
        zip: '',
        msn: '',
        qq: '',
        email: '',
        wechat: '',
        alipay: '',
    },
    formMember: {
        id: '',
        memberTitle: '',
        memberDesc: '',
        minIntegral: '',
        maxIntegral: '',
        minAmount: '',
        maxAmount: '',
    },
    formAuthUserRole: {
        recordId: '',
        userId: '',
        userName: '',
        roleId: '',
        roleName: '',
    },
    formAuthRoleModule: {
        recordId: '',
        roleId: '',
        moduleId: '',
        roleName: '',
        moduleName: '',
        fullModuleName: '',
    },
    formAuthRole: {
        roleId: '',
        roleName: '',
        roleDesc: ''
    },
    formAuthModule: {
        moduleId: '',
        parentId: '',
        moduleName: '',
        moduleDesc: '',
        moduleUrl: '',
        isLeaf: '0',
        fullModuleName: '',
        moduleCode: '',
        order: 0,
        moduleIcon: '',
        moduleStyle: '',
        isMenu: 0,
    },
    formAuthUserRoleModule: {
        userId: '',
        userName: '',
        userNickname: '',
        roleId: '',
        roleName: '',
        moduleId: '',
        parentModuleId: '',
        moduleName: '',
        fullModuleName: ''
    },
    formCategory: {
        recordId: '',
        typeId: '',
        typeName: '',
        name:'',
        desc:'',
        recordTime:'',
        flag:'',
    },
    formCategoryType: {
        recordId: '',
        name:'',
        desc:'',
        recordTime:'',
        flag:''
    },
    formDict: {
        dictId: '',
        dictType: '',
        dictName: '',
        dictRemark: '',
        recordTime: '',
        recordFlag: ''
    },
    formLangConf: {
        recordId: '',
        name: '',
        desc: '',
        recordTime: '',
        updateTime: '',
        updateUserId: '',
        recordFlag: ''
    },
    formNews: {
        recordId: '',
        title: '',
        content: '',
        tags: '',
        remark: '',
        typeId: '',
        isReceipt: '',
        startTime: '',
        endTime: '',
        receiverType: '',
        receiverId: '',
        recordFlag: '',
        typeName: '',
        receiveRoles: [],
        receiveUsers: [],
        receiveUserIds: [],
        sendSms: false,
        sendMail: false,
    },

    formArticle: {
        isEdit: false,
        recordId: '',
        categoryId: '',
        categoryName: '',
        title: '',
        intro: '',
        content: '',
        tags: '',
        source: '',
        authorName: '',
        sourceSite: '',
        creatorId: '',
        creatorName: '',
        updatorId: '',
        updatorName: '',
        updateTime: '',
        recordTime: '',
        commentsCount: 0,
        viewCount: 0,
        likeCount: 0,
        stinkyEgg: 0
    },

    formPartyDues: {
        recordId: '',
        userId: '',
        payTime: '',
        payAmount: '0.00',
        remark: '',
        recordTime: '',
        recordFlag: '',
        payPeriod: '',
        userName: '',
        userNickname: '',
        userSex: '',
        userOrgName: '',
    },

    searchForm: {
        memberUser: {
            name: '',
            nickname: '',
            typeId: '',
            isHeadhunting: '0',
            memberId: '',
            status: '',
        },
        authUserRole: {
            recordId: '',
            userId: '',
            userName: '',
            roleId: '',
            roleName: '',
        },
        authRoleModule: {
            recordId: '',
            roleId: '',
            moduleId: '',
            roleName: '',
            moduleName: '',
            fullModuleName: '',
        },
        authRole: {
            roleId: '',
            roleName: '',
            roleDesc: ''
        },
        authModule: {
            moduleId: '',
            parentId: '',
            moduleName: '',
            moduleDesc: '',
            moduleUrl: '',
            isLeaf: '0',
            fullModuleName: '',
            moduleCode: '',
            order: 0,
            moduleIcon: '',
            moduleStyle: '',
            isMenu: null,
        },
        authUserRoleModule: {
            userId: '',
            userName: '',
            userNickname: '',
            roleId: '',
            roleName: '',
            moduleId: '',
            parentModuleId: '',
            moduleName: '',
            fullModuleName: '',
        },
        category: {
            recordId: '',
            typeId: '',
            typeName: '',
            name:'',
            desc:'',
            recordTime:'',
            flag:'',
        },
        categoryType: {
            recordId: '',
            name:'',
            desc:'',
            recordTime:'',
            flag:''
        },
        dict: {
            dictId: '',
            dictType: '',
            dictName: '',
            dictRemark: '',
            recordTime: '',
            recordFlag: ''
        },
        langConf: {
            recordId: '',
            name: '',
            desc: '',
            recordTime: '',
            updateTime: '',
            updateUserId: '',
            recordFlag: ''
        },
        news: {
            recordId: '',
            title: '',
            content: '',
            tags: '',
            remark: '',
            typeId: '',
            isReceipt: '',
            startTime: '',
            endTime: '',
            receiverType: '',
            receiverId: '',
            recordFlag: '',
            typeName: '',
            isViewed: '',
            viewerId: '',
            allBtnType: 'info', // 全部按钮样式
            viewedBtnType: '', // 已读按钮样式
            unViewedBtnType: '', // 未读按钮样式
        },
        article: {
            recordId: '',
            categoryId: '',
            categoryName: '',
            title: '',
            intro: '',
            content: '',
            tags: '',
            source: '',
            authorName: '',
            sourceSite: '',
            creatorId: '',
            creatorName: '',
            updatorId: '',
            updatorName: '',
            updateTime: '',
            recordTime: '',
            commentsCount: 0,
            viewCount: 0,
            likeCount: 0,
            stinkyEgg: 0
        },
        partyDues: {
            recordId: '',
            userId: '',
            payTime: '',
            payAmount: '0.00',
            remark: '',
            recordTime: '',
            recordFlag: '',
            payPeriod: '',
            userName: '',
            userNickname: '',
            userSex: '',
            userOrgName: '',
            key: '',
        },
    },
    dialogShow: {
        authModule: false,
        role: false,
        roleAdd: false,
        memberUser: false,
        sysUser: false,
        roleModule: false,
        userRole: false,
        userRoleModule: false,
        category: false,
        categoryType: false,
        langConf: false,
        dwjbxx: false,
        ssdzzqk:false,
        leader:false,
        reward:false,
        dept:false,
        news: false,
        newsReceivers: false,
        viewNews: false,
        article: false,
        partyDues: false,
        nddyxxcj:false,
    },
    rules: {
        username: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 64, message: '长度在 3 到 64 个字符之间', trigger: 'blur' }
        ],
        nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 64, message: '长度在 3 到 64 个字符之间', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 128, message: '长度在 6 到 128 个字符之间', trigger: 'blur' }
        ],
        title: [
            { required: true, message: '请填写标题', trigger: 'blur' },
            { min: 3, max: 512, message: '长度在 3 到 512 个字符之间', trigger: 'blur' }
        ],
        content: [
            { required: true, message: '请填写内容', trigger: 'blur' },
            { min: 3, max: 2000, message: '长度在 3 到 2000 个字符之间', trigger: 'blur' }
        ],
        orgCode: [
        	{ required: true, message: '请填写党组织代码' , trigger: 'blur'}
        ],
        orgName: [
        	{ required: true, message: '请填写党组织名称' , trigger: 'blur'}
        ],
    	foundTime: [
        	{ required: true, message: '请选择批准建立党组织日期' , trigger: 'blur'}
        ],
        orgType:[
        	{ required: true, message: '请选择党组织类型' , trigger: 'blur'}
        ],
        orgAddressRelation:[
        	{ required: true, message: '请选择党组织属地关系' , trigger: 'blur'}
        ],
        elctType:[
        	{ required: true, message: '请选择选举方式' , trigger: 'blur'}
        ],
        currentLeaderTime:[
        	{ required: true, message: '请选择本届班子当选日期' , trigger: 'blur'}
        ],
        changeOrgRelationAuth:[
        	{ required: true, message: '请选择转接组织关系权限' , trigger: 'blur'}
        ],
        concatPersion:[
        	{ required: true, message: '请填写党组织联系人' , trigger: 'blur'}
        ],
        orgJobPhone:[
        	{ required: true, message: '请填写党组织办公电话' , trigger: 'blur'}
        ],
        payTime: [
            { required: true, message: '请选择上缴时间', trigger: 'blur'}
        ],
        payPeriod: [
            { required: true, message: '请输入上缴哪季度党费', trigger: 'blur' },
            { min: 3, max: 128, message: '长度在 3 到 128 个字符之间', trigger: 'blur' }
        ],
        payAmount: [
            { required: true, message: '请输入金额', trigger: 'blur' },
        ],
        receiverId: [
            { required: true, message: '请选择接收人', trigger: 'blur' },
        ],
    },
    dateDickerOptions: {

    },
    editableTabsOptions: {
        editableTabsValue: '2',
        editableTabs: [
            {
                title: '首页',
                name: '1',
                content: '首页',
                closable: false,
            },
            {
                title: 'Tab 1',
                name: '2',
                content: 'Tab 1 content',
                closable: true,
            }, {
                title: 'Tab 2',
                name: '3',
                content: 'Tab 2 content',
                closable: true,
            }],
        tabIndex: 2,
        activeName: 'first',
    }
};

let StructMock = Mock.mock('/api/admin/main/struct', {
    'formStructConfig':formStructConfig,
});
