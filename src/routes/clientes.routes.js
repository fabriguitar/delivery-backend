import { Router } from "express"; 
import * as clienteController from "../controllers/cliente.controller"; 

const router = Router();


router.post("/logearse", clienteController.logearse);

router.post("/registro", clienteController.crearCliente);

router.get("/categoria/obtenerTodas", clienteController.listarCategorias);

router.post("/orden/crear", clienteController.nuevaOrden);

router.get( "/empresa/obtenerTodas/:idCategoria", clienteController.listarEmpresasPorCategoria);

router.get("/empresa/obtener/:idEmpresa", clienteController.obtenerEmpresa); //obtener nombree informacion de una unica empresa

router.get("/empresa/productosPorSubCateogoria/:idEmpresa", clienteController.obtenerProductosPorSubcategoria);

router.get("/orden/entregada/:idOrden", clienteController.ordenFinalizada);

export default router; //exportando el modulo
