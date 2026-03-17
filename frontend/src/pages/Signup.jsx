import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSignup = () => {

if(name && email && password){

// store signup data
localStorage.setItem("userName", name);
localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

// go to login
navigate("/");

}

};

return(

<div className="auth-page">

<div className="auth-card">

<h2>Signup</h2>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleSignup}>Signup</button>

<p>
Already have account?
<span
style={{color:"blue",cursor:"pointer"}}
onClick={()=>navigate("/login")}
>
Login
</span>
</p>

</div>

</div>

)

}

export default Signup;