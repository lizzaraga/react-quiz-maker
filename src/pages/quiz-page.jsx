import QuizBoard from "../components/QuizBoard";
import QuizForm from "../components/QuizForm";
import QuizSubmitButton from "../components/QuizSubmitButton";

export default function QuizPage(){
  return (
    <div className="container mx-auto p-4">
      <QuizForm></QuizForm>
      <br />
      <QuizBoard/>
      <QuizSubmitButton/>
    </div>
  )
}
