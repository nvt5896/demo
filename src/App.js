import './App.css';
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import News from "./pages/News";

// create context
export const ThemeContext = createContext(null);


function App() {
    const [theme, setTheme] = useState('Light');
const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');

}

  return (
      <ThemeContext.Provider value={{theme, setTheme}}>
    <div className="App" id={theme}>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="*" element={<News/>}/>
        </Routes>
    </div>
      </ThemeContext.Provider>
  );
}
export default App;
