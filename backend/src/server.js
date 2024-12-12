const express = require ('server');
const cors = require ('cors');
const connectDatabase = require ('./config/database');
const userRoutes = require ('./routes/user.routes');
const healthRoutes = require ('./routes/health.routes');

const app = express();

app.use(cors());
app.use(express.json()); //middleware


connectDatabase();    //connecting database

app.use('/api/users', userRoutes);
app.use('/api/health', healthRoutes);   //routes

const PORT = process.env.PORT || 5000;
app.listen (PORT,()=>
{
    console.log (`server running in port ${PORT}`);
});
