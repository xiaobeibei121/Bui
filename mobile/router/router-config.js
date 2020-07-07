import Index from '../view/Index';
import componentData from 'data/componentData.json';

let routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/guide',
        component: Index
    },
    {
        path: '/log',
        component: Index
    },
    {
        path: '/components',
        component: Index
    }
];

for (let key in componentData) {
    componentData[key].forEach(item => {
        if (item.path === 'color') {
            routes.push({
                path: `/components/${item.path}`,
                component: Index
            });
        } else {
            routes.push({
                path: `/components/${item.path}`,
                component: () => import(`packages/${item.path}/demo/App.vue`)
            });
        }
    });
}

console.log(routes);

export default routes;
