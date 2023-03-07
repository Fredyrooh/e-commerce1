import 'dotenv/config'
import express from 'express'
import cors from 'cors' 
import { router } from './routes';
import db from './config/mongo'
const cookieParser = require('cookie-parser')

const PORT = 3001;
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api',router)

db().then(()=>{
    console.log('CONECTADO A MONGODB');   
})
app.listen(PORT,()=> console.log(`CONECTADO EN el PUERTO ${PORT}`))
