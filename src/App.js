import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./layout/Footer/Footer";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import ListProducts from "./Components/ListProducts/ListProducts";
import Profile from "./Components/Profile/Profile";
import Cart from "./Components/Cart/Cart";
const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={[<Header />, <Home />, <Footer />]}
            ></Route>
            <Route path="/Login" element={<Login />} />
            <Route
              path="/Orders"
              element={[<Header />, <Orders />, <Footer />]}
            ></Route>
            <Route
              path="/ListProducts"
              element={[<Header />, <ListProducts />, <Footer />]}
            ></Route>
            <Route path="/Profile" element={<Profile />} />
            <Route
              path="/Cart"
              element={[<Header />, <Cart />, <Footer />]}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App;
