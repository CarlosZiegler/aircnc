const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')

const routes = express.Router();
const upload = multer(uploadConfig);
// require.query access query params (for filters)
// require.params access route params ( for edit or delete)
// require.body access body request (for create and edit)


routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail') ,SpotController.store);

module.exports = routes;