import Home from '../views/home'
import Login from '../views/login'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    exact: true,
    component: Login
  }
]

export default routes