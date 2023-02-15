
//for access env vironment
import dotenv from "dotenv"

import express, {Request,Response} from "express"

dotenv.config()

//setup
const app = express();
const port = process.env.PORT || 3001;

app.get("/api", (req : Request, res : Response) => {
  res.json( { "users" : ['nini','gurama','makho'] })
})

app.listen(port, () => console.log(`server started on port ${port}`) );


