import React, { Component } from 'react'
import classnames from 'classnames'
class Main extends Component {
  state = {
    //当前双击id
    currentID: '',
    currentName: '',
  }
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
            <li
              className={classnames({
                completed: item.done,
                editing: item.id === this.state.currentID,
              })}
              key={item.id}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => this.updateDone(item.id)}
                />
                <label onDoubleClick={() => this.edit(item)}>{item.name}</label>
                <button
                  className="destroy"
                  onClick={() => this.delTodo(item.id)}
                ></button>
              </div>
              <input
                className="edit"
                value={this.state.currentName}
                onChange={(e) => this.setState({ currentName: e.target.value })}
                onKeyUp={this.textedit}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
  delTodo(id) {
    this.props.Del(id)
  }
  updateDone(id) {
    this.props.updateDone(id)
  }
  edit(item) {
    this.setState({
      currentID: item.id,
      currentName: item.name,
    })
  }
  textedit = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        currentID: '',
        currentName: '',
      })
    }
    if (e.keyCode === 13) {
      this.props.textedit(this.state.currentID, this.state.currentName)
      this.setState({
        currentID: '',
        currentName: '',
      })
    }
  }
  handleChange = (e) => {
    this.props.changall(e.target.checked)
  }
}
export default Main
