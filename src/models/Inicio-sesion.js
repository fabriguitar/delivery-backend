import { json } from "express";
import {Schema, model  } from "mongoose";

const inicioSesion = new Schema({
    usuario: {
        type: String,
        required: true, 
        trim: true 
    },
    password: {
        type: String,
        required: true,
        trim: true 
    },
}, {
    versionKey : false, 
    timestamps : false 
});


export default model('InicioSesion', inicioSesion);