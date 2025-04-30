const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/AuthRoute');

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = 4000;

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Backend is working!' });
});

async function startServer() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected");

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error(" Error starting server:", err);
    }
}

startServer();
