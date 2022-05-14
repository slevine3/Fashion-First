import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/TopBar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
