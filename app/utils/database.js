import dns from "dns"
import mongoose from "mongoose"

dns.setServers(["8.8.8.8", "8.8.4.4"])

let cached = global.mongoose

const connectDB =async () => {
    try{
        await mongoose.connect("mongodb+srv://rhashimoto_db_user:eHejCeCVVQeUr3br@cluster0.ewookdk.mongodb.net/?appName=Cluster0")
        console.log("Success: Connected to MongoDB")

    }catch(error){
        console.log("Failure: Unconnected to MongoDB")
        console.error(error)
        throw error
    }
}


export default connectDB
