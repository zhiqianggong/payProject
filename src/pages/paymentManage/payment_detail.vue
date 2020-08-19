<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/payment_order' }">代付订单列表</el-breadcrumb-item>
      <el-breadcrumb-item>代付订单详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>代付订单详情</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="detaliFrom">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="代付订单号" label-width="130px">
                  <el-input v-model="detaliFrom.agentpayOrderId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户单号" label-width="130px">
                  <el-input v-model="detaliFrom.mchOrderNo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="代付批次号" label-width="130px">
                  <el-input v-model="detaliFrom.parentAgentId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户ID" label-width="130px">
                  <el-input v-model="detaliFrom.mchId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="代付金额(元)" label-width="130px">
                  <el-input v-model="detaliFrom.amount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="代付手续费(元)" label-width="130px">
                  <el-input v-model="detaliFrom.fee"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="打款金额(元)" label-width="130px">
                  <el-input v-model="detaliFrom.remitAmount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="扣减金额(元)" label-width="130px">
                  <el-input v-model="detaliFrom.subAmount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="通道ID" label-width="130px">
                  <el-input v-model="detaliFrom.passageId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="账户属性" label-width="130px">
                  <el-input v-model="detaliFrom.accountAttr" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="账户名" label-width="130px">
                  <el-input v-model="detaliFrom.accountName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="账户号(银行卡号)" label-width="130px">
                  <el-input v-model="detaliFrom.accountNo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="转账订单号" label-width="130px">
                  <el-input v-model="detaliFrom.transOrderId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="状态" label-width="130px">
                  <el-input v-model="detaliFrom.status" disabled></el-input>
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
                <el-form-item label="开户行名称" label-width="130px">
                  <el-input v-model="detaliFrom.bankName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="开户网点名称" label-width="130px">
                  <el-input v-model="detaliFrom.bankNetName" disabled></el-input>
                </el-form-item>
              </el-col>
              <!-- <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="联行号" label-width="130px">
                  <el-input v-model="detaliFrom.updateTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="银行代码" label-width="130px">
                  <el-input v-model="detaliFrom.updateTime" disabled></el-input>
                </el-form-item>
              </el-col> -->
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="客户端IP" label-width="130px">
                  <el-input v-model="detaliFrom.clientIp" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="设备" label-width="130px">
                  <el-input v-model="detaliFrom.device" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="通知地址" label-width="130px">
                  <el-input v-model="detaliFrom.notifyUrl" disabled></el-input>
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
                <el-form-item label="更新时间" label-width="130px">
                  <el-input v-model="detaliFrom.updateTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button plain @click="$router.push('/payment_order')">返回</el-button>
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
        agentId: 0,
        agentpayChannel: "",
        agentpayOrderId: "",
        amount: 0,
        bankName: "",
        bankNetName: "",
        batchNo: "",
        channelId: "",
        city: "",
        clientIp: "",
        createTime: "",
        device: "",
        extra: "",
        fee: 0,
        mchId: 0,
        mchOrderNo: "",
        mchType: "",
        notifyUrl: "",
        parentAgentId: 0,
        passageAccountId: 0,
        passageId: 0,
        province: "",
        remark: "",
        remitAmount: 0,
        status: "",
        subAmount: 0,
        subAmountFrom: "",
        transMsg: "",
        transOrderId: "",
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
        url: "/api/agentpay/get",
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
            if (res.data.body.status == 0) {
              res.data.body.status = "待处理";
            } else if (res.data.body.status == 1) {
              res.data.body.status = "处理中";
            } else if (res.data.body.status == 2) {
              res.data.body.status = "成功";
            } else if (res.data.body.status == 3) {
              res.data.body.status = "失败";
            } else {
              res.data.body.status = "审核失败";
            }
            this.detaliFrom = {
              accountAttr:
                res.data.body.accountAttr == 1 ? "对私" : "对公,默认对私",
              accountName: res.data.body.accountName,
              accountNo: res.data.body.accountNo,
              accountType: res.data.body.accountType,
              agentId: res.data.body.agentId,
              agentpayChannel: res.data.body.agentId,
              agentpayOrderId: res.data.body.agentpayOrderId,
              amount: res.data.body.amount,
              bankName: res.data.body.bankName,
              bankNetName: res.data.body.bankNetName,
              batchNo: res.data.body.batchNo,
              channelId: res.data.body.channelId,
              city: res.data.body.city,
              clientIp: res.data.body.clientIp,
              createTime: this.getLocalTime(res.data.body.createTime),
              device: res.data.body.device,
              extra: res.data.body.extra,
              fee: res.data.body.fee,
              mchId: res.data.body.mchId,
              mchOrderNo: res.data.body.mchOrderNo,
              mchType: res.data.body.mchType,
              notifyUrl: res.data.body.notifyUrl,
              parentAgentId: res.data.body.parentAgentId,
              passageAccountId: res.data.body.passageAccountId,
              passageId: res.data.body.passageId,
              province: res.data.body.province,
              remark: res.data.body.remark,
              remitAmount: res.data.body.remitAmount,
              status: res.data.body.status,
              subAmount: res.data.body.subAmount,
              subAmountFrom: res.data.body.subAmountFrom,
              transMsg: res.data.body.transMsg,
              transOrderId: res.data.body.transOrderId,
              updateTime: this.getLocalTime(res.data.body.updateTime)
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