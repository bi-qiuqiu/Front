import React, { Component } from 'react'

import MainItem from './TodoItem'
class Main extends Component {
  render() {
    const { list, type } = this.props
    let showList = []
    if (type === 'active') {
      showList = list.filter((item) => !item.done)
    } else if (type === 'completed') {
      showList = list.filter((item) => item.done)
    } else {
      showList = list
    }
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={list.every((item) => item.done)}
          onChange={this.handleChange}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showList.map((item) => (
            <MainItem key={item.id} item={item} {...this.props}></MainItem>
          ))}
        </ul>
      </section>
    )
  }
  handleChange = (e) => {
    this.props.changall(e.target.checked)
  }
}
export default Main
