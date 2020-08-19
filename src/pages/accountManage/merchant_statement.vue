<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>商户对账单</span>
          </div>
          <p>
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
              placeholder="对账日期"
              prefix-icon="el-icon-search"
              v-model="searchTable.billDate"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.status"
              placeholder="状态"
            >
              <el-option label="状态" value></el-option>
              <el-option label="未生成" value="0"></el-option>
              <el-option label="已生成" value="1"></el-option>
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
            <el-table-column prop="billDate" label="对账日期" min-width="240">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.billDate)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="mchId" label="商户ID" min-width="120"></el-table-column>
            <el-table-column prop="mchType" label="商户类型" min-width="120">
              <template slot-scope="scope">
                <span>{{scope.row.settStatus | typeFilter(typeBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="150">
              <template slot-scope="scope">
                <span>{{scope.row.settStatus | typeFilter(statusBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="80"></el-table-column>
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
        billDate: "",
        mchId: "",
        status: "",
      },
      typeBox: [
        {
          key: 1,
          name: "平台账户",
        },
        {
          key: 2,
          name: "私有账户",
        },
      ],
      statusBox: [
        {
          key: 0,
          name: "初始",
        },
        {
          key: 1,
          name: "生成中",
        },
        {
          key: 2,
          name: "已生成",
        },
        {
          key: 3,
          name: "生成失败",
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
        url: "/api/bill/mch/list",
        data: {
          body: {
            billDate: this.searchTable.billDate,
            mchId: this.searchTable.mchId,
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
            this.tableData = res.data.body.billDetailList;
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