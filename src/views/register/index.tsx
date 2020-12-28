import {
  Form,
  Input,
  Row,
  Col,
  Checkbox,
  Button
} from 'antd';
require('./index.scss')

const formItemLayout = {
  labelCol: {
    xs: { span: 20 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 20 },
    sm: { span: 15 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

const Register = () => {
  
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return(
    <div className="loginBg">
      <div className="login-header"></div>
      <div className="login-content">
        <h2 className="login-title">用户注册</h2>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="nickname"
            label="昵称"
            rules={[{ required: true, message: '请输入昵称!', whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="手机"
            rules={[{ required: true, message: '请输入手机号码!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="验证码">
            <Row gutter={8}>
              <Col span={8}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[{ required: true, message: '请输入验证码!' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Button type="primary">发送验证码</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次密码不相同!');
                }
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('请勾选协议'),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the agreement
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register