import axios from "axios";
import { useEffect, useState } from "react";

const BorderCountries = ({ code }) => {
    const [name, setName] = useState('')


    const getNameFromCode = async () => {
        let response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
        setName(response.data.name)
    }

    useEffect(() => {
        getNameFromCode()

        return () => setName(''); 
    }, [])
    
    return <>
        {!name && <div className = "border-countries">loading...</div>}
        {name && 
            <div className="border-countries">
                {name}
            </div>
        }
    </>
};

export default BorderCountries;