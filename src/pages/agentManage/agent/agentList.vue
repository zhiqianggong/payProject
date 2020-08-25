<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>代理商列表</span>
          </div>
          <p>
            <el-input
              size="small"
              style="width:205px"
              placeholder="请输入商户ID"
              prefix-icon="el-icon-search"
              v-model="search"
            ></el-input>
            <el-button
              size="small"
              class="green"
              style="margin-left:10px;"
              type="info"
              @click="searchMchid"
            >
              <i class="el-icon-search"></i> 搜索
            </el-button>
            <el-button
              type="success"
              size="small"
              class="green"
              style="margin-left:10px;"
              @click="$router.push('/addAgent')"
            >
              <i class="el-icon-plus"></i> 新增
            </el-button>
          </p>
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="mchId" label="代理商ID" min-width="100"></el-table-column>
            <el-table-column prop="agentId" label="代理商名称" min-width="100"></el-table-column>
            <el-table-column prop="mchRate" label="代理商等级" min-width="100"></el-table-column>
            <el-table-column prop="name" label="总代理ID" min-width="100"></el-table-column>
            <el-table-column prop="name" label="代理商余额" min-width="100"></el-table-column>
            <el-table-column prop="status" label="状态" width="100">
              <template slot-scope="scope">
                <el-switch
                  class="switchStyle"
                  active-text="启用"
                  inactive-text="关闭"
                  v-model="scope.row.status"
                  :active-value="1"
                  :inactive-value="0"
                  active-color="#1ab394"
                  inactive-color="#f56c6c"
                  :width="60"
                  @change="changeSwitch(scope.row)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="260">
              <template slot-scope="scope">
                <el-button
                  class="reset-button yellow"
                  size="warning"
                  @click="amountChange(scope.row,0)"
                >余额</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="settleAccount(scope.$index, scope.row)"
                >结算</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="toPay(scope.$index, scope.row)"
                >支付</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="toPayment(scope.$index, scope.row)"
                >代付</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="changeInfo(scope.$index, scope.row)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="paginationStyle"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageTotal"
          ></el-pagination>
        </el-card>
      </el-col>
    </el-row>
    <!-- 弹窗 -->
    <el-dialog
      :title="amountTitle"
      :visible.sync="dialogAmount"
      width="650px"
      :before-close="handleClose"
    >
      <el-row :gutter="10">
        <el-form :model="amountFrom">
          <el-alert class="reset-hint" type="success" :closable="false">
            账户余额：
            <span class="amount">{{amountDetailBox.balance}}</span> 元
            代付金额：
            <span class="amount">{{amountDetailBox.agentpayBalance}}</span> 元
            冻结金额：
            <span class="amount">{{amountDetailBox.frozenMoney}}</span> 元
            保证金额：
            <span class="amount">{{amountDetailBox.securityMoney}}</span> 元
          </el-alert>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="商户ID" label-width="100px">
              <el-input disabled v-model="amountFrom.mchId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="金额" label-width="100px">
              <el-input v-model="amountFrom.amount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="账户类型" label-width="100px">
              <el-radio-group v-model="amountFrom.bizItem">
                <el-radio border label="10">账户余额</el-radio>
                <el-radio border label="11">代付余额</el-radio>
                <el-radio border label="12">冻结金额</el-radio>
                <el-radio border label="13">保证金额</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="谷歌验证码" label-width="100px" class="start">
              <el-input v-model="amountFrom.authCode"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitAmount">确 定</el-button>
        <el-button @click="dialogAmount = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addMec: false,
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      pageTotal: null,
      search: "",
      mchId: "",
      dialogAmount: false,
      amountFrom: {
        amount: "",
        authCode: "",
        bizItem: "10",
        mchId: "",
      },
      isAdd: "",
      amountTitle: "",
      amountDetailBox: {
        balance: "",
      },
    };
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTableData();
    },
    getTableData() {
      this.loading = true;
      this.axios({
        method: "post",
        url: "/api/mch_info/list",
        data: {
          body: {
            mchId: this.mchId,
            pageIndex: this.currentPage,
            pageSize: this.pagesize,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          this.loading = false;
          if (res.data.code == 200) {
            this.tableData = res.data.body.merchantQueryLists;
            this.pageTotal = res.data.body.count;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchMchid() {
      this.mchId = this.search;
      this.currentPage = 1;
      this.pagesize = 10;
      this.getTableData();
    },
    changeSwitch(row) {
      this.axios({
        method: "post",
        url: "/api/mch_info/modifyStatus",
        data: {
          body: {
            mchId: row.mchId,
            status: row.status,
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
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitAmount() {
      if (this.amountFrom.authCode == "") {
        this.$message({
          message: "请完善数据",
          type: "warning",
        });
        return;
      }
      if (this.isAdd == 0) {
        this.axios({
          method: "post",
          url: "/api/account/credit",
          data: {
            body: {
              amount: this.amountFrom.amount,
              authCode: Number(this.amountFrom.authCode),
              bizItem: this.amountFrom.bizItem,
              mchId: this.amountFrom.mchId,
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
              this.amountFrom = {
                amount: "",
                authCode: "",
                bizItem: "10",
                mchId: "",
              };
              this.dialogAmount = false;
              this.getTableData();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.axios({
          method: "post",
          url: "/api/account/debit",
          data: {
            body: {
              amount: this.amountFrom.amount,
              authCode: Number(this.amountFrom.authCode),
              bizItem: this.amountFrom.bizItem,
              mchId: this.amountFrom.mchId,
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
              this.amountFrom = {
                amount: "",
                authCode: "",
                bizItem: "10",
                mchId: "",
              };
              this.dialogAmount = false;
              this.getTableData();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    handleClose(done) {
      this.mchId = "";
      this.amountFrom = {
        amount: "",
        authCode: null,
        bizItem: "10",
        mchId: "",
      };
      done();
    },
    closeDialog() {
      this.mchId = "";
    },
    amountChange(row, isAdd) {
      this.amountFrom = {
        amount: "",
        authCode: null,
        bizItem: "10",
        mchId: "",
      };
      this.amountFrom.mchId = row.mchId;
      this.isAdd = isAdd;
      this.amountTitle = this.isAdd == 0 ? "增加金额" : "减少金额";
      this.getAmountDetail(row.mchId);
    },
    getAmountDetail(mchId) {
      this.axios({
        method: "post",
        url: "/api/account/get",
        data: {
          body: {
            mchId: mchId,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.amountDetailBox.securityMoney = res.data.body.securityMoney;
            this.amountDetailBox.agentpayBalance =
              res.data.body.agentpayBalance;
            this.amountDetailBox.balance = res.data.body.balance;
            this.amountDetailBox.frozenMoney = res.data.body.frozenMoney;
          } else {
            this.messageInfo(res);
          }
          this.dialogAmount = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeInfo(index, row) {
      this.$router.push({ name: "changeAgent", query: { id: row.mchId } });
    },
    settleAccount(index, row) {
      this.$router.push({ name: "settleAgent", query: { id: row.mchId } });
    },
    toPayment(index, row) {
      this.$router.push({ name: "agent_payment_list", query: { id: row.mchId } });
    },
    toPay(index, row) {
      this.$router.push({ name: "agent_pay_list", query: { id: row.mchId } });
    },
  },
  created() {
    this.getTableData();
  },
  mounted() {
    var outDiv = this.$refs.table.$refs.bodyWrapper;
    this.mouseEventFun(outDiv);
  },
};
</script>

<style>
.el-dialog__footer {
  text-align: center;
}

.el-message-box__btns button:nth-child(1) {
  float: right;
  margin-left: 10px;
}

.tingzhi {
  position: absolute;
  left: 33px;
  font-size: 13px;
  color: #fff;
}

.qiyong {
  position: absolute;
  left: 19px;
  font-size: 13px;
  color: #fff;
}
</style>