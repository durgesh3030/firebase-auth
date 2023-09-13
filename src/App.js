// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>home</h1>} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
