

import UploadSOP from "../components/UploadSOP"
import ChatWindow from "../components/ChatWindow"

export default function Dashboard(){

return(

<div className="grid grid-cols-2 h-screen">

<div className="p-10 border-r">

<h2 className="text-2xl font-bold">
Upload SOP
</h2>

<UploadSOP/>

</div>

<div>

<ChatWindow/>

</div>

</div>

)
}