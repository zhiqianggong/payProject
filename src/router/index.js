import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

 const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login') 
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('@/pages/login/signin') 
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/dashboard/dashboard') 
    },
    {
        path: '/allMec',
        name: 'allMec',
        component: () => import('@/pages/mecManage/allMec')
    },
    {
        path: '/addMec',
        name: 'addMec',
        component: () => import('@/pages/mecManage/mecActionPage/addMec')
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        component: () => import('@/pages/currentUserInfo')
    },
    {
        path: '/google_verify',
        name: 'google_verify',
        component: () => import('@/pages/currentUserInfo/google_verify')
    },
    {
        path: '/changeInfo',
        name: 'changeInfo',
        component: () => import('@/pages/mecManage/mecActionPage/changeMecInfo')
    },
    {
        path: '/app_id_list',
        name: 'app_id_list',
        component: () => import('@/pages/mecManage/mecActionPage/app_id_list')
    },
    {
        path: '/settleAccount',
        name: 'settleAccount',
        component: () => import('@/pages/mecManage/mecActionPage/settleAccount')
    },
    {
        path: '/pay_passage_list',
        name: 'pay_passage_list',
        component: () => import('@/pages/mecManage/mecActionPage/pay_passage_list')
    },
    {
        path: '/agentpay_passage_list',
        name: 'agentpay_passage_list',
        component: () => import('@/pages/mecManage/mecActionPage/agentpay_passage_list')
    },
    {
        path: '/config_mec',
        name: 'config_mec',
        component: () => import('@/pages/mecManage/mecActionPage/config_mec')
    },
    {
        path: '/agentpay_config',
        name: 'agentpay_config',
        component: () => import('@/pages/mecManage/mecActionPage/agentpay_config')
    },
    {
        path: '/fund',
        name: 'fund',
        component: () => import('@/pages/mecManage/fundList/fund')
    },
    {
        path: '/fundDetail',
        name: 'fundDetail',
        component: () => import('@/pages/mecManage/fundList/fundDetail/fundDetail')
    },
    {
        path: '/appManage',
        name: 'appManage',
        component: () => import('@/pages/mecManage/appManage/appManage')
    },
    {
        path: '/appDetail',
        name: 'appDetail',
        component: () => import('@/pages/mecManage/appManage/appDetail')
    },
    {
        path: '/agentList',
        name: 'agentList',
        component: () => import('@/pages/agentManage/agent/agentList')
    },
    {
        path: '/addAgent',
        name: 'addAgent',
        component: () => import('@/pages/agentManage/agent/addAgent')
    },
    {
        path: '/changeAgent',
        name: 'changeAgent',
        component: () => import('@/pages/agentManage/agent/changeAgent')
    },
    {
        path: '/settleAgent',
        name: 'settleAgent',
        component: () => import('@/pages/agentManage/agent/settleAgent')
    },
    {
        path: '/historyList',
        name: 'historyList',
        component: () => import('@/pages/agentManage/agentHistory/historyList')
    },
    {
        path: '/notify',
        name: 'notify',
        component: () => import('@/pages/orderManage/notify')
    },
    {
        path: '/pay_cash_coll_record',
        name: 'pay_cash_coll_record',
        component: () => import('@/pages/orderManage/pay_cash_coll_record')
    },
    {
        path: '/payOrder',
        name: 'payOrder',
        component: () => import('@/pages/orderManage/payOrder')
    },
    {
        path: '/trans_order_detail',
        name: 'trans_order_detail',
        component: () => import('@/pages/orderManage/trans_order_detail')
    },
    {
        path: '/pay_order_detail',
        name: 'pay_order_detail',
        component: () => import('@/pages/orderManage/pay_order_detail')
    },
    {
        path: '/notify_detail',
        name: 'notify_detail',
        component: () => import('@/pages/orderManage/notify_detail')
    },
    {
        path: '/transOrder',
        name: 'transOrder',
        component: () => import('@/pages/orderManage/transOrder')
    },
    {
        path: '/pay_type',
        name: 'pay_type',
        component: () => import('@/pages/payConfig/pay_type')
    },
    {
        path: '/add_type',
        name: 'add_type',
        component: () => import('@/pages/payConfig/add_type')
    },
    {
        path: '/pay_passage_config',
        name: 'pay_passage_config',
        component: () => import('@/pages/payConfig/payPassage/pay_passage_config')
    },
    {
        path: '/sub_account',
        name: 'sub_account',
        component: () => import('@/pages/payConfig/payPassage/sub_account')
    },
    {
        path: '/sub_account_add',
        name: 'sub_account_add',
        component: () => import('@/pages/payConfig/payPassage/sub_account_add')
    },
    {
        path: '/pay_passage_create',
        name: 'pay_passage_create',
        component: () => import('@/pages/payConfig/payPassage/pay_passage_create')
    },
    {
        path: '/sub_account_risk',
        name: 'sub_account_risk',
        component: () => import('@/pages/payConfig/payPassage/sub_account_risk')
    },
    {
        path: '/sub_account_modify',
        name: 'sub_account_modify',
        component: () => import('@/pages/payConfig/payPassage/sub_account_modify')
    },
    {
        path: '/risk_set',
        name: 'risk_set',
        component: () => import('@/pages/payConfig/payPassage/risk_set')
    },
    {
        path: '/port_type_list',
        name: 'port_type_list',
        component: () => import('@/pages/payConfig/portType/port_type_list')
    },
    {
        path: '/add_port_type',
        name: 'add_port_type',
        component: () => import('@/pages/payConfig/portType/add_port_type')
    },
    {
        path: '/add_pay_port',
        name: 'add_pay_port',
        component: () => import('@/pages/payConfig/payPort/add_pay_port')
    },
    {
        path: '/pay_port_list',
        name: 'pay_port_list',
        component: () => import('@/pages/payConfig/payPort/pay_port_list')
    },
    {
        path: '/pay_port_modify',
        name: 'pay_port_modify',
        component: () => import('@/pages/payConfig/payPort/pay_port_modify')
    },
    {
        path: '/port_modify',
        name: 'port_modify',
        component: () => import('@/pages/payConfig/portType/port_modify')
    },
    {
        path: '/add_pay_product',
        name: 'add_pay_product',
        component: () => import('@/pages/payConfig/payProduct/add_pay_product')
    },
    {
        path: '/modify_pay_product',
        name: 'modify_pay_product',
        component: () => import('@/pages/payConfig/payProduct/modify_pau_product')
    },
    {
        path: '/pay_product_list',
        name: 'pay_product_list',
        component: () => import('@/pages/payConfig/payProduct/pay_product_list')
    },
    {
        path: '/user_list',
        name: 'user_list',
        component: () => import('@/pages/systemConfig/userManage/user_list')
    },
    {
        path: '/add_user',
        name: 'add_user',
        component: () => import('@/pages/systemConfig/userManage/add_user')
    },
    {
        path: '/modify_user',
        name: 'modify_user',
        component: () => import('@/pages/systemConfig/userManage/modify_user')
    },
    {
        path: '/payment_order',
        name: 'payment_order',
        component: () => import('@/pages/paymentManage/payment_order')
    },
    {
        path: '/payment_detail',
        name: 'payment_detail',
        component: () => import('@/pages/paymentManage/payment_detail')
    },
    {
        path: '/settlement_audit_list',
        name: 'settlement_audit_list',
        component: () => import('@/pages/settlementManage/settlementAudit/settlement_audit_list')
    },
    {
        path: '/settlement_audit_detail',
        name: 'settlement_audit_detail',
        component: () => import('@/pages/settlementManage/settlementAudit/settlement_audit_detail')
    },
    {
        path: '/audit',
        name: 'audit',
        component: () => import('@/pages/settlementManage/settlementAudit/audit')
    },
    {
        path: '/remit_list',
        name: 'remit_list',
        component: () => import('@/pages/settlementManage/remitManage/remit_list')
    },
    {
        path: '/remit',
        name: 'remit',
        component: () => import('@/pages/settlementManage/remitManage/remit')
    },
    {
        path: '/settlement_records_list',
        name: 'settlement_records_list',
        component: () => import('@/pages/settlementManage/settlementRecords/settlement_records_list')
    },
    {
        path: '/settlement_records_detail',
        name: 'settlement_records_detail',
        component: () => import('@/pages/settlementManage/settlementRecords/settlement_records_detail')
    },
    {
        path: '/settlement_setting_list',
        name: 'settlement_setting_list',
        component: () => import('@/pages/settlementManage/settlementSetting/settlement_setting_list')
    },
    {
        path: '/agent_ranking',
        name: 'agent_ranking',
        component: () => import('@/pages/dataAnalysis/agent_ranking')
    },
    {
        path: '/com_ranking',
        name: 'com_ranking',
        component: () => import('@/pages/dataAnalysis/com_ranking')
    },
    {
        path: '/success_list',
        name: 'success_list',
        component: () => import('@/pages/dataAnalysis/success_ranking')
    },
    {
        path: '/pay_ranking',
        name: 'pay_ranking',
        component: () => import('@/pages/dataAnalysis/pay_ranking')
    },
    {
        path: '/merchant_statement',
        name: 'merchant_statement',
        component: () => import('@/pages/accountManage/merchant_statement')
    },
    {
        path: '/payment_order_list',
        name: 'payment_order_list',
        component: () => import('@/pages/paymentManage/paymentPassage/payment_order_list')
    },
    {
        path: '/payment_audit',
        name: 'payment_audit',
        component: () => import('@/pages/paymentManage/payment_audit')
    },
    {
        path: '/audit_detail',
        name: 'audit_detail',
        component: () => import('@/pages/paymentManage/audit_detail')
    },
    {
        path: '/add_payment',
        name: 'add_payment',
        component: () => import('@/pages/paymentManage/paymentPassage/add_payment')
    },
    {
        path: '/payment_risk_set',
        name: 'payment_risk_set',
        component: () => import('@/pages/paymentManage/paymentPassage/payment_risk_set')
    },
    {
        path: '/payment_sub_account',
        name: 'payment_sub_account',
        component: () => import('@/pages/paymentManage/paymentPassage/payment_sub_account')
    },
    {
        path: '/sub_payment_add',
        name: 'sub_payment_add',
        component: () => import('@/pages/paymentManage/paymentPassage/sub_payment_add')
    },
    {
        path: '/sub_payment_risk',
        name: 'sub_payment_risk',
        component: () => import('@/pages/paymentManage/paymentPassage/sub_payment_risk')
    },
    {
        path: '/sub_payment_modify',
        name: 'sub_payment_modify',
        component: () => import('@/pages/paymentManage/paymentPassage/sub_payment_modify')
    },
    {
        path: '/payment_modify',
        name: 'payment_modify',
        component: () => import('@/pages/paymentManage/paymentPassage/payment_modify')
    },
    {
        path: '/add_oilCard',
        name: 'add_oilCard',
        component: () => import('@/pages/topUpManage/oilCardConfig/add_oilCard')
    },
    {
        path: '/oilCard_modify',
        name: 'oilCard_modify',
        component: () => import('@/pages/topUpManage/oilCardConfig/oilCard_modify')
    },
    {
        path: '/oilCard_order_list',
        name: 'oilCard_order_list',
        component: () => import('@/pages/topUpManage/oilCardConfig/oilCard_order_list')
    },
    {
        path: '/oilCard_risk_set',
        name: 'oilCard_risk_set',
        component: () => import('@/pages/topUpManage/oilCardConfig/oilCard_risk_set')
    },
    {
        path: '/oilCard_detail',
        name: 'oilCard_detail',
        component: () => import('@/pages/topUpManage/oilCardOrder/oilCard_detail')
    },
    {
        path: '/oilCard_order',
        name: 'oilCard_order',
        component: () => import('@/pages/topUpManage/oilCardOrder/oilCard_order')
    },
    {
        path: '/oilCard_sub_account',
        name: 'oilCard_sub_account',
        component: () => import('@/pages/topUpManage/oilCardConfig/oilCard_sub_account')
    },
    {
        path: '/sub_oilCard_add',
        name: 'sub_oilCard_add',
        component: () => import('@/pages/topUpManage/oilCardConfig/sub_oilCard_add')
    },
    {
        path: '/sub_oilCard_modify',
        name: 'sub_oilCard_modify',
        component: () => import('@/pages/topUpManage/oilCardConfig/sub_oilCard_modify')
    },
    {
        path: '/sub_oilCard_risk',
        name: 'sub_oilCard_risk',
        component: () => import('@/pages/topUpManage/oilCardConfig/sub_oilCard_risk')
    },
    {
        path: '/add_telephone',
        name: 'add_telephone',
        component: () => import('@/pages/topUpManage/telephoneConfig/add_telephone')
    },
    {
        path: '/sub_telephone_add',
        name: 'sub_telephone_add',
        component: () => import('@/pages/topUpManage/telephoneConfig/sub_telephone_add')
    },
    {
        path: '/sub_telephone_modify',
        name: 'sub_telephone_modify',
        component: () => import('@/pages/topUpManage/telephoneConfig/sub_telephone_modify')
    },
    {
        path: '/sub_telephone_risk',
        name: 'sub_telephone_risk',
        component: () => import('@/pages/topUpManage/telephoneConfig/sub_telephone_risk')
    },
    {
        path: '/telephone_modify',
        name: 'telephone_modify',
        component: () => import('@/pages/topUpManage/telephoneConfig/telephone_modify')
    },
    {
        path: '/telephone_order_list',
        name: 'telephone_order_list',
        component: () => import('@/pages/topUpManage/telephoneConfig/telephone_order_list')
    },
    {
        path: '/telephone_order',
        name: 'telephone_order',
        component: () => import('@/pages/topUpManage/telephoneOrder/telephone_order')
    },
    {
        path: '/telephone_detail',
        name: 'telephone_detail',
        component: () => import('@/pages/topUpManage/telephoneOrder/telephone_detail')
    },
    {
        path: '/telephone_risk_set',
        name: 'telephone_risk_set',
        component: () => import('@/pages/topUpManage/telephoneConfig/telephone_risk_set')
    },
    {
        path: '/telephone_sub_account',
        name: 'telephone_sub_account',
        component: () => import('@/pages/topUpManage/telephoneConfig/telephone_sub_account')
    },
 ]

 const router = new Router({
    //  mode: 'history',
     routes
 })

 export default router;