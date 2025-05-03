import { Route, Routes } from "react-router-dom";
import {Features} from "./Pages/Features";
import { Home } from "./Pages/Home";
import { Reviews } from "./Pages/Review";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/SIgnup";

function App(){
  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Features />} />
      <Route path='/' element={<Reviews />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />} />
    </Routes>

  )
  
}
export default App;