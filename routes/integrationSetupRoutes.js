import { Router } from 'express'
import * as weatherIntegrationHandler from '../handlers/weatherIntegrationHandler.js'

export const router = Router()

router.get('/weather/setup', weatherIntegrationHandler.handleWeatherIntegration)