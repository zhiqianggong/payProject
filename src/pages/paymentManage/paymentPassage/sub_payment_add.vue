<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/payment_order_list' }">代付通道列表</el-breadcrumb-item>
      <el-breadcrumb-item @click="toPayList">
        <router-link v-bind="{to:'/payment_sub_account'+'?id='+$route.query.id}">代付通道子账户</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/config_mec' }">账户信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>账户信息</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="abby">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <span class="title">
                    <el-button size="mini">基本信息</el-button>
                  </span>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="账户名称" label-width="130px" class="reset-select">
                    <el-input v-model="detailList.accountName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="账户状态" label-width="130px">
                    <el-radio-group v-model="detailList.status">
                      <el-radio border label="1">开启</el-radio>
                      <el-radio border label="0">关闭</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="渠道商户ID" label-width="130px">
                    <el-input v-model="detailList.passageMchId"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="轮询权重" label-width="130px">
                    <el-input v-model="detailList.pollWeight"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="备注" label-width="130px">
                    <el-input v-model="detailList.remark"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="margin-top: 15px;"></el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="abby" v-if="detailList1">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <span class="title">
                    <el-button size="mini">{{detailList1.ifTypeName+'账户配置'}}</el-button>
                  </span>
                </el-col>
                <el-col
                  :xs="24"
                  :sm="24"
                  :md="12"
                  :lg="12"
                  :xl="12"
                  v-for="(item,index) in dataList1"
                  :key="index"
                >
                  <el-form-item :label="item.desc+'['+item.name+']'">
                    <el-input v-model="item.type"></el-input>
                  </el-form-item>
                </el-col>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height:300px;" v-else>
                <div
                  style="height:300px;"
                  v-loading="loading"
                  element-loading-text="拼命加载中"
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.8)"
                ></div>
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
      detailList: {
        accountName: "",
        passageMchId: "",
        pollWeight: "",
        remark: "",
        status: "1",
      },
      detailList1: null,
      tableData: [],
      search: "",
      dataList: null,
      dataList1: null,
      payAccountList: [],
      param: {},
      loading: false,
    };
  },
  methods: {
    getUserDetail1() {
      this.loading = true;
      return this.axios({
        method: "post",
        url: "/api/config/agentpay_passage/pay_config_get",
        data: {
          body: {
            agentpayPassageId: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.detailList1 = res.data.body;
          } else {
            this.messageInfo(res);
          }
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    submitForm() {
      let body = null;
      this.dataList1.forEach((element) => {
        this.param[element.name] = element.type;
      });
      this.axios({
        method: "post",
        url: "/api/config/agentpay_passage_account/add",
        data: {
          body: {
            accountName: this.detailList.accountName,
            agentpayPassageId: Number(this.$route.query.id),
            param: JSON.stringify(this.param),
            passageMchId: this.detailList.passageMchId,
            pollWeight: Number(this.detailList.pollWeight),
            remark: this.detailList.remark,
            status: this.detailList.status,
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
            // this.detailList = {
            //   accountName: "",
            //   passageMchId: "",
            //   pollWeight: "",
            //   remark: "",
            //   status: "1",
            // };
            // this.getUserDetail1();
            this.$router.push({
              name: "payment_sub_account",
              query: { id: this.$route.query.id },
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPayList() {
      this.$router.push({
        name: "payment_sub_account",
        query: { id: this.$route.query.id },
      });
    },
  },
  async created() {
    await this.getUserDetail1();
    this.dataList1 = JSON.parse(this.detailList1.param);
    if (this.dataList1 instanceof Array && this.dataList1.length > 0) {
      for (let i = 0; i <= this.dataList1.length; i++) {
        this.dataList1[i].type = "";
      }
    }
  },
};
</script>

<style>
.abby {
  border: 1px solid #e6e6e6;
  position: relative;
  margin-bottom: 15px;
  padding: 20px 0;
}

.abby .title {
  position: absolute;
  top: -14px;
  padding: 0px 10px;
  z-index: 4;
  background: #fff;
  left: 30px;
}
</style>