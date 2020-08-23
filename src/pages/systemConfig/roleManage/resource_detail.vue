<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/resource_manage' }">资源列表</el-breadcrumb-item>
      <el-breadcrumb-item>添加资源</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              添加资源
              <!-- <span style="color: red;font-size: 13px;padding-left:15px;">带 * 选项为必填项</span> -->
            </span>
          </div>
          <el-row :gutter="10">
            <el-form :model="changeMecFrom">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="资源名称" label-width="130px">
                  <el-input v-model="changeMecFrom.name" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="资源标题" label-width="130px">
                  <el-input v-model="changeMecFrom.title" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="资源类型" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.type" disabled>
                    <el-radio border label="1">菜单</el-radio>
                    <el-radio border label="2">按钮</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="所属系统" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.system" disabled>
                    <el-radio border label="1">运营平台</el-radio>
                    <el-radio border label="2">商户系统</el-radio>
                    <el-radio border label="3">代理商系统</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="排序值" label-width="130px">
                  <el-input v-model="changeMecFrom.orderNum" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="属性" label-width="130px">
                  <el-input
                  disabled
                    v-model="changeMecFrom.property"
                    placeholder="属性,为空都可见.否则对应商户类型,如1 表示平台账户可见, 1,2 表示平台账户和私有账户都可见"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="状态" label-width="130px">
                  <el-radio-group v-model="changeMecFrom.status" disabled>
                    <el-radio border label="1">启用</el-radio>
                    <el-radio border label="0">停止</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item style="text-align:center">
                  <el-button plain @click="$router.push('/resource_manage')">返回</el-button>
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
        name: "",
        orderNum: "",
        parentId: "",
        permName: "",
        property: "",
        resourceId: "",
        status: "1",
        system: "1",
        title: "",
        type: "1",
      },
      detailList: null,
      search: "",
    };
  },
  methods: {
    getDetail() {
      this.axios({
        method: "post",
        url: "/api/sys/resource/get",
        data: {
          body: {
            resourceId: this.$route.query.id,
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
              name: res.data.body.name,
              orderNum: res.data.body.orderNum,
              parentId: res.data.body.parentId,
              permName: res.data.body.permName,
              property: res.data.body.property,
              resourceId: res.data.body.resourceId,
              status: String(res.data.body.status),
              system: String(res.data.body.system),
              title: res.data.body.title,
              type: String(res.data.body.type),
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
        url: "/api/sys/resource/add",
        data: {
          body: {
            name: this.changeMecFrom.name,
            orderNum: this.changeMecFrom.orderNum,
            parentId: this.$route.query.id
              ? this.$route.query.id
              : this.changeMecFrom.parentId,
            permName: this.changeMecFrom.permName,
            property: this.changeMecFrom.property,
            resourceId: this.changeMecFrom.resourceId,
            status: this.changeMecFrom.status,
            system: this.changeMecFrom.system,
            title: this.changeMecFrom.title,
            type: this.changeMecFrom.type,
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
            this.$router.push("resource_manage");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getDetail();
  },
};
</script>

<style>
</style>