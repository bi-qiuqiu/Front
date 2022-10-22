import React, { Component } from 'react'
import classnames from 'classnames'
class MainItem extends Component {
  state = {
    //当前双击id
    currentID: '',
    currentName: '',
  }
  inputRef = React.createRef()
  render() {
    const { item } = this.props
    return (
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
          onBlur={() => {
            this.setState({ currentID: '' })
          }}
          ref={this.inputRef}
        />
      </li>
    )
  }
  componentDidUpdate() {
    this.inputRef.current.focus()
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
        currentName: '', //清空就不处于选中状态
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
}

export default MainItem
