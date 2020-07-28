import Toast from './src/toast.js';

Toast.install = Vue => {
    Vue.$toast = Vue.prototype.$toast = Toast;
};

export default Toast;
