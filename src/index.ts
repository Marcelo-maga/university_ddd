import Server from "./application/server"
import { Router } from "./application/routes/routes"

const server = new Server(Router())

server.start()