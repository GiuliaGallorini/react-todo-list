import React, { Component } from 'react';
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Write emails',
        completed: false
      },
      {
        id: 2,
        title: 'English school',
        completed: false
      },
      {
        id: 3,
        title: 'Meditate',
        completed: false
      },
    ]
  }

  // Toggle Complete => map() high-order array method
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo => filter() high-order array method
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddTodo />
        <Todos 
        todos={this.state.todos} 
        markComplete={this.markComplete} 
        delTodo={this.delTodo} 
        />        
        </div>
      </div>
    )
  }
}

export default App;