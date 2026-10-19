import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from '../i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { titleKey: 'meta.home' },
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
      meta: { titleKey: 'meta.skills' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: { titleKey: 'meta.projects' },
    },
    {
      path: '/projects/:slug',
      name: 'case-study',
      component: () => import('../views/CaseStudyView.vue'),
      props: true,
      meta: { titleKey: 'meta.projects' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const t = i18n.global.t
  const base = t('meta.base')
  const titleKey = to.meta.titleKey as string | undefined
  document.title = titleKey ? `${t(titleKey)} | ${base}` : base
})

export default router
