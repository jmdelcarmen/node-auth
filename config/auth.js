// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '584711231717233', // your App ID
        'clientSecret'  : 'b838d75f57012544c4ca8a11fe459878', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'p9wbpytUVi8ZntCqc033855eO',
        'consumerSecret'    : 'N5vmU2B1Idzjd9lIOgQfShlcO8TIZ2Py7iCX6j2aA2Pr8cdpe7',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
