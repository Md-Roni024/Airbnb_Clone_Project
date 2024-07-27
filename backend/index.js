const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const {dbConnect} = require('./config/databaseConnection.js');
const roomRoutes = require("./routes/roomRoutes.js")
const hotelRoutes = require("./routes/hotelRoutes.js")
PORT = process.env.PORT || 5000


// All Routes
// app.use("/hotel",roomRoutes)
app.use("/hotel",hotelRoutes)




dbConnect()
    .then(() => {
        console.log('Database Successfully Connected');
        app.listen(PORT, () => {
            console.log(`Server Running at: http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err.message);
    });


//Home Route
app.get("/",(req,res)=>{
    res.send("Home Route")
    res.statusCode = 200;
})