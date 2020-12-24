import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
require('./index.scss')

const layout = {
  wrapperCol: { span: 16, offset: 4 }
}
const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="loginBg">
      <div className="login-header"></div>
      <div className="login-content">
        <h2 className="login-title">用户登录</h2>
        <Form
          { ...layout }
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="checkbox-style">记住密码</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="">
              忘记密码
            </Link>
          </Form.Item>

          <Form.Item className="submitRow">
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button type="primary" href="/register">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login