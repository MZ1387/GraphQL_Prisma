import jwt from 'jsonwebtoken';

export default (request) => {
    const header = request.request.headers.authorization;

    if (!header) {
        throw new Error('Authentication Required.');
    }

    const token = header.replace('Bearer ', '');
    const decoded = jwt.verify(token, 'supersecrettext');
    
    return decoded.userId;
};