import { Form, Input, Button, InputNumber } from 'antd'
// import { Link } from 'react-router-dom'
import { UserOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons'
require('./index.scss')

const layout = {
  labelCol: { offset: 4 },
  wrapperCol: { span: 16, offset: 4 }
}
const Register = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return(
    <div className="loginBg">
      <div className="login-header"></div>
      <div className="login-content">
        <h2 className="login-title">用户注册</h2>
        <Form
          { ...layout }
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="nickname"
            rules={[{ required: true, message: '请输入您的昵称!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="昵称" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请输入您的手机号码!' }]}
          >
            <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="手机号码" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item
            label="验证码"
            rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <InputNumber />
            <Button>点击发送验证码</Button>
          </Form.Item>

          <Form.Item className="submitRow">
            <Button type="primary">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register