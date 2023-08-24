import Server from "./server/server"
import { Router } from "./server/routes/routes"

const server = new Server(Router())

server.start()