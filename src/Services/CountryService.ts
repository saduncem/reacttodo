import axios from "axios";
import { CountryType} from '../types';

export  const GetCountries = async () : Promise<CountryType[]> => {
    const {data} =  await  axios.get<CountryType[]>("https://restcountries.com/v2/all");
    return data;
}
