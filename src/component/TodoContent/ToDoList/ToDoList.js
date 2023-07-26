import React, { Component } from "react";

import { ToDoItem } from "../TodoItem/ToDoItem";

export class ToDoList extends Component {
  render() {
    const { list, removeTodo, updateToDo } = this.props;

    const content = list?.map((todo, index) => (
      <ToDoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        onClick={() => removeTodo(todo.id)}
        updateToDo={updateToDo}

      />
      // <li key={todo.id} className="list-group-item text-bg-info p-2">
      //   {todo.title}{" "}
      //   <FontAwesomeIcon
      //     style={{ "marginLeft": "450px" }}
      //     onClick={}
      //     icon={faTrash}
      //   />{" "}
      //   <FontAwesomeIcon icon={faPenToSquare} />
      // </li>
    ));

    return (
      <div>
        <ul className="list-group">{content}</ul>
      </div>
    );
  }
}

export default ToDoList;
