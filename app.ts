

import bodyParser from "body-parser"
import cors from "cors";
import mysql from "mysql"
import session from "express-session"


//for access env vironment
import dotenv from "dotenv"

import express, {Request,Response} from "express"

dotenv.config()

//setup
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/productImages',express.static(__dirname + '/data/productImages'));


app.get("/products/page/1", (req : Request, res : Response) => {
  res.json( 
    {
      image : ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'],
      name : ["წარბების გამაძლიერებელი შრატი","ნაოჭსაწინააღმდეგო შრატი",
      "ყურძნის წიპწის სკრაბ-პილინგი","ხელის მკვებავი კრემი","ჰიალურონის შრატი კოლაგენით",
      "არაბიკა ყავის ნედლი სკრაბი","სახის გამწმენდი ვარდის ტონერი"],
      price : [30,50,100,90,20,10,230]
    }
  )
})


const db = mysql.createConnection({
  host : "localhost",
  user : "tsotne",
  password : "Beethoven999",
  database : "botanica-georgia"
})
//check if database connected
db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});

//Admin Login
app.post('/admin-login', function (req : Request, res : Response) {
  const adminName = req.body.userName;
  const adminPassword = req.body.userPassword;

  login({adminName,adminPassword},req,res)
  


});

app.listen(port, () => console.log(`server started on port ${port}`) );


interface adminData {
  adminName : string,
  adminPassword : string
}

function login(data : adminData, req : Request, res : Response){

  db.query(
    "SELECT * FROM admin WHERE name = ? AND password = ?",
    [data.adminName,data.adminPassword],
    (err,result) => {
      if(err){
        res.send( { err : err})
      }

      if(result.length > 0){
        res.send(  { 
          responseMessage : "loginData is Correct",
          statusCode : 1,
          statusMessage : "Access",
        })
      } else {
        res.send(  { 
          responseMessage : "loginData is Wrong",
          statusCode : 0,
          statusMessage : "Denied"
        })
      }
    }
  )

}

function insert(data : adminData){
  db.query(
    "INSERT INTO admin (name, password) VALUES(?,?)",
    [data.adminName,data.adminPassword],
    (err,result) => {
      console.log(result,err)
    }
  )
}


