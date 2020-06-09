const localStrategy = require('passport-local').Strategy;
const { User } = require('./model/user');
const bcrypt = require('bcrypt');

module.exports = function(passport) {
    const auth = async (email, password, done) => {
        try {
            let user = await User.findOne({ email });
            if (!user) return done(null, false, { message: 'Invalid email or password.' });

            const validation = await bcrypt.compare(password, user.password)
            if (!validation) return done(null, false, { message: 'Invalid email or password.' });

            return done(null, user);
        } catch(e) {
            return done(e);
        }
    };
    
    passport.use(new localStrategy({ usernameField: 'email' }, auth));

    passport.serializeUser((user, done) => done(null, user._id))
    passport.deserializeUser((id, done) => {
        return done(null, User.findById(id))
    })
}