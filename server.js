const express = require('express');
const dotenv = require('dotenv');

//load env vars
dotenv.config({path: '/.config/config.env'});

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT,console.log(`server running in ${process.env.PORT} mode on port ${PORT}`))