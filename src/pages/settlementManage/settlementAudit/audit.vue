<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/settlement_audit_list' }">结算审核列表</el-breadcrumb-item>
      <el-breadcrumb-item>结算审核</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>结算审核</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="detaliFrom">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="结算订单号" label-width="130px">
                  <el-input v-model="detaliFrom.id" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="结算日期" label-width="130px">
                  <el-input v-model="detaliFrom.settDate" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="结算商类型" label-width="130px">
                  <el-input v-model="detaliFrom.infoType" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="结算商ID" label-width="130px">
                  <el-input v-model="detaliFrom.infoId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="结算类型" label-width="130px">
                  <el-input v-model="detaliFrom.settType" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="结算金额" label-width="130px">
                  <el-input v-model="detaliFrom.settAmount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="打款金额" label-width="130px">
                  <el-input v-model="detaliFrom.remitAmount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="手续费" label-width="130px">
                  <el-input v-model="detaliFrom.settFee" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="账户属性" label-width="130px">
                  <el-input v-model="detaliFrom.accountAttr" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="账户类型" label-width="130px">
                  <el-input v-model="detaliFrom.accountType" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="开户行名称" label-width="130px">
                  <el-input v-model="detaliFrom.bankName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="开户网点名称" label-width="130px">
                  <el-input v-model="detaliFrom.bankNetName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="账户名" label-width="130px">
                  <el-input v-model="detaliFrom.accountName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="账户号" label-width="130px">
                  <el-input v-model="detaliFrom.accountNo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="开户行所在省" label-width="130px">
                  <el-input v-model="detaliFrom.province" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="开户行所在市" label-width="130px">
                  <el-input v-model="detaliFrom.city" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="结算状态" label-width="130px">
                  <el-input v-model="detaliFrom.settStatus" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="操作人ID" label-width="130px">
                  <el-input v-model="detaliFrom.operatorId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="备注" label-width="130px">
                  <el-input v-model="detaliFrom.remark" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="创建时间" label-width="130px">
                  <el-input v-model="detaliFrom.createTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="审核备注" label-width="130px">
                  <el-input v-model="audit"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button type="success" @click="submit(2)">审核通过</el-button>
                  <el-button type="danger" @click="submit(3)">审核不通过</el-button>
                  <el-button plain @click="$router.push('/settlement_audit_list')">返回</el-button>
                </el-form-item>
              </el-col>
            </el-form>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audit: "",
      detaliFrom: {
        accountAttr: "",
        accountName: "",
        accountNo: "",
        accountType: "",
        bankName: "",
        bankNetName: "",
        city: "",
        createTime: "",
        id: 0,
        infoId: 0,
        infoType: "",
        operatorId: 0,
        province: "",
        remark: "",
        remitAmount: 0,
        remitRemark: "",
        settAmount: 0,
        settDate: "",
        settFee: 0,
        settOrderId: "",
        settStatus: "",
        settType: "",
        transMsg: "",
        transOrderId: "",
        updateTime: "",
      },
    };
  },
  methods: {
    submit(status) {
      this.axios({
        method: "post",
        url: "/api/sett/audit",
        data: {
          body: {
            id: this.$route.query.id,
            remark: this.audit,
            status: status,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          this.messageInfo(res);
          if (res.data.code == 200) {
            this.audit = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAppDetail() {
      this.axios({
        method: "post",
        url: "/api/sett/get",
        data: {
          body: {
            id: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            let dataList = res.data.body;
            if (dataList.accountType == 1) {
              dataList.accountType = "银行卡转账";
            } else if (dataList.accountType == 2) {
              dataList.accountType = "微信转账";
            } else {
              dataList.accountType = "支付宝转账";
            }

            if (dataList.accountAttr == 1) {
              dataList.accountAttr = "对私";
            } else {
              dataList.accountAttr = "对公";
            }

            if (dataList.infoType == 1) {
              dataList.infoType = "代理商";
            } else {
              dataList.infoType = "商户";
            }

            if (dataList.settType == 1) {
              dataList.settType = "手工结算";
            } else {
              dataList.settType = "自动结算";
            }

            if (dataList.settStatus == 1) {
              dataList.settStatus = "等待审核";
            } else if (dataList.settStatus == 2) {
              dataList.settStatus = "已审核";
            } else if (dataList.settStatus == 3) {
              dataList.settStatus = "审核不通过";
            } else if (dataList.settStatus == 4) {
              dataList.settStatus = "打款中";
            } else if (dataList.settStatus == 5) {
              dataList.settStatus = "打款成功";
            } else {
              dataList.settStatus = "打款失败";
            }

            this.detaliFrom = {
              accountAttr: dataList.accountAttr,
              accountName: dataList.accountName,
              accountNo: dataList.accountNo,
              accountType: dataList.accountType,
              bankName: dataList.bankName,
              bankNetName: dataList.bankNetName,
              city: dataList.city,
              createTime: this.getLocalTime(dataList.createTime),
              id: dataList.id,
              infoId: dataList.infoId,
              infoType: dataList.infoType,
              operatorId: dataList.operatorId,
              province: dataList.province,
              remark: dataList.remark,
              remitAmount: dataList.remitAmount,
              remitRemark: dataList.remitRemark,
              settAmount: dataList.settAmount,
              settDate: this.getLocalTime(dataList.settDate),
              settFee: dataList.settFee,
              settOrderId: dataList.settOrderId,
              settStatus: dataList.settStatus,
              settType: dataList.settType,
              transMsg: dataList.transMsg,
              transOrderId: dataList.transOrderId,
              updateTime: this.getLocalTime(dataList.updateTime),
            };
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getAppDetail();
  },
};
</script>

<style>
</style>