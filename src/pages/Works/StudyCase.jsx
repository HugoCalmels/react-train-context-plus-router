import { useParams} from 'react-router-dom';
import { studyCases } from '../../data/studyCases'
import { useNavigate } from "react-router-dom";
const StudyCase = (props) => {

  let { name } = useParams() 
  console.log(name)
  // OMG CEST ABUSE j'ai chopé le name avec le slug :name envoyé pfff OK REACT !!


  const foundStudyCase = studyCases.find((studyCase) => {
    return studyCase.author.toLowerCase() === name
  })

  console.log(foundStudyCase)

  const navigate = useNavigate()


  return (
    <div className="study-case">
      <h1> {foundStudyCase.author} </h1>
      <p>{foundStudyCase.content} </p>
      <button type="button" onClick={()=>navigate('/works')}>
        Go back
      </button>
    </div>
  )
}

export default StudyCase