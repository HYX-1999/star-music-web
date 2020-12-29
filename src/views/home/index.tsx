import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => (
  <div style={{textAlign: 'center'}}>
    <h1>Home</h1>
    <Link to={"/login"}>登录 </Link>|
    <Link to={"/register"}> 注册</Link>
  </div>
)

export default Home