import React, { Component } from 'react'
import { Card } from 'antd'
import './index.css'
import logo from '../../assets/images/logo.png'
class Login extends Component {
  state = {}
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={logo} alt="" className='login-logo'/>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }
}

export default Login
