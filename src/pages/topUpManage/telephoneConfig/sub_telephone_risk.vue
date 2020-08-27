<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/telephone_order_list' }">话费通道列表</el-breadcrumb-item>
      <el-breadcrumb-item @click="toPayList">
        <router-link v-bind="{to:'/telephone_sub_account'+'?id='+$route.query.id}">话费通道子账户</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>子账户风控配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>子账户风控配置</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="账户名称" label-width="130px" class="reset-select">
                  <el-input disabled v-model="changeMecFrom.accountName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="风控模式" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.riskMode">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="2">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="24"
                :xl="24"
                v-if="changeMecFrom.riskMode == 2"
              >
                <el-form-item label="当天交易金额(元)" label-width="130px">
                  <el-input v-model="changeMecFrom.maxDayAmount"></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="24"
                :xl="24"
                v-if="changeMecFrom.riskMode == 2"
              >
                <el-form-item label="单笔最大金额(元)" label-width="130px">
                  <el-input v-model="changeMecFrom.maxEveryAmount"></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="24"
                :xl="24"
                v-if="changeMecFrom.riskMode == 2"
              >
                <el-form-item label="单笔最小金额(元)" label-width="130px">
                  <el-input v-model="changeMecFrom.minEveryAmount"></el-input>
                </el-form-item>
              </el-col>
              <el-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="24"
                :xl="24"
                v-if="changeMecFrom.riskMode == 2"
              >
                <el-form-item class="reset-data" label="交易时间" label-width="130px">
                  <el-time-picker
                    placeholder="起始时间"
                    v-model="changeMecFrom.createTime"
                    value-format="HH:mm:ss"
                    :picker-options="{
                      selectableRange: '00:00:00 - 23:59:59',
                    }"
                  ></el-time-picker>
                  <el-time-picker
                    placeholder="结束时间"
                    arrow-control
                    value-format="HH:mm:ss"
                    v-model="changeMecFrom.updateTime"
                    :picker-options="{
                      selectableRange: '00:00:00 - 23:59:59',
                    }"
                  ></el-time-picker>
                </el-form-item>
              </el-col>
              <el-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="24"
                :xl="24"
                v-if="changeMecFrom.riskMode == 2"
              >
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
        updateTime: "",
        createTime: "",
        riskMode: "",
        accountName: ""
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
        url: "/api/config/agentpay_passage_account/get",
        data: {
          body: {
            id: this.$route.query.payPassageId,
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
              riskStatus: this.dataList.riskStatus
                ? String(this.dataList.riskStatus)
                : "1",
              riskMode: this.dataList.riskMode
                ? String(this.dataList.riskMode)
                : "1",
              createTime: this.dataList.tradeEndTime,
              updateTime: this.dataList.tradeStartTime,
              accountName: this.dataList.accountName,
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
        url: "/api/config/agentpay_passage_account/update",
        data: {
          body: {
            id: this.$route.query.payPassageId,
            maxDayAmount: this.changeMecFrom.maxDayAmount,
            maxEveryAmount: this.changeMecFrom.maxEveryAmount,
            minEveryAmount: this.changeMecFrom.minEveryAmount,
            passageName: this.changeMecFrom.passageName,
            riskStatus: this.changeMecFrom.riskStatus,
            updateTime: this.changeMecFrom.updateTime,
            createTime: this.changeMecFrom.createTime,
            riskMode: this.changeMecFrom.riskMode,
            accountName: this.dataList.accountName,
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
            this.getUserDetail();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPayList() {
        console.log(this.$route.query.id)
      this.$router.push({ name: "telephone_sub_account", query: { id: this.$route.query.id } });
    },
  },
  created() {
    this.getUserDetail();
  },
};
</script>

<style>
</style>