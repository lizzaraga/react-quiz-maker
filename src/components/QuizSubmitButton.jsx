import { useSelector } from "react-redux";
import { quizzesSelector, userAnswersSelector } from "../features/quiz-board/quiz-board.slice";
import { useNavigate } from "react-router-dom";

export default function QuizSubmitButton() {
  const quizzes = useSelector(quizzesSelector);
  const userAnswers = useSelector(userAnswersSelector);
  const navigate = useNavigate()
  const onGoToResultPage = () => {
    navigate({pathname: '/result'})
  }

 
  return (
    <>
      
      {(userAnswers.length > 0) && (userAnswers.filter(i => i != undefined).length == quizzes.length) && (
        <button onClick={onGoToResultPage} className="mt-4 btn btn-dark align-self-start ">Submit</button>
      )}
    </>
  );
}
