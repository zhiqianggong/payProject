<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>商户充值排行</span>
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
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="商户ID"
              prefix-icon="el-icon-search"
              v-model="searchTable.mchId"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.productType"
              placeholder="产品类型"
            >
              <el-option label="产品类型" value></el-option>
              <el-option label="收款" value="2"></el-option>
              <el-option label="充值" value="3"></el-option>
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
            <el-table-column prop="mchId" label="商户ID" min-width="240"></el-table-column>
            <el-table-column prop="mchName" label="商户名称" min-width="120"></el-table-column>
            <el-table-column prop="totalAmount" label="充值金额" min-width="120">
              <template slot-scope="scope">{{amountFormat(scope.row.totalAmount)}}</template>
            </el-table-column>
            <el-table-column prop="totalMchIncome" label="入账金额" min-width="120">
              <template slot-scope="scope">{{amountFormat(scope.row.totalMchIncome)}}</template>
            </el-table-column>
            <el-table-column prop="totalCount" label="充值笔数" min-width="150"></el-table-column>
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
      mchId: "",
      pageTotal: null,
      searchTable: {
        agentId: "",
        mchId: "",
        productType: "",
      },
    };
  },
  methods: {
    getTableData() {
      this.loading = true;
      this.axios({
        method: "post",
        url: "/api/data/count4MchTop",
        data: {
          body: {
            createTimeEnd: this.data[1] ? this.data[1] : "",
            createTimeStart: this.data[0] ? this.data[0] : "",
            agentId: "",
            mchId: "",
            productType: "",
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
      this.getTableData();
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