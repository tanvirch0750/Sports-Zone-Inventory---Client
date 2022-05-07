import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Authentication/Login/Login";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import SignUp from "./Authentication/SignUp/SignUp";
import AddItem from "./pages/AddItem/AddItem";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import MyItems from "./pages/MyItems/MyItems";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./shared/Footer/Footer.jsx";
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
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryItemDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add-item"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
