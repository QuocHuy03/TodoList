import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodo,
} from "../store/todo/actions";
import { fetchAllTodos } from "../utils/getAllTodos";
import { useQuery } from "@tanstack/react-query";
import { Card, Col, Row, message } from "antd";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import Layout from "../components/Layout";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery(["todos"], () => fetchAllTodos(), {
    staleTime: 1000,
    refetchOnMount: false,
  });
  // dispatch(getTodo(data));

  const todos = useSelector((state) => state.todo.todos);
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  const handleFormSubmit = (todo) => {
    dispatch(addTodo(todo));
    message.success("Todo added!");
  };

  const handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo));
    message.warn("Todo removed!");
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
        >
          {/* <PageHeader
            title="Add Todo"
            subTitle="To add a todo, just fill the form below and click in add todo."
          /> */}
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Create a new todo">
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
            <TodoList
              todos={todos}
              onTodoRemoval={handleRemoveTodo}
              onTodoToggle={handleToggleTodoStatus}
            />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
