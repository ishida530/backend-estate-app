import express from "express";
import cors from "cors";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import testRoute from "./routes/test.route.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser())

// Konfiguracja CORS
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);
app.use('/api/test', testRoute);

app.listen(8800, () => {
    console.log('server is running test');

});