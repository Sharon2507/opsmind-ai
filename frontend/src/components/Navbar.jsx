import {Link} from "react-router-dom"

function Navbar(){
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 40px",
      background: "#111",
      color: "white",
      alignItems: "center"
    }}>
      <h2>OpsMind AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;