import { useDispatch, useSelector } from "react-redux";

import { fetchAllTodos, postTodo } from "../utils/todoApi";
import { useQuery } from "@tanstack/react-query";
import { Card, Col, Empty, Row, message } from "antd";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Layout from "../components/Layout";
import { useEffect } from "react";
import {
  getTodo,
  removeTodo,
  updateTodoStatus,
  updateTodoTitle,
} from "../store/todo/actions";
import Loading from "../components/Loading";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery(["todos"], () => fetchAllTodos(), {
    staleTime: 1000,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (data) {
      dispatch(getTodo(data));
    }
  }, [data, dispatch]);

  const todos = useSelector((state) => state.todo.todos);

  if (isLoading) {
    return <Loading status={true} />;
  }

  const handleFormSubmit = async (todo) => {
    try {
      await postTodo(todo, dispatch);
      const updatedTodos = await fetchAllTodos();
      dispatch(getTodo(updatedTodos));
      message.success("Todo added!");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  const handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo));
    message.warning("Todo removed!");
  };

  const handleToggleTodoStatus = (todo) => {
    dispatch(updateTodoStatus(todo));
    message.info("Todo state updated!");
  };

  const handleTodoUpdateTitle = (todo) => {
    dispatch(updateTodoTitle(todo));
    message.info("Todo title updated!");
  };

  return (
    <Layout>
      <Row
        justify="center"
        align="middle"
        gutter={[0, 20]}
        className="todos-container"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        ></Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Create To New Todo">
            <TodoForm onFormSubmit={handleFormSubmit} />
          </Card>
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Todo List">
            {todos && todos.length > 0 ? (
              <TodoList
                todos={todos}
                onTodoRemoval={handleRemoveTodo}
                onTodoToggle={handleToggleTodoStatus}
                onTodoUpdateTitle={handleTodoUpdateTitle}
              />
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
