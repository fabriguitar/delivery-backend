import { Router } from "express"; //servira para definir las rutas
import * as adminController from "../controllers/admin.controller"; //exportara todos los modulos de ../controllers/task.controller bajo el nombre adminController
import * as motController from "../controllers/motorista.controller";

const router = Router();

// router.post('/', adminController.newAdmin);

router.post("/logearse", adminController.login); //iniciar sesion

//categorias
router.post("/categoria/crear", adminController.nuevaCategoria); //crear categoria

router.get("/categoria/obtener", adminController.obtenerCategorias); //obtener categorias


router.get("/obtenerEmpresaUnica/:id", adminController.obtenerUnaEmpresa); 

router.get("/obtenerProductoUnico/:id", adminController.obtenerProducto); 

router.post("/crearEmpresa/:idCategoria", adminController.crearEmpresa);

router.delete("/eliminarEmpresa/:idEmpresa", adminController.eliminarEmpresa);

router.get("/obtenerCategorias", adminController.obtenerCategorias);

router.post("/obtenerEmpresas", adminController.obtenerEmpresas); 

router.get(
  "/obtenerEmpresas/:idCategoria",
  adminController.obtenerEmpresasCategoria
); 


router.post("/nuevaSubCategoria/:idEmpresa", adminController.nuevaSubCategoria);

router.get("/obtenerSubCategorias/:id", adminController.obtenerSubCategorias);


router.post("/crearProducto/:idSubcategoria", adminController.crearProducto);

router.get(
  "/crearProducto/obtenerProductos/subcategoria/:idEmpresa",
  adminController.obtenerProductosSubCat
); 

//solicitudes motoristas
router.get("/solicitudes", adminController.obtenerSolicitudes); 

router.put("/solicitud/aprobar/:idMotorista", adminController.altaMotorista); 

router.delete(
  "/solicitud/rechazar/:idMotorista",
  adminController.rechazarMotorista
); 

router.get("/solicitud/:idMotorista", adminController.devolverMotorista); 

router.post(
  "/ordenesDisponibles/:zona",
  motController.obtenerOrdenesDisponibles
); //enviar req.body.estado:0 y zn en params

router.get("/listarMotoristas", adminController.obtenerMotoristas);

router.put("/asignarOrdenMotorista", motController.actualizarEstadoOrden); //enviar req.body con estado:1, idMotorista y idOrden

export default router; //exportando el modulo
