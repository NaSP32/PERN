import { Router } from "express";
import { actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTareas } from "../controllers/tareas.controller.js";

const router = Router();

router.get('/tareas', listarTareas); //listado de tareas

router.get('/tareas/:id', listarTarea); //obtención de una tarea

router.post('/tareas', crearTarea); //creación de una tarea

router.put('/tareas/:id', actualizarTarea); //actualizar tarea específica

router.delete('/tareas/:id', eliminarTarea); // eliminar una tarea

export default router;