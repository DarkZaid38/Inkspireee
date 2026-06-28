const express = require('express');
const authRoutes = require("./routes/auth.routes");
const cookieParser =  require("cookie-parser");
const cors = require("cors");   
const noteRoutes = require("./routes/note.routes")

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials:true
}));
app.use("/api/auth",authRoutes);
app.use("/api/notes",noteRoutes);

module.exports = app;