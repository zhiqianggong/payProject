<template>
  <div id="app">
    <div v-if="isLogin">
      <router-view></router-view>
    </div>
    <div v-else>
      <el-container :style="{height: screenHeight + 'px' }">
        <v-menu></v-menu>
        <el-container>
          <el-header>
            <v-header></v-header>
          </el-header>
          <el-main :style="{height: screenHeight - 60 + 'px' }">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import menu from "@/components/menu";
import header from "@/components/header";
export default {
  name: "App",
  data() {
    return {
      isLogin: false,
      screenHeight: window.innerHeight,
    };
  },
  created() {
    if (sessionStorage.token) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      this.$router.push({ path: "/login" });
    }
    if (sessionStorage.loginState) {
      this.$router.push({ path: "/dashboard" });
      sessionStorage.removeItem("loginState");
    }
  },
  components: {
    "v-menu": menu,
    "v-header": header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

#app .el-main {
  background: #ffffff url("./assets/tr7.png") repeat;
}

.start .el-form-item__label:before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}

.reset-select .el-select {
  display: block;
}

#app .el-main {
  padding: 20px;
  padding-top: 40px;
}

#app .reset-hint.is-light {
  margin-bottom: 10px;
  border-left: 5px solid;
  color: rgb(26, 179, 148);
}

#app .el-alert--success.is-light .el-alert__description {
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  color: rgb(26, 179, 148);
}

#app .el-alert--success.is-light .el-alert__description .amount {
  color: rgb(255, 181, 115);
}

#app .el-form-item {
  margin-bottom: 18px;
}

.reset-data .el-date-editor.el-input {
  min-width: 120px;
  width: 0;
}

#app .el-button.green {
  background: rgb(26, 179, 148);
  border-color: transparent;
}

#app .el-table--enable-row-transition .el-table__body td {
  padding: 5px 0;
}

#app .el-checkbox {
  margin-right: 10px;
}

#app .is-disabled .el-input__inner {
  color: #000;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  cursor: auto;
}

.reset-card .el-card__body {
  padding: 0 10px 20px;
}

#app .el-radio {
  margin-right: 7px;
}

.paginationStyle {
  text-align: center;
  margin-top: 10px;
}

.reset-button {
  padding: 7px 5px !important;
  border: 0;
}

#app .reset-button.green {
  background: rgb(26, 179, 148);
}

#app .reset-button.red {
  background: rgb(245, 108, 108);
}

#app .reset-button.yellow {
  background: #E6A23C;
}

#app .reset-button.el-button + .el-button {
  margin-left: 2px;
}

.el-table__body-wrapper::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
.el-table__body-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.tingzhi {
  position: absolute;
  left: 33px;
  font-size: 13px;
  color: #fff;
}

.qiyong {
  position: absolute;
  left: 19px;
  font-size: 13px;
  color: #fff;
}

#app .el-card__header > span {
  color: #ed5565;
}

#menu .el-submenu .el-menu-item {
  height: 42px;
  line-height: 42px;
}

#menu .el-menu-item,
#menu .el-submenu__title {
  height: 48px;
  line-height: 48px;
}

.reset-data .el-date-editor.el-input {
  width: 50%;
}

.reset-data .el-form-item__content > div:first-child .el-input__inner {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #fcdfe6;
}

.reset-data .el-form-item__content > div:last-child .el-input__inner {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0;
}

#app .switchStyle .el-switch__label {
  position: absolute;
  display: none;
  color: #fff;
}
#app .switchStyle .el-switch__label--left {
  z-index: 9;
  left: 21px;
}
#app .switchStyle .el-switch__label--right {
  z-index: 9;
  left: 0px;
}
#app .switchStyle .el-switch__label.is-active {
  display: block;
}

#app .el-switch__label.is-active {
  color: #fff;
}

body {
  font: 14px Helvetica Neue, Helvetica, PingFang SC, \5fae\8f6f\96c5\9ed1,
    Tahoma, Arial, sans-serif;
}

#app .el-breadcrumb {
  padding: 10px;
  background: #fff;
  margin: -5px -5px 5px -5px;
  position: fixed;
  top: 65px;
  width: 100%;
  margin-left: -20px;
  z-index: 66;
}

#app .el-table__header {
  font-family: verdana, arial, sans-serif !important;
  font-size: 14px;
  color: #333333 !important;
  border-width: 1px !important;
  border-color: #999999 !important;
  border-collapse: collapse !important;
}

#app .el-table thead {
  color: #333333 !important;
}

#app .el-table {
  color: #333;
}

#app .el-table th {
  background-color: #c3dde0 !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: #a9c6c9 !important;
}
#app .el-table tr {
  background-color: #d4e3e5 !important;
}
#app .el-table td {
  font-family: verdana, arial, sans-serif !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: #a9c6c9 !important;
}

#app .el-form-item__label {
  background-color: #fbfbfb;
  border-radius: 2px 0 0 2px;
  border-width: 1px;
  border-style: solid;
  border-color: #e6e6e6;
  line-height: 38px;
}

#app .el-input__inner {
  border-radius: 0;
  color: #000;
}

#app .el-radio {
  margin-right: -7px;
}

#app .el-radio.is-bordered.is-checked {
  border-color: rgb(26, 179, 148);
}

#app .el-radio__input.is-checked .el-radio__inner {
  border-color: rgb(26, 179, 148);
  background: rgb(26, 179, 148);
}

#app .el-radio__input.is-checked + .el-radio__label {
  color: rgb(26, 179, 148);
}

#app .el-form .el-radio {
  margin-right: 0px;
}

#app .el-form .el-radio-group {
  margin-left: 10px;
}

#app .el-checkbox__input.is-checked .el-checkbox__inner,
#app .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgb(26, 179, 148);
  border-color: rgb(26, 179, 148);
}

#app .el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgb(26, 179, 148);
}

#app .el-form .el-checkbox-group {
  margin-left: 10px;
}

#app .el-radio__inner::after {
  top: 48%;
}

#app .el-button--primary {
  background-color: rgb(26, 179, 148);
  border-color: rgb(26, 179, 148);
}

#app .el-table th {
  padding: 6px 0;
}

#app .el-form .el-table {
  line-height: normal;
}

#app .el-card__header {
  border-left: 3px solid red;
  color: red;
  padding: 5px 20px;
}

#app .el-pagination {
  margin-bottom: -20px;
}

#app .el-table .cell {
  font: 14px Helvetica Neue, Helvetica, PingFang SC, \5fae\8f6f\96c5\9ed1,
    Tahoma, Arial, sans-serif;
}

#app .el-alert--success.is-light .el-alert__description .amount.blue {
  color: rgb(30,159,255);
}

#app .el-alert--success.is-light .el-alert__description .amount.green {
  color: rgb(0,150,136);
}

#app .el-alert--success.is-light .el-alert__description .amount.red {
  color: rgb(255,87,34);
}

#app .el-alert--success.is-light .el-alert__description .amount.yellow {
  color: rgb(255,184,0);
}

#app .el-alert--success.is-light .el-alert__description .amount.blue > span {
  background: rgb(30,159,255);
  padding: 2px 5px;
  color: #fff;
}

#app .el-alert--success.is-light .el-alert__description .amount.green > span {
  background: rgb(0,150,136);
  padding: 2px 5px;
  color: #fff;
}

#app .el-alert--success.is-light .el-alert__description .amount.red > span {
  background: rgb(255,87,34);
  padding: 2px 5px;
  color: #fff;
}

#app .el-alert--success.is-light .el-alert__description .amount.yellow > span {
  background: rgb(255,184,0);
  padding: 2px 5px;
  color: #fff;
}

#app .el-alert--success.is-light .el-alert__description .amount {
      font: 13px Helvetica Neue, Helvetica, PingFang SC, \5fae\8f6f\96c5\9ed1, Tahoma, Arial, sans-serif;
}

.el-message-box .el-message-box__btns {
  text-align: right;
    width: 63%;
}

.el-message-box .el-message-box__btns .el-button--small {
          float: right;
    margin-left: 15px;
}

.el-message-box .el-message-box__btns button:nth-child(2) {
background: rgb(26, 179, 148);
    border-color: transparent;
    color: #FFF;
}
</style>
