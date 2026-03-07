import {useState} from "react"
import API from "../api"

export default function Signup(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const signup = async()=>{

await API.post("/auth/signup",{
email,
password
})

alert("Signup successful")

window.location="/"

}

return(

<div className="flex flex-col gap-4 p-10">

<h2 className="text-2xl font-bold">Signup</h2>

<input
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
placeholder="Password"
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={signup}>
Signup
</button>

</div>

)

}