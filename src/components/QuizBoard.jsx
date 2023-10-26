import { useDispatch, useSelector } from "react-redux"
import PropTypes from 'prop-types'
import { quizzesSelector, userAnswerUpdated } from "../features/quiz-board/quiz-board.slice"
import QuizItem from "./QuizItem"

QuizBoard.propTypes = {
  showResult: PropTypes.bool
}
export default function QuizBoard(){

  const quizzes = useSelector(quizzesSelector)
  const dispatch = useDispatch()

  const onQuizAnswerSelected = ({index, answer}) => {
    dispatch(userAnswerUpdated({questionIndex: index, answer}))
  }

  return (
    <div className="d-flex flex-column gap-3">
    {quizzes.map((quiz, index) => <QuizItem key={`quiz_${index}`} 
      question={quiz.question} 
      answers={quiz.answers}
      onAnswerSelected={(answer) => onQuizAnswerSelected({index, answer})}/>)}
    </div>
  )
}
