import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [userEmail, setUserEmail] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : "";

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(10px)"
    }}>

      {/* Brand */}
      <h2 style={{color:"white"}}>Opsmind-AI</h2>

      {/* Menu */}
      <div className="nav-links"style={{display:"flex",gap:"25px",alignItems:"center"}}>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/chat">Chat</Link>

        {!userEmail && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {userEmail && (
          <div style={{position:"relative"}}>

            <div
              onClick={()=>setOpen(!open)}
              style={{
                width:"40px",
                height:"40px",
                borderRadius:"50%",
                background:"#ff6a3d",
                color:"white",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                cursor:"pointer",
                fontWeight:"bold"
              }}
            >
              {firstLetter}
            </div>

            {open && (
              <div style={{
                position:"absolute",
                right:"0",
                top:"50px",
                background:"white",
                padding:"20px",
                borderRadius:"10px",
                width:"220px",
                boxShadow:"0 5px 20px rgba(0,0,0,0.2)"
              }}>

                <p>{userEmail}</p>

                <button
                  onClick={logout}
                  style={{
                    background:"#3b82f6",
                    color:"white",
                    border:"1px solid rgb(255, 255, 255)",
                    padding:"8px 15px",
                    borderRadius:"6px"
                  }}
                >
                  Logout
                </button>

              </div>
            )}

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;