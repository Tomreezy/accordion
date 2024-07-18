import OneQuestion from "./OneQuestion"
import questions from "../data/data"

const Main = () => {
  return (
    <section className="bg-slate-200 p-6 rounded-sm max-w-2xl mx-auto space-y-4">
        {questions.map((question,index)=>{
            return <OneQuestion {...question} key={index} />
        })}
    </section>
  )
}

export default Main