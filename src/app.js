import express from 'express';
import cors from 'cors';
import 'dotenv/config' ;

const app = express();
const PORT = process.env.PORT || "8091";

app.use(cors());
app.use(express.json({limit: '20mb'}));

app.get("/", (req, res, next) =>{
    res.send("<h2>Library Managment Systm</h2>");
    next();
})

app.listen(PORT, ()=>{
    console.log(`Port is up and running ${PORT}`);
})


