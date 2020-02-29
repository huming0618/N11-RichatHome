import AppHome from '@/mytoken/components/AppHome';
const AppMedium = () => import('@/mytoken/components/AppMedium');


const routes = [{
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/medium',
        name: 'Medium',
        component: AppMedium
    }
];

export default routes;