import express from "express"; //modulo ya instalado
import morgan from "morgan";

const app = express(); //para lanzar de express 

app.use(morgan("dev")); //morgan en modo dev, nos dá por consola mensajes mas cortos y limpios

app.get("/", (req, res) => res.json({message: "Bienvenidos a nuestro proyecto PERN"}));
export default app;