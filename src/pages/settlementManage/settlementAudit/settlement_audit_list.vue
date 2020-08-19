<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/settlement_audit_list' }">结算审核列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>结算审核列表</span>
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
              placeholder="结算商户ID"
              prefix-icon="el-icon-search"
              v-model="searchTable.infoId"
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
              placeholder="结算单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.settOrderId"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.settStatus"
              placeholder="状态"
            >
              <el-option label="状态" value=""></el-option>
              <el-option label="等待审核" value="1"></el-option>
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
            <el-table-column prop="settOrderId" label="结算单号" min-width="240"></el-table-column>
            <el-table-column prop="infoType" label="结算商类型" min-width="120">
              <template slot-scope="scope">
                <span>{{scope.row.infoType == 1 ? '代理商' : '商户'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="infoId" label="结算商ID" min-width="120"></el-table-column>
            <el-table-column prop="accountName" label="账户名" min-width="150"></el-table-column>
            <el-table-column prop="settAmount" label="结算金额" min-width="80">
              <template slot-scope="scope">{{amountFormat(scope.row.settAmount)}}</template>
            </el-table-column>
            <el-table-column prop="settFee" label="手续费" min-width="80">
              <template slot-scope="scope">{{amountFormat(scope.row.settFee)}}</template>
            </el-table-column>
            <el-table-column prop="remitAmount" label="打款金额" min-width="80">
              <template slot-scope="scope">{{amountFormat(scope.row.remitAmount)}}</template>
            </el-table-column>
            <el-table-column prop="settStatus" label="结算状态" min-width="80">
              <template slot-scope="scope">
                <span>{{scope.row.settStatus | typeFilter(statusBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="结算日期" min-width="150">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.createTime)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="150">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="searchDetail(scope.row)"
                >查看</el-button>
                <el-button
                  class="reset-button yellow"
                  size="warning"
                  @click="audit(scope.row)"
                >审核</el-button>
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
      data: [],
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
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      mchId: "",
      pageTotal: null,
      searchTable: {
        accountName: "",
        infoId: "",
        settOrderId: "",
        settStatus: "",
      },
      statusBox: [
        {
          key: 1,
          name: "等待审核",
        },
        {
          key: 2,
          name: "已审核",
        },
        {
          key: 3,
          name: "审核不通过",
        },
        {
          key: 4,
          name: "打款中",
        },
        {
          key: 5,
          name: "打款成功",
        },
        {
          key: 6,
          name: "打款失败",
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
        url: "/api/sett/audit_list",
        data: {
          body: {
            createTimeEnd: this.data[1] ? this.data[1] : "",
            createTimeStart: this.data[0] ? this.data[0] : "",
            accountName: this.searchTable.accountName,
            infoId: this.searchTable.infoId,
            settOrderId: this.searchTable.settOrderId,
            settStatus: this.searchTable.settStatus,
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
            this.tableData = res.data.body.settLists;
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
        name: "settlement_audit_detail",
        query: { id: row.id },
      });
    },
    audit(row) {
      this.$router.push({
        name: "audit",
        query: { id: row.infoId },
      });
    }
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