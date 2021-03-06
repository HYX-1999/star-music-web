import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import 'antd/dist/antd.css'
import './styles/app.scss';

ReactDOM.render(
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById('app')
);
