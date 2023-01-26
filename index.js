import express from 'express'
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// import routes
// console.log('process.env.DB_CONNECT',process.env.DB_CONNECT);
import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';
import userRoute from './routes/user.js';
// server PORT
const PORT = process.env.PORT || 3000;
const server_host = process.env.YOUR_HOST || '0.0.0.0';

mongoose.connect(process.env.DB_CONNECT,
{useNewUrlParser:true},
() => console.log('connected to mongo db'))
// Route middleware
app.use(express.json());
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'auth-token,X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware

    next();
});
app.use('/api/user', authRoute);
app.use('/api/posts',postRoute);
// app.use('/api/user',userRoute);
app.use('/api/SSMMS-user',userRoute);

app.listen(PORT, server_host, () => console.log('server up and running at PORT ', PORT));

