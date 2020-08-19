import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''
    },
    mutations: {
        changeLogin (state, user) {
            state.token = user.token;
            sessionStorage.setItem('token', user.token);
        }
    }
})

export default store;