import React, { Component } from 'react'
import { TodoContent } from './component/TodoContent'
import "./style/App.css"


export class App extends Component {
  render() {
    return (
      <div className='container d-flex align-items-center justify-content-center'>
        <TodoContent/>
      </div>

    )
  }
}

export default App
