<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_passage_config' }">支付通道列表</el-breadcrumb-item>
      <el-breadcrumb-item>风控配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>风控配置</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="通道名称" label-width="130px" class="reset-select">
                  <el-input disabled v-model="changeMecFrom.passageName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="当天交易金额(元)" label-width="130px">
                  <el-input v-model="changeMecFrom.maxDayAmount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="单笔最大金额(元)" label-width="130px">
                  <el-input v-model="changeMecFrom.maxEveryAmount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="单笔最小金额(元)" label-width="130px">
                  <el-input v-model="changeMecFrom.minEveryAmount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item class="reset-data" label="交易时间" label-width="130px">
                  <el-time-picker
                    placeholder="起始时间"
                    v-model="changeMecFrom.tradeStartTime"
                    value-format="HH:mm:ss"
                    :picker-options="{
                      selectableRange: '00:00:00 - 23:59:59'
                    }"
                  ></el-time-picker>
                  <el-time-picker
                    placeholder="结束时间"
                    value-format="HH:mm:ss"
                    v-model="changeMecFrom.tradeEndTime"
                    :picker-options="{
                      selectableRange: '00:00:00 - 23:59:59',
                      minTime: changeMecFrom.tradeStartTime
                    }"
                  ></el-time-picker>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="风控状态" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.riskStatus">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="0">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button type="info" class="green" @click="submitForm()">保存</el-button>
                  <el-button plain @click="toPayList">返回</el-button>
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
      changeMecFrom: {
        maxDayAmount: 0,
        maxEveryAmount: 0,
        minEveryAmount: 0,
        passageName: "",
        riskStatus: "1",
        tradeEndTime: "",
        tradeStartTime: "",
      },
      detailList: null,
      tableData: [],
      search: "",
      dataList: null,
      payAccountList: [],
    };
  },
  methods: {
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/config/pay_passage/getRiskDetail",
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
            this.dataList = res.data.body;
            this.changeMecFrom = {
              maxDayAmount: this.dataList.maxDayAmount | 0,
              maxEveryAmount: this.dataList.maxEveryAmount | "0",
              minEveryAmount: this.dataList.minEveryAmount | "0",
              passageName: this.dataList.passageName,
              riskStatus: String(this.dataList.riskStatus),
              tradeEndTime: this.dataList.tradeEndTime,
              tradeStartTime: this.dataList.tradeStartTime,
            };
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/config/pay_passage/risk_update",
        data: {
          body: {
            id: this.$route.query.id,
            maxDayAmount: this.changeMecFrom.maxDayAmount,
            maxEveryAmount: this.changeMecFrom.maxEveryAmount | 0,
            minEveryAmount: this.changeMecFrom.minEveryAmount | 0,
            passageName: this.changeMecFrom.passageName,
            riskStatus: this.changeMecFrom.riskStatus,
            tradeEndTime: this.changeMecFrom.tradeEndTime,
            tradeStartTime: this.changeMecFrom.tradeStartTime,
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
            // this.getUserDetail();
            this.$router.push("pay_passage_config");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPayList() {
      this.$router.push("pay_passage_config");
    },
  },
  created() {
    this.getUserDetail();
  },
};
</script>

<style>
</style>