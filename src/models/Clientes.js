import { json } from "express";
import {Schema, model } from "mongoose";

const clientes = new Schema({
    nombre: {
        type: String ,
        required: true,  
        trim: true 
    },
    correo: {
        type: String ,
        required: true,  
        trim: true 
    },
    contrasenia: {
        type: String ,
        required: true,  
        trim: true 
    },
    residencia: {
        type: String ,
        required: true,  
        trim: true 
    },
    celular: {
        type: String ,
        required: true,  
        trim: true 
    },
    celularAlternativo: {
        type: String ,
        required: true,  
        trim: true 
    },
    fechaNacimiento: Schema.Types.Mixed,

    ordenes: {
        type: Array ,
        required: true,  
        
    },
   
    sexo: {
        type: String ,
        required: true,  
        trim: true 
    }


    
}, {
    versionKey : false, 
    timestamps : false
});


export default model('Clientes', clientes); 