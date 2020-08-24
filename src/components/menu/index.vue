<template>
  <div id="menu" style="background-color: rgb(38, 45, 64);">
    <div class="header-box">
      <span v-if="isCollapse">管理平台</span>
      <span v-else>小四支付管理平台</span>
      <div class="icons" @click="toggleCollapse">
        <i class="el-icon-s-unfold" style="color: #fff;" v-if="isCollapse"></i>
        <i class="el-icon-s-fold" style="color: #fff;"></i>
      </div>
    </div>
    <el-menu
      text-color="#bfcbd9"
      active-text-color="#409eff"
      :default-active="currentName"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true"
      v-if="menu.length != 0"
    >
      <el-menu-item class="menuTitle" style="padding: 0" index="/dashboard">
        <router-link to="dashboard">
          <i class="el-icon-menu"></i>
          <span>首页</span>
        </router-link>
      </el-menu-item>
      <el-submenu :index="key+''" v-for="(item, key) in menu" :key="key">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item  v-for="(itemSon, keys) in item.list" :key="keys" :index="'/'+itemSon.path">
            <router-link :to="itemSon.path">{{ itemSon.name }}</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      screenHeight: window.innerHeight,
      screenWidth: document.body.clientWidth,
      currentName: "",
      // menu: sessionStorage.menu ? JSON.parse(sessionStorage.menu) : [],
      menu: sessionStorage.menu ? JSON.parse(sessionStorage.menu) : [],
      addressMap: [
        {
          "#/allMec": "/allMec",
          "#/addMec": "/allMec",
          "#/pay_passage_list": "/allMec",
          "#/changeInfo": "/allMec",
          "#/config_mec": "/allMec",
          "#/agentpay_passage_list": "/allMec",
          "#/app_id_list": "/allMec",
          "#/agentpay_config": "/allMec",
          "#/settleAccount": "/allMec",
          "#/dashboard": "/dashboard",
          "#/pay_fees_list": "/allMec",
          "#/pay_fees_config": "/allMec",
          "#/fund": "/fund",
          "#/fundDetail": "/fund",
          "#/appManage": "/appManage",
          "#/appDetail": "/appManage",
          "#/agentList": "/agentList",
          "#/settleAgent": "/agentList",
          "#/changeAgent": "/agentList",
          "#/addAgent": "/agentList",
          "#/historyList": "/historyList",
          "#/payOrder": "/payOrder",
          "#/transOrder": "/transOrder",
          "#/notify": "/notify",
          "#/notify_detail": "/notify",
          "#/pay_cash_coll_record": "/pay_cash_coll_record",
          "#/pay_type": "/pay_type",
          "#/add_type": "/pay_type",
          "#/pay_passage_config": "/pay_passage_config",
          "#/pay_passage_create": "/pay_passage_config",
          "#/sub_account_add": "/pay_passage_config",
          "#/sub_account": "/pay_passage_config",
          "#/risk_set": "/pay_passage_config",
          "#/sub_account_risk": "/pay_passage_config",
          "#/sub_account_modify": "/pay_passage_config",
          "#/port_type_list": "/port_type_list",
          "#/add_port_type": "/port_type_list",
          "#/pay_port_list": "/pay_port_list",
          "#/add_pay_port": "/pay_port_list",
          "#/port_modify": "/port_type_list",
          "#/pay_port_modify": "/pay_port_list",
          "#/add_pay_product": "/pay_product_list",
          "#/modify_pay_product": "/pay_product_list",
          "#/pay_product_list": "/pay_product_list",
          "#/user_list": "/user_list",
          "#/add_user": "/user_list",
          "#/modify_user": "/user_list",
          "#/payment_order": "/payment_order",
          "#/payment_detail": "/payment_order",
          "#/pay_order_detail": "/payOrder",
          "#/trans_order_detail": "/transOrder",
          "#/settlement_audit_list": "/settlement_audit_list",
          "#/settlement_audit_detail": "/settlement_audit_list",
          "#/audit": "/settlement_audit_list",
          "#/remit_list": "/remit_list",
          "#/remit": "/remit_list",
          "#/settlement_records_list": "/settlement_records_list",
          "#/settlement_records_detail": "/settlement_records_list",
          "#/agent_ranking": "/agent_ranking",
          "#/com_ranking": "/com_ranking",
          "#/success_list": "/success_list",
          "#/pay_ranking": "/pay_ranking",
          "#/settlement_setting_list": "/settlement_setting_list",
          "#/merchant_statement": "/merchant_statement",
          "#/payment_order_list": "/payment_order_list",
          "#/add_payment": "/payment_order_list",
          "#/payment_risk_set": "/payment_order_list",
          "#/payment_sub_account": "/payment_order_list",
          "#/sub_payment_add": "/payment_order_list",
          "#/sub_payment_risk": "/payment_order_list",
          "#/sub_payment_modify": "/payment_order_list",
          "#/payment_modify": "/payment_order_list",
          "#/payment_audit": "/payment_audit",
          "#/audit_detail": "/audit_detail",
          "#/add_oilCard": "/oilCard_order_list",
          "#/oilCard_order_list": "/oilCard_order_list",
          "#/oilCard_modify": "/oilCard_order_list",
          "#/oilCard_risk_set": "/oilCard_order_list",
          "#/oilCard_sub_account": "/oilCard_order_list",
          "#/sub_oilCard_add": "/oilCard_order_list",
          "#/sub_oilCard_modify": "/oilCard_order_list",
          "#/sub_oilCard_risk": "/oilCard_order_list",
          "#/add_telephone": "/telephone_order_list",
          "#/sub_telephone_add": "/telephone_order_list",
          "#/sub_telephone_modify": "/telephone_order_list",
          "#/sub_telephone_risk": "/telephone_order_list",
          "#/telephone_modify": "/telephone_order_list",
          "#/telephone_order_list": "/telephone_order_list",
          "#/telephone_risk_set": "/telephone_order_list",
          "#/telephone_sub_account": "/telephone_order_list",
          "#/oilCard_order": "/oilCard_order",
          "#/oilCard_detail": "/oilCard_order",
          "#/telephone_detail": "/telephone_order",
          "#/telephone_order": "/telephone_order",
          "#/role_list": "/role_list",
          "#/change_role": "/role_list",
          "#/authority_manage": "/role_list",
          "#/resource_add": "/resource_manage",
          "#/resource_manage": "/resource_manage",
          "#/syslog": "/syslog",
          "#/resource_detail": "/resource_manage",
          "#/resource_modify": "/resource_manage",
        },
      ],
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    screenWidthShowMenu() {
      if (this.screenWidth < 768) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    },
    getHashAddress(hashAddress) {
      let address = hashAddress.lastIndexOf("?");
      if (address == -1) {
        return hashAddress;
      } else {
        return hashAddress.substring(0, address);
      }
    },
    getCurrentName() {
      let address = this.getHashAddress(window.location.hash);
      this.currentName = this.addressMap[0][address];
    },
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
        that.screenWidthShowMenu();
      })();
    };
    var menuList = document.getElementsByClassName("el-menu-vertical-demo");
    menuList[0].style.height = document.body.clientHeight - 60 + "px";
  },
  created() {
    this.getCurrentName();
  },
};
</script>

<style>
.el-menu {
  border: none;
  background-color: #262d40 !important;
}

.el-menu a {
  text-decoration: none;
  font-weight: normal;
  color: #c5cfe9;
  font-size: 13px;
}

.header-box {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  position: relative;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
  /* max-height: 600px; */
  overflow-x: hidden;
  overflow-y: auto;
}

.el-menu-vertical-demo::-webkit-scrollbar {
  width: 6px;
  height: 1px;
}

.el-menu-vertical-demo::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
  background: #505a77;
}

.el-menu-vertical-demo::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
  border-radius: 10px;
  background: #262d40;
}

.el-header,
.el-footer {
  background-color: #262d40;
  color: #333;
  line-height: 60px;
  padding: 0 !important;
}

.el-header {
  position: relative;
}

.el-header i {
  font-size: 24px;
}

.right-box {
  position: absolute;
  top: 0;
  right: 20px;
  color: #fff;
}

.right-box .img {
  width: 19px;
  vertical-align: middle;
}

.el-aside {
  background-color: rgb(61, 61, 61);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f0f2f5;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.icons {
  width: 25px;
  height: 60px;
  line-height: 68px;
  padding: 0 20px;
  text-align: center;
  position: absolute;
  top: 0;
  right: -67px;
  z-index: 1;
}

.icons:hover {
  background: rgb(42, 38, 64);
  transition: 1s;
  cursor: pointer;
}

#menu .el-submenu .el-menu-item {
  padding: 0 !important;
}

#menu .el-submenu .el-menu-item a {
  display: block;
  padding: 0 45px 0 40px;
  font-weight: normal;
  color: #ed5565;
  font-size: 13px;
}

#menu .el-submenu__title {
  font-weight: normal;
  color: #c5cfe9;
  font-size: 13px;
}

#menu .el-submenu__title:focus,
#menu .el-submenu__title:hover {
  outline: 0;
  background-color: #2f3648;
}

#menu .el-menu-item:focus,
#menu .el-menu-item:hover {
  outline: 0;
  background-color: #2f3648;
}

#menu .el-menu {
  border-right: 0;
}

#menu .el-menu-item:hover > a {
  color: #fff;
}

#menu .is-active.el-menu-item {
  background-color: #2f3648;
}

#menu .el-menu-item-group__title {
  padding: 0;
}

#menu .el-submenu.is-active .el-menu-item {
  border-left: 3px solid #ed5565;
  transition: border .5s ease, background-color .5s ease;
}

#menu .is-active .el-submenu__title {
  background-color: #373d4e;
}

#menu .menuTitle a {
  padding-left: 20px;
  display: block;
}

#menu .el-submenu.is-active .el-submenu__title {
  color: #ffffff !important;
}

#menu .el-menu-item.is-active > a {
  color: #ffffff !important;
}
</style>