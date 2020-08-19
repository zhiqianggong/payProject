<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/transOrder' }">转账订单</el-breadcrumb-item>
      <el-breadcrumb-item>转账订单详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>转账订单详情</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="detaliFrom">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="转账订单号" label-width="130px">
                  <el-input v-model="detaliFrom.transOrderId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户订单号" label-width="130px">
                  <el-input v-model="detaliFrom.mchTransNo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户ID" label-width="130px">
                  <el-input v-model="detaliFrom.mchId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="应用ID" label-width="130px">
                  <el-input v-model="detaliFrom.appId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付接口类型" label-width="130px">
                  <el-input v-model="detaliFrom.channelType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付接口" label-width="130px">
                  <el-input v-model="detaliFrom.channelId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付通道ID" label-width="130px">
                  <el-input v-model="detaliFrom.passageId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付通道账户ID" label-width="130px">
                  <el-input v-model="detaliFrom.passageAccountId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="转账金额" label-width="130px">
                  <el-input v-model="detaliFrom.amount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="转账状态" label-width="130px">
                  <el-input v-model="detaliFrom.status" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="转账结果" label-width="130px">
                  <el-input v-model="detaliFrom.result" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="备注" label-width="130px">
                  <el-input v-model="detaliFrom.remarkInfo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="设备" label-width="130px">
                  <el-input v-model="detaliFrom.device" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="客户端IP" label-width="130px">
                  <el-input v-model="detaliFrom.clientIp" disabled></el-input>
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
                <el-form-item label="联行号" label-width="130px">
                  <el-input v-model="detaliFrom.bankType" disabled></el-input>
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
                <el-form-item label="渠道商户ID" label-width="130px">
                  <el-input v-model="detaliFrom.channelMchId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="渠道用户" label-width="130px">
                  <el-input v-model="detaliFrom.channelUser" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="渠道订单号" label-width="130px">
                  <el-input v-model="detaliFrom.channelOrderNo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游通道费率" label-width="130px">
                  <el-input v-model="detaliFrom.channelRate" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游通道费用" label-width="130px">
                  <el-input v-model="detaliFrom.channelFeeEvery" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游通道成本" label-width="130px">
                  <el-input v-model="detaliFrom.channelCost" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游渠道错误码" label-width="130px">
                  <el-input v-model="detaliFrom.channelErrCode" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游渠道错误描述" label-width="130px">
                  <el-input v-model="detaliFrom.channelErrMsg" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游渠道扩展参数" label-width="130px">
                  <el-input v-model="detaliFrom.extra" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="通知地址" label-width="130px">
                  <el-input v-model="detaliFrom.notifyUrl" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="扩展参数1" label-width="130px">
                  <el-input v-model="detaliFrom.param1" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="扩展参数2" label-width="130px">
                  <el-input v-model="detaliFrom.param2" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="订单成功时间" label-width="130px">
                  <el-input v-model="detaliFrom.transSuccTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="订单失效时间" label-width="130px">
                  <el-input v-model="detaliFrom.expireTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="创建时间" label-width="130px">
                  <el-input v-model="detaliFrom.createTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="更新时间" label-width="130px">
                  <el-input v-model="detaliFrom.updateTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button plain @click="$router.push('/transOrder')">返回</el-button>
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
      detaliFrom: {
        accountAttr: "",
        accountName: "",
        accountNo: "",
        accountType: "",
        amount: 0,
        appId: "",
        bankCode: "",
        bankName: "",
        bankType: 0,
        channelCost: 0,
        channelErrCode: "",
        channelErrMsg: "",
        channelFeeEvery: 0,
        channelId: "",
        channelMchId: "",
        channelOrderNo: "",
        channelRate: 0,
        channelType: "",
        channelUser: "",
        city: "",
        clientIp: "",
        createTime: "",
        currency: "",
        device: "",
        expireTime: "",
        extra: "",
        mchId: 0,
        mchTransNo: "",
        mchType: "",
        notifyUrl: "",
        param1: "",
        param2: "",
        passageAccountId: 0,
        passageId: 0,
        province: "",
        remarkInfo: "",
        result: "",
        status: "",
        transOrderId: "",
        transSuccTime: "",
        updateTime: "",
      },
    };
  },
  methods: {
    getAppDetail() {
      this.axios({
        method: "post",
        url: "/api/agentpay/get",
        data: {
          body: {
            payOrderId: this.$route.query.id,
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
            if (dataList.accountAttr == 0) {
              dataList.accountAttr = "对私";
            } else {
              dataList.accountAttr = "对公";
            }
            if (dataList.result == 0) {
              dataList.result = "不确认结果";
            } else if (dataList.result == 1) {
              dataList.result = "等待手动处理";
            } else if (dataList.result == 2) {
              dataList.status = "确认成功";
            }
            if (dataList.result == 3) {
              dataList.result = "确认失败";
            }
            if (dataList.status == 0) {
              dataList.status = "订单生成";
            } else if (dataList.status == 1) {
              dataList.status = "转账中";
            } else if (dataList.status == 2) {
              dataList.status = "转账成功";
            } else if (dataList.status == 3) {
              dataList.status = "转账失败";
            } else {
              dataList.status = "处理完成";
            }
            this.detaliFrom = {
              accountAttr: dataList.accountAttr,
              accountName: dataList.accountName,
              accountNo: dataList.accountNo,
              accountType: dataList.accountType,
              amount: dataList.amount,
              appId: dataList.appId,
              bankCode: dataList.bankCode,
              bankName: dataList.bankName,
              bankType: dataList.bankType,
              channelCost: dataList.channelCost,
              channelErrCode: dataList.channelErrCode,
              channelErrMsg: dataList.channelErrMsg,
              channelFeeEvery: dataList.channelFeeEvery,
              channelId: dataList.channelId,
              channelMchId: dataList.channelMchId,
              channelOrderNo: dataList.channelOrderNo,
              channelRate: dataList.channelRate,
              channelType: dataList.channelType,
              channelUser: dataList.channelUser,
              city: dataList.city,
              clientIp: dataList.clientIp,
              createTime: this.getLocalTime(dataList.createTime),
              currency: dataList.currency,
              device: dataList.device,
              expireTime: this.getLocalTime(dataList.expireTime),
              extra: dataList.extra,
              mchId: dataList.mchId,
              mchTransNo: dataList.mchTransNo,
              mchType: dataList.mchType,
              notifyUrl: dataList.notifyUrl,
              param1: dataList.param1,
              param2: dataList.param2,
              passageAccountId: dataList.passageAccountId,
              passageId: dataList.passageId,
              province: dataList.province,
              remarkInfo: dataList.remarkInfo,
              result: dataList.result,
              status: dataList.status,
              transOrderId: dataList.transOrderId,
              transSuccTime: this.getLocalTime(dataList.transSuccTime),
              updateTime: this.getLocalTime(dataList.updateTime)
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