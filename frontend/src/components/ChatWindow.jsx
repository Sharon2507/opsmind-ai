import { useState } from "react";
import axios from "axios";

export default function ChatWindow() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {

    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    try {

      setLoading(true);
      setAnswer("");

      const res = await axios.post(
        "http://localhost:5000/api/chat",
        { question }
      );

      setAnswer(res.data.answer); // backend should return {answer:"text"}

    } catch (err) {

      console.error(err);
      setAnswer("❌ Error getting response from AI");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>

      <h2>Ask Questions From SOP</h2>

      <textarea
        placeholder="Ask anything about the uploaded SOP..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />

      <br /><br />

      <button
        onClick={ask}
        style={{
          padding: "10px 20px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Ask AI
      </button>

      <div style={{ marginTop: "30px" }}>

        {loading && <p>🤖 AI is thinking...</p>}

        {answer && (
          <div
            style={{
              background: "#f3f4f6",
              padding: "15px",
              borderRadius: "8px"
            }}
          >
            <strong>Answer:</strong>
            <p>{answer}</p>
          </div>
        )}

      </div>

    </div>

  );
}