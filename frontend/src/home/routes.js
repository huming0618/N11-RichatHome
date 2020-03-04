import Dashboard from '@/home/components/Dashboard';
const AppMedium = () => import('@/home/components/AppMedium');
const Task = () => import('@/admin/components/Task')

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/newtask',
        name: 'NewTask',
        component: Task
    }
];

export default routes;