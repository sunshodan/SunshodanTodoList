import React from "react";
// import "./Form.js";
import Todo from "./Todo.js";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              stuff={todo.text}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
export default TodoList;
