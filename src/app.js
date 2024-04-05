import express from "express"; //modulo ya instalado
import morgan from "morgan";

const app = express(); //para lanzar de express 

app.use(morgan("dev")); //morgan en modo dev, nos dá por consola mensajes mas cortos y limpios

app.get("/", (req, res) => res.json({ message: "Bienvenidos a nuestro proyecto PERN" }));

//generamos otra ruta
app.get("/test", (req, res) => {
    throw new Error('Error generado por el usuario');
    res.send('test');
});

//Creamos un manejador de errores
app.use((err, req, res, next) =>{
    res.status(500).json({
        status:"error",
        message: err.message
    }); //500 es un error crìtico a nivel global al fallar alguna de las rutas
});
export default app;