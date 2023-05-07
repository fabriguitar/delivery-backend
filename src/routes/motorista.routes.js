import { Router } from "express";
import * as motController from "../controllers/motorista.controller";

const router = Router();

router.get("/orden/detallar/:idOrden", motController.detallerOrden); //detalla una orden por id
router.get("/orden/disponibles/:zona", motController.obtenerOrdenesDisponibles); // ver ordenes disponibles por zona
router.get("/orden/tomada/:zona", motController.ordenesTomadas); //ordenes con estado 1
router.get("/orden/entregada/:zona", motController.ordenesEntregadas); //ordenes con estado 4

router.put("/orden/tomar/", motController.actualizarEstadoOrden); //estado de orden 1
router.put("/orden/origen/", motController.actualizarEstadoOrden); //estado de orden 2
router.put("/orden/camino/", motController.actualizarEstadoOrden); //estado de orden 3
router.put("/orden/destino/", motController.actualizarEstadoOrden); //estado de orden  4

router.post("/crearMotorista", motController.nuevoMotorista); //registrar motorista

router.get("/logear", motController.logearse); //logear motorista

export default router; //exportando el modulo
