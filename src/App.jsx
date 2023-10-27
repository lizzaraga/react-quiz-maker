import { HashRouter, Route, Routes } from 'react-router-dom'
import QuizPage from './pages/quiz-page'
import ResultPage from './pages/result-page'


function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<QuizPage/>}></Route>
        <Route path='/result' element={<ResultPage/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
