// middleware/authMiddleware.js
const { verifyToken } = require('../../utils/jwtUtil');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Expected format: "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }

    req.user = decoded; // Attach decoded token info to the request
    next();
};

module.exports = authMiddleware;
