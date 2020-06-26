const userController = require('./controller/userController');
const feedbackController = require('./controller/feedbackController');
const sessionController = require('./controller/sessionController')

module.exports = app => {
  // app.get('/', (req, res) => {
  //     res.render('index.ejs', {
  //         currentUser: req.session.currentUser
  //     });
  // });
  // // app.get('/sessions/new', sessionController.newForm);
  // app.get('/sessions', sessionController.create);
  app.get('/', (req, res) => {
    res.render('index.ejs')
  });
  app.get('/users', userController.getAll);
  app.get('/register', userController.getForm);
  app.post('/register', userController.create);
  app.get('/feedback', feedbackController.getAll);
  app.get('/feedback/submit', feedbackController.getForm);
  app.get('/feedback/:index', feedbackController.show);
  app.post('/feedback', feedbackController.create);
  app.delete('/feedback/:id', feedbackController.delete);
  app.put('/feedback/:id', feedbackController.update);

}