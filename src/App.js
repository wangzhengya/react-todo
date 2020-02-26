import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import About from "./pages/About";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "买饮料", completed: false },
    { id: 2, title: "买面包", completed: true },
    { id: 3, title: "买牛奶", completed: false }
  ]);
  const markCompleted = id => {
    setTodos(prevItems => {
      return prevItems.map(item => {
        return item.id === id
          ? { ...item, completed: !item.completed }
          : { ...item };
      });
    });
  };
  const deleteItem = id => {
    setTodos(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };
  const addItem = text => {
    setTodos(prevItems => {
      return [...prevItems, { title: text, completed: false, id: uuidv4() }];
    });
  };
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/about' component={About} />
        <Route
          exact
          path='/'
          render={props => (
            <Fragment>
              <TodoForm addItem={addItem} />
              <Todos
                todos={todos}
                markCompleted={markCompleted}
                deleteItem={deleteItem}
              />
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
