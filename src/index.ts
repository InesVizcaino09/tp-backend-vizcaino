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

interface QuePerfume {
    title: string
    brand: string
    topnote: string
}

const addnewperfume = async(newperfume : QuePerfume) => {
    try {
      const { title , brand ,topnote} = newperfume ;
      if (!title || !brand || !topnote) {
        return {success : false , error: "invalid data"}
      } 
      const newfiletoDb = new Perfume ( { title , brand ,topnote})
    } catch (error) {
        
    }
}

const getperfumes = async() => {
    try {
    
    } catch (error) {
    
    }
}

const getperfume = async() => {
    try {
        
    } catch (error) {
        
    }
}

const updateperfume = async(Id: string) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteperfume = async(id: string) => {
    try {
        
    } catch (error) {
        
    }
}

































connectMongoDb()