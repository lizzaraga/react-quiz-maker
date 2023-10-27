import PropTypes from 'prop-types'

QuizAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string
}
export default function QuizAnswer({answer, onSelect, className}){

  return (
    <button dangerouslySetInnerHTML={{__html: answer}} onClick={onSelect} className={className}>
      
    </button>
  )
}
