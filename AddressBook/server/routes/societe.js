const Router = require('express').Router;
const societeCtrl = require('../controllers/societe');

const router = new Router();

router.get('/', societeCtrl.list);
router.get('/:id', societeCtrl.show);

module.exports = router;
