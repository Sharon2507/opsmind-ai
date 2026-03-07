import {Link} from "react-router-dom"

export default function Navbar(){

const logout = ()=>{
localStorage.removeItem("token")
window.location="/"
}

return(

<div className="flex justify-between p-4 bg-gray-900 text-white">

<h1 className="font-bold">
OpsMind AI
</h1>

<div className="flex gap-4">

<Link to="/dashboard">Dashboard</Link>

<button onClick={logout}>
Logout
</button>

</div>

</div>

)

}