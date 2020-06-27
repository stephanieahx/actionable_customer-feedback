const userController = require('./controller/userController');
const feedbackController = require('./controller/feedbackController');
const sessionController = require('./controller/sessionController')

module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index', { currentUser: req.session.currentUser })
  })
  app.get('/app', (req, res) => {
    if (req.session.currentUser) {
      res.render('app/index');
    } else {
      res.redirect('/')
    }
  });
  app.get('/sessions/new', sessionController.newForm);
  app.post('/sessions', sessionController.create);
  app.delete('/sessions', sessionController.destroy);

  app.get('/register', userController.getForm); //app.get('/users/register', userController.getForm)
  app.post('/register', userController.create);

  app.get('/users', userController.getAll);
  app.delete('/users/:id', userController.delete);
  app.get('/feedback', feedbackController.getAll);
  app.post('/feedback', feedbackController.create);
  app.get('/feedback/submit', feedbackController.getForm);
  app.get('/feedback/:index', feedbackController.show);
  app.put('/feedback/:id', feedbackController.update);
  app.delete('/feedback/:id', feedbackController.delete);

//public

// 
// app.use()


}