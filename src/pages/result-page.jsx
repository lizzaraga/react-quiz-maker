import { useNavigate } from "react-router-dom";
import QuizResult from "../components/QuizResult";
import { useDispatch } from "react-redux";
import { quizzesReset } from "../features/quiz-board/quiz-board.slice";

export default function ResultPage(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onCreateNewQuiz = () => {
    dispatch(quizzesReset())
    navigate({pathname: '/'})
  }
  return (
    <div className="d-flex flex-column p-4 w-50 container mx-auto ">
      <h4>Results</h4>
      <QuizResult/>
      <button onClick={onCreateNewQuiz} className="btn btn-dark mt-4">Create a new quiz</button>
    </div>
  )
}
