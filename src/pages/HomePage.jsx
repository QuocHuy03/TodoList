import { useDispatch } from "react-redux";
import { updateTodo } from "../store/todo/actions";
import { fetchAllTodos } from "../utils/getAllTodos";
import { useQuery } from "@tanstack/react-query";
const HomePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery(["todos"], () => fetchAllTodos(), {
    staleTime: 1000,
  });
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  const handleAdd = (data) => {
    dispatch(updateTodo(data));
  };
  return <h1 onClick={handleAdd}>oke</h1>;
};

export default HomePage;
