import AppHome from '@/home/components/AppHome';
const AppMedium = () => import('@/home/components/AppMedium');


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