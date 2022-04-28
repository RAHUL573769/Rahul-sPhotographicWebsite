import { Route, Router, Routes } from "react-router-dom";
import About from "./Componenets/About/About";
import Blog from "./Componenets/Blog/Blog";
import Check from "./Componenets/Checkout/Check";
import Errorpage from "./Componenets/Errorpage/Errorpage";
import Homepage from "./Componenets/Home/HomePage/Homepage";
import Login from "./Componenets/Login/Login";
import Requires from "./Componenets/RequiredAuthentication/Requires";

import Footer from "./Componenets/Shared/Footer/Footer";
import Header from "./Componenets/Shared/Header/Header";
import Signup from "./Componenets/SignUp/Signup";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Homepage></Homepage>}>
          Home
        </Route>

        <Route
          path="/checkout/:serviceId"
          element={
            <Requires>
              <Check></Check>
            </Requires>
          }
        ></Route>
        <Route path="/home" element={<Homepage></Homepage>}>
          Home
        </Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}>
          Log In
        </Route>
        <Route path="/signup" element={<Signup></Signup>}>
          Sign Up
        </Route>
        <Route path="*" element={<Errorpage></Errorpage>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
