const Router = require('express').Router;
const bodyParser = require('body-parser');
const contactCtrl = require('../controllers/contact');

const router = new Router();

router.get('/', contactCtrl.list);

router.post('/',
  // authenticate,
  // authorize('ADMIN'),
  bodyParser.json(),
  contactCtrl.add
);

router.get('/:id', contactCtrl.show);
router.delete('/:id', contactCtrl.delete);

module.exports = router;
