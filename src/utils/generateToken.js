import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export default (userId) => {
    return jwt.sign({ userId }, secret, { expiresIn: '7 days' });
};