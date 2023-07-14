import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodo,
} from "../store/todo/actions";
import { fetchAllTodos, postTodo } from "../utils/getAllTodos";
import { useQuery } from "@tanstack/react-query";
import { Card, Col, Empty, Row, message } from "antd";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import Layout from "../components/Layout";
import { useEffect } from "react";

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
    return <h1>Loading ...</h1>;
  }

  const handleFormSubmit = async (todo) => {
    try {
      await postTodo(todo, dispatch);
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
    dispatch(updateTodo(todo));
    message.info("Todo state updated!");
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
            <AddTodoForm onFormSubmit={handleFormSubmit} />
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
