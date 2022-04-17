var express = require('express');
var router = express.Router();

const LivroController = require('../controllers/LivroController');
//read
router.get('/', LivroController.index);

//create
router.get('/criar', LivroController.create);
router.post('/criar', LivroController.store);



//update
router.get('/editar/:id', LivroController.edit);
router.put('/editar/:id', LivroController.update);


//delete
router.delete('/deletar/:id', LivroController.delete);


module.exports = router;