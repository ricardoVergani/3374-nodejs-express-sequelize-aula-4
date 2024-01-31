const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const pessoaController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => pessoaController.pegaCursos(req, res));
router.get('/cursos/:id', (req, res) => pessoaController.pegaUmPorId(req, res));
router.post('/cursos', (req, res) => pessoaController.criaNovo(req, res));
router.put('/cursos/:id', (req, res) => pessoaController.atualiza(req, res));
router.delete('/cursos/:id', (req, res) => pessoaController.exclui(req, res));

module.exports = router;
