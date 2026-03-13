import Upload from "../components/Upload";
import ChatWindow from "../components/ChatWindow";

function Chat() {

  return (

    <div className="container">

      <h2 style={{ color: "black" }}>Upload SOP</h2>

      <Upload />

     

      <ChatWindow />

    </div>

  );

}

export default Chat;