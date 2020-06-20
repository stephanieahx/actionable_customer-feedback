const userController = require('./controller/userController');
const feedbackController = require('./controller/feedbackController.js');

module.exports = app => {
    app.get('/users', userController.getAll);
    // app.get('/register', userController.getForm);
    //     app.post('/register', userController.create);
    app.get('/feedback', feedbackController.getAll);
}