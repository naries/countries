import { BiMoon } from "react-icons/bi";
import { BsMoon } from "react-icons/bs"

const Bar = ({ setTheme, theme }) => {
    
    return <div className="bar">
        <div>
            <p>Where in the world?</p>
        </div>
        <div className="toggle-theme" onClick={() => setTheme(theme==='light'? "dark": 'light')}>
            <span>{theme === 'light' ? <BiMoon />: <BsMoon />}</span><span>Dark Mode</span>
        </div>
    </div>
};

export default Bar;