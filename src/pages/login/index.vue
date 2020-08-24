<template id="pages">
  <div id="login_frame">
    <h3 id="image_logo">账号登录</h3>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="60px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号">
        <el-input v-model.number="ruleForm.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <p style="text-align: right;">
        还不是会员? 点击
        <router-link style="color: #000" :to="{name:'signin'}">注册账号</router-link>
      </p> -->
      <p style="text-align: center;">
        <el-button @click="submitForm('ruleForm')" plain round>点击登录</el-button>
      </p>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "pages",
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
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        user: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
      selfConfigMenuMap: [
        {
          resourceId: 10,
          icon: 'el-icon-user-solid',
          list: [
            {
              resourceId: 11,
              name: "allMec",
            },
            {
              resourceId: 38,
              name: "fund",
            },
            {
              resourceId: 95,
              name: "appManage",
            },
          ],
        },
        {
          resourceId: 67,
          icon: 'el-icon-s-check',
          list: [
            {
              resourceId: 68,
              name: "agentList",
            },
            {
              resourceId: 97,
              name: "historyList",
            },
          ],
        },
        {
          resourceId: 16,
          icon: 'el-icon-notebook-1',
          list: [
            {
              resourceId: 17,
              name: "payOrder",
            },
            {
              resourceId: 18,
              name: "transOrder",
            },
            {
              resourceId: 21,
              name: "notify",
            },
            {
              resourceId: 128,
              name: "pay_cash_coll_record",
            },
          ],
        },
        {
          resourceId: 41,
          icon: 'el-icon-coin',
          list: [
            {
              resourceId: 122,
              name: "pay_type",
            },
            {
              resourceId: 82,
              name: "port_type_list",
            },
            {
              resourceId: 83,
              name: "pay_port_list",
            },
            {
              resourceId: 84,
              name: "pay_passage_config",
            },
            {
              resourceId: 85,
              name: "pay_product_list",
            },
            {
              resourceId: 112,
              name: "/2",
            },
            {
              resourceId: 126,
              name: "/3",
            },
            {
              resourceId: 127,
              name: "/4",
            },
          ],
        },
        {
          resourceId: 22,
          icon: 'el-icon-s-claim',
          list: [
            {
              resourceId: 23,
              name: "settlement_audit_list",
            },
            {
              resourceId: 24,
              name: "remit_list",
            },
            {
              resourceId: 25,
              name: "settlement_records_list",
            },
            {
              resourceId: 121,
              name: "settlement_setting_list",
            },
          ],
        },
        {
          resourceId: 93,
          icon: 'el-icon-s-finance',
          list: [
            {
              resourceId: 133,
              name: "payment_audit",
            },
            {
              resourceId: 94,
              name: "payment_order",
            },
            {
              resourceId: 98,
              name: "payment_order_list",
            },
          ],
        },
        {
          resourceId: 138,
          icon: 'el-icon-s-finance',
          list: [
            {
              resourceId: 139,
              name: "oilCard_order",
            },
            {
              resourceId: 140,
              name: "oilCard_order_list",
            },
          ],
        },
        {
          resourceId: 135,
          icon: 'el-icon-s-finance',
          list: [
            {
              resourceId: 136,
              name: "telephone_order",
            },
            {
              resourceId: 137,
              name: "telephone_order_list",
            },
          ],
        },
        {
          resourceId: 99,
          icon: 'el-icon-s-data',
          list: [
            {
              resourceId: 100,
              name: "com_ranking",
            },
            {
              resourceId: 101,
              name: "agent_ranking",
            },
            {
              resourceId: 102,
              name: "pay_ranking",
            },
            {
              resourceId: 129,
              name: "success_list",
            },
          ],
        },
        {
          resourceId: 27,
          icon: 'el-icon-s-management',
          list: [
            {
              resourceId: 39,
              name: "merchant_statement",
            },
          ],
        },
        {
          resourceId: 31,
          icon: 'el-icon-s-tools',
          list: [
            {
              resourceId: 32,
              name: "/user_list",
            },
            {
              resourceId: 33,
              name: "role_list",
            },
            {
              resourceId: 34,
              name: "resource_manage",
            },
            {
              resourceId: 35,
              name: "/19",
            },
            {
              resourceId: 125,
              name: "syslog",
            },
          ],
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    submitForm() {
      this.axios({
        method: "post",
        url: "/api/auth",
        data: {
          body: {
            password: this.ruleForm.pass,
            userName: this.ruleForm.user,
          },
          header: {
            token: "",
            userName: "",
          },
        },
      })
        .then((res) => {
          this.messageInfo(res);
          if (res.data.code == 200) {
            this.changeLogin({ token: res.data.body.token });
            sessionStorage.setItem("isSuperAdmin", res.data.body.isSuperAdmin);
            sessionStorage.setItem("userName", this.ruleForm.user);
            this.axios({
              method: "post",
              url: "/api/menu",
              data: {
                body: {
                  isSuperAdmin: sessionStorage.isSuperAdmin,
                  userName: sessionStorage.userName,
                },
                header: {
                  token: sessionStorage.token,
                  userName: sessionStorage.userName,
                },
              },
            })
              .then((res) => {
                if (res.data.code == 500) {
                  this.messageInfo(res);
                } else {
                  let menuMap = res.data.body.menu;
                  let arr2 = [];
                  menuMap.filter((menuDate) => {
                    this.selfConfigMenuMap.filter((selfConfig) => {
                      if (menuDate.resourceId == selfConfig.resourceId) {
                        let cur = {
                          name: menuDate.title,
                          icon: selfConfig.icon,
                          resourceId: menuDate.resourceId,
                        };
                        if (menuDate.list.length > 0) {
                          cur.list = [];
                          menuDate.list.filter((menuList) => {
                            selfConfig.list.filter((selfList) => {
                              if (menuList.resourceId == selfList.resourceId) {
                                cur.list.push({
                                  resourceId: menuList.resourceId,
                                  name: menuList.title,
                                  path: selfList.name,
                                });
                              }
                            });
                          });
                        }
                        arr2.push(cur);
                      }
                    });
                  });
                  sessionStorage.setItem(
                    "menu",
                    JSON.stringify(arr2)
                  );
                  sessionStorage.setItem("loginState", "true");
                  this.$router.go(0);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    if (sessionStorage.jianquan) {
      this.$message({
        message: sessionStorage.jianquan,
        type: "warning",
      });
      sessionStorage.clear();
    }
  },
};
</script>

<style>
body {
  background: #ffffff url("../../assets/login-bcg.jpg") repeat;
}

#login_frame {
  width: 400px;
  height: 195px;
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