const express = require("express");
const config = require("./config/config.json");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// configaration
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// db connection
mongoose.connect(config.MONGO_URL).then((data)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("no connection");
});

// routes path
app.use("/users", require("./routes/users"));

const port = config.PORT;
app.listen(port,()=>{
    console.log(`Server runinng on the:${port} `);
});
