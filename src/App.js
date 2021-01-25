import React, { Component } from "react";
import uuid from "react-uuid";
import CreateTask from "./createTask";
import "./App.css";
import TotalTask from "./totaltask";

class App extends Component {
  state = {
    textInput: "",
    showTextInput: false,
    tasks: [],
  };

  userInputHandler = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };

  validateInput = (e) => {
    e.preventDefault();
    const textInputTrue = this.state.showTextInput;
    this.state.textInput !== ""
      ? this.setState({
          showTestInput: !textInputTrue,
          tasks: [
            ...this.state.tasks,
            { id: uuid(), task: this.state.textInput },
          ],
          textInput: "",
        })
      : alert("Please Add a Task!");
  };

  deleteTaskHandler = (index) => {
    const allTasks = [...this.state.tasks];
    allTasks.splice(index, 1);
    this.setState({
      tasks: allTasks,
    });
  };

  allTasks() {
    const mytasks = [...this.state.tasks];
    this.setState({
      tasks: mytasks,
    });
  }

  render() {
    let task = null;
    if (this.state.showTestInput === true) {
      task = (
        <div>
          {this.state.tasks.map((task, index) => {
            return (
              <CreateTask
                textInput={task.task}
                numeroTarea={index + 1}
                key={task.id}
                deletetask={() => this.deleteTaskHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <div className="mainInput">
          <h1>Tareas Yari</h1>
          <form onSubmit={this.validateInput}>
            <input
              type="text"
              value={this.state.textInput}
              onChange={this.userInputHandler}
            />
          </form>
          <button className="buttonSubmit" onClick={this.validateInput}>
            Agregar
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <TotalTask mytasks={this.state.tasks.length} />
        <div className="taskContainer">{task}</div>
      </div>
    );
  }
}

export default App;
