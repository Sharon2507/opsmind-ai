import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Upload from "./components/Upload";


function App() {
  return (

    
    <Routes>

      <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="chat" element={<Chat />} />
        <Route path="/Upload" element={<Upload />} />
      </Route>

    </Routes>

    
    
  );
}

export default App;