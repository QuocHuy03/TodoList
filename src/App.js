import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotPage from "./pages/NotPage";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const huydev = useSelector((state) => state.auth);
  console.log(huydev)
  return (
    <>
      <Routes>
        {huydev ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotPage />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
