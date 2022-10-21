import React, { Component } from 'react'
class Header extends Component {
  state = {
    name: '',
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="接下来我们要做什么呢?"
          autoFocus
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          onKeyUp={this.add}
        />
      </header>
    )
  }
  add = (e) => {
    if (e.keyCode !== 13) return
    if (!this.state.name.trim()) return alert('不能为空')
    this.props.add(this.state.name)
    this.setState({
      name: '',
    })
  }
}
export default Header
