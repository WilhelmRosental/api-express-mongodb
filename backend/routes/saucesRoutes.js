const express = require('express');
const router = express.Router();
const saucesCtrl = require('../controllers/saucesController')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

router.post('/:id/like', auth, saucesCtrl.likeSauce);
router.post('/', auth, multer, saucesCtrl.createSauce);
router.put ('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce );
router.get('/:id', auth, saucesCtrl.getOneSauce );
router.get('/', auth, saucesCtrl.getSauces);

module.exports = router;