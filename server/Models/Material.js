import mongoose, { Schema} from "mongoose";

const materialSchema = new Schema ({
    id: String, 
    name: String, 
    quantity: String, 
    min_quantity: String, 
    cijena: String, 
    jedinica_mjere: {
        type: Number, 
        default: 0
    },
    da_li_se_koristi: String
}) 

const Material = mongoose.model("Material", materialSchema);

export default Material;