import mongoose from 'mongoose'


const Schema = mongoose.Schema
const stockSchema = new Schema(
    {
        brand: { type: String, required: true },
        name: { type: String, required: true },
        imageUrls: { type: [String], default: ["/images/defaultImage.png"], required: true },
        price: { type: Number, min: 0, required: true },
        description: { type: String }
    },
    {
        timestamps: true
    }
)

const Stock = mongoose.model('Stock', stockSchema)
export default Stock