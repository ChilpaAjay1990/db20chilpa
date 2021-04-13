var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var aqua_controller = require('../controllers/aqua');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// aqua ROUTES ///
// POST request for creating a aqua.
router.post('/aqua', aqua_controller.aqua_create_post);
// DELETE request to delete aqua.
router.delete('/aqua/:id', aqua_controller.aqua_delete);
// PUT request to update aqua.
router.put('/aqua/:id', aqua_controller.aqua_update_put);
// GET request for one aqua.
router.get('/aqua/:id', aqua_controller.aqua_detail);
// GET request for list of all aqua items.
router.get('/aqua', aqua_controller.aqua_list);
module.exports = router;