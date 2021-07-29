const userGet = (req, res) =>{
	res.json({
		msg: "method get"
	})
}

const userPost = (req, res) =>{
	res.json({
		msg: "method post"
	})
}

module.exports = {
	userGet,
	userPost,
}