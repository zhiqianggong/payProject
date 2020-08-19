<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/fund' }">资金账户流水</el-breadcrumb-item>
      <el-breadcrumb-item>资金流水详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>资金流水详情</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="detaliFrom">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户ID" label-width="130px">
                  <el-input v-model="detaliFrom.mchId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="变更金额" label-width="130px">
                  <el-input v-model="detaliFrom.amount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="变更前账户余额" label-width="130px">
                  <el-input v-model="detaliFrom.balance" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="资金变动方向" label-width="130px">
                  <el-input v-model="detaliFrom.fundDirection" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="订单金额" label-width="130px">
                  <el-input v-model="detaliFrom.orderAmount" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="平台利润" label-width="130px">
                  <el-input v-model="detaliFrom.platProfit"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="总代理商ID" label-width="130px">
                  <el-input v-model="detaliFrom.agentId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="总代理商利润" label-width="130px">
                  <el-input v-model="detaliFrom.parentAgentProfit" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户代理ID" label-width="130px">
                  <el-input v-model="detaliFrom.parentAgentId" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="商户代理利润" label-width="130px">
                  <el-input v-model="detaliFrom.agentProfit" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="业务类型" label-width="130px">
                  <el-input v-model="detaliFrom.bizType" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="业务类目" label-width="130px">
                  <el-input v-model="detaliFrom.bizItem" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="渠道成本(元)" label-width="130px">
                  <el-input v-model="detaliFrom.channelCost" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="渠道订单号" label-width="130px">
                  <el-input v-model="detaliFrom.channelOrderNo" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="业务订单" label-width="130px">
                  <el-input v-model="detaliFrom.orderId" disabled></el-input>
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
                <el-form-item label="修改时间" label-width="130px">
                  <el-input v-model="detaliFrom.updateTime" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button plain @click="$router.push('/fund')">返回</el-button>
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
        mchId: null,
        amount: null,
        balance: null,
        fundDirection: null,
        orderAmount: null,
        platProfit: null,
        agentId: null,
        parentAgentProfit: null,
        parentAgentId: null,
        agentProfit: null,
        bizType: null,
        bizItem: null,
        channelCost: null,
        channelOrderNo: null,
        orderId: null,
        remark: null,
        createTime: null,
        updateTime: null,
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
        url: "/api/account/history_get",
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
          console.log(res);
          if (res.data.code == 200) {
            this.detaliFrom = {
              mchId: res.data.body.mchId,
              amount: res.data.body.amount,
              balance: res.data.body.balance,
              fundDirection: res.data.body.fundDirection == 1 ? "加款" : "减款",
              orderAmount: res.data.body.orderAmount,
              platProfit: res.data.body.platProfit,
              agentId: res.data.body.agentId,
              parentAgentProfit: res.data.body.parentAgentProfit,
              parentAgentId: res.data.body.parentAgentId,
              agentProfit: res.data.body.agentProfit,
              bizType: this.filterTypeData(this.bizType, res.data.body.bizType),
              bizItem: this.filterTypeData(this.bizItem, res.data.body.bizItem),
              channelCost: res.data.body.channelCost,
              channelOrderNo: res.data.body.channelOrderNo,
              orderId: res.data.body.orderId,
              remark: res.data.body.remark,
              createTime: this.getLocalTime(res.data.body.createTime),
              updateTime: this.getLocalTime(res.data.body.updateTime),
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