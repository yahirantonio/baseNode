const express = require('express')
const cors = require('cors')

const { dbConnection } = require('../database/config');

class Server{
	constructor(){
		this.app = express()
		this.PORT = process.env.PORT;
		this.usuariosPath = '/api/usuarios'

		// conexion db
		// this.conectarDB();
		// middlewares
		this.middleware()
		// rutas
		this.routes();
	}

	middleware(){
		this.app.use(express.static('public'))
		this.app.use(express.json());
		this.app.use(cors());
	}

	async conectarDB() {
        await dbConnection();
    }

	routes(){
		this.app.use(this.usuariosPath, require("../routes/user"))
	}

	listen(){
		this.app.listen(this.PORT, ()=>{
			console.log('servidor creado en el port : 8080')
		});
	}
}

module.exports = Server;