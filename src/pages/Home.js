import { useState } from "react";
import Bar from "../components/Bar";
import CountrySection from "../components/CountrySection";
import SearchAndFilter from "../components/SearchAndFilter";
import Details from "./Details";

const Home = ({ setTheme, theme }) => {
    const [region, setRegion] = useState('all')
    const [searchItem, setSearchItem] = useState('')
    const [view, setView] = useState({name: 'main', param:''})


    let url;

    
    switch (searchItem) {
        case '':
            switch (region) {
                case 'europe':
                    url = "https://restcountries.eu/rest/v2/region/europe";
                    break;
                case 'africa':
                    url = "https://restcountries.eu/rest/v2/region/africa";
                    break;
                case 'oceania':
                    url = "https://restcountries.eu/rest/v2/region/oceania";
                    break;
                case 'asia':
                    url = "https://restcountries.eu/rest/v2/region/asia";
                    break;
                case 'amehsl(207, 26%, 17%)ricas':
                    url = "https://restcountries.eu/rest/v2/region/americas";
                    break;
                default: 
                    url="https://restcountries.eu/rest/v2/all"
            }
            break;
        default: 
            url=`https://restcountries.eu/rest/v2/name/${searchItem}`
            break;
    }

    return <>
        <Bar setTheme = {setTheme} theme={theme}/>
        <div className="inner">
            {view.name === 'main' && <>
                <SearchAndFilter setRegion={setRegion} setSearchItem = {setSearchItem} />
                <CountrySection url = {url} setView = {setView} />
            </>}
            {view.name === 'country' && <>
                <Details viewURL = {view.param} setView={setView}/>
            </>}
        </div>
    </>
};

export default Home;