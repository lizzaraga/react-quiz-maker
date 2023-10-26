import { useDispatch, useSelector } from "react-redux"
import { categoriesSelector, categoryChanged, categoriesLoaded, categorySelector, difficultyChanged, difficultySelector } from "../features/quiz-form/quiz-form.slice"
import { useEffect } from "react"
import { quizzesLoaded } from "../features/quiz-board/quiz-board.slice"

export default function QuizForm(){

  const dispatch = useDispatch()

  const category = useSelector(categorySelector)
  const categories = useSelector(categoriesSelector)
  const onCategoryChanged = (value) => dispatch(categoryChanged(value))
  const loadCategories = () => dispatch(categoriesLoaded())

  const difficulty = useSelector(difficultySelector)
  const difficulties = ['Easy', 'Medium', 'Hard']
  const onDifficultyChanged = (value) => dispatch(difficultyChanged(value))

  const onCreateQuiz = (e) => {
    e.preventDefault()
    if(category && difficulty) dispatch(quizzesLoaded({category, difficulty}))
  }

  useEffect(() => {
    loadCategories()
  }, [])

 
  return (
    <form onSubmit={onCreateQuiz} className="d-flex gap-2">
      <select className="form-control" onChange={(e) => onCategoryChanged(e.target.value)} value={category} name="categorySelect" id="categorySelect">
        <option disabled value=''>Select a category</option>
        { categories.map((item, index) => (<option key={`${item.name}_${index}`} value={item.id}>{ item.name }</option>)) }
      </select>
      <select className="form-control" onChange={(e) => onDifficultyChanged(e.target.value)} value={difficulty} name="difficultySelect" id="difficultySelect">
        <option disabled value=''>Select difficulty</option>
        { difficulties.map((item, index) => (<option key={`${item}_${index}`} value={item.toLowerCase()}>{ item }</option>)) }
      </select>
      <button className="btn btn-primary " onClick={onCreateQuiz} id="createBtn">Create</button>
    </form>
  )
}

