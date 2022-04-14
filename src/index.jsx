import React, {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Switch, Routes, Route, Link } from 'react-router-dom';
import "./style.css";
// Import data
import { studyCases } from './data/studyCases'
// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
// Import global compenents
import Navbar from './components/Navbar'
import StudyCase from './pages/Works/StudyCase'
import { ThemeContext } from './helpers/ThemeContext'


const App = () => {

  console.log(studyCases)

  const [theme, setTheme] = useState('lightgray')

  const switchTheme = () => {
    if (theme === 'lightgray')
      setTheme('darkgray')
    else if (theme === 'darkgray')
      setTheme('lightgray')
  }

  return (
    <Router>
 
      <div className="app">
   
        <Navbar switchTheme={switchTheme}/>

        <main>
        <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/about" element={<About />} />
          <Route path="/works/:name-study-case" element={<StudyCase />} />
            </Routes>
            </ThemeContext.Provider>
      </main>

      </div>

    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)



