const router = require('express').Router()
const controller = require('../controllers/controller');

//retrieve file names and file paths [GET]
router.get('/all',controller.allFileDetails);

// retrieve 3d model
router.get('/retrieve/:file_name',controller.getFile);

// post 3d model
router.post('/send',controller.sendFile);


module.exports = router;