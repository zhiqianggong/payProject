<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/notify' }">商户通知</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>商户通知</span>
          </div>
          <p>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="订单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.orderId"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.orderType"
              placeholder="类型"
            >
              <el-option label="类型" value=""></el-option>
              <el-option label="支付" value="1"></el-option>
              <el-option label="转账" value="2"></el-option>
              <el-option label="退款" value="3"></el-option>
              <el-option label="代付" value="4"></el-option>
            </el-select>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.status"
              placeholder="通知状态"
            >
              <el-option label="通知状态" value=""></el-option>
              <el-option label="通知中" value="1"></el-option>
              <el-option label="通知成功" value="2"></el-option>
              <el-option label="通知失败" value="3"></el-option>
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
            <el-table-column prop="orderId" label="订单号" min-width="240"></el-table-column>
            <el-table-column prop="mchId" label="商户ID" min-width="110"></el-table-column>
            <el-table-column prop="orderType" label="订单类型" min-width="120">
              <template slot-scope="scope">
                <span>{{scope.row.orderType | typeFilter(typeBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="notifyCount" label="通知次数" min-width="120"></el-table-column>
            <el-table-column prop="status" label="状态" min-width="80">
              <template slot-scope="scope">
                <span>{{scope.row.status | typeFilter(statusBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="lastNotifyTime" label="最后通知" min-width="150">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.lastNotifyTime)}}</span>
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
                  :class="scope.row.status == 2 ? 'reset-button' : 'reset-button yellow'"
                  size="warning"
                  :disabled="scope.row.status == 2"
                  @click="send(scope.row)"
                >重发通知</el-button>
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
      mchId: "",
      pageTotal: null,
      searchTable: {
        orderId: "",
        orderType: "",
        status: "",
      },
      statusBox: [
        {
          color: 'blue',
          key: 1,
          name: "通知中",
        },
        {
          color: 'blue',
          key: 2,
          name: "通知成功",
        },
        {
          color: 'blue',
          key: 3,
          name: "通知失败",
        }
      ],
      typeBox: [
        {
          key: 1,
          name: "支付",
        },
        {
          key: 2,
          name: "转账",
        },
        {
          key: 4,
          name: "退款",
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
      console.log(curTyle)
      return curTyle[0] ? curTyle[0].name : '';
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
        url: "/api/mch_notify/list",
        data: {
          body: {
            orderId: this.searchTable.orderId,
            orderType: this.searchTable.orderType,
            status: this.searchTable.status,
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
            this.tableData = res.data.body.mchNotifyLists;
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
      this.$router.push({ name: "notify_detail", query: { id: row.orderId } });
    },
    send(row) {
      this.axios({
        method: "post",
        url: "/api/mch_notify/resend",
        data: {
          body: {
            orderId: row.orderId,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          this.messageInfo(res);
        })
        .catch((err) => {
          console.log(err);
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