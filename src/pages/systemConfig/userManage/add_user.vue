<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/user_list' }">用户列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增用户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>新增用户</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="用户名" label-width="130px">
                  <el-input v-model="changeMecFrom.userName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="用户昵称" label-width="130px">
                  <el-input v-model="changeMecFrom.nickName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="密码" label-width="130px">
                  <el-input v-model="changeMecFrom.passWord" placeholder="请填写6到12位密码" show-password></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="邮箱" label-width="130px">
                  <el-input v-model="changeMecFrom.email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="手机号" label-width="130px">
                  <el-input v-model="changeMecFrom.mobile"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="24">
                <el-form-item label="超级管理" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.isSuperAdmin">
                    <el-radio border label="1">是</el-radio>
                    <el-radio border label="0">否</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="24">
                <el-form-item label="状态" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.status">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="0">关闭</el-radio>
                  </el-radio-group>
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
        userName: "",
        nickName: "",
        passWord: "",
        mobile: "",
        email: "",
        isSuperAdmin: "0",
        status: "1",
      },
      detailList: null,
      tableData: [],
      search: "",
      dataList: null,
      payAccountList: [],
    };
  },
  methods: {
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/sys/user/add",
        data: {
          body: {
            userId: this.changeMecFrom.userId,
            userName: this.changeMecFrom.userName,
            nickName: this.changeMecFrom.nickName,
            passWord: this.changeMecFrom.passWord,
            mobile: this.changeMecFrom.mobile,
            email: this.changeMecFrom.email,
            isSuperAdmin: this.changeMecFrom.isSuperAdmin,
            status: this.changeMecFrom.status,
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
            // this.changeMecFrom = {
            //   userName: "",
            //   nickName: "",
            //   passWord: "",
            //   mobile: "",
            //   email: "",
            //   isSuperAdmin: "0",
            //   status: "1",
            // };
            this.$router.push("user_list");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPayList() {
      this.$router.push("user_list");
    },
  },
  created() {
    this.getUserDetail();
  },
};
</script>

<style>
</style>