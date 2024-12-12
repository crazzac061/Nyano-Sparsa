const mongoose = require('mongoose');
require ('dotenv').config();

const connectDatabase = async ()=>
{
    try {
        await mongoose.connect(process.env.MONGODB_URI,
            {
               useNewUrlParser: true,
               useUnifiedTopology: true 
            }
        );

        console.log('MongoDB connected sucessfully');
    }catch(error)
    {
        console.error ('Mongodb connection Failed');
        process.exit(1);
    }
}

module.exports = connectDatabase;