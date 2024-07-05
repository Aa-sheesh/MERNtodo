import express from "express";
const app = express();
import 'dotenv/config';
import ('./connection/conn.js')
import authRouter from './routes/auth.route.js'
import todoRouter from './routes/todos.route.js'
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
    
})
app.use("/api/v1",authRouter)
app.use("/api/v1",todoRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
  
});
