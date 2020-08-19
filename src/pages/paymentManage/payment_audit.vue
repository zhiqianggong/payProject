<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/payment_audit' }">代付审核列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>代付审核列表</span>
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
              placeholder="代付单号"
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
              placeholder="代付渠道"
            >
              <el-option label="代付渠道" value></el-option>
              <el-option label="商户后台" value="1"></el-option>
              <el-option label="API接口" value="2"></el-option>
            </el-select>
            <!-- <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.status"
              placeholder="状态"
            >
              <el-option label="状态" value></el-option>
              <el-option label="待处理" value="0"></el-option>
              <el-option label="处理中" value="1"></el-option>
              <el-option label="转账成功" value="2"></el-option>
              <el-option label="转账失败" value="3"></el-option>
              <el-option label="审核失败" value="4"></el-option>
            </el-select>-->
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
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="mchId" label="商户ID" min-width="100"></el-table-column>
            <el-table-column prop="agentpayOrderId" label="代付单号" min-width="220"></el-table-column>
            <el-table-column prop="mchOrderNo" label="商户单号" min-width="240"></el-table-column>
            <el-table-column prop="accountName" label="账户名" min-width="120"></el-table-column>
            <el-table-column prop="accountNo" label="账户" min-width="120"></el-table-column>
            <el-table-column prop="amount" label="代付金额(元)" min-width="110">
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
            <el-table-column prop="agentpayChannel" label="代付渠道" min-width="90">
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
                <el-button
                  class="reset-button yellow"
                  size="warning"
                  @click="success(scope.row)"
                >审核成功</el-button>
                <el-button class="reset-button red" size="warning" @click="shibai(scope.row)">审核失败</el-button>
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
        accountName: null,
        agentpayChannel: null,
        agentpayOrderId: null,
        mchId: null,
        mchOrderNo: null,
        status: null,
        transOrderId: null,
      },
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
        url: "/api/agentpay/audit_list",
        data: {
          body: {
            accountName: this.searchTable.accountName,
            agentpayChannel: this.searchTable.agentpayChannel,
            agentpayOrderId: this.searchTable.agentpayOrderId,
            mchId: this.searchTable.mchId,
            mchOrderNo: this.searchTable.mchOrderNo,
            status: this.searchTable.status,
            transOrderId: this.searchTable.transOrderId,

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
        name: "audit_detail",
        query: { id: row.agentpayOrderId },
      });
    },
    success(row) {
      this.$confirm(`审核单号${row.agentpayOrderId}`, "提交审核成功", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success",
      })
        .then(() => {
          this.axios({
            method: "post",
            url: "/api/agentpay/audit_success",
            data: {
              body: {
                agentpayOrderId: row.agentpayOrderId,
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
                this.getTableData();
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
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消审核",
          });
        });
    },
    shibai(row) {
      this.$confirm(`审核单号${row.agentpayOrderId}`, "提交审核失败", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.axios({
            method: "post",
            url: "/api/agentpay/audit_failed",
            data: {
              body: {
                agentpayOrderId: row.agentpayOrderId,
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
                this.getTableData();
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
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消审核",
          });
        });
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
</style>