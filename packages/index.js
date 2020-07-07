// 此文件由 build/build-entry.js 自动生成，勿手动更改
import Loading from './loading';

const components = [
    Loading
];

const install = Vue => {
    if (install.installed) return;
    install.installed = true;
    components.map(component => {
        component.install(Vue);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    Loading
};
