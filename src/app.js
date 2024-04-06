import express from "express"; //modulo ya instalado
import morgan from "morgan";
import tareasRoutes from "./router/tareas.routes.js"
import authRoutes from "./router/auth.routes.js"

const app = express(); //para lanzar de express 

//Middlewares- Convierte a objetos de JS lo que llega al backend
app.use(morgan("dev")); //morgan en modo dev, nos dá por consola mensajes mas cortos y limpios
app.use(express.json()); //convertimos lo que llega desde el front a objeto de javascript
app.use(express.urlencoded({extended: false})); //para codificar formularios html CORTOS

app.get("/", (req, res) => res.json({ message: "Bienvenidos a nuestro proyecto PERN" }));
app.use('/api', tareasRoutes);
app.use('/api', authRoutes);

//Creamos un manejador de errores
app.use((err, req, res, next) =>{
    res.status(500).json({
        status:"error",
        message: err.message
    }); //500 es un error crìtico a nivel global al fallar alguna de las rutas
});
export default app;