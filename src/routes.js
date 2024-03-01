import { Router } from 'express'

import { getVehicles, createVehicle, deleteVehicle, changeVehicle } from './controllers/VehicleController.js'

const routes = Router()

routes.get('/vehicles', getVehicles)
routes.post('/vehicles', createVehicle)
routes.delete('/vehicles/:id', deleteVehicle)
routes.put('/vehicles/:id', changeVehicle)

export default routes