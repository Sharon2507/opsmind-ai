import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import ChatWindow from "../components/ChatWindow";

export default function Dashboard() {
  return (
    <div>

      <Navbar />

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "40px"
      }}>

        <div style={{ width: "40%" }}>
          <h2>Upload SOP</h2>
          <Upload />
        </div>

        <div style={{ width: "50%" }}>
          <h2>Chat with AI</h2>
          <ChatWindow />
        </div>

      </div>

    </div>
  );
}