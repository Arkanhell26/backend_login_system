import express from 'express'
import config from './config.js'
import colors from 'colors'

const app = express();

// // Iniciar servidor

app.listen(config.PORT,()=>{
  console.log(`Server `.green + `El servicio esta funcionando en \n http direction: ` + `http://localhost:${config.PORT}`.blue)

})

