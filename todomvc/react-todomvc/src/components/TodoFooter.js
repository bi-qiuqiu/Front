import React, { Component } from 'react'
class Footer extends Component {
  render() {
    const { list, type } = this.props
    if (list.length === 0) return null
    let leftCount = list.filter((item) => !item.done).length
    let isShow = list.some((item) => item.done)
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftCount}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={type === 'all' ? 'selected' : ''}
              onClick={() => this.chang('all')}
              href="#/"
            >
              All
            </a>
          </li>
          <li>
            <a
              className={type === 'active' ? 'selected' : ''}
              onClick={() => this.chang('active')}
              href="#/active"
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={type === 'completed' ? 'selected' : ''}
              onClick={() => this.chang('completed')}
              href="#/completed"
            >
              Completed
            </a>
          </li>
        </ul>
        {isShow && (
          <button className="clear-completed" onClick={this.del}>
            Clear completed
          </button>
        )}
      </footer>
    )
  }
  del = () => {
    this.props.Del()
  }
  chang(type){
    this.props.changeType(type)
  }
}
export default Footer
