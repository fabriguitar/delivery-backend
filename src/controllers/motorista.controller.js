import e from "express";
import Motorista from "../models/Motoristas";
import ordenes from "../models/ordenes";

export const nuevoMotorista = async (req, res) => {
  const nuevoMot = new Motorista({
    nombre: req.body.nombre,
    fechaNacimiento: {
      dia: req.body.dia,
      mes: req.body.mes,
      anio: req.body.anio,
    },
    residencia: req.body.residencia,
    correo: req.body.correo,
    contrasenia: req.body.contrasenia,
    celular: req.body.celular,
    celularAlternativo: req.body.celularAlternativo,
    ordenes: [],
    aprobado: false,
    sexo: req.body.sexo,
  });
  const existeMotorista = await Motorista.find({ correo: req.body.correo });
  let motoristaGuardado;

  console.log(existeMotorista.length);

  if (existeMotorista.length > 0) {
    res.json({ mensaje: "motorista registrado anteriormente", existe: true });
  } else {
    motoristaGuardado = await nuevoMot.save();
    res.json({
      mensaje: "Registrado correctamente espere ser aprobado",
      existe: false,
      id: motoristaGuardado._id,
    });
  }
};

export const logearse = async (req, res) => {
  const existeUsuario = await Motorista.findOne({ correo: req.body.correo });
  let existeContr = null;
  if (existeUsuario == null) {
    existeContr = null;
  } else {
    existeContr = await Motorista.findOne({
      contrasenia: existeUsuario.contrasenia,
    });
  }

  if (existeContr == null) {
    res.json({ mensaje: "Credenciales invalidas", registrado: false });
  } else {
    res.json({
      mensaje: "Datos ingresados correctamente",
      registrado: true,
      id: existeContr._id,
    });
  }
};

export const obtenerOrdenesDisponibles = async (req, res) => {
  const ordenesDisponibles = await ordenes.find({
    estado: 0,
    zona: req.params.zona,
  });

  res.json(ordenesDisponibles);
};

export const ordenesTomadas = async (req, res) => {
  const ordenesDisponibles = await ordenes.find({
    estado: 2,
    zona: req.params.zona,
    idMotorista: req.body.idMotorista,
  });

  res.json(ordenesDisponibles);
};

export const ordenesEntregadas = async (req, res) => {
  const ordenesDisponibles = await ordenes.find({
    estado: 4,
    zona: req.params.zona,
    idMotorista: req.body.idMotorista,
  });

  res.json(ordenesDisponibles);
};

export const detallerOrden = async (req, res) => {
  const orden = await ordenes.findById(req.params.idOrden);

  res.json(orden);
};

export const actualizarEstadoOrden = async (req, res) => {
  const orden = await ordenes.findByIdAndUpdate(
    { _id: req.body.idOrden },
    {
      estado: req.body.estado,
      idMotorista: req.body.idMotorista,
    }
  );

  res.json({ mensaje: "La orden se asigno correctamente", actualizado: true });
};
