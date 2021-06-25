import Vue from 'vue';
import Vuex from 'vuex';

import cart from '@/store/module/cart'
import user from '@/store/module/user'
import filter from '@/store/module/filter'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cart,
        user,
        filter
    }
});
