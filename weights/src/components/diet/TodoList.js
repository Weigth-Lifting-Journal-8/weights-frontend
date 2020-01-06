import React, { Component } from "react";
// import { Button } from 'semantic-ui-react'
import Todo from "./Todo";
import styled from "styled-components";

const DeleteButton = styled.button`
  background: #de7e44;
  border-radius: 25px;
  height: 50px;
  width: 130px;
  margin-top: 2%;
  outline: 0;
  border: 2px solid white;
  color: white;
  font-size: 1.03rem;
`;

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="todo-list">
        {this.props.data.map(task => (
          <Todo
            key={task.id}
            id={task.id}
            task={task.task}
            completed={task.completed}
            toggleTask={this.props.toggleTask}
          />
        ))}
        <DeleteButton onClick={this.props.clearCompleted}>
          Delete Tasks{" "}
        </DeleteButton>
      </div>
    );
  }
}

export default TodoList;

// NOTES ****************

//Your todo list should display a list of todos, an input field, a submit button, and a clear all button.

//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

// NOTES END ****************
