import Inicio from  "../models/Inicio-sesion"; 
import Categoria from  "../models/categorias"; 
import Empresas from  "../models/Empresas"; 
import SubCategorias from  "../models/Subcategorias"; 
import Producto from "../models/productos";
import Motorista from  "../models/Motoristas";



export const login = async (req, res) => {
  const login = await Inicio.find({ usuario: req.body.usuario, password: req.body.password});
  console.log(login.length)
  if(login.length == 1){
    res.json({login: true, ruta: './admin-solicitudes.html', id: login[0]._id})
  }else{
    res.json({login: false})
  }
};


export const nuevaCategoria = async (req, res) => {
  const nuevaCategoria = new Categoria({
  nombre: req.body.nombre,
});
const categoriaGuardada = await nuevaCategoria.save();
res.json(categoriaGuardada);
};

export const obtenerCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};



export const crearEmpresa = async (req, res) => {
  const crearEmpresa = new Empresas({
    urlImagen : req.body.urlImagen,
    nombre : req.body.nombre,
    zona : req.body.zona,
    idCategoria : req.params.idCategoria, 
    nombreCategoria : req.body.nombreCategoria,
    informacion : req.body.informacion, 
    direccion:req.body.direccion
  });

  const empresaGuardada = await crearEmpresa.save();
  res.json(empresaGuardada);
};


export const eliminarEmpresa = async (req, res) => {
  const eliminarEmpresa = await Empresas.findByIdAndDelete(req.params.idEmpresa);
  if (eliminarEmpresa == null) {
    res.json({
      message: "la empresa no existe",
    });
  } else {
    res.json({
      message: "se elimino con exito",
    });
  }
};


export const obtenerEmpresas = async (req, res) => {
  const empresas = await Empresas.find({nombreCategoria : req.body.nombreCategoria, zona: req.body.zona});
  res.json(empresas);
};

export const obtenerUnaEmpresa = async (req, res) => {
  const empresas = await Empresas.find({_id:req.params.id});
  res.json(empresas);
};


export const obtenerEmpresasCategoria = async (req, res) => { 
  const empresas = await Empresas.find({ idCategoria : req.params.idCategoria});
  if(empresas.length == 0){
    res.json({mensaje : 'categoria vacia'})
  }else{
    res.json(empresas);
  }  
};


export const nuevaSubCategoria = async (req, res) => {
  const crearSub = new SubCategorias({
    nombre : req.body.nombre,
    idEmpresa : req.params.idEmpresa,
  });

  const subGuardada = await crearSub.save();
  res.json({subGuardada});
};

export const obtenerSubCategorias = async (req, res) => { 
  const sub = await SubCategorias.find({idEmpresa:req.params.id});
  res.json(sub);  
};


export const crearProducto = async (req, res) => {
  const crearProducto = new Producto({
    urlImagen : req.body.urlImagen,
    nombre : req.body.nombre,
    idSubcategoria : req.params.idSubcategoria,  
    descripcion : req.body.descripcion,
    precio : req.body.precio,
    unidades:1
  });

  const productoGuardado = await crearProducto.save();
  res.json(productoGuardado);
};


export const obtenerProducto = async (req, res) => {
  const producto = await Producto.find({_id:req.params.id});
  res.json(producto[0]);
};




export const obtenerProductosSubCat = async (req, res) => { 
  
  let productosArray = []
  const sub = await SubCategorias.find({idEmpresa : req.params.idEmpresa});


  if(sub.length == 0){
    res.json(productosArray);  
  }

  sub.forEach(async (subC, i) => {


    let idSubC = subC._id.toHexString()
    let productos =  await Producto.find({idSubcategoria : idSubC});


    productosArray.push({nombreSubCategoria: subC.nombre, productos})


    
    if(i == sub.length - 1){
  
      res.json(productosArray);  
    }
    
  });



};


export const obtenerSolicitudes = async (req, res) => { 
  const motoristas = await Motorista.find({aprobado:false}, {nombre:1 , _id : 1});
  res.json(motoristas);
};


export const devolverMotorista = async (req, res) => {
  const motorista = await Motorista.find({ _id : req.params.idMotorista});
  if(motorista.length == 0){
    res.json({mensaje : 'no existe registro'})
  }else{
    res.json(motorista);
  }  
};

export const altaMotorista = async (req, res) => {
  const aprobado = await Motorista.findByIdAndUpdate(req.params.idMotorista, {aprobado : true}, { new: true }); 
  if(aprobado != null){
    res.json({
      message: "aprobado con exito",
    });
  }else{
    res.json({
      message: "error",
    });
  }
};


export const rechazarMotorista = async (req, res) => {
  const motoristaEliminado = await Motorista.findByIdAndDelete(req.params.idMotorista);


  if (motoristaEliminado == null) {
    res.json({
      message: "registro no encontrado",
    });
  } else {
    res.json({
      message: "se elimino con exito",
    });
  }
};

export const obtenerMotoristas = async (req, res) => {
  const motoristas = await Motorista.find({}, {
    _id:true, nombre: true
  });

  res.json(motoristas)
}