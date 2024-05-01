import express from 'express'
import cors from 'cors'
import mainRoutes from './routes'

const server = express()
server.use(cors())

server.use(mainRoutes)

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost/${port}`)
})