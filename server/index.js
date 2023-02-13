import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js"
import cors from 'cors'
import UserRouter from './Routes/UserRoute.js'
import PostRouter from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
import ChatRoute from './Routes/ChatRoute.js'
import MessageRoute from './Routes/MessageRoute.js'

// Routes
const app = express();

// To Server Images for Public
app.use(express.static('public')); 
app.use('/images', express.static('images'));

// MiddleWare
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening server at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


// usage of Routes
app.use('/auth', AuthRoute)
app.use("/user", UserRouter)
app.use("/post", PostRouter)
app.use("/upload", UploadRoute)
app.use("/chat", ChatRoute)
app.use("/message", MessageRoute)