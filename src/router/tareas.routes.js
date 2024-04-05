import { Router } from "express";

const router = Router();

router.get('/tareas', (req, res)=> res.send('Obteniendo tareas')); //listado de tareas

router.get('/tareas/:id', (req,res)=> res.send('Obteniendo tarea única')); //obtención de una tarea

router.post('/tareas', (req, res)=> res.send('Creando tarea')); //creación de una tarea

router.put('/tareas/:id', (req, res)=> res.send('Actualizando tarea')); //actualizar tarea específica

router.delete('/tareas/:id', (req, res)=> res.send('Eliminando tarea única')); // eliminar una tarea

export default router;