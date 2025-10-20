// routes/user.routes.js
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user_controller');

router.post('/', userCtrl.crear);
router.get('/', userCtrl.listar);

module.exports = router;


