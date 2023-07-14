import React from "react";
import { List } from "antd";
import TodoItem from "../TodoItem";
import { Empty } from "antd";

const TodoList = ({ todos, onTodoRemoval, onTodoToggle }) => {
  return (
    // <div style={{ maxHeight: "456px", overflowY: "auto" }}>
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
          pageSize: 5,
        }}
      />
    // </div>
  );
};

export default TodoList;
