import axios from "axios";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { BiArrowBack } from 'react-icons/bi';
import BorderCountries from "../components/BorderCountries";

const Details = ({ viewURL, setView }) => {
    const URL = `https://restcountries.eu/rest/v2/name/${viewURL}?fullText=true`

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([])

    const fetchDetails = async () => {
        let response = await axios.get(URL);
        setData(response.data)
        setIsLoading(false);
    }

    console.log(data);

    useEffect(() => {
        
        fetchDetails();

        return () => {
            setIsLoading(true);
        }
    }, [])
    return <>
    <div className="back-space">
        <button onClick={() => setView({name: "main", param: ''})}><BiArrowBack color="#666" size={24} />Back</button>
    </div>
    {isLoading && <div>Loading...</div>}
    {!isLoading && data.map((c, i) => <div>
        <div className="details-cover">
            <div className="image-space">
                <img src={c.flag} alt={`${c.name}'s flag`}/>
            </div>
            <div className="details-space">
                <div className="details-name">{c.name}</div>
                <div className="details-general">
                    <div className="left">
                        <p>
                            <span>Native Name: </span> {c.nativeName}
                        </p>
                        
                        <p>
                            <span>Population: </span> {numeral(c.population).format('0,0,0')}
                        </p>
                        
                        <p>
                            <span>Region: </span> {c.region}
                        </p>

                        <p>
                            <span>Sub Region: </span> {c.subregion}
                        </p>

                        <p>
                            <span>Capital: </span> {c.capital}
                        </p>
                    </div>

                    <div className="right">
                        <p>
                            <span>Top Level Domain: </span> {c.topLevelDomain}
                        </p>

                        <p>
                            <span>Currencies: </span> {c.currencies.map(currency => {
                                return `${currency.name} `
                            })}
                        </p>

                        <p>
                            <span>Languages: </span> {c.languages.map(language => {
                                return `${language.name}, `
                            })}
                        </p>
                    </div>
                </div>

                <div>
                    <p>
                        <span>Border Countries: </span> {c.borders.map((bc, i) => {
                            return <BorderCountries key = {i} code={bc} />
                        })}
                    </p>
                </div>
            </div>
        </div>
    </div>)}
    </>
};

export default Details;