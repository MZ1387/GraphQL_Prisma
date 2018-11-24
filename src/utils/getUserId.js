import jwt from 'jsonwebtoken';

export default (request, requireAuth = true) => {
    const header = request.request.headers.authorization;

    if (header) {
        const token = header.replace('Bearer ', '');
        const decoded = jwt.verify(token, 'supersecrettext');
        
        return decoded.userId;
    }

    if (requireAuth) {
        throw new Error('Authentication Required.');
    }

    return null;
};