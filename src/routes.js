import Home from '@/components/Home';
const Beers = () => import('@/components/Beers');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/beers',
        name: 'Beers',
        component: Beers
    }
];

export default routes;
