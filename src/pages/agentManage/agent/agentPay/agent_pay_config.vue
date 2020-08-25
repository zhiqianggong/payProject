<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/agentList' }">代理商列表</el-breadcrumb-item>
      <el-breadcrumb-item><router-link v-bind="{to:'/agent_pay_list'+'?id='+$route.query.id}">支付通道</router-link></el-breadcrumb-item>
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
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="产品名称" label-width="130px">
                  <el-input v-model="changeMecFrom.productName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="代理商费率(%)" label-width="130px">
                  <el-input v-model="changeMecFrom.agentRate" disabled></el-input>
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
        productName: null,
        productType: null,
        agentRate: null,
        mchRate: null,
        ifMode: 1,
        payPassageId: null,
        payPassageAccountId: null,
        status: 0,
      },
      detailList: null,
      tableData: [],
      search: "",
      dataList: null,
      payPassageList: [],
      payAccountList: [],
      curTableData: "",
      payPassageId: "",
      weight: "",
    };
  },
  methods: {
    modify(row, column, cell, event) {
      console.log(row);
      this.payPassageId = row.id;
      this.weight = row.weight;
    },
    closeData(row) {
      if (row.id != this.payPassageId) {
        this.payPassageId = "";
      }
    },
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/mch_pay_passage/get",
        data: {
          body: {
            mchId: this.$route.query.id,
            productId: this.$route.query.productId,
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
            this.changeMecFrom.productName = this.dataList.productName;
            this.changeMecFrom.productType =
              this.dataList.productType == 1 ? "0" : "1";
            this.changeMecFrom.agentRate = this.dataList.agentRate;
            this.changeMecFrom.mchRate = this.dataList.mchRate;
            this.changeMecFrom.ifMode = this.dataList.ifMode
              ? String(this.dataList.ifMode)
              : "1";
            this.changeMecFrom.payPassageId = this.dataList.payPassageId
              ? Number(this.dataList.payPassageId)
              : "";
            this.changeMecFrom.payPassageAccountId = this.dataList
              .payPassageAccountId
              ? Number(this.dataList.payPassageAccountId)
              : "";
            this.changeMecFrom.status = String(this.dataList.status);
            this.getPaySelect();
            this.getPayAccount();
            if (this.dataList.ifMode == 2) {
              this.getTableDeta();
            }
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitForm() {
      let arr = [];
      this.curTableData.forEach((item) => {
        this.tableData.forEach((tableList) => {
          if (item.payPassageId == tableList.id) {
            arr.push({
              payPassageId: tableList.id,
              weight: tableList.weight,
            });
          }
        });
      });
      this.dataList.pollParam = JSON.stringify(arr);
      this.axios({
        method: "post",
        url: "/api/mch_pay_passage/update",
        data: {
          body: {
            agentId: this.dataList.agentId,
            agentRate: this.changeMecFrom.agentRate,
            id: this.dataList.id,
            ifMode: this.changeMecFrom.ifMode,
            mchId: this.dataList.mchId,
            mchRate: this.changeMecFrom.mchRate,
            payPassageAccountId: this.changeMecFrom.payPassageAccountId,
            payPassageId: this.changeMecFrom.payPassageId,
            pollParam: this.dataList.pollParam,
            productId: this.dataList.productId,
            productName: this.changeMecFrom.productName,
            productType: this.changeMecFrom.productType,
            status: this.changeMecFrom.status,
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
        name: "agent_pay_list",
        query: { id: this.$route.query.id },
      });
    },
    getPaySelect() {
      this.axios({
        method: "post",
        url: "/api/config/common/pay_passage_product",
        data: {
          body: {
            productId: this.dataList.productId,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.payPassageList = res.data.body;
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
        url: "/api/config/common/pay_passage_account",
        data: {
          body: {
            payPassageId: this.dataList.payPassageId,
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
    modelCheck(val) {
      if (val == 2) {
        this.getTableDeta();
      }
    },
    getTableDeta() {
      this.axios({
        method: "post",
        url: "/api/mch_pay_passage/poll_get",
        data: {
          body: {
            mchId: this.dataList.mchId,
            productId: this.dataList.productId,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.tableData = res.data.body;
            
            let _this = this;
            _this.$nextTick(function () {
              _this.tableData.forEach((item) => {
                console.log(item.id);
                if (item.LAY_CHECKED == 1) {
                  _this.$refs.table.toggleRowSelection(item);
                }
              });
            });
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleSelectionChange(val) {
      this.curTableData = [];
      if (val.length > 0) {
        let arr = [];
        for (let i = 0; i < val.length; i++) {
          arr = {
            payPassageId: val[i].id,
            weight: val[i].weight,
          };
          this.curTableData.unshift(arr);
        }
      } else {
        this.curTableData = val;
      }
    },
  },
  created() {
    this.getUserDetail();
  },
};
</script>

<style>
</style>