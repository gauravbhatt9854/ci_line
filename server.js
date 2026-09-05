import express from 'express';
import "dotenv/config";

const app = express();


app.get("/" , (req, res)=>{
    res.send("hello gaurav");
})


const PORT = process.env.PORT;

app.listen(PORT ,"0.0.0.0" , ()=> {
    console.log("serer is running at : " , "0.0.0.0:" , PORT);
})