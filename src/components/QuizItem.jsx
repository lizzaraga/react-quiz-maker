import { useEffect } from 'react'
import PropTypes from 'prop-types'
import QuizAnswer from './QuizAnswer'
import { useState } from 'react'

QuizItem.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  correctAnswer: PropTypes.string,
  userAnswer: PropTypes.string,
  onAnswerSelected: PropTypes.func.isRequired
}
export default function QuizItem({question, answers, onAnswerSelected, correctAnswer, userAnswer}){

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  
  const handleSelectedAnswer = (answer) => {
    setSelectedAnswer(answer)
    onAnswerSelected(answer)
  }

  const answerClass = (answer) => {
    let className = 'btn '
    if(correctAnswer && userAnswer){
      if(answer == correctAnswer) className += 'btn-success'
      else if(answer == userAnswer && userAnswer != correctAnswer) className += 'btn-danger'
      else className += 'btn-outline-success'
    }
    else{
      if(answer == selectedAnswer) className += 'btn-success'
      else className += 'btn-outline-success'
    }

    return className
  }
  useEffect(() => {
    setSelectedAnswer(null)
  }, [question])

  return (
    <div className="d-flex flex-column ">
      <h6 dangerouslySetInnerHTML={{__html: question}}></h6>

      <div className="d-flex gap-2 ">
      {answers.map((answer, index) => (
        <QuizAnswer key={`answer_${index}`} answer={answer} className={answerClass(answer)} onSelect={() => handleSelectedAnswer(answer)} />
      ))}
      </div>
    </div>
  )
}
