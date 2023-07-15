import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotPage from "./pages/NotPage";
import Auth from "./pages/Auth";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContextProvider";

function App() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, [user]);

  return (
    <>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotPage />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<Auth />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
