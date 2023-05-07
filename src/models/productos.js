import {Schema, model  } from "mongoose";

const Productos = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true 
    },
    idSubcategoria: {
        type: String,
        required: true,
        trim: true 
    },
    unidades: {
        type: Number        ,
        required: true
    },
    precio: {
        type: Number        ,
        required: true
    },
    urlImagen: {
        type: String,
        required: true,
        trim: true 
    },
    descripcion: {
        type: String,
        required: true,
        trim: true 
    }

    
}, {
    versionKey : false, 
    timestamps : false 
});


export default model('Productos', Productos); 