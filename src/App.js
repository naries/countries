import { useState } from 'react';
import './App.scss';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light')


  return (
    <div className={ `App ${theme}` }>
      <Home setTheme={setTheme} theme={theme} />
    </div>
  );
}

export default App;
