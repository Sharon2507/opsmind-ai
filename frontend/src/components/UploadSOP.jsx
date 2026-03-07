import axios from "axios"

export default function UploadSOP(){

const upload = async(e)=>{

const form = new FormData()
form.append("file",e.target.files[0])

await axios.post("http://localhost:5000/api/sop/upload",form)

alert("Uploaded")
}

return(
<input type="file" onChange={upload}/>
)

}