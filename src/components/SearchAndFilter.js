import { GoSearch } from 'react-icons/go'
import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react';

const SearchAndFilter = ({ setRegion, setSearchItem }) => {
    const [showDrop, setShowDrop] = useState(false);

    return(
    <>
    <div className="search-and-filter">
        <div className="search">
            <GoSearch color="#666" className="search-icon"/>
            <input 
                type="text" 
                placeholder="Search for a country..." 
                className="search-input" 
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </div>
        <div className="filter" onClick={() => setShowDrop(!showDrop)}>
            <div className="filter-box">
                <span>Filter By Region</span>
                <FiChevronDown color="#666" className="filter-icon"/>
            </div>
            {showDrop && <div className="drop-box">
                <button className="drop-button" onClick={() => {setSearchItem(''); setRegion('africa')}}>Africa</button>
                <button className="drop-button" onClick={() => {setSearchItem(''); setRegion('america')}}>America</button>
                <button className="drop-button" onClick={() => {setSearchItem(''); setRegion('asia')}}>Asia</button>
                <button className="drop-button" onClick={() => {setSearchItem(''); setRegion('europe')}}>Europe</button>
                <button className="drop-button" onClick={() => {setSearchItem(''); setRegion('oceania')}}>Oceania</button>
                <button className="drop-button" onClick={() => {setSearchItem(''); setRegion('all')}}>All</button>
            </div>}
        </div>
    </div>
    </>
)};

export default SearchAndFilter;