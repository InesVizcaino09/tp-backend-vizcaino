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
      await newfiletoDb.save()
      return {
        success: true ,
        data: newfiletoDb ,
        message: "New Perfume added succesfully"
      }
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

const getperfumes = async() => {
    try {
        const perfumes = await Perfume.find()
        return {
            success: true ,
            data: perfumes ,
            message: "perfumes succesfully recovered"
        }
    
    } catch (error: any) {
        return {success: false , error: error.message}
    
    }
}

const getperfume = async(id: string) => {
    try {
        const foundperfume = await Perfume.findById(id)
        if (!foundperfume) {
            return {success: false , message: "perfume not found"}
        }
        return {
            success:true ,
            data: foundperfume ,
            message: "perfume succesfully recovered"
        }
        }   
     catch (error) {
        
    }
}

const updateperfume = async(id: string, newdata : Partial<QuePerfume>) => {
    try {
           const updatedperfume = await Perfume.findByIdAndUpdate(id, newdata, {new: true})
        if (!updatedperfume)  return {success: false , messsage: "perfume not found"}
        return{
            success: true ,
            data: updatedperfume, 
            message: "perfume updated succesfully"
        }    
    } catch (error: any) {
        return {
            success: false ,
            error: error.message
        }
        
    }
}

const deleteperfume = async(id: string, ) => {
    try {
        const deletedperfume = await Perfume.findByIdAndDelete(id)
        if (!deletedperfume) return {success: false, message: "film not found"}
        return {
            success: true ,
            data: deletedperfume ,
            message: "perfume succesfully deleted"
        }
 
    } catch (error: any) {
        return {
            success: false ,
            error: error.message
        }
        
    }
}

































connectMongoDb()