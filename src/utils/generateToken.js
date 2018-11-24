import jwt from 'jsonwebtoken';

export default (userId) => {
    return jwt.sign({ userId }, 'supersecrettext', { expiresIn: '7 days' });
};