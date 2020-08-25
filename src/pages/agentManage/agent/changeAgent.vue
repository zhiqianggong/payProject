<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/agentList' }">代理商列表</el-breadcrumb-item>
      <el-breadcrumb-item>修改代理商</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              修改代理商
              <span style="color: red;font-size: 13px;padding-left:15px;">带 * 选项为必填项</span>
            </span>
          </div>
          <el-alert class="reset-hint" title="基本信息" type="success" :closable="false"></el-alert>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="代理商名称" label-width="130px">
                  <el-input v-model="changeMecFrom.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="所属总代理" label-width="130px" class="reset-select">
                  <el-select v-model="changeMecFrom.agentId" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="用户登录名" label-width="130px">
                  <el-input v-model="changeMecFrom.userName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="真实姓名" label-width="130px">
                  <el-input v-model="changeMecFrom.email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="身份证号" label-width="130px">
                  <el-input v-model="changeMecFrom.email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="手机号" label-width="130px">
                  <el-input
                    v-model="changeMecFrom.mobile"
                    oninput="value=value.replace(/[^\d]/g, '')"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="座机号码" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="QQ号" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="邮箱" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="通讯地址" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="线下充值费率(%)" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="状态" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.googleAuthStatus">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="0">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-alert class="reset-hint" title="银行账号" type="success" :closable="false"></el-alert>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="开户行名称" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="开户网点名称" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="账户名" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="账户号" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="开户所在省" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="开户所在市" label-width="130px">
                  <el-input v-model="changeMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-alert class="reset-hint" title="安全信息" type="success" :closable="false"></el-alert>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="谷歌验证" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.googleAuthStatus">
                    <el-radio border label="0">未绑定</el-radio>
                    <el-radio border label="1">已绑定</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item class="reset-select" label="登录安全类型" label-width="130px">
                  <el-select v-model="changeMecFrom.loginSecurityType" placeholder="请选择">
                    <el-option label="仅登录密码验证" value="1"></el-option>
                    <el-option label="登录密码+谷歌组合验证" value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item class="reset-select" label="支付安全类型" label-width="130px">
                  <el-select v-model="changeMecFrom.paySecurityType" placeholder="请选择">
                    <el-option label="无需验证" value="0"></el-option>
                    <el-option label="仅支付密码验证" value="1"></el-option>
                    <el-option label="仅谷歌验证" value="2"></el-option>
                    <el-option label="支付密码+谷歌组合验证" value="3"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="登录密码" label-width="130px">
                  <el-input v-model="changeMecFrom.password" placeholder="若修改请输入新密码，8-16位的字母和数字组合"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="支付密码" label-width="130px">
                  <el-input
                    v-model="changeMecFrom.payPassword"
                    placeholder="若修改请输入新密码，8-16位的字母和数字组合"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button type="info" class="green" @click="submitForm()">添加</el-button>
                  <el-button plain @click="$router.push('/agentList')">返回</el-button>
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
        agentId: "",
        agentpayBalance: 0,
        agentpayBlackIp: "",
        agentpayWhiteIp: "",
        balance: 0,
        email: "",
        googleAuthStatus: "0",
        loginBlackIp: "",
        loginSecurityType: "1",
        loginWhiteIp: "",
        mchId: 0,
        mchRate: "",
        mobile: 0,
        name: "",
        password: "",
        payBlackIp: "",
        payPassword: "",
        paySecurityType: "1",
        payWhiteIp: "",
        securityMoney: 0,
        userName: "",
      },
      detailList: null,
      tableData: [],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/mch_info/get",
        data: {
          body: {
            mchId: this.$route.query.id,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.detailList = res.data.body;
            this.changeMecFrom.name = this.detailList.name;
            this.changeMecFrom.userName = this.detailList.userName;
            this.changeMecFrom.email = this.detailList.email;
            this.changeMecFrom.mobile = this.detailList.mobile;
            this.changeMecFrom.mchRate = this.detailList.mchRate
              ? this.detailList.mchRate
              : 0;
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
        url: "/api/mch_info/update",
        data: {
          body: {
            agentId: this.changeMecFrom.agentId,
            agentpayBalance: this.changeMecFrom.agentpayBalance,
            agentpayBlackIp: this.changeMecFrom.agentpayBlackIp,
            agentpayWhiteIp: this.changeMecFrom.agentpayWhiteIp,
            balance: this.changeMecFrom.balance,
            email: this.changeMecFrom.email,
            googleAuthStatus: this.changeMecFrom.googleAuthStatus,
            loginBlackIp: this.changeMecFrom.loginBlackIp,
            loginSecurityType: this.changeMecFrom.loginSecurityType,
            loginWhiteIp: this.changeMecFrom.loginWhiteIp,
            mchId: this.$route.query.id,
            mchRate: this.changeMecFrom.mchRate,
            mobile: this.changeMecFrom.mobile,
            name: this.changeMecFrom.name,
            password: this.changeMecFrom.password,
            payBlackIp: this.changeMecFrom.payBlackIp,
            payPassword: this.changeMecFrom.payPassword,
            paySecurityType: this.changeMecFrom.paySecurityType,
            payWhiteIp: this.changeMecFrom.payWhiteIp,
            securityMoney: this.changeMecFrom.securityMoney,
            userName: this.changeMecFrom.userName,
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
            this.changeMecFrom = {
              agentId: "",
              agentpayBalance: 0,
              agentpayBlackIp: "",
              agentpayWhiteIp: "",
              balance: 0,
              email: "",
              googleAuthStatus: "0",
              loginBlackIp: "",
              loginSecurityType: "1",
              loginWhiteIp: "",
              mchId: 0,
              mchRate: "",
              mobile: 0,
              name: "",
              password: "",
              payBlackIp: "",
              payPassword: "",
              paySecurityType: "1",
              payWhiteIp: "",
              securityMoney: 0,
              userName: "",
            };
            this.getUserDetail();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getUserDetail();
  },
};
</script>

<style>
</style>