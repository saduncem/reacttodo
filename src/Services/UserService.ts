import axios from "axios";
import { UserResponse } from '../types';

export  const authenticate = async (param:any) : Promise<UserResponse> => {
    const response = await axios.post<UserResponse>(`https://localhost:7051/api/Users/Authenticate`, param);
     return response.data;
}

