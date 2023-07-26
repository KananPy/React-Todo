import PropTypes from "prop-types";
import React, { Component, createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export class ToDoItem extends Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      isShowEdit: false,
      todoRef: createRef(),

    };
    this.editTodo = this.editTodo.bind(this)
    this.saveTodo = this.saveTodo.bind(this)

  }

  editTodo(){
    this.setState({isShowEdit : true})
  }

  saveTodo(){

    const value = this.state.todoRef.current.value
    this.props.updateToDo(this.props.id, value)
    this.setState({isShowEdit : false})
    console.log(value);



  }

  render() {
    const { title, onClick } = this.props;
    return (
      <li className="list-group-item text-bg-info p-2">
        {this.state.isShowEdit ? (<input ref={this.state.todoRef} defaultValue={title}/>) : ( <span>{ title }</span>
            )}

        {this.state.isShowEdit ? (<button onClick={this.saveTodo}>Save</button>) : (
            <>
                <FontAwesomeIcon
          style={{ marginLeft: "450px" }}
          onClick={onClick}
          icon={faTrash}
        />
        <FontAwesomeIcon icon={faPenToSquare} onClick={this.editTodo}/>
            </>
        )}

      </li>
    );
  }
}
