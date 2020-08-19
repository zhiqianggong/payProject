import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import '@/methodMap/directive.js'
import echarts from "echarts"

Vue.prototype.$echarts = echarts
Vue.prototype.axios = Axios
Vue.use(ElementUI)
Vue.config.productionTip = false

/////////////////自定义方法/////////////////
Vue.prototype.messageInfo = function (res, str) {
  if (res.data.code == 200) {
    if (!str) {
      this.$message({
        message: res.data.message,
        type: "success"
      });
    }
  } else if (res.data.code == 500) {
    this.$message({
      message: res.data.message,
      type: "warning"
    });
  } else if (res.data.code == 400) {
    sessionStorage.clear();
    sessionStorage.setItem('jianquan', '鉴权失败，请重新登录')
    this.$router.go(0);
  } else {
    if (res.data.msg) {
      this.$message({
        message: res.data.msg,
        type: "warning"
      });
    }
  }
}

Vue.prototype.amountFormat = function (amount) {
  return amount / 100;
}

Vue.prototype.getLocalTime = function (timer) {
  var timestamp4 = new Date(timer);
  timestamp4 = timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8)
  return timestamp4;  
}

Vue.prototype.mouseEventFun = function (container) {
  container.onwheel = function (event) {
    event.preventDefault();
    var step = 50;
    if (container.clientHeight == container.scrollHeight || container.clientHeight + 1 == container.scrollHeight) {
      if (event.deltaY < 0) {
        //向上滚动鼠标滚轮，屏幕滚动条左移
        container.scrollLeft -= step;
      } else {
        //向下滚动鼠标滚轮，屏幕滚动条右移
        container.scrollLeft += step;
      }
    } else {
      if (container.scrollHeight > container.clientHeight && Number(container.scrollTop.toFixed()) + container.clientHeight + 1 === container.scrollHeight) {
        if (event.deltaY < 0) {
          if (container.scrollLeft == 0) {
            container.scrollTop -= step;
          } else {
            container.scrollLeft -= step;
          }
        } else {
          container.scrollLeft += step;
        }
      } else {
        if (event.deltaY < 0) {
          container.scrollTop -= step;
        } else {
          container.scrollTop += step;
        }
      }
    }
  }
}


Vue.prototype.filterTypeData = function (arr, curKey) {
  let dataBox = arr.filter((item)=> {
    if(item.key == curKey) {
      return item.name
    }
  });
  return dataBox[0].name;
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})

router.beforeEach((to, from, next) => {
  let _this = this
  if (to.name === 'login' || to.name === 'signIn') {
    if (sessionStorage.token) {
      router.push({ path: '/dashboard' });
    }
  }
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (sessionStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
      next();
    } else {
      Element.Message({
        message: '请重新登陆',
        type: 'warning'
      });
      next({
        path: '/dashboard',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    if (sessionStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
      next();
    } else {
      Element.Message({
        message: '请重新登陆',
        type: 'warning'
      });
      router.push({ path: '/login' });
    }
  }
});