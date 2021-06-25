import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

export const error = (message: string):void=> {
    Vue.$toast.open({
        message: message,
        type: 'error',
    });
}
export const success = (message: string):void=> {
    Vue.$toast.open({
        message: message,
        type: 'success',
    });
}