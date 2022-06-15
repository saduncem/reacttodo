import { useState,useEffect } from "react";
import axios from "axios";
import { CountryType } from "./types";
import {Link } from "react-router-dom";
const App = () => {

    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const GetCountries = async () => {

           try {
               const { data } = await axios.get<CountryType[]>("https://restcountries.com/v2/all");
               setCountries(data);
               console.log(data);
               
           } catch (error) {
            console.log("finally");
           }
           finally {
                setLoading(false);
                console.log("finally");
           }
    }
    useEffect(() =>
     {    
         GetCountries();
     },[]);
    
    return (
      <div>
       <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
            <li>
              <Link to="/products">First Product</Link>
            </li>
          </ul>
         </nav>
       
      </div>
    );
};

export default App;