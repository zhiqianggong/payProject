<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/fund' }">资金账户流水</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>资金账户流水</span>
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
              v-model="mchId"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="代理商ID"
              prefix-icon="el-icon-search"
              v-model="searchTable.agentId"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="业务单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.orderId"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.fundDirection"
              placeholder="资金变动方向"
            >
              <el-option label="资金变动方向" value=""></el-option>
              <el-option label="加款" value="1"></el-option>
              <el-option label="减款" value="2"></el-option>
            </el-select>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.bizType"
              placeholder="业务类型"
            >
              <el-option label="业务类型" value=""></el-option>
              <el-option label="支付" value="1"></el-option>
              <el-option label="提现" value="2"></el-option>
              <el-option label="调账" value="3"></el-option>
              <el-option label="充值" value="4"></el-option>
              <el-option label="差错处理" value="5"></el-option>
              <el-option label="代付" value="6"></el-option>
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
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="mchId" label="商户id" min-width="100"></el-table-column>
            <el-table-column prop="orderId" label="业务订单" min-width="220"></el-table-column>
            <el-table-column prop="amount" label="变更金额(元)" min-width="110">
              <template slot-scope="scope">
                {{amountFormat(scope.row.amount)}}
              </template>
            </el-table-column>
            <el-table-column prop="balance" label="变更前余额(元)" min-width="120">
              <template slot-scope="scope">
                {{amountFormat(scope.row.balance)}}
              </template>
            </el-table-column>
            <el-table-column prop="afterBalance" label="变更后余额(元)" min-width="120">
              <template slot-scope="scope">
                {{amountFormat(scope.row.afterBalance)}}
              </template>
            </el-table-column>
            <el-table-column prop="bizType" label="业务类型" min-width="90">
              <template slot-scope="scope">
                <span>{{scope.row.bizType | typeFilter(typeBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="orderAmount" label="订单金额(元)" min-width="110">
              <template slot-scope="scope">
                {{amountFormat(scope.row.orderAmount)}}
              </template>
            </el-table-column>
            <el-table-column prop="fee" label="手续费(元)" width="100">
              <template slot-scope="scope">
                {{amountFormat(scope.row.fee)}}
              </template>
            </el-table-column>
            <el-table-column prop="createTimeStart" label="时间" width="150">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.createTimeStart)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="80">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="searchDetail(scope.row)"
                >查看</el-button>
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
        agentId: null,
        bizType: null,
        createTimeEnd: null,
        createTimeStart: null,
        fundDirection: null,
        mchId: null,
        orderId: null,
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
          key: 1,
          name: "支付",
        },
        {
          key: 2,
          name: "提现",
        },
        {
          key: 3,
          name: "调账",
        },
        {
          key: 4,
          name: "充值",
        },
        {
          key: 5,
          name: "差错处理",
        },
        {
          key: 6,
          name: "代付",
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
        url: "/api/account/history_list",
        data: {
          body: {
            mchId: this.mchId,
            pageIndex: this.currentPage,
            pageSize: this.pagesize,
            agentId: this.searchTable.agentId,
            bizType: this.searchTable.bizType,
            createTimeEnd: this.data[1] ? this.data[1] : "",
            createTimeStart: this.data[0] ? this.data[0] : "",
            fundDirection: this.searchTable.fundDirection,
            orderId: this.searchTable.orderId,
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
            this.tableData = res.data.body.mchAccountListResponseList;
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
      this.$router.push({ name: "fundDetail", query: { id: row.id } });
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