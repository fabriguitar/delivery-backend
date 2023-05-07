import { json } from "express";
import {Schema, model  } from "mongoose";

const Empresas = new Schema({
    nombre: {
        type: String,
        required: true,  
        trim: true 
    },
    idCategoria: {
        type: String,
        required: true,  
        trim: true 
    },
    urlImagen: {
        type: String,
        required: true,  
        trim: true 
    },
    zona: {
        type: String,
        required: true,  
        trim: true 
    },
    nombreCategoria: {
        type: String,
        required: true,  
        trim: true 
    },
    informacion: {
        type: String,
        required: true,  
        trim: true 
    },
    direccion: {
        type: String,
        required: true,  
        trim: true 
    }
    
}, {
    versionKey : false, 
    timestamps : false //fecha actualizacion y creacion
});


export default model('Empresas', Empresas);