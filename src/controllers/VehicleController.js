import Vehicle from "../models/Vehicle.js"

async function  getVehicles(request, response) {
  const vehicles = await Vehicle.find()

  response.header('Access-Control-Allow-Origin', '*');

  return response.status(200).json({vehicles})
}

async function createVehicle(request, response) {
  const vehicle = request.body

  const newVehicle = await Vehicle.create(vehicle)

  return response.status(201).json({newVehicle})
}

async function deleteVehicle(request, response) {
  const id = request.params.id

  await Vehicle.findByIdAndDelete({ _id: id })

  return response.status(200).json({ response: "Veículo deletado" })
}

async function changeVehicle(request, response) {
  const id = request.params.id

  const {modelo, marca, ano, placa, renavam, chassi} = request.body

  await Vehicle.findOneAndUpdate({ _id: id }, {modelo, marca, ano, placa, renavam, chassi})

  return response.status(200).json({ response: "Veículo alterado" })
}

export { getVehicles, createVehicle, deleteVehicle, changeVehicle }