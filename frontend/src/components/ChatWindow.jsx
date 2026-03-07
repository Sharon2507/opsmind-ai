import {useState} from "react"
import axios from "axios"

export default function ChatWindow(){

const [question,setQuestion]=useState("")
const [answer,setAnswer]=useState("")

const ask = async()=>{

const res = await axios.post(
"http://localhost:5000/api/chat",
{question}
)

setAnswer(res.data)
}

return(

<div className="p-10">

<textarea
className="border w-full"
onChange={e=>setQuestion(e.target.value)}
/>

<button onClick={ask}>Ask AI</button>

<div className="mt-5">
{answer}
</div>

</div>

)

}