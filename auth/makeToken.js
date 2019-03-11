const jwt = require('jsonwebtoken');

const secret = require('./secret.js')

module.exports = {
    generateToken
};


function generateToken(user) {
    const payload = {
        subject: user.id, // subject in payload is what the token is about
        username: user.username,
        // ... any other data that we need. keep it minimum - no secrets - this can be seen by anyone  
    };

    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secret.jwtSecret, options);
};