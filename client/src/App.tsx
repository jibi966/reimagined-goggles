import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PublicHome from "./pages/PublicHome";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PublicHome/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;
