<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>代理商分润排行</span>
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
              placeholder="代理商ID"
              prefix-icon="el-icon-search"
              v-model="searchTable.agentId"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.bizType"
              placeholder="业务类型"
            >
              <el-option label="业务类型" value></el-option>
              <el-option label="支付" value="1"></el-option>
              <el-option label="充值" value="4"></el-option>
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
            <el-table-column prop="agentId" label="代理商ID" min-width="240"></el-table-column>
            <el-table-column prop="agentName" label="代理商名称" min-width="120"></el-table-column>
            <el-table-column prop="agentpayProfit" label="分润金额" min-width="80">
              <template slot-scope="scope">{{amountFormat(scope.row.agentpayProfit)}}</template>
            </el-table-column>
            <el-table-column prop="totalAmount" label="金额" min-width="80">
              <template slot-scope="scope">{{amountFormat(scope.row.totalAmount)}}</template>
            </el-table-column>
            <el-table-column prop="totalCount" label="笔数" min-width="80"></el-table-column>
          </el-table>
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
      searchTable: {
        agentId: "",
        bizType: ""
      },
    };
  },
  methods: {
    getTableData() {
      this.loading = true;
      this.axios({
        method: "post",
        url: "/api/data/count4AgentTop",
        data: {
          body: {
            createTimeEnd: this.data[1] ? this.data[1] : "",
            createTimeStart: this.data[0] ? this.data[0] : "",
            agentId: this.searchTable.agentId,
            bizType: this.searchTable.bizType,
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
            this.tableData = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchAmount() {
      this.getTableData();
    },
  },
  created() {
    this.getTableData();
  }
};
</script>

<style>
</style>