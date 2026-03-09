import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function Layout() {
  return (
    <div>

      <Navbar />   {/* Navbar only here */}

      <div className="container">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;