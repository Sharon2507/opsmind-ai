import { useState } from "react";
import axios from "axios";

export default function Upload() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const upload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const form = new FormData();
    form.append("file", file);

    try {

      setLoading(true);
      setMessage("Uploading...");

      const res = await axios.post(
        "http://localhost:5000/api/sop/upload",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setLoading(false);
      setMessage("✅ SOP Uploaded Successfully");

    } catch (error) {

      setLoading(false);
      setMessage("❌ Upload Failed");

      console.error(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>Upload SOP Document</h2>

      <input type="file" accept="application/pdf" onChange={upload} />

      <br /><br />

      {loading && <p>Uploading PDF...</p>}

      {message && <p>{message}</p>}

    </div>
  );
}