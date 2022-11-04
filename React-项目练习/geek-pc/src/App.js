import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

import Home from 'pages/Layout'
import Login from 'pages/Login'
import Notfound from 'pages/NotFound'
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/home">首页</Link>
        <Link to="/login">登录</Link>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
