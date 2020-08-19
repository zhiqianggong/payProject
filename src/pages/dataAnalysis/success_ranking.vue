<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="按天统计成功率" name="first"></el-tab-pane>
            <el-tab-pane label="按小时统计成功率" name="second"></el-tab-pane>
          </el-tabs>
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
            <el-table-column prop="dateType" label="日期/时间" min-width="240">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.dateType)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="successCount" label="成功订单数" min-width="120"></el-table-column>
            <el-table-column prop="totalCount" label="总订单数" min-width="120"></el-table-column>
            <el-table-column prop="successRate" label="订单成功率" min-width="150"></el-table-column>
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
          <div id="main" style="width: 100%;height:400px;"></div>
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
        mchId: "",
      },
      activeName: "first",
      myChart: null,
      chartTitle: "近七日订单成功率",
      xBox: [],
      serverBox: [],
    };
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
        url: "/api/data/selectSuccessRate",
        data: {
          body: {
            createTimeEnd: this.data[1] ? this.data[1] : "",
            createTimeStart: this.data[0] ? this.data[0] : "",
            mchId: this.searchTable.mchId,
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
            this.tableData = res.data.body.successRateList;
            this.pageTotal = res.data.body.count;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sevenDay() {
      this.axios({
        method: "post",
        url: "/api/data/dateRate",
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
            (this.xBox = []), (this.serverBox = []);
            let i = 0;
            res.data.body = res.data.body.sort(function (a, b) {
              console.log(a.day)
              return a.day - b.day ? 1 : -1;
            });
            res.data.body.forEach((item) => {
              i++;
              if (i <= 7) {
                this.xBox.push(item.day);
                this.serverBox.push(
                  item.successRate
                    ? Number(
                        item.successRate.substring(
                          0,
                          item.successRate.length - 1
                        )
                      )
                    : 0
                );
              }
            });
            console.log(this.xBox, this.serverBox);
            this.eChartsFun();
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    hourRate() {
      this.axios({
        method: "post",
        url: "/api/data/hourRate",
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
            (this.xBox = []), (this.serverBox = []);
            let i = 0;
            res.data.body = res.data.body.sort(function (a, b) {
              console.log(a.time)
              return a.time - b.time ? 1 : -1;
            });
            res.data.body.forEach((item) => {
              i++;
              if (i <= 12) {
                this.xBox.push(item.time);
                this.serverBox.push(
                  item.successRate
                    ? Number(
                        item.successRate.substring(
                          0,
                          item.successRate.length - 1
                        )
                      )
                    : 0
                );
              }
            });
            console.log(this.xBox, this.serverBox);
            this.eChartsFun();
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
    },
    eChartsFun() {
      this.myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: this.chartTitle,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: {
          type: "category",
          data: this.xBox,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "订单成功率(%)",
            type: "line",
            data: this.serverBox,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    },
    handleClick(tab, event) {
      if (tab.name == "first") {
        
    this.sevenDay();
        this.chartTitle = "近七日订单成功率";
      } else {
        this.hourRate();
        this.chartTitle = "近十二小时订单成功率";
      }
      this.eChartsFun();
    },
    dayData() {
      this.axios({
        method: "post",
        url: "/api/data/selectSuccessRate",
        data: {
          body: {
            createTimeEnd: this.data[1] ? this.data[1] : "",
            createTimeStart: this.data[0] ? this.data[0] : "",
            mchId: this.searchTable.mchId,
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
            this.tableData = res.data.body.successRateList;
            this.pageTotal = res.data.body.count;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getTableData();
    this.sevenDay();
  },
  mounted() {
    let that = this;
    window.addEventListener("resize", () => {
      that.myChart.resize();
    });
    this.eChartsFun();
  },
};
</script>

<style>
</style>