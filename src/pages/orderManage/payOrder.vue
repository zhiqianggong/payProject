<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/payOrder' }">支付订单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>支付订单</span>
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
              placeholder="支付订单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.payOrderId"
            ></el-input>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="商户订单号"
              prefix-icon="el-icon-search"
              v-model="searchTable.mchOrderNo"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.productId"
              placeholder="支付产品"
            >
              <el-option label="支付产品" value=""></el-option>
              <el-option label="数字货币" value="5000"></el-option>
              <el-option label="支付宝话费wap" value="6003"></el-option>
              <el-option label="京东支付" value="7000"></el-option>
              <el-option label="微信H5" value="8001"></el-option>
              <el-option label="微信wap" value="8002"></el-option>
              <el-option label="微信话费" value="8003"></el-option>
              <el-option label="QQ支付" value="8005"></el-option>
            </el-select>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.productType"
              placeholder="产品类型"
            >
              <el-option label="产品类型" value=""></el-option>
              <el-option label="收款" value="1"></el-option>
              <el-option label="充值" value="2"></el-option>
            </el-select>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.status"
              placeholder="订单状态"
            >
              <el-option label="订单状态" value=""></el-option>
              <el-option label="订单生成" value="0"></el-option>
              <el-option label="支付中" value="1"></el-option>
              <el-option label="支付成功" value="2"></el-option>
              <el-option label="支付失败" value="3"></el-option>
              <el-option label="处理完成" value="4"></el-option>
              <el-option label="已退款" value="5"></el-option>
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
            <span style="margin-right:10px;" class="amount blue"><span>提交订单数</span>：{{detailBox.failTotalCount ? detailBox.failTotalCount : 0}} </span>
            <span style="margin-right:10px;" class="amount green"><span>已付订单数</span>：{{detailBox.successTotalCount ? detailBox.successTotalCount : 0}} </span>
            <span style="margin-right:10px;" class="amount red"><span>未付订单数</span>：{{detailBox.failTotalCount ? detailBox.failTotalCount : 0}} </span>
          </el-alert>
          <el-alert class="reset-hint" type="success" :closable="false">
            <span style="margin-right:10px;" class="amount blue"><span>订单总金额</span>：￥{{detailBox.allTotalAmount ? detailBox.allTotalAmount / 100 : 0}}</span>
            <span style="margin-right:10px;" class="amount green"><span>已付总金额</span>：￥{{detailBox.successTotalAmount ? detailBox.successTotalAmount / 100 : 0}}</span>
            <span style="margin-right:10px;" class="amount red"><span>未付总金额</span>：￥{{detailBox.failTotalAmount ? detailBox.failTotalAmount / 100 : 0}}</span> 
            <!-- <span style="margin-right:10px;" class="amount yellow"><span>代理商收入</span>：￥{{detailBox.successTotalAgentProfit ? detailBox.successTotalAgentProfit / 100 : 0}}</span>
            <span class="amount green"><span>平台收入</span>：￥{{detailBox.successTotalPlatProfit / 100}}</span> -->
          </el-alert>
          <el-table ref="table" :data="tableData" style="width: 100%" v-loading="loading" border>
            <el-table-column prop="mchId" label="商户id" min-width="100"></el-table-column>
            <el-table-column prop="mchOrderNo" label="商户单号" min-width="220"></el-table-column>
            <el-table-column prop="payOrderId" label="支付单号" min-width="220"></el-table-column>
            <el-table-column prop="amount" label="支付金额" min-width="80">
              <template slot-scope="scope">
                {{amountFormat(scope.row.amount)}}
              </template>
            </el-table-column>
            <el-table-column prop="productType" label="产品类型" min-width="150">
              <template slot-scope="scope">
                <span>{{scope.row.productType == 1 ? '收款' : '充值'}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="150">
              <template slot-scope="scope">
                <span :style="'color:'+typeBox[scope.row.status].color">{{scope.row.status | typeFilter(typeBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="150">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.createTime)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="140">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  size="warning"
                  @click="searchDetail(scope.row)"
                >查看</el-button>
                <el-button
                  :class="scope.row.status == 3 || scope.row.status == 0? 'reset-button' : 'reset-button yellow'"
                  size="warning"
                  :disabled="scope.row.status == 3 || scope.row.status == 0"
                  @click="order(scope.row)"
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
    <el-dialog
      title="确认补单，请输入超级密码"
      :visible.sync="orderDialog"
      :before-close="handleClose"
      min-width="300px"
    >
      <el-row :gutter="10">
        <el-form>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="超级密码" label-width="100px">
              <el-input v-model="supPassword" show-password></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer" style="text-align:center">
        <el-button type="primary" @click="submitOrder">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderDialog: false,
      supPassword: "",
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
      searchTable: {
        mchId: "",
        mchOrderNo: "",
        payOrderId: "",
        productId: "",
        productType: "",
        status: "",
      },
      payOrderId: "",
      mchId: "",
      pageTotal: null,
      typeBox: [
        {
          color: "blue",
          key: 0,
          name: "订单生成",
        },
        {
          color: "orangered",
          key: 1,
          name: "支付中",
        },
        {
          color: "green",
          key: 2,
          name: "支付成功",
        },
        {
          color: "red",
          key: 3,
          name: "支付失败",
        },
        {
          color: "darkgreen",
          key: 4,
          name: "处理完成",
        },
        {
          color: "red",
          key: 5,
          name: "已退款",
        },
      ],
      detailBox: []
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
    handleClose(done) {
      this.supPassword = "";
      done();
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTableData();
    },
    getDetail() {
      this.axios({
        method: "post",
        url: "/api/pay_order/count",
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
            this.detailBox = res.data.body
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTableData() {
      this.loading = true;
      this.axios({
        method: "post",
        url: "/api/pay_order/list",
        data: {
          body: {
            createTimeEnd: this.data[1] ? this.data[1] : "",
            createTimeStart: this.data[0] ? this.data[0] : "",
            mchId: this.searchTable.mchId,
            mchOrderNo: this.searchTable.mchOrderNo,
            payOrderId: this.searchTable.payOrderId,
            productId: this.searchTable.productId,
            productType: this.searchTable.productType,
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
            this.tableData = res.data.body.payOrderLists;
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
      this.$router.push({ name: "pay_order_detail", query: { id: row.payOrderId } });
    },
    order(row) {
      this.payOrderId = row.payOrderId;
      this.orderDialog = true;
    },
    submitOrder() {
      this.axios({
        method: "post",
        url: "/api/pay_order/reissue",
        data: {
          body: {
            password: this.supPassword,
            payOrderId: this.payOrderId,
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
            this.orderDialog = false;
            this.supPassword = '';
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