<template>
  <div class="right-box">
    <span class="btn" style="margin-right: 10px;" @click="guge">
      <i class="el-icon-edit-outlin"></i> 谷歌验证码
    </span>
    <span class="btn" @click="toUserInfo" style="margin-right: 10px;">
      <i class="el-icon-view"></i>
      基本信息
    </span>
    <span class="btn" style="margin-right: 10px;" @click="changePassword">
      <i class="el-icon-edit-outlin"></i> 修改密码
    </span>
    <span class="btn" @click="tologin">
      <img class="img" src="../../assets/sign-out.png" />
      退出
    </span>
    <el-dialog title="修改密码" :visible.sync="dialogVisible" width="200" :before-close="handleClose">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名">
          <el-input v-model="ruleForm.userName" disabled></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPass">
          <el-input type="password" v-model="ruleForm.newPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false,
      ruleForm: {
        newPass: "",
        checkPass: "",
        pass: "",
        userName: "",
      },
      rules: {
        newPass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose(done) {
      this.ruleForm = {
        newPass: "",
        checkPass: "",
        pass: "",
        userName: "",
      };
      done();
    },
    submit() {
      if (this.checkPass != this.pass) {
        return;
      }
      this.axios({
        method: "post",
        url: "/api/pwd_update",
        data: {
          body: {
            newPassword: this.ruleForm.newPass,
            oldPassword: this.ruleForm.pass,
            userName: this.ruleForm.userName,
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
            this.ruleForm = {
              newPass: "",
              checkPass: "",
              pass: "",
              userName: "",
            };
            this.dialogVisible = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changePassword() {
      this.ruleForm.userName = sessionStorage.userName;
      this.dialogVisible = true;
    },
    tologin() {
      sessionStorage.clear();
      sessionStorage.setItem("jianquan", "已退出登录");
      this.$router.go(0);
    },
    toUserInfo() {
      this.$router.push("userInfo");
    },
    guge() {
      this.$router.push("google_verify");
    }
  },
};
</script>

<style scoped>
.el-menu {
  border: none;
}

.header-box {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-header,
.el-footer {
  background-color: #262d40;
  color: #333;
  line-height: 60px;
  padding: 0 !important;
}

.el-header {
  position: relative;
}

.el-header i {
  font-size: 24px;
}

.right-box {
  position: absolute;
  top: 0;
  right: 20px;
  color: #fff;
}

.right-box .img {
  width: 18px;
  vertical-align: middle;
}

.right-box {
  color: #e1e4f6 !important;
  font-size: 14px !important;
  font-weight: normal !important;
}

.el-aside {
  background-color: rgb(61, 61, 61);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f0f2f5;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.icons {
  width: 25px;
  height: 60px;
  line-height: 68px;
  padding: 0 20px;
  text-align: center;
}

.icons:hover {
  background: rgb(42, 38, 64);
  transition: 1s;
  cursor: pointer;
}

a {
  text-decoration: none;
}

.el-header i {
  font-size: 17px;
  vertical-align: middle;
}

.right-box .btn:hover {
  cursor: pointer;
}
</style>