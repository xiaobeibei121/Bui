import Loading from './src/loading';

Loading.install = Vue => {
    Vue.component(Loading.name, Loading);
};

export default Loading;
