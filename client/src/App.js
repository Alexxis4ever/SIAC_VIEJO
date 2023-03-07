import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Header } from "./components/layouts/Header/Header";
import { Home } from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";


function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App;
