import mongoose from "mongoose"


async function connectDataBase() {
  await mongoose.connect(
    "mongodb+srv://hectorfbatista:prisma12@info-car.itn84uj.mongodb.net/?retryWrites=true&w=majority&appName=Info-Car")
}

export default connectDataBase