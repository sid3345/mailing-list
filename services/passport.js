const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const MailerTwo = require('../services/MailerTwo')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')



const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (access, refreshToken, profile, done) => {
      console.log(profile.emails[0].value)
      const existingUser = await User.findOne({ googleId: profile.emails[0].value });

      if (existingUser) {
        return done(null, existingUser);
      }

      const survey = {
        title : "Welcome to our website",    // identical value can be condensed in ES6
        subject : "Welcome",
        body : "Welcome",
        recipients : [profile.emails[0].value],
    }

      const user = await new User({ googleId: profile.emails[0].value }).save();
      const mailer = new MailerTwo(survey , surveyTemplate(survey))

      try{
        mailer.send()
        // await survey.save()
        // req.user.credits -= 1
        // const user = await req.user.save()

        // res.send(user)
        console.log("mail Send")
    }
    catch (err){
        "Mail Not Send"
    }

      done(null, user);
    }
  )
);
