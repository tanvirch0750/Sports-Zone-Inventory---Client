import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Authentication/Login/Login";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import SignUp from "./Authentication/SignUp/SignUp";
import Home from "./pages/Home/Home";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import Header from "./shared/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/manage-inventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
