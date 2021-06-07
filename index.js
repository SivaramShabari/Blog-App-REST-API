import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'
const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())
app.use('/post', postRoutes)

const PORT = 3001;
const ATLAS_URI = 'mongodb+srv://sivaram:reactapp@cluster0.p95yf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(e => console.log(e.message, "CustomError"))

