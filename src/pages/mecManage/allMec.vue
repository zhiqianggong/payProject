<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/allMec' }">商户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>商户列表</span>
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
              @click="$router.push('/addMec')"
            >
              <i class="el-icon-plus"></i> 新增
            </el-button>
          </p>
          <el-table
            id="curTabl"
            ref="table1"
            :data="tableData"
            style="width: 100%"
            v-loading="loading"
            border
          >
            <el-table-column prop="mchId" label="商户id" min-width="100"></el-table-column>
            <el-table-column prop="agentId" label="代理商ID" min-width="100"></el-table-column>
            <el-table-column prop="mchRate" label="商户费率" min-width="100"></el-table-column>
            <el-table-column prop="name" label="商户名称" min-width="100"></el-table-column>
            <el-table-column prop="status" label="商户状态" width="100">
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
            <el-table-column prop="balance" label="账户余额" min-width="90">
              <template slot-scope="scope">{{amountFormat(scope.row.balance)}}</template>
            </el-table-column>
            <el-table-column prop="agentpayBalance" label="代付金额" min-width="90">
              <template slot-scope="scope">{{amountFormat(scope.row.agentpayBalance)}}</template>
            </el-table-column>
            <el-table-column prop="securityMoney" label="保证金" min-width="80"></el-table-column>
            <el-table-column prop="userName" label="商户名称" width="100"></el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="500">
              <template slot-scope="scope">
                <el-button
                  class="reset-button yellow"
                  size="warning"
                  @click="amountChange(scope.row,0)"
                >增加金额</el-button>
                <el-button
                  class="reset-button yellow"
                  size="warning"
                  @click="amountChange(scope.row,1)"
                >减少金额</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="searchApp(scope.row)"
                >appId</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="settleAccount(scope.row)"
                >结算</el-button>
                <el-button class="reset-button green" type="success" @click="payFun(scope.row)">支付</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="agentPayFun(scope.row)"
                >代付</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="changePassword(scope.row)"
                >密码</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="changeInfo(scope.row)"
                >编辑</el-button>
                <el-button
                  class="reset-button red"
                  size="danger"
                  @click="deleteCurInfo(scope.row)"
                >删除</el-button>
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
      title="修改密码"
      :visible.sync="dialogPassword"
      min-width="250px"
      :before-close="handleClose"
      v-dialogDrag
    >
      <el-row :gutter="10">
        <el-form :model="changePassFrom">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="登录密码" label-width="100px">
              <el-input v-model="changePassFrom.password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="支付密码" label-width="100px">
              <el-input v-model="changePassFrom.payPassword"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changePassSubmit">确 定</el-button>
        <el-button @click="closeDialog">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="删除商户"
      :visible.sync="dialogDelete"
      min-width="250px"
      :before-close="handleClose"
      v-dialogDrag
    >
      <el-row :gutter="10">
        <el-form :model="changePassFrom">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="商户id" label-width="100px">
              <el-input v-model="mchId" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="谷歌验证码" label-width="100px">
              <el-input v-model="googleCode"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changeDelete">确 定</el-button>
        <el-button @click="closeDelete">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :title="amountTitle"
      :visible.sync="dialogAmount"
      width="650px"
      :before-close="handleClose"
      v-dialogDrag
    >
      <el-row :gutter="10">
        <el-form :model="amountFrom">
          <el-alert class="reset-hint" type="success" :closable="false">
            <span style="margin-right:10px;" class="amount blue">
              <span>账户余额</span>
              ：￥{{amountDetailBox.balance ? amountDetailBox.balance / 100 : 0}}
            </span>
            <span style="margin-right:10px;" class="amount green">
              <span>代付金额</span>
              ：￥{{amountDetailBox.agentpayBalance ? amountDetailBox.agentpayBalance / 100 : 0}}
            </span>
            <span style="margin-right:10px;" class="amount red">
              <span>冻结金额</span>
              ：￥{{amountDetailBox.frozenMoney ? amountDetailBox.frozenMoney / 100 : 0}}
            </span>
            <span style="margin-right:10px;" class="amount yellow">
              <span>保证金额</span>
              ：￥{{amountDetailBox.securityMoney ? amountDetailBox.securityMoney / 100 : 0}}
            </span>
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
    <el-dialog title="应用详情" :visible.sync="dialogAppDetail" v-dialogDrag min-width="300px">
      <el-row :gutter="10">
        <el-form :model="appDetailFrom">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="应用ID" label-width="100px">
              <el-input v-model="appDetailFrom.appId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="应用名称" label-width="100px">
              <el-input v-model="appDetailFrom.appName"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogAppDetail = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addMec: false,
      screenHeight: window.innerHeight,
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      pageTotal: null,
      search: "",
      mchId: "",
      googleCode: "",
      dialogAppDetail: false,
      dialogPassword: false,
      changePassFrom: {
        password: "",
        payPassword: "",
      },
      dialogAmount: false,
      amountFrom: {
        amount: "",
        authCode: "",
        bizItem: "10",
        mchId: "",
      },
      dialogDelete: false,
      isAdd: "",
      amountTitle: "",
      amountDetailBox: {
        balance: "",
      },
      appDetailFrom: {
        appId: "",
        appName: "",
      },
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
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
    changePassword(index, tableData) {
      this.dialogPassword = true;
      this.mchId = tableData.mchId;
    },
    changePassSubmit() {
      this.axios({
        method: "post",
        url: "/api/mch_info/updatePwd",
        data: {
          body: {
            mchId: this.mchId,
            password: this.changePassFrom.password,
            payPassword: this.changePassFrom.payPassword,
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
            this.changePassFrom = {
              password: "",
              payPassword: "",
            };
            this.mchId = "";
            this.dialogPassword = false;
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
    changeDelete() {
      this.axios({
        method: "post",
        url: "/api/mch_info/deleteMch",
        data: {
          body: {
            googleCode: this.googleCode,
            mchId: this.mchId,
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
            this.dialogDelete = false;
            this.mchId = "";
            this.googleCode = "";
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCurInfo(tableData) {
      this.mchId = tableData.mchId;
      this.dialogDelete = true;
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
      this.googleCode = "";
      this.mchId = "";
      this.changePassFrom = {
        password: "",
        payPassword: "",
      };
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
      this.dialogPassword = false;
    },
    closeDelete() {
      this.dialogDelete = false;
      this.googleCode = "";
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
      this.dialogAmount = true;
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeInfo(row) {
      this.$router.push({ name: "changeInfo", query: { id: row.mchId } });
    },
    settleAccount(row) {
      this.$router.push({ name: "settleAccount", query: { id: row.mchId } });
    },
    payFun(row) {
      this.$router.push({ name: "pay_passage_list", query: { id: row.mchId } });
    },
    searchApp(row) {
      this.axios({
        method: "post",
        url: "/api/app/list",
        data: {
          body: {
            mchId: row.mchId,
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
          if (res.data.code == 200) {
            this.appDetailFrom = {
              appId: res.data.body.mchAppQueryList[0].appId,
              appName: res.data.body.mchAppQueryList[0].appName,
            };
            this.dialogAppDetail = true;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // this.$router.push({ name: "app_id_list", query: { id: row.mchId } });
    },
    agentPayFun(row) {
      this.$router.push({
        name: "agentpay_passage_list",
        query: { id: row.mchId },
      });
    },
  },
  created() {
    this.getTableData();
  },
  mounted() {
    var outDiv = this.$refs.table1.$refs.bodyWrapper;
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
</style>