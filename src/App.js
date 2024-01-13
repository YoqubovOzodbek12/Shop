import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About"
import Contack from './Pages/Contact/Coutact'
import Blog from './Pages/Blog/Blog'
import Shop from './Pages/Shop/Shop'
import Home from "./Pages/Home/Home";



function App() {
  return (

      <BrowserRouter>
        <Header/>      
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contack" element={<Contack/>}/>
          <Route path="/Shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
