import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotPage from "./pages/NotPage";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

function App() {
  const huydev = useSelector((state) => state.auth.user);
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
            <Route path="/auth" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
