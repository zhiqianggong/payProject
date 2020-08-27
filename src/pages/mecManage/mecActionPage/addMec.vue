<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/allMec' }">商户列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/addMec' }">新增商户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              新增商户
              <span style="color: red;font-size: 13px;padding-left:15px;">带 * 选项为必填项</span>
            </span>
          </div>
          <el-row :gutter="10">
            <el-form :model="addMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="商户名称" label-width="130px">
                  <el-input v-model="addMecFrom.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="所属代理商" label-width="130px" class="reset-select">
                  <el-select v-model="addMecFrom.agentId" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="用户名" label-width="130px">
                  <el-input v-model="addMecFrom.userName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="邮箱" label-width="130px">
                  <el-input v-model="addMecFrom.email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="手机号" label-width="130px">
                  <el-input v-model="addMecFrom.mobile" oninput="value=value.replace(/[^\d]/g, '')"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="线下充值费率(%)" label-width="130px">
                  <el-input v-model="addMecFrom.mchRate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="商户状态" label-width="130px">
                  <el-radio-group v-model="addMecFrom.status">
                    <el-radio border label="1">启用</el-radio>
                    <el-radio border label="0">停止</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="代付金额" label-width="130px">
                  <el-input v-model="addMecFrom.agentpayBalance"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="保证金" label-width="130px">
                  <el-input v-model="addMecFrom.securityMoney"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="余额" label-width="130px">
                  <el-input v-model="addMecFrom.balance"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button type="info" class="green" @click="submitForm()">添加</el-button>
                  <el-button plain @click="$router.push('/allMec')">返回</el-button>
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
      addMecFrom: {
        email: "",
        mchRate: "",
        mobile: "",
        name: "",
        securityMoney: "0",
        userName: "",
        balance: "0",
        agentpayBalance: "0",
        agentId: "",
        status: "1",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王三虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王二虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
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
    submitForm() {
      if (
        this.addMecFrom.email == "" ||
        this.addMecFrom.mobile == "" ||
        this.addMecFrom.userName == "" ||
        this.addMecFrom.name == "" ||
        this.addMecFrom.mchRate == ""
      ) {
        this.$message({
          message: "请填写必填项",
          type: "warning",
        });
        return;
      }
      this.axios({
        method: "post",
        url: "/api/mch_info/add",
        data: {
          body: {
            email: this.addMecFrom.email,
            mchRate: this.addMecFrom.mchRate,
            mobile: this.addMecFrom.mobile,
            name: this.addMecFrom.name,
            securityMoney: this.addMecFrom.securityMoney,
            userName: this.addMecFrom.userName,
            balance: this.addMecFrom.balance,
            agentpayBalance: this.addMecFrom.agentpayBalance,
            agentId: this.addMecFrom.agentId,
            status: this.addMecFrom.status,
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
            this.$router.push('allMec');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>