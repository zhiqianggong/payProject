<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/transOrder' }">转账订单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>转账订单</span>
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
              placeholder="转账订单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.appId"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="商户订单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.appId"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.status"
              placeholder="转账状态"
            >
              <el-option label="转账状态" value></el-option>
              <el-option label="订单生成" value="0"></el-option>
              <el-option label="转账中" value="1"></el-option>
              <el-option label="转账成功" value="2"></el-option>
              <el-option label="转账失败" value="3"></el-option>
              <el-option label="处理完成" value="4"></el-option>
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
            <el-table-column prop="transOrderId" label="转账单号" min-width="240"></el-table-column>
            <el-table-column prop="mchTransNo" label="商户单号" min-width="240"></el-table-column>
            <el-table-column prop="mchId" label="商户ID" min-width="120"></el-table-column>
            <el-table-column prop="amount" label="转账金额" min-width="80">
              <template slot-scope="scope">{{amountFormat(scope.row.amount)}}</template>
            </el-table-column>
            <el-table-column prop="result" label="转账状态" min-width="150">
              <template slot-scope="scope">
                <span :style="'color:'+typeBox[scope.row.result].color" >{{scope.row.result | typeFilter(typeBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="转账结果" min-width="150">
              <template slot-scope="scope">
                <span :style="'color:'+statusBox[scope.row.status].color">{{scope.row.status | typeFilter(statusBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="150">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.createTime)}}</span>
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
        mchTransNo: "",
        status: "",
        transOrderId: "",
      },
      typeBox: [
        {
          color: 'blue',
          key: 0,
          name: "不确认结果",
        },
        {
          color: 'orangered',
          key: 1,
          name: "等待手动处理",
        },
        {
          color: 'green',
          key: 2,
          name: "确认成功",
        },
        {
          color: 'red',
          key: 3,
          name: "确认失败",
        },
      ],
      statusBox: [
        {
          color: 'blue',
          key: 0,
          name: "订单生成",
        },
        {
          color: 'orangered',
          key: 1,
          name: "转账中",
        },
        {
          color: 'green',
          key: 2,
          name: "转账成功",
        },
        {
          color: 'red',
          key: 3,
          name: "转账失败",
        },
        {
          color: 'darkgreen',
          key: 4,
          name: "处理完成",
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
        url: "/api/trans_order/list",
        data: {
          body: {
            createTimeEnd: this.data[1] ? this.data[1] : "",
            createTimeStart: this.data[0] ? this.data[0] : "",
            mchId: this.searchTable.mchId,
            mchTransNo: this.searchTable.mchTransNo,
            status: this.searchTable.status,
            transOrderId: this.searchTable.transOrderId,
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
            this.tableData = res.data.body.transOrderLists;
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
        name: "trans_order_detail",
        query: { id: row.transOrderId },
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