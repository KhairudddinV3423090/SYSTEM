import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import PolicyView from '@/views/PrivacyPolicyView.vue'
import AboutView from '@/views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/post',
      name: 'blog-post',
      component: BlogPostView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUsView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PolicyView,
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutView,
    },
  ],
})

export default router
