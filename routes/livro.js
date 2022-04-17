var express = require('express');
var router = express.Router();

const LivroController = require('../controllers/LivroController');

router.get('/', LivroController.index);

//create
router.get('/criar', LivroController.create);
router.post('/criar', LivroController.store);



//update
router.get('/editar/:id', LivroController.edit);
router.put('/editar/:id', LivroController.update);





module.exports = router;