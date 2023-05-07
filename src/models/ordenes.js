import { json } from "express";
import {Schema, model, SchemaType, SchemaTypes  } from "mongoose";

const Ordenes = new Schema({
    productos: {
        type: Array ,
       
    },
    estado: {
        type: Number,     
  
    },
    subTotal: {
        type: Number        ,
    },
    envio: {
        type: Number,
    },   
    impuestos: {
        type: Number,
    },
    total: {
        type: Number        ,
    },
    idUsuario: {
        type: String,
         required: true,
        trim: true 
    },
    idEmpresa: {
        type: String,
        trim: true 
    },
    destino: {
        type: Schema.Types.Mixed,        
    }, 
    idEmpresa: {
        type: String,
        trim: true 
    }, 
    zona: {
        type: String,        
        trim: true 
    },
    direccionCliente: {
        type: String,        
        trim: true 
    },   

    idMotorista: {
        type: String,
        trim: true 
    }
    
}, {
    versionKey : false, 
    timestamps : false 
});


export default model('Ordenes', Ordenes); 