const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key';
const JWT_EXPIRATION = '1d'; // Token validity period (1 day)

exports.generateToken = (user) => {
    return jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null; // Invalid token
    }
};
