import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Cadastrar from "./pages/Cadastrar";
import EditarPerfil from "./pages/EditarPerfil";
import Home from "./pages/Home";
import Overview from "./pages/Overview"
import Login from "./pages/Login";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cadastrar" element={<Cadastrar />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/editarPerfil" element={<EditarPerfil />}></Route>
                <Route path="/overview" element={<Overview />}></Route>   
                
                
            </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes;