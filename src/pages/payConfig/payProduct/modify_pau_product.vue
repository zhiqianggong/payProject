<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_product_list' }">支付产品</el-breadcrumb-item>
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
                <el-form-item label="产品名称" label-width="130px">
                  <el-input v-model="changeMecFrom.productName" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="产品类型" label-width="130px">
                  <el-radio-group disabled v-model="changeMecFrom.productType">
                    <el-radio border label="1">收款</el-radio>
                    <el-radio border label="0">充值</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="支付类型" label-width="130px" class="reset-select">
                  <el-select disabled v-model="changeMecFrom.payType" placeholder="请选择">
                    <el-option
                      v-for="item in payType"
                      :key="item.payTypeCode"
                      :label="item.payTypeName"
                      :value="item.payTypeCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="代理商费率(%)" label-width="130px">
                  <el-input v-model="changeMecFrom.agentRate" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="商户费率(%)" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="接口模式" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.ifMode" @change="modelCheck">
                    <el-radio border label="1">单独</el-radio>
                    <el-radio border label="2">轮询</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="支付通道" label-width="130px" class="reset-select">
                  <el-select
                    v-model="changeMecFrom.payPassageId"
                    placeholder="请选择"
                    v-if="changeMecFrom.ifMode == 1"
                  >
                    <el-option
                      v-for="item in payPassageList"
                      :key="item.id"
                      :label="item.passageName"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                  <el-table
                    :data="tableData"
                    @selection-change="handleSelectionChange"
                    @cell-dblclick="modify"
                    @cell-click="closeData"
                    ref="table"
                    style="width: 100%"
                    border
                    v-else
                  >
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="payPassageId" label="通道ID" width="180"></el-table-column>
                    <el-table-column prop="payPassageName" label="通道名称" width="180"></el-table-column>
                    <el-table-column prop="weight" label="轮询权重(1-9)">
                      <template slot-scope="scope">
                        <el-input
                          v-model="scope.row.weight"
                          v-if="scope.row.payPassageId == payPassageId"
                          @keyup.enter.native="$event.target.blur"
                          :autofocus="scope.row.seen"
                        ></el-input>
                        <span v-else>{{scope.row.weight}}</span>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="通道子账户" label-width="130px" class="reset-select">
                  <el-select v-model="changeMecFrom.payPassageAccountId" placeholder="请选择">
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
                <el-form-item label="状态" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.status">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="0">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="为已配代理更新">
                  <el-checkbox-group v-model="changeMecFrom.type">
                    <el-checkbox label="代理商费率" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="为已配商户更新">
                  <el-checkbox-group v-model="changeMecFrom.type">
                    <el-checkbox label="商户费率" name="type"></el-checkbox>
                    <el-checkbox label="通道配置" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>-->
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
        payType: null,
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
        url: "/api/config/common/pay_type_all",
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
        url: "/api/config/pay_product/get",
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
            this.changeMecFrom.productName = this.dataList.productName;
            this.changeMecFrom.productType =
              String(this.dataList.productType);
            this.changeMecFrom.agentRate = this.dataList.agentRate;
            this.changeMecFrom.mchRate = this.dataList.mchRate;
            this.changeMecFrom.ifMode = this.dataList.ifMode
              ? String(this.dataList.ifMode)
              : "1";
              this.changeMecFrom.payType = this.dataList.payType,
            this.changeMecFrom.payPassageId = this.dataList.payPassageId;
            this.changeMecFrom.payPassageAccountId = this.dataList.payPassageAccountId;
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
    modelCheck(val) {
      if(val == 2) {
        this.getTableDeta();
      }
    },
    submitForm() {
      let arr = []
      this.curTableData.forEach(item=> {
        this.tableData.forEach(tableList=> {
          if(item.payPassageId == tableList.payPassageId) {
            arr.push({
            payPassageId: tableList.payPassageId,
            weight: tableList.weight,
          })
          }
        })
      })
      this.dataList.pollParam = JSON.stringify(arr)
      this.axios({
        method: "post",
        url: "/api/config/pay_product/update",
        data: {
          body: {
            agentId: this.dataList.agentId,
            agentRate: this.changeMecFrom.agentRate,
            id: this.dataList.id,
            ifMode: Number(this.changeMecFrom.ifMode),
            mchId: this.dataList.mchId,
            mchRate: this.changeMecFrom.mchRate,
            payPassageAccountId: this.changeMecFrom.payPassageAccountId,
            payPassageId: this.changeMecFrom.payPassageId,
            pollParam: this.dataList.pollParam,
            productId: this.dataList.productId,
            productName: this.changeMecFrom.productName,
            productType: Number(this.changeMecFrom.productType),
            status: Number(this.changeMecFrom.status),
            payType: Number(this.changeMecFrom.payType),
            layTableCheckbox: 'on'
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
      this.$router.push("pay_product_list");
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
  }
};
</script>

<style>
</style>