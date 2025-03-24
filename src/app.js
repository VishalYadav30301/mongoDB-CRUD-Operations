const express = require('express');
const { connectDB, closeDB} = require('./config/db');
const setupRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

async function startServer() {
    try{
        const db = await connectDB();
        const router = await setupRoutes(db);
        app.use('/api',router);
        app.listen(PORT, ()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }catch(err){
        console.error('Error started server:', err);
        process.exit(1);
    }
    
}
process.on('SIGINT', async() =>{
    await closeDB();
    process.exit();

});

startServer();