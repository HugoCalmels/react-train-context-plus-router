
import { BrowserRouter as Router,Switch, Routes, Route, Link } from 'react-router-dom';
// Import data
import { studyCases } from '../../data/studyCases'
import StudyCase from './StudyCase'
import { ThemeContext } from '../../helpers/ThemeContext'
import { useContext } from 'react';

const Works = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  console.log(studyCases)

  console.log('theme is ...'+ theme)

  return (
    <section className="page works"
    style= {{ background: theme}}
    >
      <h1>HELO?</h1>
   
      {studyCases.map((studyCase) => (
        <div className={"card " + studyCase.author}>
          <Link to={"/works/" + studyCase.author.toLowerCase() + "-study-case"}>
            <h4>{studyCase.author}</h4>
          </Link>
        </div>
      ))}

    </section>
  )
}

export default Works