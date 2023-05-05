import express from "espress"
import cors from "cors"

const app = express();
app.use(cors())

app.get('/', (req,res) => {
    res.send("Hello Docker ")
})

app.listen(3200, () => {
    console.log("Listening on http://localhost:3200")
})