import axios from "axios"

export default function Upload() {

  const upload = async (e) => {

    const file = e.target.files[0]

    const formData = new FormData()

    formData.append("file", file)

    try {

      const res = await axios.post(
        "http://localhost:5000/api/sop/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      )

      alert(res.data.msg)

    } catch (err) {

      console.log(err)

      alert("Upload failed")

    }

  }

  return (
    <input type="file" onChange={upload} />
  )

}