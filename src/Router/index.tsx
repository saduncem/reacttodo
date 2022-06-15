import React from 'react';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Product from '../Pages/Product';
import Ulkeler from '../Pages/Ulkeler';
import Home from '../Pages/index';
import Uyelik from '../Pages/Uyelik';
import Login from '../Pages/Login';

const Index =  () => {
    return (
        <div>
            <BrowserRouter>
       <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
            <li>
              <Link to="/Uyelik"> Uyelik</Link>
            </li>
            <li>
              <Link to="/Ulkeler">Ulkeler</Link>
            </li>
          </ul>
         </nav>
            <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/Uyelik" element={<Uyelik />} />
            <Route path="/Ulkeler" element={<Ulkeler />} />
            <Route path="/" element={<Login />} />
        </Routes>
        </BrowserRouter>
        </div>
    );
};
export default Index;
