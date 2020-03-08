import Dashboard from '@/home/components/Dashboard';
const Task = () => import('@/admin/components/task')
const Examine = () => import('@/admin/components/Examine')
const ApplyReward = () => import("@/mytoken/components/ApplyReward")

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/newtask',
        name: 'NewTask',
        component: Task
    },
    {
        path: '/applyreward',
        name: 'ApplyReward',
        component: ApplyReward
    },
    {
        path: '/examine',
        name: 'Examine',
        component: Examine
    }
];

export default routes;