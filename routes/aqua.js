var express = require('express');
const aqua_controlers = require('../controllers/aqua');
var router = express.Router();

/* GET home page. */
router.get('/', aqua_controlers.aqua_view_all_Page);

router.get('/detail', aqua_controlers.aqua_view_one_Page);

router.get('/create', aqua_controlers.aqua_create_Page);

router.get('/update', aqua_controlers.aqua_update_Page);

router.get('/delete', aqua_controlers.aqua_delete_Page);

module.exports = router;