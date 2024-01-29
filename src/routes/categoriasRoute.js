const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const pessoaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => pessoaController.pegaTodos(req, res));
router.get('/categorias/:id', (req, res) => pessoaController.pegaUmPorId(req, res));
router.post('/categorias', (req, res) => pessoaController.criaNovo(req, res));
router.put('/categorias/:id', (req, res) => pessoaController.atualiza(req, res));
router.delete('/categorias/:id', (req, res) => pessoaController.exclui(req, res));

module.exports = router;
