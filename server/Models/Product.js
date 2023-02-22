import mongoose, { Schema} from "mongoose";

const productSchema = new Schema ({
    id: String, 
    name: String, 
    quantity: String, 
    cijena: String 
}) 

const Product = mongoose.model("Product", productSchema);

export default Product;