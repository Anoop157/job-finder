
import express from 'express';
import dotenv from 'dotenv'
import colors from 'colors';
import cors from 'cors'
import morgan from 'morgan';
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middlewares/errormiddleware.js';





//dotenv config
dotenv.config();

//mongoose conn
connectDB();
//rest object
const app = express()
//middle ware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);

//validation middleware
app.use(errorMiddleware)

//port
const PORT=process.env.PORT || 8080;

//listrn
app.listen(PORT ,() => {
    console.log(' Node Server Running In ${process.env.DEV_MODE} Mode on  port no ${PORT}'.bgCyan.white)
    
});