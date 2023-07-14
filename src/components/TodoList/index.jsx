import React from "react";
import { List } from "antd";
import TodoItem from "../TodoItem";
import { Empty } from "antd";

const TodoList = ({ todos, onTodoRemoval, onTodoToggle }) => {
  return (
    <List
      locale={<Empty />}
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem
          todo={todo}
          onTodoToggle={onTodoToggle}
          onTodoRemoval={onTodoRemoval}
        />
      )}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    />
  );
};

export default TodoList;
