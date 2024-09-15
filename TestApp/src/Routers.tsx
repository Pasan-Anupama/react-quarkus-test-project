import { Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";

function Routers() {
    return(
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
    );
}
    
export default Routers;
