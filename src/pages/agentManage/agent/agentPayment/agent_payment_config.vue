<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/agentList' }">代理商列表</el-breadcrumb-item>
      <el-breadcrumb-item><router-link v-bind="{to:'/agent_payment_list'+'?id='+$route.query.id}">代付通道</router-link></el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/config_mec' }">通道配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>通道配置</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="代付通道" label-width="130px" class="reset-select">
                  <el-select disabled v-model="changeMecFrom.passageName" placeholder="请选择">
                    <el-option
                      v-for="item in payFather"
                      :key="item.id"
                      :label="item.passageName"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="代付手续费(元/笔)" label-width="130px">
                  <el-input v-model="changeMecFrom.mchFeeType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="状态" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.status">
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
import menu from "@/components/menu";
import header from "@/components/header";
export default {
  data() {
    return {
      changeMecFrom: {
        agentpayPassageId: "",
        agentpayPassageAccountId: "",
        agentFeeEvery: "",
        maxEveryAmount: "",
        mchFeeEvery: "",
        status: "",
        isDefault: "",
        passageName: "",
        mchFeeType: "",
      },
      detailList: null,
      tableData: [],
      search: "",
      dataList: null,
      payAccountList: [],
      payFather: [],
    };
  },
  methods: {
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/mch_agentpay_passage/get",
        data: {
          body: {
            mchId: this.$route.query.id,
            agentpayPassageId: this.$route.query.productId,
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
            this.getPayAccount();
            this.changeMecFrom = {
              // String(this.dataList.agentpayPassageId)
              agentpayPassageId: this.dataList.agentpayPassageAccountId,
              mchFeeType: this.dataList.mchFeeType,
              agentpayPassageAccountId: this.dataList.agentpayPassageAccountId,
              agentFeeEvery: this.dataList.agentFeeEvery,
              maxEveryAmount: this.dataList.maxEveryAmount,
              mchFeeEvery: "未设置",
              status: String(this.dataList.status),
              passageName: this.dataList.passageName,
              isDefault: String(this.dataList.isDefault),
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
        url: "/api/mch_agentpay_passage/update",
        data: {
          body: {
            id: this.dataList.id,
            agentpayPassageAccountId: this.changeMecFrom
              .agentpayPassageAccountId,
            agentpayPassageId: Number(this.$route.query.productId),
            isDefault: Number(this.changeMecFrom.isDefault),
            maxEveryAmount: this.changeMecFrom.maxEveryAmount,
            mchFeeEvery: Number(this.dataList.mchFeeEvery),
            mchId: this.dataList.mchId,
            passageName: this.dataList.passageName,
            status: Number(this.changeMecFrom.status),
            mchFeeType: this.changeMecFrom.mchFeeType,
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
            this.$router.push({
              name: "agent_payment_list",
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
        name: "agent_payment_list",
        query: { id: this.$route.query.id },
      });
    },
    getFatherAccount() {
      this.axios({
        method: "post",
        url: "/api/config/common/agentpay_passage_all",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.payFather = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPayAccount() {
      this.axios({
        method: "post",
        url: "/api/config/common/agentpay_passage_account",
        data: {
          body: {
            agentpayPassageId: this.dataList.agentpayPassageId,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.payAccountList = res.data.body;
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
    this.getUserDetail();
    this.getFatherAccount();
  },
};
</script>

<style>
</style>