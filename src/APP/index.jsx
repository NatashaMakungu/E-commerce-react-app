import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Flavors from "./Pages/Flavors";
function App() {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Flavors" element={<Flavors />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;