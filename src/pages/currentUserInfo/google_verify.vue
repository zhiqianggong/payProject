<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>基本信息</span>
          </div>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div style="line-height: 20px;">
                <span v-if="ggStatus == 0">未绑定: 您未绑定谷歌验证</span>
                <span v-else>已绑定: 您已绑定谷歌验证</span>
                <br />
                <span style="color: orangered;" v-if="ggStatus == 0">提示:为了您的资金安全,请尽快绑定谷歌验证码!</span>
                <div>
                  手机客户端下载地址:
                  <a
                    href="http://shouji.baidu.com/software/item?docid=22417419&amp;from=as"
                    target="_blank"
                  >Android</a> /
                  <a
                    href="https://itunes.apple.com/cn/app/google-authenticator/id388497605?mt=8"
                    target="_blank"
                  >IOS</a>
                </div>
                <el-form :model="form1" label-width="140px" v-if="ggStatus == 1">
                  <el-form-item label="请输入谷歌验证码">
                    <el-input size="medium" v-model="form1.googleCode"></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center;">
              <el-button class="green" type="primary" @click="sonBind" v-if="ggStatus == 0">绑定</el-button>
              <el-button class="red" type="danger" @click="sendClose" v-else>已绑定-解绑</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <!-- 弹窗 -->
    <el-dialog id="google" title="管理员谷歌认证绑定" :visible.sync="googleDialog">
      <img
        style="margin: 0 auto;display: block;"
        :src="'data:image/jpg;base64,'+codeUrl"
        width="300"
        height="300"
      />
      <div style="margin-bottom: 10px;text-align: center;">请使用Google身份验证器扫描上方二维码</div>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="绑定密钥">
          <el-input size="medium" disabled v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="谷歌验证码">
          <el-input size="medium" v-model="form.googleCode"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="green" type="primary" @click="sendBind">绑定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import menu from "@/components/menu";
import header from "@/components/header";
export default {
  data() {
    return {
      dataList: null,
      googleDialog: false,
      codeUrl: "",
      ggStatus: "",
      form: {
        code: "",
        googleCode: "",
      },
      form1: {
        googleCode: "",
      },
    };
  },
  methods: {
    guge() {
      this.axios({
        method: "post",
        url: "/api/sys/user/get_gg",
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
            this.ggStatus = res.data.body.ggStatus;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sonBind() {
      this.axios({
        method: "post",
        url: "/api/sys/user/google_qrcode",
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
            this.codeUrl = res.data.body.qcodeUrl;
            this.form.code = res.data.body.keyval;
            this.googleDialog = true;
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendClose() {
      this.axios({
        method: "post",
        url: "/api/sys/user/unbind_gg_auth",
        data: {
          body: {
            code: this.form1.googleCode,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.messageInfo(res);
            this.$router.go(0);
          } else {
            this.messageInfo(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendBind() {
      this.axios({
        method: "post",
        url: "/api/sys/user/google_bind",
        data: {
          body: {
            code: this.form.googleCode,
          },
          header: {
            token: sessionStorage.token,
            userName: sessionStorage.userName,
          },
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.messageInfo(res);
            this.googleDialog = false;
            this.$router.go(0);
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
    this.guge();
  },
};
</script>

<style>
#google .el-dialog__body {
  padding-top: 0;
  padding-bottom: 0;
}

#google .el-dialog__title {
  font-size: 14px;
}
</style>