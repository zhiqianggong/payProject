<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/allMec' }">商户列表</el-breadcrumb-item>
      <el-breadcrumb-item @click="toPayList">
        <router-link v-bind="{to:'/agentpay_passage_list'+'?id='+$route.query.id}">代付通道</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/config_mec' }">渠道配置</el-breadcrumb-item>
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
                <el-form-item label="通道子账户" label-width="130px" class="reset-select">
                  <el-select v-model="changeMecFrom.agentpayPassageId" placeholder="请选择">
                    <el-option label="选择通道子账户" value></el-option>
                    <el-option
                      v-for="item in payAccountList"
                      :key="item.id"
                      :label="item.acountName"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="代理商费率(%)" label-width="130px">
                  <el-input v-model="changeMecFrom.mchFeeEvery" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="代付单笔限额(元)" label-width="130px">
                  <el-input v-model="changeMecFrom.maxEveryAmount"></el-input>
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
                <el-form-item label="默认" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.isDefault">
                    <el-radio border label="1">是</el-radio>
                    <el-radio border label="0">否</el-radio>
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
              agentpayPassageId: "",
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
            mchFeeType: this.changeMecFrom.mchFeeType
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
      this.$router.push({
        name: "agentpay_passage_list",
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