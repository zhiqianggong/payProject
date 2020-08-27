<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/pay_port_list' }">支付接口列表</el-breadcrumb-item>
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
                <el-form-item label="接口代码" label-width="130px" class="reset-select">
                  <el-input disabled v-model="changeMecFrom.ifCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="接口名称" label-width="130px">
                  <el-input disabled v-model="changeMecFrom.ifName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="接口类型" label-width="130px" class="reset-select">
                  <el-select v-model="changeMecFrom.ifTypeCode" placeholder="请选择">
                    <el-option
                      v-for="item in payPort"
                      :key="item.ifTypeCode"
                      :label="item.ifTypeName"
                      :value="item.ifTypeCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="start">
                <el-form-item label="支付类型" label-width="130px" class="reset-select">
                  <el-select v-model="changeMecFrom.payType" placeholder="请选择">
                    <el-option
                      v-for="item in payType"
                      :key="item.payTypeCode"
                      :label="item.payTypeName"
                      :value="item.payTypeCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="应用场景" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.scene">
                    <el-radio border label="1">移动APP</el-radio>
                    <el-radio border label="2">移动网页</el-radio>
                    <el-radio border label="3">PC网页</el-radio>
                    <el-radio border label="4">微信公众号</el-radio>
                    <el-radio border label="5">手机扫码</el-radio>
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
                <el-form-item label="备注信息" label-width="130px">
                  <el-input v-model="changeMecFrom.remark"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="扩展参数" label-width="130px">
                  <el-input
                    type="textarea"
                    placeholder="当支付类型为网银支付时,可配置支持的银行列表.格式如:[{'bank':'zhonghang','code':'300008'},{'bank':'nonghang','code':'300009'}]"
                    v-model="changeMecFrom.param"
                  ></el-input>
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
        createTime: "",
        extra: "",
        ifCode: "",
        ifName: "",
        ifTypeCode: "",
        param: "",
        payType: "",
        remark: "",
        scene: "",
        status: "",
        updateTime: "",
      },
      detailList: null,
      tableData: [],
      search: "",
      dataList: null,
      payAccountList: [],
      payPort: null,
      payType: null,
    };
  },
  methods: {
    getUserDetail() {
      this.axios({
        method: "post",
        url: "/api/config/pay_interface/get",
        data: {
          body: {
            ifCode: this.$route.query.id,
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
              createTime: this.dataList.createTime,
              extra: this.dataList.extra,
              ifCode: this.dataList.ifCode,
              ifName: this.dataList.ifName,
              ifTypeCode: this.dataList.ifTypeCode,
              param: this.dataList.param,
              payType: this.dataList.payType,
              remark: this.dataList.remark,
              scene: String(this.dataList.scene),
              status: String(this.dataList.status),
              updateTime: this.dataList.updateTime,

              // ifTypeCode: this.dataList.ifTypeCode,
              // ifTypeName: this.dataList.ifTypeName,
              // param: this.dataList.param,
              // remark: this.dataList.remark,
              // status: String(this.dataList.status),
              // whiteIp: this.dataList.whiteIp,
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
            // this.getUserDetail();
            this.$router.push("pay_port_list");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toPayList() {
      this.$router.push("pay_port_list");
    },
    getPayType() {
      this.axios({
        method: "post",
        url: "/api/config/common/pay_type_all",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.payType = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPayPort() {
      this.axios({
        method: "post",
        url: "/api/config/common/pay_interface_type_all",
        data: {
          body: {},
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.payPort = res.data.body;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getUserDetail();
    this.getPayPort();
    this.getPayType();
  },
};
</script>

<style>
</style>