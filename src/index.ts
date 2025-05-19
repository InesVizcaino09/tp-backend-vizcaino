import { Schema, model, connect } from "mongoose";

process.loadEnvFile()
const URI_DB = process.env.URI_DB || ""

const connectMongoDb = async () => {
    try {
        await connect (URI_DB)
        console.log("Conectado a MongoDB")
    } catch (errorr) {
        console.error("error al conectarse a MongoDB")
    }
}

const perfSchema = new Schema({
    title: {type: String , required:true , unique:true} ,
    brand: {type: String , required:true , unique:true} ,
    topnote: {type: String , required:true , unique:true} ,
})
const Perfume = model("Perfume", perfSchema)




































connectMongoDb()