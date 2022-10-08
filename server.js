const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use('/public', express.static(path.join(__dirname, 'public')));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
}else{
    app.get("/",(req,res)=>{
      res.send("APi is running")
    } )
}

const PORT = process.env.PORT;  
app.listen(PORT,()=>{
    console.log("Api is Running")
})
