import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'
import Header from './components/TodoHeader'
import Main from './components/TodoMain'
import Footer from './components/TodoFooter'
class App extends Component {
  state = {
    list: [],
    type: 'all',
  }
  componentDidMount(){
    this.setState({
      list: JSON.parse(localStorage.getItem('todos')) || [],
    })
  }
  mainDel = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  mainUpdateDone = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done } //重点
        } else {
          return item
        }
      }),
    })
  }
  maintextEdit = (id, name) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return { ...item, name }
        } else {
          return item
        }
      }),
    })
  }
  mainAll = (checked) => {
    this.setState({
      list: this.state.list.map((item) => {
        return {
          ...item,
          done: checked,
        }
      }),
    })
  }
  headeradd = (name) => {
    this.setState({
      list: [
        {
          id: new Date(),
          name: name,
          done: false,
        },
        ...this.state.list,
      ],
    })
  }
  footerdel = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.done),
    })
  }
  footerChange = (type) => {
    this.setState({
      type: type,
    })
  }
  render() {
    return (
      <section className="todoapp">
        <Header add={this.headeradd}></Header>
        <Main
          list={this.state.list}
          Del={this.mainDel}
          type={this.state.type}
          updateDone={this.mainUpdateDone}
          textedit={this.maintextEdit}
          changall={this.mainAll}
        ></Main>
        <Footer
          list={this.state.list}
          Del={this.footerdel}
          type={this.state.type}
          changeType={this.footerChange}
        ></Footer>
      </section>
    )
  }
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.list))
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
