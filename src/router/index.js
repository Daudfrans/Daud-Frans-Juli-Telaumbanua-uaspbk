import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import MenuDetail from '../components/MenuDetail.vue';
import Cart from '../components/Cart.vue';
import Orders from '../components/Orders.vue';
import Review from '../components/Review.vue';
import Profile from '../components/Profile.vue';

const routes = [
  // Redirect root ke login langsung
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu/:id',
    name: 'MenuDetail',
    component: MenuDetail,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/review',
    name: 'Review',
    component: Review
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'  // redirect ke login kalau path gak dikenali
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

function isLoggedIn() {
  // Misal cek token di localStorage
  return !!localStorage.getItem('token');
}

// Navigation Guard global
router.beforeEach((to, from, next) => {
  const loggedIn = isLoggedIn();

  if (!loggedIn && to.path !== '/login') {
    // Jika belum login dan mau akses selain login, redirect ke login
    return next('/login');
  }

  if (loggedIn && to.path === '/login') {
    // Jika sudah login tapi mau ke login lagi, redirect ke home
    return next('/home');
  }

  // Default lanjut
  next();
});

export default router;
