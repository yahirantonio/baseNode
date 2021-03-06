const {Router} = require('express')

const { userGet, 
		userPost,
		userPut,
		userDelete,
} = require('../controllers/users')

const router = Router()

router.get('/', userGet)

router.post('/formulario', userPost)

router.put('/', userPut)

router.delete('/formulario', userDelete)

module.exports = router;