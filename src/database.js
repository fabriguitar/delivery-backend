import mongoose, { Mongoose } from "mongoose";
let nombreBD = 'proyectoPOO';

(async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1/"+nombreBD);
    console.log("la Base de datos se conecto a : ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
