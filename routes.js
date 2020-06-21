const userController = require('./controller/userController');
const feedbackController = require('./controller/feedbackController');
const sessionController = require('./controller/sessionController')

module.exports = app => {
    // app.get('/', (req, res) => {
    //     res.render('index.ejs', {
    //         currentUser: req.session.currentUser
    //     });
    // });
    app.get('/sessions/new', sessionController.newForm);
    app.get('/users', userController.getAll);
    app.get('/register', userController.getForm);
    app.post('/register', userController.create);
    app.get('/feedback', feedbackController.getAll);
    app.get('/feedback/:index', feedbackController.show);
    app.get('/feedback/submit', feedbackController.getForm);
    app.post('/feedback', feedbackController.create);
    app.put('feedback/:index', feedbackController.update);
}