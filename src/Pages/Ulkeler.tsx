import { useEffect, useState } from 'react';
import Country from '../components/Country';
import Loading from '../components/Loading';
import { CountryType } from '../types';
import { useSelector } from "react-redux";
import { UserData } from '../Reducers/Private/userSlice';

const Ulkeler  = () => {
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {countryList } = useSelector(state => UserData(state));
   
    useEffect(() => { 
        setCountries(countryList);
        setLoading(false);
    }, []);
    return (
        <div>
         <Loading loading={loading}>
          {countries?.length > 0 ? countries.map((country: any, i: React.Key | null | undefined) => {
            return <Country key={i} country={country} />;
          }) : <div>No Data</div>}
        </Loading>
        </div>
    );
};

export default Ulkeler;