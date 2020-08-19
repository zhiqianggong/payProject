<template id="pages">
  <div id="login_frame">
    <h3 id="image_logo">注册成为会员</h3>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <p style="text-align: right;">已经有账号? <router-link style="color: #000" :to="{name:'login'}">点击登录</router-link></p>
      <p style="text-align: center;">
        <el-button type="primary" @click="submitForm('ruleForm')" plain round>点击注册</el-button>
      </p>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "pages",
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    submitForm(){}
  }
};
</script>

<style>
body {
  background: #ffffff url("../../assets/login-bcg.jpg") repeat;
}

#login_frame {
  width: 400px;
  height: 300px;
  padding: 15px 35px 45px 26px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -200px;

  background-color: rgba(240, 255, 255, 0.5);

  border-radius: 10px;
  text-align: center;
}

form p > * {
  display: inline-block;
  vertical-align: baseline;
}

#image_logo {
  margin-top: 22px;
}

.label_input {
  font-size: 14px;
  font-family: 宋体;

  width: 65px;
  height: 28px;
  line-height: 28px;
  text-align: center;

  color: white;
  background-color: #3cd8ff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.text_field {
  width: 278px;
  height: 28px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 0;
}

#btn_login {
  font-size: 14px;
  font-family: 宋体;

  width: 120px;
  height: 28px;
  line-height: 28px;
  text-align: center;

  color: white;
  background-color: #3bd9ff;
  border-radius: 6px;
  border: 0;

  float: left;
}

#forget_pwd {
  font-size: 12px;
  color: white;
  text-decoration: none;
  position: relative;
  float: right;
  top: 5px;
}

#forget_pwd:hover {
  color: blue;
  text-decoration: underline;
}

#login_control {
  padding: 0 28px;
}
</style>