import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Country"

const CountrySection = ({ url, setView }) => {
    console.log(url)
    const [countries, setCountries] = useState([])
    const [error, setError] = useState('')

    const getAllCountries = async () => {
        try {
            let gotCountries = await axios.get(url)
            setCountries(gotCountries.data)
        } catch (e) {
            setError(e)
        }
    }

    if(!countries.length > 0) {
        console.log(countries)
    }

    useEffect(() => {
        getAllCountries();

        return () => {
            setError('');
            setCountries([]);
        }
    }, [url])

    return <>
        {error && <div>Error occured!</div>}
        <div className="country-section">
            {countries.map((country, i) => <Country country={country} key={i} setView={setView} />)}
        </div>
    </>
};

export default CountrySection;