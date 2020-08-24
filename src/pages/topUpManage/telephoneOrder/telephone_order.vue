<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/payment_order' }">话费订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>话费订单列表</span>
          </div>
          <p>
            <el-date-picker
              v-model="data"
              type="daterange"
              align="right"
              style="margin: 0 5px 5px 0"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd HH-mm-ss"
              format="yyyy 年 MM 月 dd 日"
              size="small"
              :picker-options="pickerOptions"
            ></el-date-picker>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="商户ID"
              prefix-icon="el-icon-search"
              v-model="searchTable.mchId"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="账户名"
              prefix-icon="el-icon-search"
              v-model="searchTable.accountName"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="商户单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.mchOrderNo"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="话费单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.agentpayOrderId"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="转账单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.transOrderId"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.agentpayChannel"
              placeholder="话费渠道"
            >
              <el-option label="话费渠道" value></el-option>
              <el-option label="商户后台" value="1"></el-option>
              <el-option label="API接口" value="2"></el-option>
            </el-select>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.status"
              placeholder="状态"
            >
              <el-option label="状态" value></el-option>
              <el-option label="待审核" value="0"></el-option>
              <el-option label="转账中" value="1"></el-option>
              <el-option label="转账成功" value="2"></el-option>
              <el-option label="转账失败" value="3"></el-option>
              <el-option label="审核失败" value="4"></el-option>
            </el-select>
            <el-button
              size="small"
              class="green"
              style="margin-left:10px;"
              type="info"
              @click="searchAmount"
            >
              <i class="el-icon-search"></i> 搜索
            </el-button>
          </p>
          <el-alert class="reset-hint" type="success" :closable="false">
            <span style="margin-right:10px;" class="amount blue">
              <span>订单数</span>
              ：{{detailBox.allTotalCount ? detailBox.allTotalCount : 0}}
            </span>
            <span style="margin-right:10px;" class="amount green">
              <span>话费金额</span>
              ：￥{{detailBox.allTotalAmount ? detailBox.allTotalAmount / 100 : 0}}
            </span>
            <span style="margin-right:10px;" class="amount yellow">
              <span>话费费用</span>
              ：￥{{detailBox.allTotalFee ? detailBox.allTotalFee / 100 : 0}}
            </span>
            <span style="margin-right:10px;" class="amount red">
              <span>扣减金额</span>
              ：￥{{detailBox.allTotalSubAmount ? detailBox.allTotalSubAmount / 100 : 0}}
            </span>
          </el-alert>
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="mchId" label="商户ID" min-width="100"></el-table-column>
            <el-table-column prop="agentpayOrderId" label="话费单号" min-width="220"></el-table-column>
            <el-table-column prop="mchOrderNo" label="商户单号" min-width="240"></el-table-column>
            <el-table-column prop="accountName" label="账户名" min-width="120"></el-table-column>
            <el-table-column prop="accountNo" label="账户" min-width="120"></el-table-column>
            <el-table-column prop="amount" label="话费金额(元)" min-width="110">
              <template slot-scope="scope">{{amountFormat(scope.row.amount)}}</template>
            </el-table-column>
            <el-table-column prop="fee" label="手续费(元)" width="100">
              <template slot-scope="scope">{{amountFormat(scope.row.fee)}}</template>
            </el-table-column>
            <!-- <el-table-column prop="orderAmount" label="扣减账户金额(元)" min-width="110"></el-table-column> -->
            <el-table-column prop="status" label="状态" min-width="90">
              <template slot-scope="scope">
                <span>{{scope.row.status | typeFilter(typeBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="agentpayChannel" label="话费渠道" min-width="90">
              <template slot-scope="scope">
                <span>{{scope.row.agentpayChannel == 1 ? '商户后台' : 'API接口'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="时间" width="150">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.createTime)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="240">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="searchDetail(scope.row)"
                >查看</el-button>
                <el-button class="reset-button green" size="warning" @click="top(scope.row)">上游结果</el-button>
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="addOrderDia(scope.row)"
                >补单</el-button>
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
    <el-dialog title="话费补单" :visible.sync="dialogVisible" width="200" :before-close="handleClose">
      <el-form :model="modifyDetail" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item label="状态修改为">
          <el-radio-group v-model="modifyDetail.reissueStatus">
            <el-radio border label="2">成功</el-radio>
            <el-radio border label="3">失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否发通知">
          <el-radio-group v-model="modifyDetail.isNotifyMch">
            <el-radio border label="true">发送</el-radio>
            <el-radio border label="false">不发</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="超级密码" prop="newPass">
          <el-input
            type="password"
            v-model="modifyDetail.password"
            placeholder="请输入超级密码"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">确认补单</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      mchId: null,
      pageTotal: null,
      searchTable: {
        accountName: "",
        agentpayChannel: "",
        agentpayOrderId: "",
        createTimeEnd: "",
        createTimeStart: "",
        mchId: "",
        mchOrderNo: "",
        status: "",
        transOrderId: "",
      },
      modifyDetail: {
        agentpayOrderId: "",
        isNotifyMch: "true",
        password: "",
        reissueStatus: "",
      },
      dialogVisible: false,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      search: "",
      data: [],
      typeBox: [
        {
          key: 0,
          name: "待审核",
        },
        {
          key: 1,
          name: "转账中",
        },
        {
          key: 2,
          name: "转账成功",
        },
        {
          key: 3,
          name: "转账失败",
        },
        {
          key: 4,
          name: "审核失败",
        },
      ],
      detailBox: [],
    };
  },
  filters: {
    typeFilter(val, typeBox) {
      let curTyle = typeBox.filter((item) => {
        if (item.key == val) {
          return item.name;
        }
      });
      return curTyle[0].name;
    },
  },
  methods: {
    addOrderDia(row) {
      this.modifyDetail.agentpayOrderId = row.agentpayOrderId;
      this.modifyDetail.reissueStatus = row.status;
      this.dialogVisible = true;
    },
    getDetail() {
      this.axios({
        method: "post",
        url: "/api/agentpay/count",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          this.loading = false;
          if (res.data.code == 200) {
            this.detailBox = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submit() {
      this.axios({
        method: "post",
        url: "/api/agentpay/reissue",
        data: {
          body: {
            agentpayOrderId: this.modifyDetail.agentpayOrderId,
            isNotifyMch: this.modifyDetail.isNotifyMch,
            password: this.modifyDetail.password,
            reissueStatus: this.modifyDetail.reissueStatus,
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
            this.modifyDetail = {
              agentpayOrderId: "",
              isNotifyMch: "true",
              password: "",
              reissueStatus: "",
            };
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClose(done) {
      done();
      this.modifyDetail = {
        agentpayOrderId: "",
        isNotifyMch: "true",
        password: "",
        reissueStatus: "",
      };
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
        url: "/api/agentpay/list",
        data: {
          body: {
            accountName: this.searchTable.accountName
              ? this.searchTable.accountName
              : null,
            agentpayChannel: this.searchTable.agentpayChannel
              ? this.searchTable.agentpayChannel
              : null,
            agentpayOrderId: this.searchTable.agentpayOrderId
              ? this.searchTable.agentpayOrderId
              : null,
            mchId: this.searchTable.mchId ? this.searchTable.mchId : null,
            mchOrderNo: this.searchTable.mchOrderNo
              ? this.searchTable.mchOrderNo
              : null,
            status: this.searchTable.status ? this.searchTable.status : null,
            transOrderId: this.searchTable.transOrderId
              ? this.searchTable.transOrderId
              : null,
            pageIndex: this.currentPage,
            pageSize: this.pagesize,
            createTimeEnd: this.data[1] ? this.data[1] : null,
            createTimeStart: this.data[0] ? this.data[0] : null,
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
            console.log(res.data.body.agentPayRecordLists);
            this.tableData = res.data.body.agentPayRecordLists;
            this.pageTotal = res.data.body.count;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchAmount() {
      this.currentPage = 1;
      this.getTableData();
    },
    searchDetail(row) {
      this.$router.push({
        name: "telephone_detail",
        query: { id: row.agentpayOrderId },
      });
    },
    top(row) {
      this.axios({
        method: "post",
        url: "/api/agentpay/trans_query",
        data: {
          body: {
            transOrderId: row.transOrderId,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.$message({
              showClose: true,
              message: res.data.message,
              type: "success",
            });
          } else {
            this.$message({
              showClose: true,
              message: res.data.message,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getTableData();
    this.getDetail();
  },
  mounted() {
    var outDiv = this.$refs.table.$refs.bodyWrapper;
    this.mouseEventFun(outDiv);
  },
};
</script>

<style>
</style>