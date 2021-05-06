import numeral from 'numeral'

const Country = ({ country, setView }) => {
    return <>
    <div className="country" onClick={()=> setView({name: 'country', param: country.name})}>
        <div className="flag-box">
            <img src={country.flag} alt={`${country.name}'s flag`}/>
        </div>
        <div className="details">
            <p className="details-name" title={country.name}>{country.name}</p>
            <p>
                <span>Population: </span> {numeral(country.population).format('0,0,0')}
            </p>
            <p>
                <span>Region: </span>{country.region}
            </p>

            <p>
                <span>Capital: </span> {country.capital}
            </p>
            
        </div>
    </div>
    </>    
};

export default Country;