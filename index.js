import express from 'express'
import * as integrationRouter from './routes/integrationSetupRoutes.js'

const app = express();
const port = 3000;

// Rota para obter o clima de uma cidade
// Accept body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/integrations', integrationRouter.router)


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});