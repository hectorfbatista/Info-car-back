import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true
  },
  chassi: {
    type: String,
    required: true
  },
  renavam: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  ano: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Vehicle', vehicleSchema)