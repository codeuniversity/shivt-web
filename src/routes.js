import LoginView from '@/pages/login'
import LayoutView from '@/components/layout'
import DashboardView from '@/pages/dashboard'
import EmployeesView from '@/pages/employees'
import NotFoundView from '@/pages/notfound'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: LayoutView,
    children: [
      {
        path: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      },
      {
        path: 'employees',
        component: EmployeesView,
        name: 'Employees',
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
