<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user_list' }">操作日志</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>操作日志</span>
          </div>
          <p>
            <el-input
              size="small"
              style="width:150px; margin: 0 5px 5px 0"
              placeholder="用户ID"
              prefix-icon="el-icon-search"
              v-model="searchTable.userId"
            ></el-input>
            <el-select
              style="width:150px; margin: 0 5px 5px 0"
              size="small"
              v-model="searchTable.system"
              placeholder="选择系统"
            >
              <el-option label="所属系统" value></el-option>
              <el-option label="运营平台" value="1"></el-option>
              <el-option label="商户平台" value="2"></el-option>
              <el-option label="代理商系统" value="3"></el-option>
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
          <el-table
            ref="table"
            :data="tableData"
            style="width: 100%"
            v-loading="loading"
            @selection-change="handleSelectionChange"
            border
          >
            <el-table-column prop="userId" label="用户ID" min-width="100"></el-table-column>
            <el-table-column prop="userName" label="用户名" min-width="120"></el-table-column>
            <el-table-column prop="userIp" label="用户IP" min-width="120"></el-table-column>
            <el-table-column prop="system" label="系统" min-width="120">
              <template slot-scope="scope">
                <span
                  :style="'color:'+statusBox[scope.row.system].color"
                >{{scope.row.system | typeFilter(statusBox)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="methodRemark" label="业务描述" min-width="120"></el-table-column>
            <el-table-column prop="methodName" label="方法" min-width="220"></el-table-column>
            <el-table-column prop="optReqParam" label="请求参数" min-width="450"></el-table-column>
            <el-table-column prop="optResInfo" label="响应结果" min-width="450"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="150">
              <template slot-scope="scope">{{getLocalTime(scope.row.createTime)}}</template>
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
    <!-- 弹窗 -->
    <el-dialog
      title="新建角色"
      :visible.sync="dialogRolu"
      min-width="250px"
      :before-close="handleClose"
      v-dialogDrag
    >
      <el-row :gutter="10">
        <el-form>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="角色名" label-width="130px">
              <el-input v-model="roleName" placeholder="请输入角色名"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="roleSubmit">保存</el-button>
        <el-button @click="closeDia">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addMec: false,
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      pageTotal: null,
      mchId: "",
      changeRolu: {},
      dialogRolu: false,
      isAdd: "",
      amountTitle: "",
      amountDetailBox: {
        balance: "",
      },
      roleName: "",
      selectUserList: "",
      manageMap: null,
      searchTable: {
        status: "",
        system: "",
        userId: "",
      },
      statusBox: [
        {
          color: "green",
          key: 1,
          name: "运营平台",
        },
        {
          color: "orangered",
          key: 2,
          name: "商户平台",
        },
        {
          color: "bule",
          key: 3,
          name: "代理商系统",
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
    deleteCurUser(row) {
      console.log(row);
      this.selectUserList = row.resourceId + ",";
      this.deleteUser();
    },
    deleteUser() {
      if (this.selectUserList == "") {
        this.$message({
          message: "请勾选需要删除的用户",
          type: "warning",
        });
        return;
      }
      this.axios({
        method: "post",
        url: "/api/sys/resource/delete",
        data: {
          body: {
            resourceId: this.selectUserList.substring(
              0,
              this.selectUserList.length - 1
            ),
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
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleSelectionChange(val) {
      if (val.length > 0) {
        val.forEach((element) => {
          this.selectUserList += element.resourceId + ",";
        });
      }
    },
    searchAmount() {
      this.currentPage = 1;
      this.getTableData();
    },
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
        url: "/api/sys/syslog/list",
        data: {
          body: {
            pageIndex: this.currentPage,
            pageSize: this.pagesize,
            system: this.searchTable.system,
            userId: this.searchTable.userId,
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
            this.tableData = res.data.body.logDetailList;
            this.pageTotal = res.data.body.count;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchMchid() {
      this.currentPage = 1;
      this.pagesize = 10;
      this.getTableData();
    },
    changeSwitch(row) {
      this.axios({
        method: "post",
        url: "/api/sys/user/update",
        data: {
          body: {
            userId: row.userId,
            status: row.status,
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
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClose(done) {
      this.roleName = "";
      done();
    },
    modifyUser(index, row) {
      this.$router.push({
        name: "resource_modify",
        query: { id: row.resourceId },
      });
    },
    addSon(index, row) {
      this.addResource(1, row);
    },
    addResource(val, row) {
      if (val == 1) {
        this.$router.push({
          name: "resource_add",
          query: { id: row.resourceId },
        });
      } else {
        this.$router.push("resource_add");
      }
    },
    rolu(index, row) {
      this.$router.push({
        name: "resource_detail",
        query: { id: row.resourceId },
      });
    },
    searchRole(row) {
      this.userId = row.userId;
      this.axios({
        method: "post",
        url: "/api/sys/user/user_role_view",
        data: {
          body: {
            userId: row.userId,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            if (res.data.body) {
              for (let i = 0; i < res.data.body.length; i++) {
                if (res.data.body[i].checked == 1) {
                  res.data.body[i].checked = true;
                } else {
                  res.data.body[i].checked = false;
                }
              }
            }
            this.manageMap = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    roleSubmit() {
      this.axios({
        method: "post",
        url: "/api/sys/role/add",
        data: {
          body: {
            roleName: this.roleName,
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
            this.dialogRolu = false;
            this.getTableData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closeDia() {
      this.dialogRolu = false;
      this.roleName = "";
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
.el-dialog__footer {
  text-align: center;
}

.el-message-box__btns button:nth-child(1) {
  float: right;
  margin-left: 10px;
}

.tingzhi {
  position: absolute;
  left: 33px;
  font-size: 13px;
  color: #fff;
}

.qiyong {
  position: absolute;
  left: 19px;
  font-size: 13px;
  color: #fff;
}
</style>