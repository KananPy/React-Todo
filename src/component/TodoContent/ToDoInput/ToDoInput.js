import React, { Component } from "react";

export class ToDoInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      isShowAlert: false,
    };

    this.getText = this.getText.bind(this);
    this.addText = this.addText.bind(this);
  }

  getText(e) {
    const text = e.target.value;
    // console.log(text);

    this.setState({ text });
  }

  addText() {
    if (!this.state.text.trim()) {
      this.setState({ isShowAlert: true });
      return
    }

    this.props.addTodo(this.state.text);

    this.setState({ text: "", isShowAlert: false });
  }

  render() {
    // console.log(this.state.text);
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            value={this.state.text}
            onChange={this.getText}
            className="form-control"
            placeholder="Add Your ToDo"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={this.addText}
            className="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Add
          </button>
          <div className="alert alert-danger" role="alert">
            {this.state.isShowAlert && <span>Please fill the empty place</span>}
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoInput;
