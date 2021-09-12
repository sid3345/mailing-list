const passport = require('passport');
const keys = require('../config/keys')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log("auth" , req.user);
      if(req.user.googleId == keys.adminMail){ //change email over here to your mail to assign that as admin email
        res.redirect('/surveys');
      }
      else{
        res.redirect('/home')
      }
      
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
