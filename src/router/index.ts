import Home from '../views/home'
import Login from '../views/login'
import Register from '../views/register'

const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    exact: true,
    component: Register
  }
]

export default routes