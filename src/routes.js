import LoginView from '@/pages/login'
import LayoutView from '@/components/layout'
import DashboardView from '@/pages/dashboard'
import EmployeesView from '@/pages/employees'
import SkillsView from '@/pages/skills'
import ShiftsView from '@/pages/shifts'
import SignupView from '@/pages/signup'
import NotFoundView from '@/pages/notfound'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    children: [
      {
        path: '',
        component: DashboardView,
        name: 'dashboard',
        meta: {description: 'Overview of environment'}
      },
      {
        path: 'employees',
        component: EmployeesView,
        name: 'employees',
        meta: {description: 'Overview of environment'}
      },
      {
        path: 'skills',
        component: SkillsView,
        name: 'skills',
        meta: {description: 'Overview of environment'}
      },
      {
        path: 'shifts',
        component: ShiftsView,
        name: 'shifts',
        meta: {description: 'Overview of environment'}
      }
    ],
    meta: {requiresAuth: true}
  },
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
