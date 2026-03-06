const axios = require("axios")

async function createEmbedding(text){

const response = await axios.post(
"https://api.openai.com/v1/embeddings",
{
model:"text-embedding-3-small",
input:text
},
{
headers:{
Authorization:`Bearer ${process.env.OPENAI_KEY}`
}
}
)

return response.data.data[0].embedding

}

module.exports = createEmbedding