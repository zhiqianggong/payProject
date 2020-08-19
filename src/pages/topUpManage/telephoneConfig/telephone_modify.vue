<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/telephone_order_list' }">代付通道列表</el-breadcrumb-item>
      <el-breadcrumb-item>支付产品配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>支付产品配置</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="通道名称" label-width="130px">
                  <el-input v-model="changeMecFrom.passageName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="支付接口" label-width="130px" class="reset-select">
                  <el-select disabled v-model="changeMecFrom.ifCode" placeholder="请选择">
                    <el-option
                      v-for="item in payType"
                      :key="item.ifCode"
                      :label="item.ifName"
                      :value="item.ifCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="手续费类型 " label-width="130px">
                  <el-radio-group v-model="changeMecFrom.feeType">
                    <el-radio border label="1">百分比收费</el-radio>
                    <el-radio border label="2">固定收费</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col
                :xs="24"
                :sm="24"
                :md="12"
                :lg="12"
                :xl="12"
                class="start"
                v-if="changeMecFrom.feeType == 1"
              >
                <el-form-item label="手续费费率(%)" label-width="130px">
                  <el-input v-model="changeMecFrom.feeRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start" v-else>
                <el-form-item label="每笔手续费(元)" label-width="130px">
                  <el-input v-model="changeMecFrom.feeEvery"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="通道状态" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.status">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="0">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="备注信息" label-width="130px">
                  <el-input v-model="changeMecFrom.remark"></el-input>
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
        feeEvery: 0,
        feeRate: 0,
        feeType: "",
        id: 0,
        ifCode: "",
        ifName: "",
        ifTypeCode: "",
        isDefault: "",
        maxDayAmount: 0,
        passageName: "",
        remark: "",
        riskStatus: "",
        status: "",
      },
      detailList: null,
      tableData: [],
      search: "",
      dataList: null,
      passageName: [],
      payPassageList: [],
      payAccountList: [],
      curTableData: [],
      payPassageId: "",
      weight: "",
      payType: null,
    };
  },
  methods: {
    getPayType() {
      this.axios({
        method: "post",
        url: "/api/config/common/pay_interface_all",
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
            this.payType = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    modify(row, column, cell, event) {
      this.payPassageId = row.payPassageId;
      this.weight = row.weight;
    },
    closeData(row) {
      if (row.payPassageId != this.payPassageId) {
        this.payPassageId = "";
      }
    },
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/config/agentpay_passage/get",
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
              feeEvery: this.amountFormat(this.dataList.feeEvery),
              feeRate: this.dataList.feeRate,
              feeType: String(this.dataList.feeType),
              id: this.dataList.id,
              ifCode: String(this.dataList.ifCode),
              ifName: this.dataList.ifName,
              ifTypeCode: String(this.dataList.ifTypeCode),
              isDefault: this.dataList.isDefault,
              maxDayAmount: this.dataList.maxDayAmount,
              passageName: this.dataList.passageName,
              remark: this.dataList.remark,
              riskStatus: String(this.dataList.riskStatus),
              status: String(this.dataList.status)
            };
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
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/config/agentpay_passage/update",
        data: {
          body: {
            feeEvery: this.changeMecFrom.feeEvery * 100,
            feeRate: this.changeMecFrom.feeRate,
            feeType: this.changeMecFrom.feeType,
            id: this.changeMecFrom.id,
            ifCode: this.changeMecFrom.ifCode,
            ifName: this.changeMecFrom.ifName,
            ifTypeCode: this.changeMecFrom.ifTypeCode,
            isDefault: this.changeMecFrom.isDefault,
            maxDayAmount: this.changeMecFrom.maxDayAmount,
            passageName: this.changeMecFrom.passageName,
            remark: this.changeMecFrom.remark,
            riskStatus: this.changeMecFrom.riskStatus,
            status: this.changeMecFrom.status
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
      this.$router.push("telephone_order_list");
    },
    getPaySelect() {
      this.axios({
        method: "post",
        url: "/api/config/common/pay_passage_product",
        data: {
          body: {
            productId: this.dataList.id,
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
    getTableDeta() {
      this.axios({
        method: "post",
        url: "/api/config/pay_product/poll_get",
        data: {
          body: {
            id: this.dataList.id,
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
                if (item.isCheck == 1) {
                  _this.$refs.table.toggleRowSelection(item);
                } else {
                  this.$refs.multipleTable.clearSelection();
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
      console.log(val);
      this.curTableData = [];
      if (val.length > 0) {
        let arr = [];
        for (let i = 0; i < val.length; i++) {
          arr = {
            payPassageId: val[i].payPassageId,
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
    this.getPayType();
  },
};
</script>

<style>
</style>