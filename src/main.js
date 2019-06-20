// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import colors from 'vuetify/es5/util/colors';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';

Vue.use(Vuetify);
// Vue.use(Vuetify, {
//     theme: {
//         primary: colors.deepPurple.base,
//         secondary: colors.grey.darken1,
//         accent: colors.shades.black,
//         error: colors.red.accent3,
//         surface: colors.blueGrey.lighten1,
//     }
// });
Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
