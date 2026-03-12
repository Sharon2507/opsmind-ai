import Upload from "../components/Upload"
import ChatWindow from "../components/ChatWindow";

function Chat() {

  return (

    <div className="container">

      <div className="dashboard">

        <div className="upload-box">
          <h2>Upload SOP</h2>
          <input type="file" />
        </div>

        <div>
          <h2>Chat with AI</h2>

          <div className="chat-box">
            <ChatWindow />
          </div>

        </div>

      </div>

    </div>

  );

}

export default Chat;