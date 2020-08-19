<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user_list' }">用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card reset-card">
          <div slot="header" class="clearfix">
            <span>用户列表</span>
          </div>
          <p>
            <el-input
              size="small"
              style="width:205px"
              placeholder="用户ID"
              prefix-icon="el-icon-search"
              v-model="userId"
            ></el-input>
            <el-input
              size="small"
              style="width:205px"
              placeholder="用户名"
              prefix-icon="el-icon-search"
              v-model="userName"
            ></el-input>
            <el-button
              size="small"
              class="green"
              style="margin-left:10px;"
              type="info"
              @click="searchMchid"
            >
              <i class="el-icon-search"></i> 搜索
            </el-button>
            <el-button
              type="success"
              size="small"
              class="green"
              style="margin-left:10px;"
              @click="$router.push('/add_user')"
            >
              <i class="el-icon-plus"></i> 新增
            </el-button>
            <el-button
              size="small"
              class="red"
              style="margin-left:10px;"
              type="info"
              @click="deleteUser"
            >删除</el-button>
          </p>
          <el-table
            ref="table"
            :data="tableData"
            style="width: 100%"
            v-loading="loading"
            @selection-change="handleSelectionChange"
            border
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="userId" label="用户ID" min-width="100"></el-table-column>
            <el-table-column prop="userName" label="用户名" min-width="100"></el-table-column>
            <el-table-column prop="nickName" label="用户昵称" min-width="100"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="150">
              <template slot-scope="scope">
                <span>{{getLocalTime(scope.row.createTime)}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="商户状态" width="100">
              <template slot-scope="scope">
                <el-switch
                  class="switchStyle"
                  active-text="启用"
                  inactive-text="关闭"
                  v-model="scope.row.status"
                  :active-value="1"
                  :inactive-value="0"
                  active-color="#1ab394"
                  inactive-color="#f56c6c"
                  :width="60"
                  @change="changeSwitch(scope.row)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" style="text-align: center;" min-width="230">
              <template slot-scope="scope">
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="rolu(scope.$index, scope.row)"
                >分配角色</el-button>
                <el-button
                  class="reset-button green"
                  type="success"
                  @click="modifyUser(scope.$index, scope.row)"
                >编辑</el-button>
                <el-button
                  class="reset-button red"
                  type="success"
                  @click="deleteCurUser(scope.row)"
                >删除</el-button>
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
    <!-- 弹窗 -->
    <el-dialog
      title="分配角色"
      :visible.sync="dialogRolu"
      min-width="250px"
      :before-close="handleClose"
      v-dialogDrag
    >
      <el-row :gutter="10">
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          v-for="(checkedItem,index) in manageMap"
          :key="index"
        >
          <el-checkbox v-model="checkedItem.checked">{{checkedItem.roleName}}</el-checkbox>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="roleSubmit">保存</el-button>
        <el-button @click="dialogRolu = false">取 消</el-button>
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
      userName: "",
      userId: "",
      mchId: "",
      changeRolu: {},
      dialogRolu: false,
      isAdd: "",
      amountTitle: "",
      amountDetailBox: {
        balance: "",
      },
      selectUserList: "",
      manageMap: null,
    };
  },
  methods: {
    deleteCurUser(row) {
      this.selectUserList = row.userId + ",";
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
        url: "/api/sys/user/delete",
        data: {
          body: {
            userIds: this.selectUserList.substring(
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
          this.selectUserList += element.userId + ",";
        });
      }
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
        url: "/api/sys/user/list",
        data: {
          body: {
            userId: this.userId,
            userName: this.userName,
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
            this.tableData = res.data.body.sysUserList;
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
      done();
    },
    modifyUser(index, row) {
      this.$router.push({ name: "modify_user", query: { id: row.userId } });
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
      let curSelect = "";
      for (let i = 0; i < this.manageMap.length; i++) {
        if (this.manageMap[i].checked == true) {
          curSelect += this.manageMap[i].roleId + ",";
        }
      }
      this.axios({
        method: "post",
        url: "/api/sys/user/user_role_save",
        data: {
          body: {
            roleIds: curSelect.substring(0, curSelect.length - 1),
            userId: this.userId,
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
    rolu(index, row) {
      this.searchRole(row);
      this.dialogRolu = true;
      // this.$router.push({ name: "settleAgent", query: { id: row.mchId } });
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