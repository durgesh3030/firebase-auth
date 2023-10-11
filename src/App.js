
import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Navbar from "./component/Navbar";
import Homepage from "./component/home";
import Profile from "./pages/Profile";

import Productlist from "./component/productList"



function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/productlist' element={<Productlist />} />
      </Routes>
    </>
  );
}

export default App;
