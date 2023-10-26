
import { useSelector } from 'react-redux'
import { quizzesSelector, userAnswersSelector } from '../features/quiz-board/quiz-board.slice'
import QuizItem from './QuizItem'



export default function QuizResult(){

  const quizzes = useSelector(quizzesSelector)
  const userAnswers = useSelector(userAnswersSelector)
  

  const points = quizzes.reduce((acc, quiz, index) => {
    acc = quiz.correct_answer == userAnswers[index] ? acc + 1 : acc
    return acc
  }, 0)

  const pointsClass = (points) => {
    let className = 'mt-2 text-center '
    if([4, 5].indexOf(points) > -1) className += 'bg-success'
    else if([2, 3].indexOf(points) > -1) className += 'bg-warning'
    else className += 'bg-danger'
    return className
  }
 
 
  return (
    <>
    {quizzes.map((quiz, index) => <QuizItem key={`quiz_${index}`} 
      question={quiz.question} 
      answers={quiz.answers}
      correctAnswer={quiz.correct_answer}
      userAnswer={userAnswers[index]}
      onAnswerSelected={() => {}}/>)}

      <p className={pointsClass(points)}>
        Your score is {points} out {quizzes.length}
      </p>
    </>
  )
}
