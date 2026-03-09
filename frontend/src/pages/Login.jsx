import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

useEffect(() => {
  const savedemail = localStorage.getItem("userEmail");
  if (savedemail) {
    navigate("/dashboard");
  }
}, []);

const handleLogin = () => {

  localStorage.setItem("userEmail", email);

  navigate("/dashboard");

};


return(

<div className="auth-page">

  <div className="auth-card">

    <h2>Login</h2>

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

    <button onClick={handleLogin}>Login</button>

    <p>
     Don't have an account?
    <span
    style={{color:"blue",cursor:"pointer"}}
    onClick={()=>navigate("/signup")}
    >
   Signup
   </span>
   </p>

  </div>

</div>

)

}

export default Login