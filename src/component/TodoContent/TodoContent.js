import React, { Component } from 'react'
import "./TodoContent.module.css"
import { ToDoInput } from './ToDoInput'
import { ToDoList } from './ToDoList'

export class TodoContent extends Component {

    constructor(){
        super()
        this.state = {
            list:[]
    }

    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.updateToDo = this.updateToDo.bind(this)
    }


    addTodo(title){

        const todo = {
            id: Date.now() + Math.random().toString(),
            title,
            created:new Date()
        }
        const newList = [todo, ...this.state.list]

        this.setState({
            list: newList
        })

    }

    removeTodo(todoId){
      console.log("checking my trash icon", todoId);

      let newState = [...this.state.list]

      const filterData = newState.filter((item) => item.id !== todoId)

      this.setState({list: filterData})
    }

    updateToDo(todoId, todoTitle){
        console.log('updateTodo', todoTitle);

        let copyList = [...this.state.list]
        let itemIndex = copyList.findIndex(item => item.id === todoId)
        let currentItem = copyList[itemIndex]
        let updateToDoItem = {...currentItem, title: todoTitle}

        copyList[itemIndex] = updateToDoItem

        this.setState({list: copyList})


    }

  render() {

    console.log("new input", this.state.list);

    return (
      <div style={{"width": "600px"}}>
        <h1 className='display-1 text-center m-5'>ToDo App</h1>
        <ToDoInput addTodo={this.addTodo}/>
        <ToDoList list={this.state.list} removeTodo={this.removeTodo} updateToDo = {this.updateToDo}/>
      </div>

    )
  }
}

