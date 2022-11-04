import React, { Component } from 'react'
import { Card, Button, Checkbox, Form, Input } from 'antd'
import './index.scss'
import logo from 'assets/images/logo.png'
class Login extends Component {
  state = {}
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={logo} alt="" className="login-logo" />
          <Form size="large">
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: '手机号不能为空!',
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '手机号码格式错误!',
                },
              ]}
            >
              <Input placeholder="请输入你的手机号" />
            </Form.Item>

            <Form.Item
              name="cord"
              rules={[
                {
                  required: true,
                  message: '验证码不能为空!',
                },
                {
                  pattern: /^\d{6}$/,
                  message: '验证码码格式错误!',
                },
              ]}
            >
              <Input placeholder="请输入验证码" />
            </Form.Item>

            <Form.Item
              valuePropName="checked"
              name="agree"
              rules={[
                {
                  required: true,
                  message: '请同意协议',
                },
              ]}
            >
              <Checkbox>我已阅读并同意用户协议</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login
