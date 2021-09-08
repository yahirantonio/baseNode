const User = require('../models/usuario');

const userGet = (req, res) =>{
	res.json({
		msg: "method get"
	})

}

const userPost = (req, res) =>{
	const usuario = new Usuario();
	res.json({
		msg: "method post"
	})
}

const userPut = (req, res) =>{
	res.json({
		msg: "method put"
	})
}


const userDelete = (req, res) =>{
	res.json({
		msg: "method delete"
	})
}


module.exports = {
	userGet,
	userPost,
	userPut,
	userDelete,
}