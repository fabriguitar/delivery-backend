import express from "express";
import morgan from "morgan";
import cors from "cors"; 
import AdminRoutes from "./routes/admin.routes";
import MotRoutes from "./routes/motorista.routes";
import ClientesRoutes from "./routes/clientes.routes";



const app = express();

app.set("port", 3001);



app.use(cors())
app.use(morgan('dev'))
app.use(express.json()); 
app.use(express.urlencoded({extended : false}));
app.use("/admin/api", AdminRoutes); 
app.use("/motorista/api", MotRoutes); 
app.use("/cliente/api", ClientesRoutes); 



//routes
app.get("/si", (req, res) => {
    console.log("Welcome to my aplications");
    res.send('si')
});



export default app;
