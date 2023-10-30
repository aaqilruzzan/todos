import cors from "cors"
import express,{Express} from "express"
import mongoose from "mongoose"
import routes from './routes'


const app:Express = express()

app.use(
    cors({
      origin: "http://localhost:5173", 
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
     
    })
  );

app.use(express.json());


app.use(routes)

const port : string|number = process.env.PORT || 4000

const uri: string = `mongodb+srv://aaqilruzzan:FygOTWB3vav7ExSB@cluster0.2yosv2p.mongodb.net/tododb`;

const options = { useNewUrlParser: true, useUnifiedTopology: true} as mongoose.ConnectOptions


mongoose.connect(uri,options)
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`)
    })

})
.catch(error =>{
    throw error
})