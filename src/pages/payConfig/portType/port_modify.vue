<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/port_type_list' }">接口类型列表</el-breadcrumb-item>
      <el-breadcrumb-item>支付接口配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>支付接口配置</span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="接口类型代码" label-width="130px" class="reset-select">
                  <el-input disabled v-model="changeMecFrom.ifTypeCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="接口类型名称" label-width="130px">
                  <el-input disabled v-model="changeMecFrom.ifTypeName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="状态" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.status">
                    <el-radio border label="1">开启</el-radio>
                    <el-radio border label="0">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="备注信息" label-width="130px">
                  <el-input v-model="changeMecFrom.remark"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="回调IP白名单" label-width="130px">
                  <el-input v-model="changeMecFrom.whiteIp"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="配置定义描述" label-width="130px">
                  <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" v-model="changeMecFrom.param"></el-input>
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
        ifTypeCode: "",
        ifTypeName: "",
        param: "",
        remark: "",
        status: "",
        whiteIp: "",
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
        url: "/api/config/pay_interface_type/get",
        data: {
          body: {
            ifTypeCode: this.$route.query.id,
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
              ifTypeCode: this.dataList.ifTypeCode,
              ifTypeName: this.dataList.ifTypeName,
              param: this.dataList.param,
              remark: this.dataList.remark,
              status: String(this.dataList.status),
              whiteIp: this.dataList.whiteIp,
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
        url: "/api/config/pay_interface_type/update",
        data: {
          body: {
            ifTypeCode: this.changeMecFrom.ifTypeCode,
            ifTypeName: this.changeMecFrom.ifTypeName,
            param: this.changeMecFrom.param,
            remark: this.changeMecFrom.remark,
            status: this.changeMecFrom.status,
            whiteIp: this.changeMecFrom.whiteIp,
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
            this.getUserDetail();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPayList() {
      this.$router.push("port_type_list");
    },
  },
  created() {
    this.getUserDetail();
  },
};
</script>

<style>
</style>