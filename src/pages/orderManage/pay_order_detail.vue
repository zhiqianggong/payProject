<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/payOrder' }">支付订单</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/pay_order_detail' }">支付订单详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>支付订单详情</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="detaliFrom">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付订单号" label-width="130px">
                  <el-input v-model="detaliFrom.payOrderId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户订单号" label-width="130px">
                  <el-input v-model="detaliFrom.mchOrderNo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="代理商ID" label-width="130px">
                  <el-input v-model="detaliFrom.agentId" disabled></el-input>
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
                <el-form-item label="支付金额" label-width="130px">
                  <el-input v-model="detaliFrom.amount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商品标题" label-width="130px">
                  <el-input v-model="detaliFrom.subject" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商品描述" label-width="130px">
                  <el-input v-model="detaliFrom.body" disabled></el-input>
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
                <el-form-item label="支付接口类型" label-width="130px">
                  <el-input v-model="detaliFrom.channelType" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付接口" label-width="130px">
                  <el-input v-model="detaliFrom.channelId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付产品ID" label-width="130px">
                  <el-input v-model="detaliFrom.productId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付通道ID" label-width="130px">
                  <el-input v-model="detaliFrom.status" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付通道账户ID" label-width="130px">
                  <el-input v-model="detaliFrom.passageId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="支付状态" label-width="130px">
                  <el-input v-model="detaliFrom.status" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="渠道商户ID" label-width="130px">
                  <el-input v-model="detaliFrom.mchId" disabled></el-input>
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
                <el-form-item label="渠道数据包" label-width="130px">
                  <el-input v-model="detaliFrom.channelAttach" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户费率" label-width="130px">
                  <el-input v-model="detaliFrom.mchRate" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户入账" label-width="130px">
                  <el-input v-model="detaliFrom.mchIncome" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户代理费率" label-width="130px">
                  <el-input v-model="detaliFrom.agentRate" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户代理利润" label-width="130px">
                  <el-input v-model="detaliFrom.agentProfit" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="总代理商费率" label-width="130px">
                  <el-input v-model="detaliFrom.parentAgentRate" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="总代理商利润" label-width="130px">
                  <el-input v-model="detaliFrom.parentAgentProfit" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游通道费率" label-width="130px">
                  <el-input v-model="detaliFrom.channelRate" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游通道成本" label-width="130px">
                  <el-input v-model="detaliFrom.channelCost" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="平台利润" label-width="130px">
                  <el-input v-model="detaliFrom.platProfit" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="是否退款" label-width="130px">
                  <el-input v-model="detaliFrom.isRefund" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="退款金额" label-width="130px">
                  <el-input v-model="detaliFrom.successRefundAmount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="退款次数" label-width="130px">
                  <el-input v-model="detaliFrom.refundTimes" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游渠道错误码" label-width="130px">
                  <el-input v-model="detaliFrom.errCode" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游渠道错误描述" label-width="130px">
                  <el-input v-model="detaliFrom.errMsg" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="上游渠道扩展参数" label-width="130px">
                  <el-input v-model="detaliFrom.extra" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="产品类型" label-width="130px">
                  <el-input v-model="detaliFrom.productType" disabled></el-input>
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
                <el-form-item label="通知地址" label-width="130px">
                  <el-input v-model="detaliFrom.notifyUrl" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="跳转地址" label-width="130px">
                  <el-input v-model="detaliFrom.returnUrl" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="订单成功时间" label-width="130px">
                  <el-input v-model="detaliFrom.paySuccTime" disabled></el-input>
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
                  <el-button plain @click="$router.push('/payOrder')">返回</el-button>
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
        agentId: 0,
        agentProfit: 0,
        agentRate: 0,
        amount: 0,
        appId: "",
        body: "",
        channelAttach: "",
        channelCost: 0,
        channelId: "",
        channelMchId: "",
        channelOrderNo: "",
        channelRate: 0,
        channelType: "",
        channelUser: "",
        clientIp: "",
        createTime: "",
        currency: "",
        device: "",
        errCode: "",
        errMsg: "",
        expireTime: "",
        extra: "",
        isRefund: "",
        mchId: 0,
        mchIncome: 0,
        mchOrderNo: "",
        mchRate: 0,
        mchType: "",
        notifyUrl: "",
        param1: "",
        param2: "",
        parentAgentId: 0,
        parentAgentProfit: 0,
        parentAgentRate: 0,
        passageAccountId: 0,
        passageId: 0,
        payOrderId: "",
        paySuccTime: "",
        platProfit: 0,
        productId: 0,
        productType: "",
        refundTimes: 0,
        returnUrl: "",
        status: "",
        subject: "",
        successRefundAmount: 0,
        updateTime: "",
      },
      bizItem: [
        {
          name: "余额",
          key: "10",
        },
        {
          name: "代付余额",
          key: "11",
        },
        {
          name: "冻结金额",
          key: "12",
        },
        {
          name: "保证金",
          key: "13",
        },
        {
          name: "支付",
          key: "20",
        },
        {
          name: "代付",
          key: "21",
        },
        {
          name: "线下充值",
          key: "22",
        },
        {
          name: "线上充值",
          key: "23",
        },
      ],
      bizType: [
        {
          name: "支付",
          key: "1",
        },
        {
          name: "提现",
          key: "2",
        },
        {
          name: "调账",
          key: "3",
        },
        {
          name: "充值",
          key: "4",
        },
        {
          name: "差错处理",
          key: "5",
        },
        {
          name: "代付",
          key: "6",
        },
      ],
    };
  },
  methods: {
    getAppDetail() {
      this.axios({
        method: "post",
        url: "/api/pay_order/get",
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
            if (dataList.isRefund == 0) {
              dataList.isRefund = "未退款";
            } else {
              dataList.isRefund = "退款";
            }
            if (dataList.mchType == 1) {
              dataList.mchType = "平台账户";
            } else {
              dataList.mchType = "私有账户";
            }
            if (dataList.productType == 1) {
              dataList.productType = "收款";
            } else {
              dataList.productType = "充值";
            }
            if (dataList.status == 0) {
              dataList.status = "订单生成";
            } else if (dataList.status == 1) {
              dataList.status = "支付中";
            } else if (dataList.status == 2) {
              dataList.status = "支付成功";
            } else if (dataList.status == 3) {
              dataList.status = "业务处理完成";
            } else {
              dataList.status = "已退款";
            }
            this.detaliFrom = {
              agentId: dataList.agentId,
              agentProfit: dataList.agentProfit,
              agentRate: dataList.agentRate,
              amount: dataList.amount,
              appId: dataList.appId,
              body: dataList.body,
              channelAttach: dataList.channelAttach,
              channelCost: dataList.channelCost,
              channelId: dataList.channelId,
              channelMchId: dataList.channelMchId,
              channelOrderNo: dataList.channelOrderNo,
              channelRate: dataList.channelRate,
              channelType: dataList.channelType,
              channelUser: dataList.channelUser,
              clientIp: dataList.clientIp,
              createTime: this.getLocalTime(dataList.createTime),
              currency: dataList.currency,
              device: dataList.device,
              errCode: dataList.errCode,
              errMsg: dataList.errMsg,
              expireTime: this.getLocalTime(dataList.expireTime),
              extra: dataList.extra,
              isRefund: dataList.isRefund,
              mchId: dataList.mchId,
              mchIncome: dataList.mchIncome,
              mchOrderNo: dataList.mchOrderNo,
              mchRate: dataList.mchRate,
              mchType: dataList.mchType,
              notifyUrl: dataList.notifyUrl,
              param1: dataList.param1,
              param2: dataList.param2,
              parentAgentId: dataList.parentAgentId,
              parentAgentProfit: dataList.parentAgentProfit,
              parentAgentRate: dataList.parentAgentRate,
              passageAccountId: dataList.passageAccountId,
              passageId: dataList.passageId,
              payOrderId: dataList.payOrderId,
              paySuccTime: this.getLocalTime(dataList.paySuccTime),
              platProfit: dataList.platProfit,
              productId: dataList.productId,
              productType: dataList.productType,
              refundTimes: this.getLocalTime(dataList.refundTimes),
              returnUrl: dataList.returnUrl,
              status: dataList.status,
              subject: dataList.subject,
              successRefundAmount: dataList.successRefundAmount,
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