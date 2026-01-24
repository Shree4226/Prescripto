import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/admin.routes.js'
import doctorRouter from './routes/doctor.routes.js'
import userRouter from './routes/user.routes.js'


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares

app.use(express.json())
app.use(cors())

// api endpoint
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send('API working y')
})
// localhost:4000/api/admin

app.listen(port,()=>console.log('Server is started',port))