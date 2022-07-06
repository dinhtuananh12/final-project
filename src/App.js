import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/LoginPage/Login";
import Register from "./Component/RegisterPage/Register";
import Home from "./Component/HomePage/Home";
function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/login" element={<Login />}></Route>
               <Route path="/register" element={<Register />}></Route>
            </Routes>
         </Router>
      </div>
   );
}

export default App;
