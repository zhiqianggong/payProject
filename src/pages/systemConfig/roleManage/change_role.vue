<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/role_list' }">角色管理</el-breadcrumb-item>
      <el-breadcrumb-item>修改角色</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>修改角色</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="角色ID" label-width="130px" class="reset-select">
                  <el-input disabled v-model="changeMecFrom.roleId"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="角色名称" label-width="130px">
                  <el-input v-model="changeMecFrom.roleName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button type="info" class="green" @click="submitForm()">保存</el-button>
                  <el-button plain @click="toPayList">返回</el-button>
                </el-form-item>
              </el-col>
            </el-form>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeMecFrom: {
        roleId: "",
        roleName: "",
      },
      detailList: null,
      tableData: [],
      search: "",
      dataList: null,
      payAccountList: [],
    };
  },
  methods: {
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/sys/role/get",
        data: {
          body: {
            roleId: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.dataList = res.data.body;
            this.changeMecFrom = {
              roleId: this.dataList.roleId,
              roleName: this.dataList.roleName,
            };
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/sys/role/update",
        data: {
          body: {
            roleId: this.$route.query.id,
            roleName: this.changeMecFrom.roleName,
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
            // this.getUserDetail();
            this.$router.push("role_list");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPayList() {
      this.$router.push("role_list");
    },
  },
  created() {
    this.getUserDetail();
  },
};
</script>

<style>
</style>