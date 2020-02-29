import AppHome from '@/admin/components/AppHome';
const AppMedium = () => import('@/admin/components/AppMedium');


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