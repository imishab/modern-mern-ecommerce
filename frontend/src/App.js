import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, Home } from "./Routes.js"


function App() {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/Home' element={<Home/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
