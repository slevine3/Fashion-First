import "./App.css";
import Cart from "./pages/Cart";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/products/:category"
            element={user ? <ProductList /> : <Navigate to="/login" />}
          />
          <Route
            path="/product/:id"
            element={user ? <Product /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={user ? <Cart /> : <Navigate to="/login" />}
          />
          <Route
            path="/success"
            element={user ? <Success /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
