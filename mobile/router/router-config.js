import Index from '../view/Index';
import componentData from 'data/componentData.json';

let routes = [
    {
        path: '/',
        component: Index
    }
];

for (let key in componentData) {
    componentData[key].forEach(item => {
        routes.push({
            path: `/components/${item.path}`,
            component: () => import(`packages/${item.path}/demo/App.vue`)
        });
    });
}

export default routes;
