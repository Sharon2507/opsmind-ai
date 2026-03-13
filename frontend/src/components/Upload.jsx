import { useState } from "react"
import axios from "axios"

function Upload() {

  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const uploadPDF = async () => {

    if (!selectedFile) {
      alert("Please select a file first")
      return
    }

    const formData = new FormData()
    formData.append("file", selectedFile)

    try {

      const res = await axios.post(
        "http://localhost:5000/api/sop/upload",
        formData
      )

      alert(res.data.msg)

    } catch (error) {

      console.error(error)

    }

  }

  return (
    <div className="upload-container">

      <input type="file" onChange={handleFileChange} />

      <button onClick={uploadPDF}>
        Upload SOP
      </button>

    </div>
  )
}

export default Upload